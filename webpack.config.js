const path = require('path'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = { 

    //...
  devServer: {
    contentBase: [path.join(__dirname, 'public')],
    compress: true,
    port: 8080
  },
  entry: {  
    home: './src/js/home.js',    
    index: './views/index.ejs',
  },  
  output: {     
    path: path.resolve(__dirname, 'public'),
    filename: './javascripts/[name].bundle.js'  ,
   
  },
  module:{
    rules:[

      {
        test: /\.ejs$/,
        use: [
            {
              loader: 'file-loader',
              options: {
                  name: '[name].html',
                  context: './src/',
                  outputPath: '/'
              }
            },
            {
                loader: 'extract-loader'
            },
            {
              loader: "ejs-webpack-loader",
              options: {
                data: {title: "New Title", someVar:"hello world"},
                htmlmin: false
              }
            }
        ]
      },

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
    new MiniCssExtractPlugin({
      filename:"stylesheets/[name].css",
    })
  ]
}