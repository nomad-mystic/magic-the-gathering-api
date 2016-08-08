/**
 * Created by Nomad_Mystic on 8/5/2016.
 */

require('babel-polyfill');


var chai = require('chai');
var http = require('chai-http');

var expect = chai.expect;
var should = chai.should();

import {landingPage, testing} from '../src/js/landingPage';


describe('front-end tests', () => {

    // for the landing page
    describe('should pass for landing page', () => {
        // base tests for front-end
        it('File should exist', () => {
            chai.expect(landingPage).exist;
        });

        it('it will return a number -1', () => {
            /*
             .a(type)
             @param { String } type
             @param { String } message _optional_
             */
            chai.expect(testing(4)).to.equal(3);
        });

    }); // landing
}); // front-end