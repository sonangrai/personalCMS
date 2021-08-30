const express = require("express");

const router = express.Router();

/**
 * Get User
 */
router.get("/user", (req, res) => {
  res.send("Hello User");
});

module.exports = router;
