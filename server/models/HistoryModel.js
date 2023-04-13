const { Schema, model } = require("mongoose");

const historySchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		medicineName: {
			type: String,
			required: true,
		},
		action: {
			type: String,
			enum: [
				"accept-donation",
				"reject-donation",
				"accept-receive",
				"reject-receive",
				"apply-donate",
				"apply-receive",
			],
		},
	},
	{
		timestamps: true,
	}
);

const History = model("History", historySchema);

module.exports = History;
