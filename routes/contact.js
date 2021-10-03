const express = require("express");
const { sendMail, getMail, deleteMail } = require("../controller/contact");

const router = express.Router();

/**
 * Send mail
 */
router.post("/mail", sendMail);

/**
 * Get mail
 */
router.get("/mail", getMail);

/**
 * Delete mail
 */
router.delete("/mail/:cid", deleteMail);

module.exports = router;
