var mongoose = require('mongoose');
require('../../../server/db/models');
var Url = mongoose.model('Url');
var chai = require('chai');
var expect = chai.expect;
var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);
var supertest = require('supertest');
var app = require('../../../server/app');
var guest = supertest.agent(app);

describe('Post', function(){
  it('creates a new document.', function(done){
    guest.post('/api/urls')
    .send({url: 'http://www.google.com'})
    .expect(200)
    .end(function(err, response){
      if (err) return done(err);
      expect(response.body.url).to.equal('http://www.google.com');
      done();
    });
  });

  it('generates a long zitly', function(done){
    guest.post('/api/urls')
    .send({url: 'google.com'})
    .expect(200)
    .end(function(err, response){
      if (err) return done(err);
      expect(response.body.zitly.length).to.be.above(999);
      done();
    });
  });
});
