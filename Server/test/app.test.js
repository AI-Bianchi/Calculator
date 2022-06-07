import supertest from 'supertest';
import chai from 'chai';
import app from '../app.js';

var expect = chai.expect;
var request = supertest(app);

describe('POST /api/calculate', function() {
  describe('Arithmetic', function() {
    it('Simple addition', function(done) {
      request
          .post('/api/calculate')
          .send({"calcul": "1+1+1"})
          .expect(200)
          .end(function(err, res) {
              expect(res.text).to.eql("3");
              if (err) return done(err);
              return done();
          });
    });

    it('Simple soustraction', function(done) {
      request
          .post('/api/calculate')
          .send({"calcul": "10-1"})
          .expect(200)
          .end(function(err, res) {
              expect(res.text).to.eql("9");
              if (err) return done(err);
              return done();
          });
    });


    it('Simple mutiplication', function(done) {
      request
          .post('/api/calculate')
          .send({"calcul": "3*3"})
          .expect(200)
          .end(function(err, res) {
              expect(res.text).to.eql("9");
              if (err) return done(err);
              return done();
          });
    });

    it('Simple division', function(done) {
      request
          .post('/api/calculate')
          .send({"calcul": "10/2"})
          .expect(200)
          .end(function(err, res) {
              expect(res.text).to.eql("5");
              if (err) return done(err);
              return done();
          });
    });


    it('Priorize operation', function(done) {
      request
          .post('/api/calculate')
          .send({"calcul": "2+2*4"})
          .expect(200)
          .end(function(err, res) {
              expect(res.text).to.eql("10");
              if (err) return done(err);
              return done();
          });
    });

    it('Simple operation with letters', function(done) {
      request
          .post('/api/calculate')
          .send({"calcul": "abcdef1+1+1abcdef"})
          .expect(200)
          .end(function(err, res) {
              expect(res.text).to.eql("3");
              if (err) return done(err);
              return done();
          });
    });
  });
});
