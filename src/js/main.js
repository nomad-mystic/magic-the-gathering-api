/**
 * Created by Nomad_Mystic on 8/5/2016.
 */





require('babel-polyfill');


var stub = 'Testing js';

var $ = require('jQuery');
var bootstrap = require('bootstrap');
var getURLPromise = require('../../server/utils/getPromise');

import {landingPage} from 'landingPage';

// builds table of local JSON file on init
landingPage();
