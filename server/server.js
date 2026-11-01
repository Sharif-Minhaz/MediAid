require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./db/connectDB");
const { errorHandler } = require("./middlewares/errorHandler");
const setMiddlewares = require("./middlewares/middlewares");
const setRoutes = require("./routes/routes");

// set middlewares and routes
setMiddlewares(app);
setRoutes(app);

// health check
app.get("/api/health", (req, res) => {
	res.status(200).json({ success: true, message: "Server is healthy" });
});

app.get("/api/ping", async (req, res) => {
	const stateMap = {
		0: "disconnected",
		1: "connected",
		2: "connecting",
		3: "disconnecting",
	};

	try {
		await mongoose.connection.db.admin().ping();

		const state = mongoose.connection.readyState;
		const isHealthy = state === 1;

		return res.status(isHealthy ? 200 : 503).json({
			status: isHealthy ? "ok" : "degraded",
			db: {
				state: stateMap[state] ?? "unknown",
				name: mongoose.connection.name ?? null,
			},
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		return res.status(503).json({
			status: "error",
			db: {
				state: "disconnected",
				name: mongoose.connection.name ?? null,
			},
			timestamp: new Date().toISOString(),
		});
	}
});

// catch not found pages
app.use((req, res, next) => {
	res.status(404).json({ success: false, message: "404 Page not found" });
});

// using custom global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.info(`Server running at port: ${PORT}`);
		});
	})
	.catch((err) => console.error(err.message));
