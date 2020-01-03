const mongoose = require("../connection");

const Schema = mongoose.Schema;

const QuotesSchema = new Schema({
  quote: String,
  answer: String
});

const Quotes = mongoose.model("Quotes", QuotesSchema);

module.exports = Quotes;
