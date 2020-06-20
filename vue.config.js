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
        target: 'http://192.168.1.104',
        ws: true,
        secure:false,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}