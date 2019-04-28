const serverlessWebpack = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: serverlessWebpack.lib.entries,
  target: "node",
  devtool: 'source-map',
  externals: [nodeExternals()],
  optimization: {
    minimize: false // We no not want to minimize our code.
  },
  performance: {
    hints: false // Turn off size warnings for entry points
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  }
};
