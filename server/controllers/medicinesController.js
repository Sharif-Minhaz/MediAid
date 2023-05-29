const asyncHandler = require("express-async-handler");
const Medicine = require("../models/MedicineModel");
const Review = require("../models/ReviewModel");
const ReceiverApplication = require("../models/ReceiverApplicationModel");
const cloudinary = require("../utils/cloudinaryHandler");
const { defaultMedicineImage } = require("../constants/imagesConst");
const { uploadImageHandler } = require("../utils/uploadImage");
const { addHistoryController } = require("./historyController");

exports.viewAllMedicinesController = asyncHandler(async (req, res) => {
	const medicines = await Medicine.find({
		// Match documents that have status not equal to "pending" or do not have a status field
		$or: [{ status: { $ne: "pending" } }, { status: { $exists: false } }],
	}).populate("donorAccount");

	if (medicines.length) {
		return res.status(200).json({
			msg: "medicines_found",
			medicines,
		});
	}

	res.status(200).json({
		msg: "medicines_not_found",
		medicines: [],
	});
});

exports.viewSingleMedicineController = asyncHandler(async (req, res) => {
	const { medicineId } = req.params;

	const medicine = await Medicine.findById(medicineId);

	if (medicine) {
		return res.status(200).json({
			msg: "medicine_found",
			medicine,
		});
	}

	res.status(200).json({
		msg: "medicine_not_found",
		medicine: null,
	});
});

exports.addMedicineController = asyncHandler(async (req, res) => {
	const { file, body } = req;

	let uploadImage = {};

	// check if the file exist, if exist then upload it to cloudinary
	if (file) {
		uploadImage = await uploadImageHandler(file, "mediAid/medicines");
	}

	const addMedicine = await new Medicine({
		...body,
		storedDosages: body.dosages,
		medicineImage: uploadImage.secure_url || defaultMedicineImage,
		cloudinaryId: uploadImage.public_id || "",
	}).save();

	if (addMedicine) {
		return res.status(201).json({
			msg: "medicine_added",
			medicine: addMedicine,
		});
	}

	res.status(500).json({
		msg: "medicine_not_added",
		medicine: null,
	});
});

exports.updateMedicineController = asyncHandler(async (req, res) => {
	const {
		params: { medicineId },
		body,
		file,
	} = req;

	const medicinesDetails = await Medicine.findById(medicineId);

	let uploadImage = {};

	// check if the file exist, if exist then upload it to cloudinary
	if (file) {
		uploadImage = await uploadImageHandler(file, "mediAid/medicines");

		// remove the previous uploaded image from cloudinary
		if (medicinesDetails.cloudinaryId)
			await cloudinary.uploader.destroy(medicinesDetails.cloudinaryId);
	}

	const updateMedicine = await Medicine.findByIdAndUpdate(
		medicineId,
		{
			...body,
			medicineImage: uploadImage.secure_url || medicinesDetails.medicineImage,
			cloudinaryId: uploadImage.public_id || medicinesDetails.cloudinaryId,
		},
		{ new: true }
	);

	if (updateMedicine) {
		return res.status(200).json({
			msg: "medicine_updated",
			updatedMedicine: updateMedicine,
		});
	}

	res.status(500).json({
		msg: "medicine_not_updated",
		updateMedicine: null,
	});
});

exports.deleteMedicineController = asyncHandler(async (req, res) => {
	const { medicineId } = req.params;

	const targetedMedicine = await Medicine.findById(medicineId);

	if (targetedMedicine) {
		// if image available then delete it from cloudinary
		if (targetedMedicine.cloudinaryId) {
			await cloudinary.uploader.destroy(targetedMedicine.cloudinaryId);
		}

		const deletedMedicineInfo = await targetedMedicine.remove();

		return res.status(200).json({
			msg: "medicine_deleted",
			deletedMedicineInfo,
		});
	}

	res.status(500).json({
		msg: "medicine_not_deleted",
		deletedMedicineInfo: null,
	});
});

exports.donateMedicineController = asyncHandler(async (req, res) => {
	const { file, body, decoded } = req;

	let uploadImage = await uploadImageHandler(file, "mediAid/medicines");

	const addMedicine = await new Medicine({
		...body,
		donorAccount: decoded.id,
		storedDosages: body.dosages,
		status: "pending",
		medicineImage: uploadImage.secure_url || defaultMedicineImage,
		cloudinaryId: uploadImage.public_id || "",
	}).save();

	if (addMedicine) {
		req.historyInfo = {
			medicineName: addMedicine.medicineName,
			action: "apply-donate",
		};

		// add action information to history collection
		addHistoryController(req, res);

		return res.status(201).json({
			msg: "medicine_added_queue",
			medicine: addMedicine,
		});
	}

	res.status(500).json({
		msg: "medicine_not_added",
		medicine: null,
	});
});

exports.applyMedicineController = asyncHandler(async (req, res) => {
	const { decoded, body } = req;

	const apply = new ReceiverApplication({
		...body,
		fullName: body.name,
		user: decoded.id,
	});

	const applyMedicine = await apply.save();
	await applyMedicine.populate("medicine");

	if (applyMedicine) {
		req.historyInfo = {
			medicineName: applyMedicine.medicine?.medicineName,
			action: "apply-receive",
		};

		// add action information to history collection
		addHistoryController(req, res);

		return res.status(201).json({
			msg: "apply_successful",
			applyMedicine,
		});
	}

	res.status(500).json({
		msg: "apply_not_successful",
		applyMedicine: null,
	});
});

// donated and receiver medicine
exports.getUserDonatedMedicineController = asyncHandler(async (req, res) => {
	const { decoded } = req;

	const medicines = await Medicine.find({ donorAccount: decoded.id });

	if (medicines.length) {
		return res.status(200).json({
			msg: "donated_medicine_found",
			medicines,
		});
	}

	res.status(404).json({
		msg: "donated_medicine_not_found",
		medicines: null,
	});
});

exports.getReceivedMedicineController = asyncHandler(async (req, res) => {
	const { decoded } = req;

	const receiverApplications = await ReceiverApplication.find({
		user: decoded.id,
		status: "accepted",
	}).populate("medicine");

	const medicineIds = receiverApplications.map((app) => app.medicine._id);

	const medicines = await Medicine.find({ _id: { $in: medicineIds } });

	if (medicines.length) {
		return res.status(200).json({
			msg: "received_medicine_found",
			medicines,
		});
	}

	res.status(404).json({
		msg: "received_medicine_not_found",
		medicines: [],
	});
});

exports.getTopRatedMedicinesController = asyncHandler(async (req, res) => {
	const { limit } = req.params;

	const topRatedMedicines = await Review.aggregate([
		{
			$group: {
				_id: "$medicine",
				avgRating: { $avg: "$rating" },
			},
		},
		// sorting medicines list with descending order
		{
			$sort: {
				avgRating: -1,
			},
		},
		// populate with medicine info
		{
			$lookup: {
				from: "medicines",
				localField: "_id",
				foreignField: "_id",
				as: "medicine",
			},
		},
		{
			$unwind: "$medicine",
		},
	]).limit(Number(limit));

	if (topRatedMedicines.length) {
		return res.status(200).json({
			msg: "medicines_found",
			topRatedMedicines,
		});
	}

	res.status(404).json({
		msg: "medicines_not_found",
		topRatedMedicines: [],
	});
});
