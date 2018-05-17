# Webpack 4 入门
> [参考文章](https://juejin.im/post/5adea0106fb9a07a9d6ff6de?utm_source=gold_browser_extension)

## 安装
---
* 建议node 8.2以上版本
* 全局安装webpack
* `npm i webpack webpack-cli -D`
* 本地dev，需安装 webpack-dev-server: `npm i webpack-dev-server -D`

> 注意：用`yarn add webpack -D`实际上是本地安装，不是全局安装，并且`-D`是`--dev`的简写，所以是在`devDependencies{}`中装。全局安装命令是：`yarn global add <packageName>`

## webpack 到底帮我们做了什么
---


## webpack 学习开始
---
### 最开始的config文件：webpack.config.js
* 首先，这个文件是默认webpack命令会搜索的文件。
* 基本结构就是配置webpack打包的出入口、插件选择等。
    * entry
    * output
    * plugin
    * module
    * devService
    * mode
* 例子
    * 例子一：单个入口，打包单个bundle文件
        ```
        module.exports = {
            entry:'./src/index.js',
            output: {
                filename:'bundle.js',
                path:path.resolve('dist')
            },
            module:{},
            plugins:[],
            devServer:{

            },
            mode: 'development'
        }
        ```

    * 例子二：两个入口，打包在一块/分别单独打包
        ```
        module.exports = {
            /// 种类一：无关系的，但是要打包在一起的，就写数组的形式
            // entry:['./src/index.js','./src/index2.js'],
            /// 种类二：无关系，且不想一起打包的，就分开打包咯
            entry:{
                add:'./src/index.js',
                sub:'./src/index2.js'
            },
            output: {
                filename:'[name].js',
                path:path.resolve('dist')
            },
            module:{},
            plugins:[],
            devServer:{

            },
            mode: 'development'
        }
        ```

