const router = require("express").Router();
const { viewAllHistoryController } = require("../controllers/historyController");
const { verifyJWT } = require("../middlewares/jwtMiddleware");

router.get("/", verifyJWT, viewAllHistoryController);

module.exports = router;
