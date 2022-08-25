const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '/')
		},
		devMiddleware: {
			writeToDisk: false
		},
		hot: true,
		port: 3000
	}
})
