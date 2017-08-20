'use strict';

const app = require('../../index'),
    should = require('chai').should(),
    request = require('supertest');

    //Since we are using self signed cert just for test purpose.
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    describe('Core controller unit tests:', function() {

        it('should be able to get YOTI profile', function(done){
            request(app).get('/api/profile')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err,res){
                    console.log(res.body);
                    res.body.should.be.a('Object');
                    done();
                });
        });
    });
