const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'public'),
  //   port: 9000
  // },
  optimization: {
    runtimeChunk: 'single',
  },
};
