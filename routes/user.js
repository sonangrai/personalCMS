const express = require("express");
const { signupController } = require("../controller/auth");
const { check } = require("express-validator");

const router = express.Router();

/**
 * Get User
 */
router.get("/user", (req, res) => {
  res.send("Hello User");
});

/**
 * Sign Up Handler
 */
router.post(
  "/user/register",
  [
    check("username", "Username is Required ").notEmpty(),
    check("password", "Password must be more than 6 character").isLength({
      min: 6,
    }),
  ],
  signupController
);

module.exports = router;
