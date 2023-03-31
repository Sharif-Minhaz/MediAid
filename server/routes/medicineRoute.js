const router = require("express").Router();
const {
	addMedicineController,
	viewAllMedicinesController,
	updateMedicineController,
	viewSingleMedicineController,
	deleteMedicineController,
} = require("../controllers/medicinesController");
const upload = require("../middlewares/upload");

router.get("/", viewAllMedicinesController);
router.get("/:medicineId", viewSingleMedicineController);
router.post("/add", upload.single("medicineImage"), addMedicineController);
router.delete("/delete/:medicineId", deleteMedicineController);
router.patch("/update/:medicineId", upload.single("medicineImage"), updateMedicineController);

module.exports = router;
