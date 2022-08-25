const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		devMiddleware: {
			writeToDisk: false
		},
		hot: true,
		port: 3000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			}
		]
	}
})
