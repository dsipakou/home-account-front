const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
      rules: [
          { test: /\.svg$/, use: 'svg-inline-loader' },
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.(js)$/, use: 'babel-loader' }
      ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ]
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/'
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: 'src/index.html'
      }),
      new CopyPlugin({
          patterns: [
              { from : '_redirects' }
          ]
      })
  ],
  devServer: {
      historyApiFallback: true
  },

  devtool : 'inline-source-maps'
}
