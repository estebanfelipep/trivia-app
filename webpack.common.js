const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
}
