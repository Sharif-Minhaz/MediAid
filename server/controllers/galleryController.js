const asyncHandler = require("express-async-handler");
const Gallery = require("../models/GalleryModel");
const { uploadImageHandler } = require("../utils/uploadImage");

exports.viewGalleryImagesController = asyncHandler(async (req, res) => {
	const galleryImage = await Gallery.find();

	if (galleryImage.length)
		return res.status(200).json({
			msg: "gallery_img_found",
			galleryImage,
		});

	res.status(200).json({
		msg: "gallery_img_not_found",
		galleryImage: [],
	});
});

exports.addGalleryImageController = asyncHandler(async (req, res) => {
	const { body, file } = req;

	let uploadImage = {};

	// check if the file exist, if exist then upload it to cloudinary
	if (file) {
		uploadImage = await uploadImageHandler(file, "mediAid/gallery");
	}

	// add new gallery image
	const newGalleryImage = await new Gallery({
		...body,
		galleryImage: uploadImage.secure_url,
	}).save();

	if (newGalleryImage)
		return res.status(200).json({
			msg: "gallery_img_added",
			newGalleryImage,
		});

	res.status(500).json({
		msg: "gallery_img_not_added",
		newGalleryImage: null,
	});
});
