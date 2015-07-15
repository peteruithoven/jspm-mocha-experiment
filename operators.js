/* global mocha describe, it*/

mocha.setup('bdd');

describe('Operator tests', function () {

  describe('sum (+)', function () {

    it('should sum numbers', function (done) {
      var a = 1;
      var b = 2;
      var c = a + b;
      c.should.eql(3);
      done();
    });
    it('should concatinate string', function (done) {
      var a = 'app';
      var b = 'le';
      var c = a + b;
      c.should.eql('pear'); // should fail
      done();
    });
  });
});
