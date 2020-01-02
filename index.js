const express = require("express");
const app = express();
const quotesRoutes = require("./lib/routes/quotes.js");
var parser = require("body-parser");

// When user requests at the root / of our application, .use
app.use("/", quotesRoutes);

app.use(parser.json());

app.listen(8081, () => console.log("Port 8080, reporting for duty sir."));
