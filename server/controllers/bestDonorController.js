const asyncHandler = require("express-async-handler");
const Medicine = require("../models/MedicineModel");

exports.viewBestController = asyncHandler(async (req, res) => {
	const bestDonors = await Medicine.aggregate([
		// Match documents that have status not equal to "pending" or do not have a status field
		{
			$match: {
				$or: [{ status: { $ne: "pending" } }, { status: { $exists: false } }],
			},
		},
		// Group by donorAccount and sum the dosages
		{
			$group: {
				_id: "$donorAccount",
				donated: { $sum: "$storedDosages" },
			},
		},
		// Sort by donated in descending order
		{ $sort: { donated: -1 } },
	]);

	// Send the response in the desired format
	const formattedResponse = bestDonors.map((donor) => ({
		donorAccount: donor._id,
		donated: donor.donated,
	}));

	if (formattedResponse.length) {
		return res.status(200).json({
			msg: "donor's_found",
			donors: formattedResponse,
		});
	}

	res.status(404).json({
		msg: "donation_states_not_found",
		donors: [],
	});
});
