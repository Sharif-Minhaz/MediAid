const asyncHandler = require("express-async-handler");
const Gallery = require("../models/GalleryModel");
const cloudinary = require("../utils/cloudinaryHandler");

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

	if (file) {
		uploadImage = await cloudinary.uploader.upload(file.path, {
			folder: "mediAid/gallery",
		});
	}

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
