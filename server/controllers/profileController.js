const asyncHandler = require("express-async-handler");
const Profile = require("../models/ProfileModel");
const cloudinary = require("../utils/cloudinaryHandler");
const { uploadImageHandler } = require("../utils/uploadImage");

exports.viewProfileController = asyncHandler(async (req, res) => {
	const { id } = req.decoded;

	const profile = await Profile.findOne({ user: id }).populate("user");

	if (profile) {
		return res.status(200).json({
			msg: "profile_found",
			profile,
		});
	}

	res.status(404).json({
		msg: "profile_not_found",
		profile: null,
	});
});

exports.findProfileController = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const profile = await Profile.findOne({ user: id });

	if (profile) {
		return res.status(200).json({
			msg: "profile_found",
			profile,
		});
	}

	res.status(404).json({
		msg: "profile_not_found",
		profile: null,
	});
});

exports.createProfileController = asyncHandler(async (req, res) => {
	const { profileInfo } = req;

	const profileContent = {
		user: profileInfo._id,
		fullName: profileInfo.firstName + " " + profileInfo.lastName,
		email: profileInfo.email,
	};

	const profile = await new Profile(profileContent).save();

	if (!profile) {
		return res.status(500).json({
			msg: "profile_not_created",
		});
	}
});

exports.updateProfileController = asyncHandler(async (req, res) => {
	const {
		decoded: { id },
		body,
		file,
	} = req;

	const profile = await Profile.findOne({ user: id });

	let uploadImage = {};

	if (file) {
		uploadImage = await uploadImageHandler(file, "mediAid/profile");

		if (profile.cloudinaryId) await cloudinary.uploader.destroy(profile.cloudinaryId);
	}

	const updatedProfile = await Profile.findOneAndUpdate(
		{ user: id },
		{
			...body,
			profilePicture: uploadImage.secure_url || profile.profilePicture,
			cloudinaryId: uploadImage.public_id || profile.cloudinaryId,
		},
		{
			new: true,
		}
	).populate({
		path: "user",
		select: "user_type",
	});

	if (updatedProfile) {
		return res.status(200).json({
			msg: "profile_updated",
			updatedProfile,
		});
	}
	res.status(500).json({
		msg: "profile_not_updated",
		updatedProfile: null,
	});
});
