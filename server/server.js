/**
 * Created by Nomad_Mystic on 8/5/2016.
 */



// server application with routes
var server = function() {
    var express = require('express');
    var app = express();



    app.listen(3000, function() {
       console.log('Server running on 3000');
    });
};

// exporting to app.js in root
module.exports = server;