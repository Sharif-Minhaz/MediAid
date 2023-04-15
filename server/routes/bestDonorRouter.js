const router = require("express").Router();
const { viewBestController } = require("../controllers/bestDonorController");

router.get("/", viewBestController);

module.exports = router;