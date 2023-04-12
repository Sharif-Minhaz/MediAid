const asyncHandler = require("express-async-handler");
const Medicine = require("../models/MedicineModel");
const cloudinary = require("../utils/cloudinaryHandler");

exports.allPendingDonationsController = asyncHandler(async (req, res) => {
	const pendingDonations = await Medicine.find({ status: "pending" });

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

	const updateMedicine = await Medicine.findByIdAndUpdate(medicineId, { status: "accepted" });

	if (updateMedicine) {
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

	const deleteMedicine = await Medicine.findByIdAndDelete(medicineId);

	if (deleteMedicine) {
		if (deleteMedicine.cloudinaryId) {
			await cloudinary.uploader.destroy(deleteMedicine.cloudinaryId);
		}

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
