const express = require("express");
const {
  addProfile,
  uploadImage,
  deleteImage,
  editProfile,
  addSkill,
} = require("../controller/profile");
const multiPart = require("connect-multiparty");

const router = express.Router();

/**
 * Add Profile
 */
router.post("/profile/:id", addProfile);

/**
 * Edit profile
 */
router.put("/profile/:id", editProfile);

/**
 * Upload Image
 */
var multipartMiddleware = multiPart();
router.post("/media/upload", multipartMiddleware, uploadImage);

/**
 * Delete Image
 */
router.post("/media/delete/:mid", deleteImage);

/**
 * Add Skills
 */
router.put("/skills/:id", addSkill);

module.exports = router;
