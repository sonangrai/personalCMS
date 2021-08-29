import express from "express";

const router = express.Router();

/**
 * Get User
 */
router.get("/user", (req, res) => {
  res.send("Hello User");
});

export default router;
