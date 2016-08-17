/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _landingPage = __webpack_require__(1);

	/**
	 * Created by Nomad_Mystic on 8/5/2016.
	 */

	// require('babel-polyfill');


	var stub = 'Testing js';

	// let $ = require('jQuery');
	// let bootstrap = require('bootstrap');
	var getURLPromise = __webpack_require__(3);

	// builds table of local JSON file on init
	(0, _landingPage.landingPage)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.testing = exports.landingPage = undefined;

	var _getPromise = __webpack_require__(2);

	var _getPromise2 = _interopRequireDefault(_getPromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var landingPage = exports.landingPage = function landingPage() {
	    // building table for on init load

	    var getInitData = function getInitData() {
	        (0, _getPromise2.default)('/allSets').then(function (response) {
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by Nomad_Mystic on 8/5/2016.
	 */

	var getURLPromise = function getURLPromise(url) {
	    // Return a new promise.
	    return new Promise(function (resolve, reject) {
	        // Do the usual XHR stuff
	        var req = new XMLHttpRequest();
	        req.open('GET', url);

	        req.onload = function () {
	            // This is called even on 404 etc
	            // so check the status
	            if (req.status == 200) {
	                // Resolve the promise with the response text
	                resolve(req.response);
	            } else {
	                // Otherwise reject with the status text
	                // which will hopefully be a meaningful error
	                reject(Error(req.statusText));
	            }
	        };

	        // Handle network errors
	        req.onerror = function () {
	            reject(Error("Network Error"));
	        };

	        // Make the request
	        req.send();
	    });
	};

	module.exports = getURLPromise;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by Nomad_Mystic on 8/5/2016.
	 */

	var getURLPromise = function getURLPromise(url) {
	    // Return a new promise.
	    return new Promise(function (resolve, reject) {
	        // Do the usual XHR stuff
	        var req = new XMLHttpRequest();
	        req.open('GET', url, true);

	        req.onLoad = function () {
	            // This is called even on 404 etc
	            // so check the status
	            if (req.status == 200) {
	                // Resolve the promise with the response text
	                resolve(req.response);
	            } else {
	                // Otherwise reject with the status text
	                // which will hopefully be a meaningful error
	                reject(Error(req.statusText));
	            }
	        };

	        // Handle network errors
	        req.onError = function () {
	            reject(Error("Network Error"));
	        };

	        // Make the request
	        req.send();
	    });
	};

	module.exports = getURLPromise;

/***/ }
/******/ ]);