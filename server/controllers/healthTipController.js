const asyncHandler = require("express-async-handler");
const HealthTip = require("../models/HealthTipModel");

exports.viewHealthTipsController = asyncHandler(async (req, res) => {
	const healthTips = await HealthTip.find();

	if (healthTips.length)
		return res.status(200).json({
			msg: "health_tips_found",
			healthTips,
		});

	res.status(200).json({
		msg: "health_tips_not_found",
		healthTips: [],
	});
});

exports.viewSingleHealthTipController = asyncHandler(async (req, res) => {
	const { healthTipId } = req.params;

	const healthTip = await HealthTip.findById(healthTipId);

	if (healthTip)
		return res.status(200).json({
			msg: "health_tip_found",
			healthTip,
		});

	res.status(200).json({
		msg: "health_tip_not_found",
		healthTip: null,
	});
});

exports.addHealthTipController = asyncHandler(async (req, res) => {
	const { body } = req;

	const newHealthTip = await new HealthTip(body).save();

	if (newHealthTip)
		return res.status(201).json({
			msg: "health_tip_added",
			healthTip: newHealthTip,
		});

	res.status(500).json({
		msg: "health_tip_not_added",
		healthTip: null,
	});
});

exports.updateHealthTipController = asyncHandler(async (req, res) => {
	const {
		body,
		params: { healthTipId },
	} = req;

	const healthTip = await HealthTip.findByIdAndUpdate(healthTipId, body, { new: true });

	if (healthTip)
		return res.status(200).json({
			msg: "health_tip_updated",
			healthTip,
		});

	res.status(500).json({
		msg: "health_tip_not_updated",
		healthTip: null,
	});
});
