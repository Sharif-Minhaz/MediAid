const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

exports.registerController = asyncHandler(async (req, res) => {
	const { body } = req;

	const addNewUser = await new User(body).save();

	if (addNewUser) {
		return res.status(201).json({
			msg: "user_added",
			newUser: addNewUser,
		});
	}

	res.status(500).json({
		msg: "user_not_added",
		newUser: null,
	});
});
