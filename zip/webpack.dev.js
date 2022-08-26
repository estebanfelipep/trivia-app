const path = require("path")
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		static: ["src/index.html"],
		devMiddleware: {
			writeToDisk: false,
		},
		hot: true,
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new ESLintPlugin({ 
			//fix: true,
			//context: path.join(paths.context, paths.js),
			extensions: ["js", "ts"],
			emitError: true,
			emitWarning: true,
			failOnWarning: false,
			failOnError: false,
			fix: false,
			cache: false,
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
})
