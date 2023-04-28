const asyncHandler = require("express-async-handler");
const History = require("../models/HistoryModel");

exports.viewAllHistoryController = asyncHandler(async (req, res) => {
	const history = await History.find()
		.populate("user")
		.sort({ createdAt: "desc" });

	if (history.length) {
		return res.status(200).json({
			msg: "history_found",
			history,
		});
	}

	res.status(404).json({
		msg: "history_not_found",
		history: [],
	});
});

exports.addHistoryController = asyncHandler(async (req, res) => {
	const { decoded, historyInfo } = req;

	// add new history
	const newHistory = await new History({
		user: decoded.id,
		medicineName: historyInfo.medicineName,
		action: historyInfo.action,
	}).save();

	if (!newHistory) {
		res.status(500).json({
			msg: "history_not_added",
			history: null,
		});
	}
});
