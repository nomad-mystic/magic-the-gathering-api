/**
 * Created by Nomad_Mystic on 8/5/2016.
 */





// require('babel-polyfill');


let stub = 'Testing js';

// let $ = require('jQuery');
// let bootstrap = require('bootstrap');
let getURLPromise = require('../../server/utils/getPromise');

import {landingPage} from '../components/landingPage';

// builds table of local JSON file on init
landingPage();
