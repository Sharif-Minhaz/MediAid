const authHandler = require("./authRoute");

const routes = [
	{
		path: "/auth",
		handler: authHandler,
	},
];

module.exports = (app) => {
	routes.forEach((router) => {
		app.use(router.path, router.handler);
	});
};
