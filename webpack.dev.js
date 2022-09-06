const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const PurgecssPlugin = require('purgecss-webpack-plugin')
// const glob = require('glob')
// const PATHS = {
//   src: path.join(__dirname, 'src'),
// }

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: ['src/index.html'],
    hot: true,
    port: 3000,
    open: true,
    devMiddleware: {
      // this function avoids outputting on dist the 'hot-update.json' files on every hot reload
      writeToDisk: (filePath) => {
        return /^(?!.*(hot)).*/.test(filePath) // if true, outputs app in the output path
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      emitError: true,
      emitWarning: true,
      failOnWarning: false,
      failOnError: false,
      fix: false,
      cache: false,
    }),
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/index.html`, { nodir: true }),
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
})
