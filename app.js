/**
 * Created by Nomad_Mystic on 8/5/2016.
 */

require('babel-polyfill');
// application imports from libs
var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var https = require('https');

// custom imports
var getPromise = require('./server/utils/getPromise');
var readJSON = require('./server/utils/readJSON');
var magicData = require('./data/allSets.json');


// load static files from the public folder
app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static(path.join(__dirname, 'data')));

// for the / route
app.get('/', function(req, res) {
    console.log(`This should return status 200: ${res.statusCode}`);

    // send the static HTML for initialization
    res.sendFile(__dirname + '/build/index.html');
});

app.get('/allSets', function(req, res) {
    // console.log(res);
    res.json(magicData);
});


// this is not part of the program yet 8-8-2015
app.get('/card', function(req, res) {
    // send JSON to front end
    console.log('server' + res.statusCode);
    var defaultQuery = 'https://api.magicthegathering.io/v1/cards?name=ajani';
    https.get(defaultQuery, function(individualCardObject) {
        console.log(`Got Response statusCode: ${individualCardObject.statusCode}`);
        console.log(`Got Response headers: ${individualCardObject.headers}`);
        // console.log(`Got Response whole object: ${individualCardObject}`);
        var string = '';

        individualCardObject.on('data', function(data) {
            string += data;
        });

        individualCardObject.on('end', function() {
            // console.log(string);
            // returns content-type text/html
            res.send(string);
        });

    }).on('error', function(error) {
        console.log(error);
    });
}); // end individual card search

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