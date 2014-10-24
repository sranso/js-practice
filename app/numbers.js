if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return parseInt(num, bit); // lol this isnt right
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      return num.toString(2); // also not quite right...
    },

    multiply: function(a, b) {
      return (a * b).toPrecision(1); // close but not quite...
    }
  };
});

