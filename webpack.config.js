const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    trace: './src/js/otel.js',
  },
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
};
