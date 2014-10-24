if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(str) {
      return function(str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {
      return arr.map(function(item) {
        return function() {
          return fn.call(this, item);
        };
      });
    },

    partial : function(fn, str1, str2) {
      // return fn.call(this, str1, str2);
    },

    useArguments : function() {
      var args = Array.prototype.slice.call(arguments, 0);
      return args.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
      });
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(this, args.slice(1, args.length));
    },

    partialUsingArguments : function(fn) {
      // var args = Array.prototype.slice.call(arguments, 1);
      // var expectedArgs = fn.length;
      // var givenArgs = args.length;
      // if ( expectedArgs < givenArgs ) {
      // } else {
      //   return fn();
      // }
    },

    curryIt : function(fn) {

    }
  };
});
