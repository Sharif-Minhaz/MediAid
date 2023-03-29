const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

exports.loginController = asyncHandler(async (req, res) => {
	const { body } = req;

	const addNewUser = await new User(body).save();

	if (addNewUser) {
		return res.status(201).json({
			key: "user_added",
			data: addNewUser,
		});
	}

	res.status(500).json({
		key: "user_not_added",
		data: null,
	});
});
