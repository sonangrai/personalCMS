const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({
      error: [
        {
          msg: "No token",
          params: "token",
          value: null,
        },
      ],
      status: 401,
      data: null,
    });
  }

  // Verify token
  try {
    await jwt.verify(token, process.env.JWTSECRET, (error, decoded) => {
      if (error) {
        res.status(401).json({
          error: [
            {
              msg: "Token not valid",
              params: "token",
              value: null,
            },
          ],
          status: 401,
          data: null,
        });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
