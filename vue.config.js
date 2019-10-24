const path = require("path");
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  lintOnSave: false,
  // 修改loader选项
  chainWebpack: () => { },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
    }

    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        alias: {
          vue$: "vue/dist/vue.js",
          "@": path.resolve(__dirname, "./src"),
          "@c": path.resolve(__dirname, "./src/components"),
          views: path.resolve(__dirname, "./src/views"),
          assets: path.resolve(__dirname, "./src/assets"),
          config: path.resolve(__dirname, "./src/config"),
        }
      }
    });
  },
  devServer: {
    open: true,
    proxy: {
      // 配置跨域
      'api': {
        target: "http://localhost:4000/",
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}