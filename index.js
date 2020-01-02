const express = require("express");
const app = express();
const quotesRoutes = require("./lib/routes/quotes.js");

// When user requests at the root / of our application, .use
app.use("/", quotesRoutes);

app.listen(8081, () => console.log("Port 8080, reporting for duty sir."));
