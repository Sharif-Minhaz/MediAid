const asyncHandler = require("express-async-handler");
const Medicine = require("../models/MedicineModel");
const cloudinary = require("../utils/cloudinaryHandler");
const History = require("../models/HistoryModel");
const ReceiverApplication = require("../models/ReceiverApplicationModel");

exports.allPendingDonationsController = asyncHandler(async (req, res) => {
	const pendingDonations = await Medicine.find({ status: "pending" }).sort({ createdAt: "desc" });

	if (pendingDonations.length) {
		return res.status(200).json({
			msg: "pending_donation_found",
			pendingDonations,
		});
	}

	res.status(200).json({
		msg: "pending_donation_not_found",
		pendingDonations: [],
	});
});

exports.acceptDonationController = asyncHandler(async (req, res) => {
	const { medicineId } = req.params;
	const { decoded } = req;

	const updateMedicine = await Medicine.findByIdAndUpdate(medicineId, { status: "accepted" });

	if (updateMedicine) {
		await new History({
			user: decoded.id,
			medicineName: updateMedicine.medicineName,
			action: "accept-donation",
		}).save();

		return res.status(200).json({
			msg: "donation_accepted",
			acceptedDonation: updateMedicine,
		});
	}

	res.status(500).json({
		msg: "donation_not_accepted",
		acceptedDonation: null,
	});
});

exports.rejectDonationController = asyncHandler(async (req, res) => {
	const { medicineId } = req.params;
	const { decoded } = req;

	const deleteMedicine = await Medicine.findByIdAndDelete(medicineId);

	if (deleteMedicine) {
		if (deleteMedicine.cloudinaryId) {
			await cloudinary.uploader.destroy(deleteMedicine.cloudinaryId);
		}

		// // add action information to history collection
		await new History({
			user: decoded.id,
			medicineName: deleteMedicine.medicineName,
			action: "reject-donation",
		}).save();

		return res.status(200).json({
			msg: "donation_rejected",
			deletedMedicineInfo: deleteMedicine,
		});
	}

	res.status(500).json({
		msg: "donation_not_rejected",
		deletedMedicineInfo: null,
	});
});

exports.allRecipientController = asyncHandler(async (req, res) => {
	const pendingReceiverApplication = await ReceiverApplication.find({ status: "pending" })
		.sort({
			createdAt: "desc",
		})
		.populate("user medicine");

	if (pendingReceiverApplication.length) {
		return res.status(200).json({
			msg: "pending_application_found",
			applications: pendingReceiverApplication,
		});
	}

	res.status(200).json({
		msg: "pending_applications_not_found",
		applications: [],
	});
});

exports.allAcceptedReceiverController = asyncHandler(async (req, res) => {
	const pendingReceiverApplication = await ReceiverApplication.find({ status: "accepted" })
		.sort({
			createdAt: "desc",
		})
		.populate("user medicine");

	if (pendingReceiverApplication.length) {
		return res.status(200).json({
			msg: "pending_application_found",
			applications: pendingReceiverApplication,
		});
	}

	res.status(200).json({
		msg: "pending_applications_not_found",
		applications: [],
	});
});

// only for logged in user's cart info
exports.userCartItemsController = asyncHandler(async (req, res) => {
	const { decoded } = req;

	const pendingReceiverApplication = await ReceiverApplication.find({ user: decoded.id })
		.sort({
			createdAt: "desc",
		})
		.populate("user medicine");

	if (pendingReceiverApplication.length) {
		return res.status(200).json({
			msg: "pending_application_found",
			applications: pendingReceiverApplication,
		});
	}

	res.status(200).json({
		msg: "pending_applications_not_found",
		applications: [],
	});
});

exports.acceptReceiverApplicationController = asyncHandler(async (req, res) => {
	const { medicineId, applicationId } = req.params;
	const { decoded } = req;

	const [application, getAvailableMedicine] = await Promise.all([
		ReceiverApplication.findById(applicationId),
		Medicine.findById(medicineId).select("dosages"),
	]);

	// check if the medicine is available or not
	if (getAvailableMedicine.dosages < application.count) {
		return res.status(409).json({
			msg: "medicine_out_of_stock",
			acceptedDonation: null,
		});
	}

	const acceptApplication = await ReceiverApplication.findByIdAndUpdate(
		applicationId,
		{
			status: "accepted",
		},
		{ new: true }
	).populate("medicine");

	if (acceptApplication) {
		// add action information to history collection
		const history = new History({
			user: decoded.id,
			medicineName: acceptApplication.medicine?.medicineName,
			action: "accept-receive",
		});

		// deduct the donated medicine count from medicine count
		const updateMedicine = Medicine.findByIdAndUpdate(medicineId, {
			$inc: { dosages: -Number(acceptApplication.count) },
		});

		await Promise.all([history.save(), updateMedicine]);

		return res.status(200).json({
			msg: "application_accepted",
			acceptedDonation: acceptApplication,
		});
	}

	res.status(500).json({
		msg: "application_not_accepted",
		acceptedDonation: null,
	});
});

exports.rejectReceiverApplicationController = asyncHandler(async (req, res) => {
	const { applicationId } = req.params;
	const { decoded } = req;

	const deleteApplication = await ReceiverApplication.findByIdAndDelete(applicationId).populate(
		"medicine"
	);

	if (deleteApplication) {
		// add action information to history collection
		await new History({
			user: decoded.id,
			medicineName: deleteApplication.medicine?.medicineName,
			action: "reject-receive",
		}).save();

		return res.status(200).json({
			msg: "application_rejected",
			deletedApplication: deleteApplication,
		});
	}

	res.status(500).json({
		msg: "application_not_rejected",
		deletedApplication: null,
	});
});
