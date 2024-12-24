const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your entry point JavaScript file
  output: {
    filename: 'bundle.js',  // Output bundled file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // For importing CSS
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // To handle JS/ES6 features
        },
      },
    ],
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',  // Ensures jQuery is correctly loaded
    },
  },
};
