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
		donarName: {
			type: String,
			trim: true,
			default: "Anonymous",
		},
		donarContact: String,
		companyName: { type: String, trim: true },
		rating: {
			type: Schema.Types.ObjectId,
			ref: "review",
		},
	},
	{
		timestamps: true,
	}
);

const Medicine = model("medicine", medicineSchema);

module.exports = Medicine;
