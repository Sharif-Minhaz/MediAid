const { Schema, model, default: mongoose } = require("mongoose");

const medicineSchema = new Schema(
	{
		medicineName: {
			type: String,
			trim: true,
			unique: [true, "Medicine already in the list"],
			required: true,
		},
		medicineDescription: {
			type: String,
			trim: true,
			required: true,
		},
		medicineImage: {
			type: String,
			default:
				"https://res.cloudinary.com/hostingimagesservice/image/upload/v1680115118/mediAid/default-medi_bktubv.png",
			required: true,
		},
		cloudinaryId: String,
		donorAccount: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		donorName: {
			type: String,
			trim: true,
			default: "Anonymous",
		},
		donorContact: String,
		companyName: { type: String, trim: true },
		dosages: { type: Number, required: true, min: 1 },
		storedDosages: {
			type: Number,
			required: true,
			immutable: true,
			min: 1,
		},
		rating: {
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
		status: {
			type: String,
			enum: ["pending", "accepted"],
		},
	},
	{
		timestamps: true,
	}
);

const Medicine = model("Medicine", medicineSchema);

module.exports = Medicine;
