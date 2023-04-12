const authHandler = require("./authRoute");
const medicineHandler = require("./medicineRoute");
const galleryHandler = require("./galleryRoute");
const healthTipHandler = require("./HealthTipRoute");
const profileHandler = require("./profileRoute");
const historyHandler = require("./historyRoute");
const pendingHandler = require("./pendingRoute");

const routes = [
	{
		path: "/api/auth",
		handler: authHandler,
	},
	{
		path: "/api/medicines",
		handler: medicineHandler,
	},
	{
		path: "/api/gallery",
		handler: galleryHandler,
	},
	{
		path: "/api/health-tips",
		handler: healthTipHandler,
	},
	{
		path: "/api/profile",
		handler: profileHandler,
	},
	{
		path: "/api/history",
		handler: historyHandler,
	},
	{
		path: "/api/pending",
		handler: pendingHandler,
	},
];

module.exports = (app) => {
	routes.forEach((router) => {
		app.use(router.path, router.handler);
	});
};
