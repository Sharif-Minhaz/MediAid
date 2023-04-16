const asyncHandler = require("express-async-handler");
const Medicine = require("../models/MedicineModel");
const ReceiverApplication = require("../models/ReceiverApplicationModel");
const cloudinary = require("../utils/cloudinaryHandler");
const { defaultMedicineImage } = require("../constants/imagesConst");
const { uploadImageHandler } = require("../utils/uploadImage");
const { addHistoryController } = require("./historyController");

exports.viewAllMedicinesController = asyncHandler(async (req, res) => {
	const medicines = await Medicine.find({
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
		medicines: null,
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

	if (file) {
		uploadImage = await cloudinary.uploader.upload(file.path, {
			folder: "mediAid/medicines",
		});
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

	if (file) {
		uploadImage = await cloudinary.uploader.upload(file.path, {
			folder: "mediAid/medicines",
		});

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
	const { file, body } = req;

	let uploadImage = await uploadImageHandler(file, "mediAid/medicines");

	const addMedicine = await new Medicine({
		...body,
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
