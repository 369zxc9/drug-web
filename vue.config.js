// let proxyObj = {}
//
// proxyObj['/'] = {
//
//     //websocket
//     ws: false,
//
//     target: 'http://localhost:8081',
//     //发送请求头
//     changeOrigin: true,
//     pathRewrite: {
//         //不重写请求地址
//         '^/': '/'
//     }
// }


module.exports = {
    // devServer: {
    //     host: 'localhost',
    //     port: '8080',
    //     proxy: proxyObj
    // },
    // lintOnSave: false,
    // devServer: {
    //     overlay: {
    //         warning: false,
    //         errors: false
    //     }
    // },

    // 修改的配置
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:8081', // 要转发的地址  你要代理的域名和端口号，要加上http
    //             ws: false, // 是否启用websockets
    //             // changeOrigin: true, // 跨域
    //             pathRewrite: {
    //                 '^/': ''
    //             }
    //         }
    //     }
    // },
}