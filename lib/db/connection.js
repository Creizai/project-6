const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost/project-6";

mongoose.Promise = Promise;

// .connet takes two arguements, one is the path to the db
// second arguement where you set your setting for the connection
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(feedback => console.log("Connected to DB"))
  .catch(error => console.log("It broke, here's why: ", error));

module.exports = mongoose;
