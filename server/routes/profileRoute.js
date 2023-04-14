const router = require("express").Router();
const {
	viewProfileController,
	findProfileController,
	updateProfileController,
} = require("../controllers/profileController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");
const upload = require("../middlewares/upload");

router.get("/", verifyJWT, viewProfileController);
router.get("/find/:id", verifyJWT, findProfileController);
router.patch("/edit", verifyJWT, upload.single("profilePicture"), updateProfileController);

module.exports = router;
