if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(prev, current) {
        return prev + current;
      });
    },

    remove : function(arr, item) {
      var indices = [];
      var idx = arr.indexOf(item);
      while ( idx > -1 ) {
        indices.push(idx);
        idx = arr.indexOf(item, idx + 1);
      }
      indices.reverse().forEach(function(index) {
        arr.splice(index, 1);
      });
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      var indices = [];
      var idx = arr.indexOf(item);
      while ( idx > -1 ) {
        indices.push(idx);
        idx = arr.indexOf(item, idx + 1);
      }
      indices.reverse().forEach(function(index) {
        arr.splice(index, 1);
      });
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      arr.forEach(function(innerItem) {
        if ( item === innerItem ) {
          count ++;
        }
      });
      return count;
    },

    duplicates : function(arr) {
      var duplicates = [];
      arr.forEach(function(item, index) {
        if ( arr.indexOf(item, index + 1) > -1 ) {
          if ( duplicates.indexOf(item) === -1 ) {
            duplicates.push(item);
          }
        }
      });
      return duplicates;
    },

    square : function(arr) {
      return arr.map(function(item) {
        return item * item;
      });
    },

    findAllOccurrences : function(arr, target) {
      var indices = [];
      var idx = arr.indexOf(target);
      while ( idx > -1 ) {
        indices.push(idx);
        idx = arr.indexOf(target, idx + 1);
      }
      return indices;
    }
  };
});
