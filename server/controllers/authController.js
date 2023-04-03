const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("./jwtController");

exports.registerController = asyncHandler(async (req, res) => {
	const { body } = req;

	const isUserExist = await User.exists({ email: body.email });

	if (isUserExist)
		return res.status(409).json({
			msg: "user_exist",
			newUser: null,
		});

	const hashedPassword = await bcrypt.hash(body.password, 12);

	const addNewUser = await new User({ ...body, password: hashedPassword }).save();

	if (addNewUser)
		return res.status(201).json({
			msg: "registration_successful",
			newUser: addNewUser,
		});

	res.status(500).json({
		msg: "registration_failed",
		newUser: null,
	});
});

exports.loginController = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).select("_id email +password user_type");

	if (user) {
		const isMatched = await bcrypt.compare(password, user.password);
		user.password = undefined;

		if (isMatched) {
			const token = generateToken(user);

			res.cookie("auth", token, {
				httpOnly: true,
				maxAge: 6 * 60 * 60 * 1000,
			});

			return res.status(200).json({
				msg: "login_successful",
				user: user,
			});
		}

		res.status(401).json({
			msg: "login_failed",
			user: null,
		});

		return;
	}
	res.status(401).json({
		msg: "login_failed",
		user: null,
	});
});

exports.logoutController = asyncHandler((req, res) => {
	res.clearCookie("auth");
	res.clearCookie("uinfo");

	res.status(200).json({
		msg: "logout_successful",
	});
});
