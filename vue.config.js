var ps = require('process');

module.exports = {
	publicPath: "./",
	devServer: {
		port: 8080,
		proxy: {
			"/api": {
				target: "接口地址",
				ws: false,
				changeOrigin: true //是否跨域
			}
		},
		disableHostCheck: true
	},
	outputDir: undefined,
	assetsDir: undefined,
	runtimeCompiler: undefined,
	productionSourceMap: false,
	parallel: undefined,
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/common.scss"; `//公共scss
			}
		}
	}
};