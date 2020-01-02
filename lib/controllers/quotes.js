// Controller will relate to a specific model
// So you want to import the model here
// Note - you can have multiple models within one controller
const Quotes = require("../db/models/Quotes");

module.exports = {
  // Inside each controller method, you're defining the logic of your app
  // Each 'endpoint' will contain specific instructions ...
  // ... on what data should be displayed
  index: (req, res) => {
    Quotes.find({}).then(quote => {
      res.json(quote);
    });
  },
  create: (req, res) => {
    Quotes.create({
      quote: req.body.quote,
      answer: req.body.answer
    }).then(quote => {
      res.json(quote);
    });
  },
  show: (req, res) => {},
  delete: (req, res) => {}
};

// Create
// Yoga.create({
//   content: req.body.content,
//   position: req.body.position,
//   company: req.body.company,
//   location: req.body.location,
//   logoURL: req.body.logoURL,
// })
//   .then(newYogaDoc => {
//       res.json(newYogaDoc)
//   });
