import express from "express";
import dotenv from "dotenv/config";
import connectDB from "./utils/connectDB.js";

import userRoute from "./routes/user.js";

/**
 * Creating app instance of express
 */
const app = express();

/**
 * Connecting to Mongo DB
 */
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome To Personal CMS by Rai Sonahang");
});

/**
 * Registering routes
 */
app.use("/api", userRoute); //User Routes

/**
 * Running the server
 */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App runing on ${PORT}`));
