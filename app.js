/**
 * Created by Nomad_Mystic on 8/5/2016.
 */


// application imports
var express = require('express');
var app = express();
var path = require('path');

// load static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function(req, res) {
    console.log(`This should return status 200: ${res.statusCode}`);

    // send the static HTML for initialization
    res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Server running on ' + port);
});


// var application = {
//     app: function() {
//         var express = require('express');
//         var app = express();
//
//         app.get('/', function(req, res) {
//             console.log(`This should return status 200: ${res.statusCode}`);
//
//             res.send('This connects to the root page');
//         });
//         this.server(app);
//
//         // return app;
//     },
//     server: function(app) {
//         var server = app.listen(3000, function () {
//             var port = server.address().port;
//             console.log('Server running on ' + port);
//         });
//         return server;
//     }
// };

// var app = require('./server/server');
// var server = require('./server/server');

// calling server app and routes
// application.app();


// Exporting app to tests
module.exports = server;