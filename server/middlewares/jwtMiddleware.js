const jwtController = require("../controllers/jwtController");

exports.verifyJWT = (req, res, next) => {
	// get the token from auth header or cookie
	const token = req.headers?.authorization || req.cookies?.auth;

	if (token) {
		// if the token collected from auth header then do this
		if (token.includes("Bearer")) {
			const onlyToken = token.slice(7, token.length);
			// verifying the token and bind the result with request
			req.decoded = jwtController.verifyToken(onlyToken);
			next();
		} else {
			// verifying the token and bind the result with request
			req.decoded = jwtController.verifyToken(token);
			next();
		}
	} else {
		res.status(401).json({
			code: 401,
			message: "Unauthorized request",
		});
	}
};
