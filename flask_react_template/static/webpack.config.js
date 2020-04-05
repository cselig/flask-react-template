const config = {
  entry:  {
    index: __dirname + '/js/index.jsx',
	},
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
	},
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
