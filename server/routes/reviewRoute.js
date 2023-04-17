const router = require("express").Router();
const {
	getAllReviewsController,
	addReviewController,
	getUserReviewController,
	getMedicineRatingController,
} = require("../controllers/reviewController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

router.get("/:medicineId", getAllReviewsController);
router.get("/medicine/:medicineId", getMedicineRatingController);
router.get("/user/:medicineId", verifyJWT, getUserReviewController);
router.post("/add", verifyJWT, addReviewController);

module.exports = router;
