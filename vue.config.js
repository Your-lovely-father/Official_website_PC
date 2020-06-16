module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './': '/',
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true,
  chainWebpack: () => {},
  configureWebpack: () => {},
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://192.168.1.119:8088/uajax',
        target: 'http://49.233.174.102:8089/uajax',
        ws: true,
        secure:false,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/profile': {
        // target: 'http://192.168.1.119:8088/uajax',
        target: 'http://49.233.174.102:8089/profile',
        ws: true,
        secure:false,
        changOrigin: true,
        pathRewrite: {
          '^/profile': ''
        }
      }
    }
  }
}