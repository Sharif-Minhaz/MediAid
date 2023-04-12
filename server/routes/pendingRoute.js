const router = require("express").Router();
const { verifyJWT } = require("../middlewares/jwtMiddleware");
const {
	allPendingDonationsController,
	acceptDonationController,
	rejectDonationController,
} = require("../controllers/pendingController");

router.get("/donation", verifyJWT, allPendingDonationsController);
router.patch("/donation/accept/:medicineId", verifyJWT, acceptDonationController);
router.delete("/donation/reject/:medicineId", verifyJWT, rejectDonationController);

module.exports = router;
