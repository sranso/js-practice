if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var shouldBreak = false;
      var result = {
        cancel: function() { shouldBreak = true; }
      };
      var current = start;
      while ( current <= end ) {
        if ( shouldBreak ) { break; }
        console.log(current);
        current ++;
      }
      return result;
    }
  };
});
