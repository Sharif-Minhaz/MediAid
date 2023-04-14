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
		pendingDonations: null,
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
		applications: null,
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
		applications: null,
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
		applications: null,
	});
});

exports.acceptReceiverApplicationController = asyncHandler(async (req, res) => {
	const { medicineId } = req.params;
	const { decoded } = req;

	// TODO: keep in mind about the requested amount and the available amount.

	const acceptApplication = await ReceiverApplication.findOneAndUpdate(
		{ medicine: medicineId },
		{
			status: "accepted",
		}
	).populate("medicine");

	if (acceptApplication) {
		const history = new History({
			user: decoded.id,
			medicineName: acceptApplication.medicine?.medicineName,
			action: "accept-receive",
		});

		const updateMedicine = Medicine.findByIdAndUpdate(medicineId, {
			$inc: { dosages: -Number(acceptApplication.count) },
		});

		await Promise.all([history.save(), updateMedicine]);

		return res.status(200).json({
			msg: "application_accepted",
			acceptedDonation: acceptApplication,
		});
	}

	console.log(acceptApplication, medicineId);

	res.status(500).json({
		msg: "application_not_accepted",
		acceptedDonation: null,
	});
});

exports.rejectReceiverApplicationController = asyncHandler(async (req, res) => {
	const { medicineId } = req.params;
	const { decoded } = req;

	const deleteApplication = await ReceiverApplication.findOneAndDelete({
		medicine: medicineId,
	}).populate("medicine");

	if (deleteApplication) {
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

	console.log(deleteApplication, medicineId);

	res.status(500).json({
		msg: "application_not_rejected",
		deletedApplication: null,
	});
});
