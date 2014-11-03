if (typeof define !== 'function') { var define = require('amdefine')(module); }
define(function() {
  return {
    listFiles: function(data, dirName) {
      var fileNames = dirName || [];

      for ( var i = 0; i < data.files.length; i++ ) {
        if ( typeof data.files[i] === 'string' ) {
          fileNames.push(data.files[i]);
        } else if ( typeof data.files[i] === 'object' ) {
          this.listFiles(data.files[i], fileNames);
        }
      }

      return fileNames;
    },

    permute: function(arr) {

    }
  };
});
