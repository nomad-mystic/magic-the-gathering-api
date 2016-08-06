/**
 * Created by Nomad_Mystic on 8/5/2016.
 */

var fs = require('fs');


var readJSON = function(filename, callback) {
    fs.readFile(filename, function(err, data) {
        // is there is an error send it back to the server
       if (err) {
           callback(err);
           return;
       }

       // check if there is anything returned by the server
       try {
           callback(null, JSON.parse(data));
       } catch (exception) {
           callback(exception);
       }
    });
};

module.exports = readJSON;