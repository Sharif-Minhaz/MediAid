const asyncHandler = require("express-async-handler");
const Medicine = require("../models/MedicineModel");
const cloudinary = require("../utils/cloudinaryHandler");
const { defaultMedicineImage } = require("../constants/imagesConst");

exports.viewAllMedicinesController = asyncHandler(async (req, res) => {
	const medicines = await Medicine.find();

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

	const isExist = await Medicine.exists({ medicineName: body.medicineName });

	if (isExist) {
		return res.status(200).json({
			msg: "already_exist",
			medicine: null,
		});
	}

	let uploadImage = {};

	if (file) {
		uploadImage = await cloudinary.uploader.upload(file.path, {
			folder: "mediAid/medicines",
		});
	}

	const addMedicine = await new Medicine({
		...body,
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
		if(targetedMedicine.cloudinaryId) {
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
