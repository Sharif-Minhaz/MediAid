const authHandler = require("./authRoute");
const medicineHandler = require("./medicineRoute");

const routes = [
	{
		path: "/api/auth",
		handler: authHandler,
	},
	{
		path: "/api/medicines",
		handler: medicineHandler,
	},
];

module.exports = (app) => {
	routes.forEach((router) => {
		app.use(router.path, router.handler);
	});
};
