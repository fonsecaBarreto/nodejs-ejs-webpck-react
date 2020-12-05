const path = require('path'); 
const HtmlPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin")

const ASSET_PATH = process.env.ASSET_PATH || '/';
const NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = { 
  mode:NODE_ENV,

  resolve: {
    alias: {
      core: path.join(__dirname, 'core'),
    },
  },

  optimization:{
    minimizer: [
      new OptimizeCssPlugin(),
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'public/views')],
    compress: true,
    port: 8080
  },

  entry: {  
    home: './src/js/home',
  },  
  output: {     
    path: path.resolve(__dirname, 'public'),
    filename: './javascripts/[name].bundle.js',
    publicPath: ASSET_PATH
  },
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use: {
          loader:'babel-loader',
        },
      },
      {
        test: /\.jpe?g|png|fig|svg|webp|ttf$/i,
        loader:"file-loader",
        options:{
          name:'assets/[name].[ext]'
        }
      }
    ]
  },
  plugins:[
    new HtmlPlugin({
      filename:'/views/error.html',
      chunks: [],
      hash:true,
      minify:true,
      template:"./src/views/error.html"}),

    new HtmlPlugin({
      chunks: ['home'],
      filename:'/views/index.html',
      hash:true,
      minify:false,
      template:"./src/views/index.html"}),


    new MiniCssExtractPlugin({
      filename:"stylesheets/[name].css",
    })
  ]
}