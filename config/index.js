// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

const testEnviroment = false


module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../pc/index.html'),
    assetsRoot: path.resolve(__dirname, '../pc'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    	"/webapi": {
	     /* "target": "http://localhost:3000",*/
	      "target": testEnviroment ? "http://106.14.40.100" : "http://192.168.3.187:8080",
	      "changeOrigin": true,
	      "pathRewrite": { "^/webapi" : testEnviroment ? "" : "/p2p_zgjf/webapi" }
	      /*"pathRewrite": { "^/api" : "/api" }*/
	    }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}


