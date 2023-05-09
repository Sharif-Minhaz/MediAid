const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
	try {
		mongoose.set("strictQuery", false);
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.info(`MongoDB connected: ${conn.connection.host}`.yellow.underline);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

module.exports = connectDB;
