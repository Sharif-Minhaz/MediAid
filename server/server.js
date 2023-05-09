require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");
const { errorHandler } = require("./middlewares/errorHandler");
const setMiddlewares = require("./middlewares/middlewares");
const setRoutes = require("./routes/routes");

// set middlewares and routes
setMiddlewares(app);
setRoutes(app);

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
