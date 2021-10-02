const express = require("express");
const { check } = require("express-validator");
const { addPortfolio } = require("../controller/portfolio");

const router = express.Router();

/**
 * Post new profolio
 */
router.post(
  "/portfolio",
  [
    check("title", "Title is Required Field").notEmpty(),
    check("category", "Category is Needed").notEmpty(),
  ],
  addPortfolio
);

module.exports = router;
