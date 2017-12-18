const {resolve} = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'myapp.js',
    library: 'myapp'
  }
};
