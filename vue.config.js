const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: "/",
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: "dist",
  // /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "static",
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  /* 代码保存时进行eslint检测 */
  // lintOnSave: true,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  // configureWebpack: (config) => {
  //     // 新增插件
  //     config.plugins.push(
  //         new CopyWebpackPlugin([{
  //             from: path.resolve(__dirname, 'static'),
  //             to: "static",
  //             },
  //         ])
  //     )
  // },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV === "production" ? true : false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    requireModuleExtension: true
  },
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: "0.0.0.0",
    port: 3002,
    https: false,
    hotOnly: true,
    proxy: {
      // 设置代理
      "/api": {
        target: "http://8.210.89.213:8080/",
        changeOrigin: true
        //   pathRewrite: {
        //     "^/api": "/api"
        //   }
      },
      "/": {
        target: "http://8.210.89.213:8080/",
        changeOrigin: true
      }
    }
  }
};
