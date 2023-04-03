const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const middlewares = [
	cors({
		credentials: true,
		origin: [
			"http://localhost:3000",
			"http://127.0.0.1:3000",
			"http://localhost:5000",
			"https://mediaid-online-platform.netlify.app",
		],
	}),
	cookieParser(),
	express.static("public"),
	express.json({ limit: "500mb" }),
	express.urlencoded({ extended: true, limit: "500mb" }),
];

module.exports = (app) => {
	app.use(middlewares);
};
