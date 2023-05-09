const router = require("express").Router();
const {
	registerController,
	loginController,
	logoutController,
	resetPasswordController,
} = require("../controllers/authController");

const { verifyJWT } = require("../middlewares/jwtMiddleware");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", verifyJWT, logoutController);
router.post("/reset-password", verifyJWT, resetPasswordController);

module.exports = router;
