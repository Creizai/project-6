const express = require("express");
const app = express();
//const bookmarkRoutes = require("./lib/routes/bookmarks.js");

app.listen(8080, () => console.log("Port 8080, reporting for duty sir."));

// When user requests at the root / of our application, .use
//app.use("/", bookmarkRoutes);
