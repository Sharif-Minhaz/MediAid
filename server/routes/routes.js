const authHandler = require("./authRoute");
const medicineHandler = require("./medicineRoute");
const galleryHandler = require("./galleryRoute");

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
];

module.exports = (app) => {
	routes.forEach((router) => {
		app.use(router.path, router.handler);
	});
};
