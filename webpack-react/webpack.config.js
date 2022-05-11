const path = require('path');

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: ['dist'],
    port: 3000
  },
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './scripts/main.bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}