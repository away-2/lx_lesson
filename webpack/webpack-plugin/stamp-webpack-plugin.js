const HtmlWebpackPlugin = require('html-webpack-plugin');

class StampPlugin {
    apply(compiler) {
        // compilation 钩子是在编译这件事被创建之后就会执行（可以保证我们的插件一定会在文件生成之前执行）
        // 注册一个名为 StampWebpackPlugin 的方法
        compiler.hooks.compilation.tap('StampWebpackPlugin', (compilation,compiler) => {
            // 参数 compilation 是模块
            // compilation.hooks.buildModule.tap('StampWebpackPlugin', (module) => {
            //     // console.log(module);
            // })
            HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tap('StampWebpackPlugin',(data, cb) => {
                let jsSrc = data.assets.js[0]
                data.assets.js[0] = `${jsSrc}?${new Date().getTime()}` 
            });
        })
    }
}

module.exports = StampPlugin