const webpack = require('webpack')
const path = require('path')
const manifest = require('../../package.json')

const moduleName = manifest.name.split('/').slice(-1)

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve('lib'),
    publicPath: `${path.resolve('lib')}/`,
    filename: `${moduleName}.js`
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/)
  ]
}
