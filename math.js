/* global mocha describe, it*/
mocha.setup('bdd');

describe('Math tests', function () {

  describe('Devision', function () {
    it('should devide integers', function (done) {
      var a = 10;
      var b = 5;
      var c = a / b;
      c.should.eql(2);
      done();
    });
    it('should devide floats', function (done) {
      var a = 10.5;
      var b = 1.5;
      var c = a + b;
      c.should.eql(2);
      done();
    });
  });
});
