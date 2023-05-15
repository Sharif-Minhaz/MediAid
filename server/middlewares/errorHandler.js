exports.errorHandler = async (err, req, res, next) => {
	const statusCode = res.statusCode || 500;

	res.json({
		statusCode,
		message: err.message,
		stack: process.env.NODE_ENV === "production" ? null : err.stack,
	});
};