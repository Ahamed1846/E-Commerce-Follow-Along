const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/error");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/.env" });
}

// Import Routes
const user = require("./controller/user");
app.use("/api/v2/user", user);

// Error Handling Middleware
app.use(ErrorHandler);

module.exports = app;
