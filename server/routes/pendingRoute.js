const router = require("express").Router();
const { verifyJWT } = require("../middlewares/jwtMiddleware");
const {
	allPendingDonationsController,
	acceptDonationController,
	rejectDonationController,
	allRecipientController,
	acceptReceiverApplicationController,
	rejectReceiverApplicationController,
} = require("../controllers/pendingController");

router.get("/donation", verifyJWT, allPendingDonationsController);
router.patch("/donation/accept/:medicineId", verifyJWT, acceptDonationController);
router.delete("/donation/reject/:medicineId", verifyJWT, rejectDonationController);

router.get("/receive", verifyJWT, allRecipientController);
router.patch("/receive/accept/:medicineId", verifyJWT, acceptReceiverApplicationController);
router.delete("/receive/reject/:medicineId", verifyJWT, rejectReceiverApplicationController);

module.exports = router;
