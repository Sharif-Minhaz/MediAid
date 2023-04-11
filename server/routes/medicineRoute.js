const router = require("express").Router();
const {
	addMedicineController,
	viewAllMedicinesController,
	updateMedicineController,
	viewSingleMedicineController,
	deleteMedicineController,
	donateMedicineController,
} = require("../controllers/medicinesController");
const upload = require("../middlewares/upload");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

router.get("/", viewAllMedicinesController);
router.get("/:medicineId", viewSingleMedicineController);
router.post("/add", verifyJWT, upload.single("medicineImage"), addMedicineController);
router.post("/donate", verifyJWT, upload.single("medicineImage"), donateMedicineController);
router.delete("/delete/:medicineId", verifyJWT, deleteMedicineController);
router.patch(
	"/update/:medicineId",
	verifyJWT,
	upload.single("medicineImage"),
	updateMedicineController
);

module.exports = router;
