const { Schema, model } = require("mongoose");

const healthTipSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			minLength: [25, "Description must be at least 25 chars"],
		},
	},
	{ timestamps: true }
);

const HealthTip = model("HealthTip", healthTipSchema);

module.exports = HealthTip;
