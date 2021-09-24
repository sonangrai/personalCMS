const express = require("express");
const { addProfile, uploadImage } = require("../controller/profile");

const router = express.Router();

/**
 * Add Profile
 */
router.post("/profile/:id", addProfile);

/**
 * Upload Image
 */
router.post("/media/upload", uploadImage);

module.exports = router;
