const express = require("express");
require("dotenv").config();
const connectDB = require("./utils/connectDB.js");
const cors = require("cors");

const userRoute = require("./routes/user.js");

/**
 * Creating app instance of express
 */
const app = express();

/**
 * Connecting to Mongo DB
 */
connectDB();
//Validating json usage
app.use(express.json({ extended: false }));
app.use(cors());

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
