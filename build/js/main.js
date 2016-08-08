'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testing = exports.landingPage = undefined;

var _getPromise = require('../../build/utils/getPromise');

var _getPromise2 = _interopRequireDefault(_getPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var landingPage = exports.landingPage = function landingPage() {
    // building table for on init load

    var getInitData = function getInitData() {
        (0, _getPromise2.default)('/data').then(function (response) {
            // console.log(response);
            if (response) {
                buildInitTable(response);
            } else {
                return false;
            }
        }, function (error) {
            console.error("Failed!", error);
        }); // end getURLPromise
    };

    var buildInitTable = function buildInitTable(data) {
        // console.log(JSON.parse(data));
        // need to parse the data before looping through it
        var parsedData = JSON.parse(data);

        if (parsedData) {
            // get table id and init the table string
            var initBlocksTable = document.getElementById('magicTable');
            var table = '';
            parsedData.blocks.forEach(function (block) {
                console.log(block);

                table += '<tr>\n                            <td>\n                                ' + block.name + '\n                            </td>\n                        </tr>\n                        ';
            });
            initBlocksTable.innerHTML = table;
        }
    };

    getInitData();
}; // end landingPage();


/**
 * Created by Nomad_Mystic on 8/8/2016.
 */

var testing = exports.testing = function testing(number) {
    return number - 1;
};
'use strict';

var _landingPage = require('landingPage');

/**
 * Created by Nomad_Mystic on 8/5/2016.
 */

var stub = 'Testing js';

var $ = require('jQuery');
var bootstrap = require('bootstrap');
var getURLPromise = require('../../server/utils/getPromise');

// builds table of local JSON file on init
(0, _landingPage.landingPage)();
//# sourceMappingURL=main.js.map
