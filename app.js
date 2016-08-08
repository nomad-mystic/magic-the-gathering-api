/**
 * Created by Nomad_Mystic on 8/5/2016.
 */

require('babel-polyfill');
// application imports from libs
var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

// custom imports
var getPromise = require('./server/utils/getPromise');
var readJSON = require('./server/utils/readJSON');
var magicData = require('./data/magicData.json');


// load static files from the public folder
app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static(path.join(__dirname, 'data')));

// for the / route
app.get('/', function(req, res) {
    console.log(`This should return status 200: ${res.statusCode}`);

    // send the static HTML for initialization
    res.sendFile(__dirname + '/build/index.html');
});

app.get('/data', function(req, res) {
    res.json(magicData);
});


// this is not part of the program yet 8-8-2015
app.get('/cards', function(req, res) {
    // send JSON to front end
    console.log(res.statusCode);
    http.get('./data/magicData.json', function(initObject) {
        console.log(`Got Response statusCode: ${initObject.statusCode}`);
        console.log(`Got Response headers: ${initObject.headers}`);
        // console.log(`Got Response whole object: ${initObject}`);

        var string = '';

        initObject.on('data', function(data) {
            string += data;
        });

        initObject.on('end', function() {
            // console.log(string);
            // res.send(string);
        });

    }).on('error', function(error) {
        console.log(error);
    });
    // res.send(res);
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