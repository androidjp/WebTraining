const path = require('path');


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

/// 单个入口
// module.exports = {
//     entry:'./src/index.js',
//     output: {
//         filename:'bundle.js',
//         path:path.resolve('dist')
//     },
//     module:{},
//     plugins:[],
//     devServer:{

//     },
//     mode: 'development'
// }