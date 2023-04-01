const { Schema, model } = require("mongoose");

const gallerySchema = new Schema(
	{
		galleryImageTitle: {
			type: String,
			required: true,
			trim: true,
		},
		authorName: {
			type: String,
			required: true,
			trim: true,
		},
		description: String,
		galleryImage: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Gallery = model("Gallery", gallerySchema);

module.exports = Gallery;
