import express from "express";
import dotenv from "dotenv/config";
import connectDB from "./utlis/connectDB.js";

/**
 * Creating app instance of express
 */
const app = express();

/**
 * Connecting to Mongo DB
 */
connectDB();

app.get("/", (req, res) => {
  res.send("k xa from NODE");
});

/**
 * Running the server
 */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App runing on ${PORT}`));
