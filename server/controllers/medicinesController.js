const asyncHandler = require("express-async-handler");
const Medicine = require("../models/MedicineModel");

exports.viewAllMedicinesController = asyncHandler(async (req, res) => {
	const medicines = await Medicine.find();

	if (medicines.length) {
		return res.status(200).json({
			key: "medicine_found",
			medicines,
		});
	}

	res.status(200).json({
		key: "medicine_not_found",
		medicines: null,
	});
});

exports.addMedicineController = asyncHandler(async (req, res) => {
	const { body } = req;

	const addMedicine = await new Medicine(body).save();

	if (addMedicine) {
		return res.status(201).json({
			key: "medicine_added",
			medicine: addMedicine,
		});
	}

	res.status(500).json({
		key: "medicine_not_added",
		medicine: null,
	});
});
