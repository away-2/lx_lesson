const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'), // 打包入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'), // 需要被打包的html
      filename: 'index.html',
      title: '手动搭建vue'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    port: 8080,
    hot: true,
    host: 'localhost',
    open: true
  }
}