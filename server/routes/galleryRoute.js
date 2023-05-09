const router = require("express").Router();
const {
	viewGalleryImagesController,
	addGalleryImageController,
} = require("../controllers/galleryController");
const upload = require("../middlewares/upload");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

router.get("/", viewGalleryImagesController);
router.post("/add", verifyJWT, upload.single("galleryImage"), addGalleryImageController);

module.exports = router;
