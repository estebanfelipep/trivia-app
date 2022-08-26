const path = require("path")

module.exports = {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				include: [path.join(__dirname, "src")],
			},
		],
	},
}
