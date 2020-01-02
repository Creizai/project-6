// Import your express library and your controller
// This will allow us to access a particular method and match it to a route
const express = require("express");
const quotesController = require("../controllers/quotes");

// Access the express router, which comes with the library
const quotesRouter = express.Router();

// Assign each key from my controller to a specific route
quotesRouter.get("/", quotesController.index);

module.exports = quotesRouter;
