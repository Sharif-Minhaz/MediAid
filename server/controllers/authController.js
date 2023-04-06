const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("./jwtController");
const { createProfileController } = require("./profileController");

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

	if (addNewUser) {
		req.profileInfo = addNewUser;
		createProfileController(req, res);

		return res.status(201).json({
			msg: "registration_successful",
			newUser: addNewUser,
		});
	}

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
				// httpOnly: true,
				maxAge: 6 * 60 * 60 * 1000,
				domain: [
					"http://localhost:3000",
					"http://localhost:5000",
					"http://localhost:8080",
					"https://mediaid.onrender.com",
				],
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

exports.resetPasswordController = asyncHandler(async (req, res) => {
	const { prevPassword, newPassword } = req.body;
	const { id } = req.decoded;

	if (prevPassword === newPassword) return res.status(200).json({ msg: "same_pass" });

	const user = await User.findById(id).select("+password");

	let isMatch;
	if (user) {
		isMatch = await bcrypt.compare(prevPassword, user.password);
	} else {
		return res.status(404).json({
			msg: "pass_not_reset",
		});
	}

	if (isMatch) {
		const encryptedPass = await bcrypt.hash(newPassword, 12);
		user.password = encryptedPass;
		await user.save();
		res.clearCookie("auth");
		res.clearCookie("uinfo");
		return res.status(201).json({
			msg: "pass_reset",
		});
	}

	res.status(401).json({
		msg: "pass_not_reset",
	});
});
