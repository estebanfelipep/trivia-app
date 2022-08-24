const path = require('path')
module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	devServer: {
		static: {
			directory: path.join(__dirname, '/')
		},
		devMiddleware: {
			writeToDisk: true
		},
		hot: true,
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				include: [path.join(__dirname, 'src')]
			},
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
}
