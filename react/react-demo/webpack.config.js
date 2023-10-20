const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // 其他配置...
 
module: {
    

rules: [
      
     
// 处理Less文件
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      // 处理CSS文件
      {
        test: /\.css$/,
        use: [
          
         
MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
 
plugins: [
    // 提取CSS文件
    
   
new MiniCssExtractPlugin({

filename: 'styles.css',
    }),
    

   
// 其他插件...
  ],

  // 其他配置...
};