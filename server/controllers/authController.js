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
		// bind the profile info to the request object
		req.profileInfo = addNewUser;

		// create a default user profile with basic info
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

		// removed password field from user  object
		user.password = undefined;

		if (isMatched) {
			// generate json web token
			const token = generateToken(user);

			// set httpOnly auth cookie to browser
			res.cookie("auth", token, {
				maxAge: 6 * 60 * 60 * 1000, // 6 hour
				secure: process.env.NODE_ENV === "production" ? true : false,
				httpOnly: process.env.NODE_ENV === "production" ? true : false,
				sameSite: process.env.NODE_ENV === "production" ? "none" : false,
			});

			return res.status(200).json({
				msg: "login_successful",
				user: user,
				token,
			});
		}

		res.status(401).json({
			msg: "login_failed",
			user: null,
			token: null,
		});

		return;
	}
	res.status(401).json({
		msg: "login_failed",
		user: null,
	});
});

exports.logoutController = (req, res) => {
	// expires the auth cookies instantly to logout
	res.cookie("auth", "", {
		maxAge: -1,
		secure: process.env.NODE_ENV === "production" ? true : false,
		httpOnly: process.env.NODE_ENV === "production" ? true : false,
		sameSite: process.env.NODE_ENV === "production" ? "none" : false,
	});

	res.status(200).json({
		msg: "logout_successful",
	});
};

exports.resetPasswordController = asyncHandler(async (req, res) => {
	const { prevPassword, newPassword } = req.body;
	const { id } = req.decoded;

	if (prevPassword === newPassword) return res.status(200).json({ msg: "same_pass" });

	const user = await User.findById(id).select("+password");
	
	let isMatch;
	if (user) {
		isMatch = await bcrypt.compare(prevPassword, user.password);
	} else {
		return res.status(401).json({
			msg: "pass_not_reset",
		});
	}

	if (isMatch) {
		const encryptedPass = await bcrypt.hash(newPassword, 12);

		user.password = encryptedPass;

		await user.save(); // update the password with the new one

		// expires the auth cookies instantly to logout
		res.cookie("auth", "", {
			maxAge: -1,
			secure: process.env.NODE_ENV === "production" ? true : false,
			httpOnly: process.env.NODE_ENV === "production" ? true : false,
			sameSite: process.env.NODE_ENV === "production" ? "none" : false,
		});

		return res.status(201).json({
			msg: "pass_reset",
		});
	}

	res.status(401).json({
		msg: "pass_not_reset",
	});
});
