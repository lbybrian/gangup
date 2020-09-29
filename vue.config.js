//配置Jquery
//var webpack = require('webpack');
//  plugins: [
//		new webpack.ProvidePlugin({
//		$: "jquery",
//		jQuery: "jquery",
//		jquery: "jquery",
//		"window.jQuery": "jquery"
//		})
//	];
module.exports = {
//	configureWebpack: {
//	    plugins: [
//	      new webpack.ProvidePlugin({
//	        $:"jquery",
//	        jQuery:"jquery",
//	        "windows.jQuery":"jquery"
//	      })
//	    ]
//	},
    // webpack-dev-server 相关配置  
    devServer: {
		//自启动
		open:true,
		port:8888,
//		useEslint:false,
		//反向代理解决调用接口跨域
//		proxy:{
//			'/api':{
//				target:'http://39.97.33.178',
//				changeOrigin:true
//			}
//		}
	}
}