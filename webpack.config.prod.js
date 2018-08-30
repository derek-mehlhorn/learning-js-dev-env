import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  // Webpack will automatically attempt to optimize chunks based on number of entry points.
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js' // [name] will be automatically replaced by entry keys defined above.
  },
  plugins: [
    // Hash filenames so they don't change unless content changes.
    new WebpackMd5Hash(),

    //Create HTML file to include bundled js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true
      }
    }),

    // Remove duplication packages when bundling
    new webpack.optimize.DedupePlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /.css$/, loaders: ['style','css']}
    ]
  }
}
