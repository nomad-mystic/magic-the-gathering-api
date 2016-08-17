/**
 * Created by Nomad_Mystic on 8/5/2016.
 */

// add polyfill to allow ES6 in tests
require('babel-polyfill');


var mocha = require('mocha');
var chai = require('chai');
var chaiHTTP = require('chai-http');

// var server = require('../app');

// grab objects from Chai class
var should = chai.should();
var expect = chai.expect;


// add chai-http module to Chai class
chai.use(chaiHTTP);

// console.log(server);

describe('Application', () => {
    // all tests that come for the express server
    describe('Server Logic', () => {
        describe('Server Root', () => {
            it('/ should load with a status of 200', (done) => {
                chai.request('http://localhost:3000')
                    .get('/')
                    .end((err, res) => {
                        chai.expect(err).to.be.equal(null);
                        chai.expect(res).to.have.status(200);
                        // res.should.have.status(200);
                        // console.log(res);
                        done();
                    });
                // done();
            });

            it('/ should return HTML', (done) => {
                chai.request('http://localhost:3000')
                    .get('/')
                    .end((err, res) => {
                        chai.expect(err).to.equal(null);
                        chai.expect(res).to.be.a('object');
                        chai.expect(res).to.be.html;
                        // this is the HTML for index.html
                        // console.log(res.request.res.text);
                        done();
                    });
            });


            it('Every other directory should return 404', (done) => {
                chai.request('http://localhost:3000')
                    .get('/about')
                    .end((err, res) => {
                        chai.expect(res).to.have.status(404);
                        done();
                    });
            });

            // Response of initial data of sets
            describe('Initial JSON file /allSets', () => {
                it('Should be an JSON object, have a status of 200, and return no errors', (done) => {
                    chai.request('http://localhost:3000')
                        .get('/allSets')
                        .end(function(err, res) {
                            chai.expect(err).to.be.equal(null);

                            chai.expect(res).to.have.status(200);
                            chai.expect(res).to.be.a('object');
                            chai.expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
                            chai.expect(res).to.be.json;

                            done();
                        });
                });
            });
        }); // end root path tests


        describe('Individual Card Search', () => {
            it('Should be an JSON object, have a status of 200, and return no errors', (done) => {
                chai.request('http://localhost:3000')
                    .get('/card')
                    .end((err, res) => {
                        chai.expect(err).to.be.equal(null);

                        chai.expect(res).to.have.status(200);
                        chai.expect(res).to.be.a('object');
                        chai.expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                        chai.expect(res).to.be.html;
                        done();
                    });
            }); // 200 status
        }); // Individual Card Search
    }); // end server logic
});






