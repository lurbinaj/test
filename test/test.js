var assert = require('assert');
var calc = require('./calc.js');

describe('Calc', () => {

  it('async test', (done) => {
    setTimeout(() => {
      assert.equal(false, false);
      done();
    }, 1500);
  });

  it('is not null', () => {
    assert.equal(!!calc, true);
  });

  describe('al sumar números', () => {
    it('si no va con parámetros, devuelve NaN', () => {
      assert.equal(calc.suma(), calc.NAN);
    });
    it('si falta algún parámetro, devuelve NaN', () => {
      assert.equal(calc.suma(0), calc.NAN);
    });
    it('si algun parámetro es no numérico, devuelve NaN', () => {
      assert.equal(calc.suma(0, 'a'), calc.NAN);
      assert.equal(calc.suma(0, '0'), calc.NAN);
      assert.equal(calc.suma('a', '0'), calc.NAN);
      assert.equal(calc.suma('a', 0), calc.NAN);
      assert.equal(calc.suma('0', 0), calc.NAN);
    });
    it('si ambos parámetros son numérico, devuelve su suma', () => {
      assert.equal(calc.suma(0, 0), 0);
      assert.equal(calc.suma(1, 0), 1);
      assert.equal(calc.suma(0, 1), 1);
      assert.equal(calc.suma(2, 1), 3);
      assert.equal(calc.suma(20, 1), 21);
    });
  });

  describe('al restar números', () => {
    it('si no va con parámetros, devuelve NaN', () => {
      assert.equal(calc.resta(), calc.NAN);
    });
    it('si falta algún parámetro, devuelve NaN', () => {
      assert.equal(calc.resta(0), calc.NAN);
    });
    it('si algun parámetro es no numérico, devuelve NaN', () => {
      assert.equal(calc.resta(0, 'a'), calc.NAN);
      assert.equal(calc.resta(0, '0'), calc.NAN);
      assert.equal(calc.resta('a', '0'), calc.NAN);
      assert.equal(calc.resta('a', 0), calc.NAN);
      assert.equal(calc.resta('0', 0), calc.NAN);
    });
    it('si ambos parámetros son numérico, devuelve su resta', () => {
      assert.equal(calc.resta(0, 1),-1);
      assert.equal(calc.resta(10, 5), 5);
      assert.equal(calc.resta(100, 1), 99);
    });
  });

  describe('al multiplicar números', () => {
    it('si no va con parámetros, devuelve NaN', () => {
      assert.equal(calc.multi(0), calc.NAN);
    });
    it('si falta algún parámetro, devuelve NaN', () => {
      assert.equal(calc.multi(0), calc.NAN);
    });
    it('si algun parámetro es no numérico, devuelve NaN', () => {
      assert.equal(calc.multi(0, 'a'), calc.NAN);
      assert.equal(calc.multi(0, '0'), calc.NAN);
      assert.equal(calc.multi('a', '0'), calc.NAN);
      assert.equal(calc.multi('a', 0), calc.NAN);
      assert.equal(calc.multi('0', 0), calc.NAN);
    });
    it('si ambos parámetros son numérico, devuelve su multiplicación', () => {
      assert.equal(calc.multi(0, 1),0);
      assert.equal(calc.multi(10, 5), 50);
      assert.equal(calc.multi(100, 5), 500);
    });
  });

});
