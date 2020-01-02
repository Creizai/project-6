// Import the connection file at the top of your seed
const mongoose = require("./connection");
const data = require("./quotes.json");

// Then, import your model seperately
const Quotes = require("./models/Quotes");

// Write our seed file
// Delete the original content first
Quotes.deleteMany({}).then(quote => {
  console.log(quote);
  Quotes.create(data)
    .then(dataReturn => {
      console.log(dataReturn);
    })
    .catch(err => {
      console.log("You blew it Adam, here's why", err);
    });
  process.exit;
});
