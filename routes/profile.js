const express = require("express");
const { addProfile } = require("../controller/profile");

const router = express.Router();

/**
 * Add Profile
 */
router.post("/profile/:id", addProfile);

module.exports = router;
