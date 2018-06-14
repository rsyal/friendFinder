// Dependencis, call the packages we need

var express = require('express');           // call express
var bodyParser = require('body-parser');    // used to parse our body response
var path = require('path');   


// Sets up the Express App
// =============================================================
var app = express();                        // define our app using express

var port = process.env.PORT || 8080;        // define our port

// =============================================================================
// configure app to use bodyParser() 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
// require('./app/routing/apiRoutes.js')(app); 
// require('./app/routing/htmlRoutes.js')(app);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(port, function() {
  console.log("Friend Finder is listening on PORT: " + port);
});
