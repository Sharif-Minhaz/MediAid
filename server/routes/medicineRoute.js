const router = require("express").Router();
const {
	addMedicineController,
	viewAllMedicinesController,
	updateMedicineController,
	viewSingleMedicineController,
	deleteMedicineController,
	donateMedicineController,
	applyMedicineController,
	getUserDonatedMedicineController,
	getReceivedMedicineController,
	getTopRatedMedicinesController,
} = require("../controllers/medicinesController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");
const upload = require("../middlewares/upload");

router.get("/", viewAllMedicinesController);
router.get("/:medicineId", viewSingleMedicineController);
router.get("/topRated/:limit", getTopRatedMedicinesController);
router.post("/add", verifyJWT, upload.single("medicineImage"), addMedicineController);
router.post("/donate", verifyJWT, upload.single("medicineImage"), donateMedicineController);
router.post("/apply", verifyJWT, applyMedicineController);
router.delete("/delete/:medicineId", verifyJWT, deleteMedicineController);
router.patch(
	"/update/:medicineId",
	verifyJWT,
	upload.single("medicineImage"),
	updateMedicineController
);

router.get("/donated/all", verifyJWT, getUserDonatedMedicineController);
router.get("/received/all", verifyJWT, getReceivedMedicineController);

module.exports = router;
