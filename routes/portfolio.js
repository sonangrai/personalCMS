const express = require("express");
const { check } = require("express-validator");
const {
  addPortfolio,
  getPortfolio,
  addImage,
  deletePortfolio,
} = require("../controller/portfolio");
const auth = require("../middleware/auth");

const router = express.Router();

/**
 * Post new profolio
 */
router.post(
  "/portfolio",
  auth,
  [
    check("title", "Title is Required Field").notEmpty(),
    check("category", "Category is Needed").notEmpty(),
  ],
  addPortfolio
);

/**
 * Get Portfolios
 */
router.get("/portfolio", getPortfolio);

/**
 * Delete Portfolios
 */
router.delete("/portfolio/:pid", auth, deletePortfolio);

module.exports = router;
