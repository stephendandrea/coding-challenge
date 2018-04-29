const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const resolver = require('./resolver');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    app: [
      resolver('app/styles.scss'),
      resolver('app/App.js')
    ]
  },
  output: {
    path: resolver('./static'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  devServer: {
    watchContentBase: true,
    historyApiFallback: true,
    port : 3000,
    hot: false,
    inline: false,
    contentBase: './app'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: [ /node_modules/ ],
        loader: 'babel-loader'
      },
      {
        test: /\.(sass|scss|css)$/,
        loader: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      context: resolver( 'app/images' ),
      from: '**/**/*',
      to: resolver( 'static/images' )
    }]),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: { removeAll: true },
        zindex: false,
        reduceIdents: false
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'app/index.ejs'
    })
  ]
};
