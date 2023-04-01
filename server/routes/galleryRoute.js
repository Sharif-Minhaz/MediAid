const router = require("express").Router();
const {
	viewGalleryImagesController,
	addGalleryImageController,
} = require("../controllers/galleryController");
const upload = require("../middlewares/upload");

router.get("/", viewGalleryImagesController);
router.post("/add", upload.single("galleryImage"), addGalleryImageController);

module.exports = router;
