var calc = {
  NAN: 'NaN',
  suma: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return calc.NAN;
    }
    return a + b;
  },
  resta: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return calc.NAN;
    }
    return a - b;
  },
  multi: (a, b) =>{
    if (typeof a !== 'number' || typeof b !== 'number') {
      return calc.NAN;
    }
    return a * b
  }
};
module.exports = calc;
