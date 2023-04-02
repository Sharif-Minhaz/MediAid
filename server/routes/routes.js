const authHandler = require("./authRoute");
const medicineHandler = require("./medicineRoute");
const galleryHandler = require("./galleryRoute");
const healthTipHandler = require("./HealthTipRoute");

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
];

module.exports = (app) => {
	routes.forEach((router) => {
		app.use(router.path, router.handler);
	});
};
