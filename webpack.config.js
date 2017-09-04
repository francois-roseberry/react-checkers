var webpack = require('webpack');

module.exports = {
  entry : [
    './src/devServer.js'
  ],
  output: {
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({ ENV: '"dev"' })
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-3']
        }
      },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss-loader?browsers=last 3 versions', 'sass'] },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(ttf.*|woff2.*|eot.*|woff.*|svg.*|png|gif|jpe?g)$/, loader: 'file-loader' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
