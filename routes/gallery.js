const express = require("express");
const { addImage, deleteImage } = require("../controller/gallery");
const auth = require("../middleware/auth");

const router = express.Router();

/**
 * Add Image
 */
router.post("/gallery/:pid", auth, addImage);

/**
 * Delete Image
 */
router.delete("/gallery/:gid", auth, deleteImage);

module.exports = router;
