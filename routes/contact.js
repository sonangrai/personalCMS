const express = require("express");
const { sendMail, getMail } = require("../controller/contact");

const router = express.Router();

/**
 * Send mail
 */
router.post("/mail", sendMail);

/**
 * SeGetnd mail
 */
router.get("/mail", getMail);

module.exports = router;
