const router = require("express").Router();
const {
	getDashboardCardsInfoController,
	getDashboardChartDataController,
	getDashboardBarDataController,
} = require("../controllers/dashboardController");

router.get("/barChart/:year", getDashboardBarDataController);
router.get("/chart", getDashboardChartDataController);
router.get("/cards", getDashboardCardsInfoController);

module.exports = router;
