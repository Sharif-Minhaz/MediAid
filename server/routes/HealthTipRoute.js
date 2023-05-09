const router = require("express").Router();
const {
	updateHealthTipController,
	viewHealthTipsController,
	viewSingleHealthTipController,
	addHealthTipController,
} = require("../controllers/healthTipController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

router.get("/", viewHealthTipsController);
router.get("/:healthTipId", viewSingleHealthTipController);
router.post("/add", verifyJWT, addHealthTipController);
router.patch("/update/:healthTipId", verifyJWT, updateHealthTipController);

module.exports = router;
