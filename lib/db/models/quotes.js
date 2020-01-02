const mongoose = require("../connection");

const Schema = mongoose.Schema;

const Quotes = new Schema({
  title: {
    quote: String,
    answer: String
  }
});

const Quotes = mongoose.model("Bookmark", QuotesSchema);

module.exports = Quotes;
