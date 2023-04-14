const router = require("express").Router();
const { verifyJWT } = require("../middlewares/jwtMiddleware");
const {
	allPendingDonationsController,
	acceptDonationController,
	rejectDonationController,
	allRecipientController,
	acceptReceiverApplicationController,
	rejectReceiverApplicationController,
	userCartItemsController,
} = require("../controllers/pendingController");

router.get("/donation", verifyJWT, allPendingDonationsController);
router.patch("/donation/accept/:medicineId", verifyJWT, acceptDonationController);
router.delete("/donation/reject/:medicineId", verifyJWT, rejectDonationController);

router.get("/receive", verifyJWT, allRecipientController);
router.patch("/receive/accept/:medicineId", verifyJWT, acceptReceiverApplicationController);
router.delete("/receive/reject/:medicineId", verifyJWT, rejectReceiverApplicationController);

router.get("/receive/cart", verifyJWT, userCartItemsController);

module.exports = router;
