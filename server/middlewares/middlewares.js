const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const middlewares = [
	cors({
		credentials: true,
		origin: ["http://localhost:8080", "https://mediAid.onrendered.com"],
	}),
	cookieParser(),
	express.static("public"),
	express.json({ limit: "500mb" }),
	express.urlencoded({ extended: true, limit: "500mb" }),
];

module.exports = (app) => {
	app.use(middlewares);
};
