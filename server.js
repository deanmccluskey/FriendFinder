// Require express package
const express = require("express");

// Setup express server
const app = express();

// Set initial port
const PORT = process.env.PORT || 8080;

// Setup json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server
app.listen(PORT, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("App listening on PORT: " + PORT);
    }
});
