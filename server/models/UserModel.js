const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			lowercase: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
		user_type: {
			type: String,
			enum: ["receiver", "donor", "admin"],
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = model("User", userSchema);
