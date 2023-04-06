const authHandler = require("./authRoute");
const medicineHandler = require("./medicineRoute");
const galleryHandler = require("./galleryRoute");
const healthTipHandler = require("./HealthTipRoute");
const profileHandler = require("./profileRoute");

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
];

module.exports = (app) => {
	routes.forEach((router) => {
		app.use(router.path, router.handler);
	});
};
