/**
 * Created by Nomad_Mystic on 8/5/2016.
 */

require('babel-polyfill');


var chai = require('chai');
var http = require('chai-http');

var expect = chai.expect;
var should = chai.should();

import {landingPage} from '../src/components/landingPage';


describe('front-end tests', () => {

    // for the landing page
    describe('should pass for landing page', () => {
        // base tests for front-end
        it('File should exist', () => {
            chai.expect(landingPage).exist;
        });
    }); // landing
}); // front-end