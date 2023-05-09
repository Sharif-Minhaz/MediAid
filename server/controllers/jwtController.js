const jwt = require("jsonwebtoken");

exports.generateToken = function generateToken(user) {
	return jwt.sign({ id: user._id, user_type: user.user_type }, process.env.JWT_SECRET, {
		expiresIn: "6h",
	});
};

exports.verifyToken = function verifyToken(token) {
	return jwt.verify(token, process.env.JWT_SECRET);
};
