const router = require("express").Router();
const {
	updateHealthTipController,
	viewHealthTipsController,
	viewSingleHealthTipController,
	addHealthTipController,
} = require("../controllers/healthTipController");

router.get("/", viewHealthTipsController);
router.get("/:healthTipId", viewSingleHealthTipController);
router.post("/add", addHealthTipController);
router.patch("/update/:healthTipId", updateHealthTipController);

module.exports = router;
