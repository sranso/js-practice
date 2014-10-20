if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      this.greeting = obj.greeting;
      this.name = obj.name;
      return fn.call(this);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
      return constructor;
    },

    iterate : function(obj) {
      var keys = Object.getOwnPropertyNames(obj);
      var ownProps = [];
      keys.forEach(function(key) {
        ownProps.push(key + ': ' + obj[key]);
      });
      return ownProps;
    }
  };
});
