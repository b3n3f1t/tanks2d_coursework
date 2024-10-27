const path = require("path");

module.exports = {
  entry: './src/client/js/app.js',
  output: {
    path: path.resolve(__dirname, 'bin/client/js'),
    filename: 'app.js',
    library: 'app'
  },
  mode: 'development', // встановити 'production' для бойового режиму
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
