const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const Medicine = require("../models/MedicineModel");
const ReceiverApplication = require("../models/ReceiverApplicationModel");

exports.getDashboardBarDataController = asyncHandler(async (req, res) => {
	const { year } = req.params;

	// convert dates into ISO format
	const startOfYear = new Date(`${year}-01-01`);
	const endOfYear = new Date(`${year}-12-31`);

	const result = await ReceiverApplication.aggregate([
		// match documents created in the specific year
		{
			$match: {
				createdAt: {
					$gte: startOfYear,
					$lte: endOfYear,
				},
			},
		},
		// extract month from the createdAt field
		{
			$addFields: {
				month: { $month: "$createdAt" },
			},
		},
		// group by month and calculate total donation for each month
		{
			$group: {
				_id: "$month",
				totalDonation: { $sum: "$count" },
			},
		},
		// sort by month in ascending order
		{
			$sort: {
				_id: 1, // month field
			},
		},
	]);

	//create an object with total donation for each month
	const monthlyDonation = {};
	for (let i = 1; i <= 12; i++) monthlyDonation[i] = 0;

	result.forEach((item) => {
		monthlyDonation[item._id] = item.totalDonation;
	});

	res.status(200).json(monthlyDonation);
});

exports.getDashboardCardsInfoController = asyncHandler(async (req, res) => {
	const [totalUsers, donationRequests, receiverRequests] = await Promise.all([
		User.countDocuments(),
		Medicine.countDocuments(),
		ReceiverApplication.countDocuments(),
	]);

	res.status(200).json({ totalUsers, donationRequests, receiverRequests });
});

exports.getDashboardChartDataController = asyncHandler(async (req, res) => {
	const [totalMedicines, donatedMedicines] = await Promise.all([
		Medicine.aggregate([
			// Match documents that have status not equal to "pending" or do not have a status field
			{
				$match: {
					$or: [{ status: { $ne: "pending" } }, { status: { $exists: false } }],
				},
			},
			{
				$group: {
					_id: null, // no group - only one document
					total: { $sum: "$storedDosages" },
					remaining: { $sum: "$dosages" },
				},
			},
		]),

		ReceiverApplication.aggregate([
			{
				$match: {
					status: "accepted",
				},
			},
			{
				$group: {
					_id: null, // no group - only one document
					received: { $sum: "$count" },
				},
			},
		]),
	]);

	res.status(200).json({
		total: totalMedicines[0].total,
		donation: totalMedicines[0].total - totalMedicines[0].remaining, // get donated medicine
		donationReceived: donatedMedicines[0].received,
	});
});
