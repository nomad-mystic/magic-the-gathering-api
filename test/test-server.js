/**
 * Created by Nomad_Mystic on 8/5/2016.
 */

// add polyfill to allow ES6 in tests
// import 'babel-polyfill';


var mocha = require('mocha');
var chai = require('chai');
var chaiHTTP = require('chai-http');

// var server = require('../app');

// grab objects from Chai class
var should = chai.should();
var expect = chai.expect();


// add chai-http module to Chai class
chai.use(chaiHTTP);

// console.log(server);

describe('Application', function() {

    describe('Server Logic', function() {

        it('/ should load with a status of 200', function(done) {
            chai.request('http://localhost:3000')
                .get('/')
                .end(function(err, res) {
                    chai.expect(err).to.be.equal(null);
                    chai.expect(res).to.have.status(200);
                    // res.should.have.status(200);
                    // console.log(res);
                    done();
                });
            // done();
        });

        it('/ should return HTML', function(done) {
           chai.request('http://localhost:3000')
               .get('/')
               .end(function(err, res) {
                   chai.expect(err).to.be.equal(null);
                   // chai.expect(res.request.res.text).to.be.html;
                   console.log(res.request.res.text);
                   done();
               });
        });

        it('Every other directory should return 404', function(done) {
            chai.request('http://localhost:3000')
                .get('/about')
                .end(function(err, res) {
                    chai.expect(res).to.have.status(404);
                    done();
                });
        });

    }); // end server logic

});






