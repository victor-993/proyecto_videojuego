const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const indextInput = './src/index.html';
const indexOutput = 'index.html';

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'public/assets/images/',
              publicPath: 'public/assets/images/',
            },
          },
        ],
      },
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/audio/',
              publicPath: 'assets/audio/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput,
    }),
  ],
};

