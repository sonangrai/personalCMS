const express = require("express");
const { addImage } = require("../controller/gallery");
const auth = require("../middleware/auth");

const router = express.Router();

/**
 * Add Image
 */
router.post("/gallery", auth, addImage);

module.exports = router;
