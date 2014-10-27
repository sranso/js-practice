if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {
      return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
          if ( req.status === 200 ) {
            var response = JSON.parse(req.response).people.map(function(item) {
              return item.name;
            }).sort();
            resolve(response);
          } else {
            reject(Error(req.statusText));
          }
        };

        req.onerror = function() {
          reject(Error('Network Error'));
        };

        req.send();
      });
    }
  };
});
