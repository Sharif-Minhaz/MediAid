const JWT = require("jsonwebtoken");

const generateToken = function generateToken(user) {
	return JWT.sign({ id: user._id, user_type: user.user_type }, process.env.JWT_SECRET);
};

const verifyToken = function verifyToken(token) {
	return JWT.verify(token, process.env.JWT_SECRET);
};

module.exports = {
	generateToken,
	verifyToken,
};
