const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//User Login Api
exports.loginController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    //Checking if User Email already Exist
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User Does not Exist" }] });
    }

    //Checking Password Hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 * For signup
 * @param {username, password} req
 * @param {token} res
 * @returns
 */
exports.signupController = async (req, res) => {
  //Checking the requested data is valid
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    //Checking if Username already Exist
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).send({
        error: [
          {
            msg: "UserName Already Taken",
            params: "username",
            value: username,
          },
        ],
        status: 400,
        data: null,
      });
    }

    user = new User({
      username,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    //Password Hashed
    user.password = await bcrypt.hash(password, salt);

    //Now saving to the mongoDB
    user.save((err, user) => {
      if (err) {
        return res.status(400).send({
          error: "Failed to svae to DB",
          status: 400,
          data: {
            name: user.firstname + user.lastname,
            email: user.email,
            id: user._id,
          },
        });
      }
      res.status(200).send({
        msg: "User Created Successfully",
        status: 200,
        data: {
          name: user.username,
          email: user.email,
          id: user._id,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
