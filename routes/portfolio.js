const express = require("express");
const { addPortfolio } = require("../controller/portfolio");

const router = express.Router();

/**
 * Post new profolio
 */
router.post("/portfolio", addPortfolio);

module.exports = router;
