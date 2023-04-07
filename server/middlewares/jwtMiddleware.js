const jwtController = require("../controllers/jwtController");

exports.verifyJWT = (req, res, next) => {
	const token = req.headers?.authorization || req.cookies?.auth;

	console.log(token);
	console.log(req.cookies?.uinfo);

	if (token) {
		if (token.includes("Bearer")) {
			const onlyToken = token.slice(7, token.length);
			req.decoded = jwtController.verifyToken(onlyToken);
			console.log("Bearer: ", jwtController.verifyToken(onlyToken));
			next();
		} else {
			req.decoded = jwtController.verifyToken(token);
			console.log(jwtController.verifyToken(token));
			next();
		}
	} else {
		res.status(401).json({
			code: 401,
			message: "Unauthorized request",
		});
	}
};
