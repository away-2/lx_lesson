const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const StampPlugin = require('./stamp-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new CleanWebpackPlugin(),
        new StampPlugin()
    ]
}