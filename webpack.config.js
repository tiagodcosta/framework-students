var webpack  = require('webpack');

module.exports = {
	entry: "./source-students/index.scss",
	output: {
		path: "students/css"
		filename: "index.css"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
		]
	}
}