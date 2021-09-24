const express = require("express");
const { addProfile, uploadImage } = require("../controller/profile");
const multiPart = require("connect-multiparty");

const router = express.Router();

/**
 * Add Profile
 */
router.post("/profile/:id", addProfile);

/**
 * Upload Image
 */
var multipartMiddleware = multiPart();
router.post("/media/upload", multipartMiddleware, uploadImage);

module.exports = router;
