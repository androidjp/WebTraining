const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    ///devtool 定义构建工具。
    ///webpack就可以在打包时为我们生成的source maps
    ///，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。
    devtool: 'eval-source-map',
    entry: __dirname + "/app/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    ///对 webpack-dev-server 进行的配置
    devServer: {
        port: 9090, /// 监听端口默认为8080
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },

    ///通过以下命令，将babel 相关loder 安装
    ///npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
    // 于是这个项目可以使用Babel
    // Babel 通过某种手段，将它旗下的loader插件都集中管理起来：通过 babel-loader
    // babel-parse 管理 babel-preset-es2015,babel-preset-react 等处理包
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    //下面的 `options` 被抽离到 `.babelrc` 文件中
                    // options: {
                    //     presets: [
                    //         "es2015", "react"
                    //     ]
                    // }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({/// 自动根据设定的HTML模板，创建一个自动引入打包好的JS的最终HTML文件
            template: __dirname + "/app/templates/index.tmpl.html"
        })
    ]

}