const router = require("express").Router();
const {
	addMedicineController,
	viewAllMedicinesController,
} = require("../controllers/medicinesController");

router.get("/", viewAllMedicinesController);
router.post("/add", addMedicineController);

module.exports = router;
