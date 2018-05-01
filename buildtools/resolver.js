const path = require('path');

module.exports = function ( _path ) {
  return path.resolve( __dirname, `../${_path}` );
};
