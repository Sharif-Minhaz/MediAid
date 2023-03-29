const { Schema, model, default: mongoose } = require("mongoose");

const reviewSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		review: String,
	},
	{
		timestamps: true,
	}
);

const Review = model("review", reviewSchema);

module.exports = Review;
