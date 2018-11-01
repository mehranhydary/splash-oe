const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
      { test: /\.css$/, loader:[ 'style-loader', 'css-loader' ] },
      { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader?limit=8192' }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: "src/index.html"
    })
  ]
};