const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		fullName: {
			type: String,
			required: true,
		},
		address: String,
		email: {
			type: String,
			lowercase: true,
			unique: true,
			immutable: true,
		},
		contact: String,
		description: String,
		profilePicture: {
			type: String,
			default:
				"https://res.cloudinary.com/hostingimagesservice/image/upload/v1680632612/mediAid/default-profile-pic_lktd2q.webp",
		},
		cloudinaryId: String,
		organization: String,
		facebook: String,
		instagram: String,
		twitter: String,
	},
	{ timestamps: true }
);

const Profile = model("Profile", userSchema);

module.exports = Profile;
