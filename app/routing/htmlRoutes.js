// Basic route that sends the user first to the AJAX Page

var path = require('path');

// Export HTML routes
module.exports = function(app) {

  console.log('___ENTER htmlRoutes.js___');
//   // HTML GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases the user is shown an HTML page of content
//   // ---------------------------------------------------------------------------
  //  Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // survery page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
 

	





