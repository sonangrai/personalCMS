const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();
const connectDB = require("./utils/connectDB.js");

const userRoute = require("./routes/user.js");

/**
 * Swagger docing
 */

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com",
    },
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
    {
      url: "https://zd91a74bb-z43c71d08-gtw.qovery.io/",
      description: "Production server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

/**
 * Creating app instance of express
 */
const app = express();

/**
 * Serving JS DOc swagger
 */
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * Connecting to Mongo DB
 */
connectDB();
//Validating json usage
app.use(express.json({ extended: false }));

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
