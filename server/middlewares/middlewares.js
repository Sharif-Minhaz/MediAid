const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const middlewares = [
	cookieParser(),
	cors({
		credentials: true,
		origin: [
			"http://localhost:3000",
			"http://localhost:5000",
			"https://mediaid-online-platform.netlify.app",
		],
	}),
	express.static("public"),
	express.json({ limit: "500mb" }),
	express.urlencoded({ extended: true, limit: "500mb" }),
];

module.exports = (app) => {
	app.use(middlewares);
};
