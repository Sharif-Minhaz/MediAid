const { model, Schema } = require("mongoose");

const receiverApplicationSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},

		medicine: {
			type: Schema.Types.ObjectId,
			ref: "Medicine",
			required: true,
		},

		count: {
			type: Number,
			required: true,
			min: 1,
		},

		reason: {
			type: String,
			minLength: 25,
			required: true,
		},

		address: {
			type: String,
			required: true,
		},

		contact: {
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
		},

		fullName: {
			type: String,
			required: true,
		},

		status: {
			type: String,
			enum: ["pending", "accepted"],
			default: "pending",
		},
	},
	{
		timestamps: true,
	}
);

const ReceiverApplication = model("ReceiverApplication", receiverApplicationSchema);

module.exports = ReceiverApplication;
