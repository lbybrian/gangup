<template>
	<footer id="footer" v-if="!$route.meta.isShow">
		<!--<div id="footer_box">
			<a href="">
				<img src="https://res.tuwan.com/templet/play/index/images/consume_new.jpg">
			</a>
		</div>-->
		<div class="footer_box">
			ffffffffffffffffffffffffffffffffffffffffffffffffffff
			<a href="javascript:" title="" class="fl"><img src="https://res.tuwan.com/templet/play/index/images/consume_new.jpg"></a>
			<div class="clearfix"></div>
			<div class="help_box mt30" style="display: flex; justify-content: center;">
				<div class="fl ml35 pr30 border_right"><i class="icon custom mr10"></i>客服电话：<span class="custom_01">010-68608228</span><span class="custom_02">咨询时间：7X24小时</span></div>
				<div class="fl pl30" id="dd_kefu_pcbottom" style="cursor: pointer;"><i class="icon QQ mr10" href="//user.tuwan.com/api/url.ashx?app=qq&amp;redirect_uri=https%3A%2F%2Fy.tuwan.com%2F%3Fsuccess%3D1"></i>客服QQ：<span class="custom_01">800184580</span></div>
				<div class="fl pl30"><span class="custom_02">咨询时间：7X24小时</span></div>
				<div class="fl ml40">
					<a href="https://y.tuwan.com/playpoolpc" target="_blank" title="" class="fl help">帮助中心</a>
					<!-- <a href="javascript:" title="" class="fl help">服务保障</a> -->
					<!-- <a href="javascript:" title=""  class="fl help">陪玩守则</a> -->
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="Copy">电话号码:010-68608228&nbsp;&nbsp;公司地址:北京市石景山区鲁谷路74号院中国瑞达大厦19层1909&nbsp;&nbsp;公司全称:北京陶乐科技有限公司&nbsp;&nbsp;备案号：
				<a class="wenww" target="_blank" href="http://beian.miit.gov.cn/">京ICP备18042855号-2</a>
			</div>
			<div class="Copy" style="margin:10px">
				<a class="wenww" target="_blank" href="https://res.tuwan.com/templet/play/images/wenww.jpg">京网文[2019]4777-514号</a>&nbsp;&nbsp;
				<a class="wenww" target="_blank" href="https://y.tuwan.com/zhengzhi">增值电信业务经营许可证：京B2-20192592</a>
			</div>
			<div class="Copy" style="margin-top:10px;">Copyright 2014-2019 TaoLe Corporation,All Rights Reserved</div>
			
			<Backtop/>
		</div>
	</footer>
</template>

<script>
	import Backtop from '@/components/Backtop'
	export default {
		name:'Footer',
		components:{
			Backtop
		}
	}
</script>

<style>
	#footer {
		background-color: #535353;
		width: 100%;
		border-top: 2px #ebe8e3 solid;
		position: relative;
		left: 0;
		bottom: 0;
	}
	#footer .footer_box{width: 1204px;margin:0 auto;padding: 30px 0;background-color: #535353;}
	#footer .Copy{color:#959595;font-size: 12px;margin-top: 34px;text-align: center;}
	#footer .help_box{color:#c9c9c9;font-size: 15px;}
	#footer .custom_01{font-size:17px;margin-right: 14px;}
	#footer .custom_02{font-size:13px;}
	#footer .border_right{border-right:#bfbfbf solid 1px;}
	#footer .help{width:92px;height:26px; background-color:#3c3c3c;line-height: 26px;text-align: center;border: #707070 solid 1px;border-radius: 4px;margin-left: 16px;font-size:13px;color:#bfbfbf;}
	#footer .help:hover{background-color:#4d4c4c;}
	@charset "utf-8";
/* CSS Document */
*{padding:0;margin:0;list-style:none;border:none 0;font-family:"微软雅黑","Hiragino Sans GB",tahoma,arial,"\5B8B\4F53";-webkit-font-smoothing:antialiased;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}img{ vertical-align:middle}a{text-decoration:none;color:#000}.clearfix{clear:both}h1{font-size:22px}html{height:100%}body,button,input,select,textarea{font-family:"微软雅黑","Hiragino Sans GB",tahoma,arial,"\5B8B\4F53";outline:0;margin:0;padding:0;}textarea{resize:none}body{min-width:1240px;height:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:inherit|grayscale;overflow-x:hidden}.b_all{border:#d6d7dc 1px solid;box-sizing:border-box;}.b_bm{border-bottom:#d6d7dc 1px solid;box-sizing:border-box;}.fl{float:left}.fr{float:right}.mt5{margin-top:5px}.mt10{margin-top:10px}.mt15{margin-top:15px}.mt20{margin-top:20px}.mt25{margin-top:25px}.mt30{margin-top:30px}.mt35{margin-top:35px}.mt40{margin-top:40px}.mt45{margin-top:45px}.mt50{margin-top:50px}.ml5{margin-left:5px}.ml10{margin-left:10px}.ml15{margin-left:15px}.ml20{margin-left:20px}.ml25{margin-left:25px}.ml30{margin-left:30px}.ml35{margin-left:35px}.ml40{margin-left:40px}.ml45{margin-left:45px}.ml50{margin-left:50px}.mr5{margin-right:5px}.mr10{margin-right:10px}.mr15{margin-right:15px}.mr20{margin-right:20px}.mr25{margin-right:25px}.mr30{margin-right:30px}.mr35{margin-right:35px}.mr40{margin-right:40px}.mr45{margin-right:45px}.mr50{margin-right:50px}.mb5{margin-bottom:5px}.mb10{margin-bottom:10px}.mb15{margin-bottom:15px}.mb20{margin-bottom:20px}.mb25{margin-bottom:25px}.mb30{margin-bottom:30px}.mb35{margin-bottom:35px}.mb40{margin-bottom:30px}.mb45{margin-bottom:45px}.mb50{margin-bottom:50px}.mtb5{margin-top:5px;margin-bottom:5px}.mtb10{margin-top:10px;margin-bottom:10px}.mtb15{margin-top:15px;margin-bottom:15px}.mtb20{margin-top:20px;margin-bottom:20px}.mtb25{margin-top:25px;margin-bottom:25px}.mtb30{margin-top:30px;margin-bottom:30px}.mtb35{margin-top:35px;margin-bottom:35px}.mtb40{margin-top:40px;margin-bottom:40px}.mtb45{margin-top:45px;margin-bottom:45px}.mtb50{margin-top:50px;margin-bottom:50px}.pt5{padding-top:5px}.pt10{padding-top:10px}.pt15{padding-top:15px}.pt20{padding-top:20px}.pt25{padding-top:25px}.pt30{padding-top:30px}.pt35{padding-top:35px}.pt40{padding-top:40px}.pt45{padding-top:45px}.pt50{padding-top:50px}.pl5{padding-left:5px}.pl10{padding-left:10px}.pl15{padding-left:15px}.pl20{padding-left:20px}.pl25{padding-left:25px}.pl30{padding-left:30px}.pl35{padding-left:35px}.pl40{padding-left:40px}.pl45{padding-left:45px}.pl50{padding-left:50px}.pr5{padding-right:5px}.pr10{padding-right:10px}.pr15{padding-right:15px}.pr20{padding-right:20px}.pr25{padding-right:25px}.pr30{padding-right:30px}.pr35{padding-right:35px}.pr40{padding-right:40px}.pr45{padding-right:45px}.pr50{padding-right:50px}.pb5{padding-bottom:5px}.pb10{padding-bottom:10px}.pb15{padding-bottom:15px}.pb20{padding-bottom:20px}.pb25{padding-bottom:25px}.pb30{padding-bottom:30px}.pb35{padding-bottom:35px}.pb40{padding-bottom:40px}.pb45{padding-bottom:45px}.pb50{padding-bottom:50px}.ptb5{padding-top:5px;padding-bottom:5px}.ptb10{padding-top:10px;padding-bottom:10px}.ptb15{padding-top:15px;padding-bottom:15px}.ptb20{padding-top:20px;padding-bottom:20px}.ptb25{padding-top:25px;padding-bottom:25px}.ptb30{padding-top:30px;padding-bottom:30px}.ptb35{padding-top:35px;padding-bottom:35px}.ptb40{padding-top:40px;padding-bottom:40px}.ptb45{padding-top:45px;padding-bottom:45px}.ptb50{padding-top:50px;padding-bottom:50px}
i{ font-style: normal;}
body{min-width: 1366px;}

/*页脚*/
#footer_box .footer_box {
	background-color: #dedee6;
	padding: 40px 0;
}
#footer_box .footer_box .footer {
	width: 1000px;
	margin: 0 auto;
	font-size: 14px;
	color: #313044;
}
#footer_box .footer .footer_left {
	width: 630px;
	overflow: hidden;
	float: left;
	font-size:12px;
	margin-top:80px;
}
#footer_box  .footer .footer_right {
	width: 300px;
	float: right;
	color: #fff;
}
#footer_box .Con-list {
	width: 1000px;
	line-height:30px;
}
#footer_box .Con-list a {
	float: left;
	margin-right: 12px;
	color: #313044;
}
#footer_box  .Con-list a:hover {
	color: #fb5353;
}
#footer_box  .footer_title{font-size:24px;color: #313044;text-align:center;}
#footer_box .footer_img a{width:182px;height:80px;overflow:hidden;background-color:#bbbbc6;margin-right:20px;}
#footer_box .footer_img img{width:182px;height:80px;}
#footer_box  .footer_bottom_box {
	background-color: #313044;
	padding: 32px 0 26px;
	height: 45px;
}
#footer_box .footer_bottom {
	width: 1200px;
	margin: 0 auto;
	font-size: 12px;
}
#footer_box .footer_about {
	width: 480px;
	float: left;
}
#footer_box .footer_about a {
	float: left;
	margin-right: 14px;
	color: #9b9ca8;
	font-size:14px;
	line-height:36px;
}
#footer_box .footer_about a:hover {
	color: #fb5353;
}
#footer_box .footer_record {
	width: 700px;
	float: right;
	color: #9b9ca8;
}
#footer_box .footer_record p{
	float: left;
}
#footer_box .footer_record p a {
	color: #9b9ca8;
	padding-right:5px;
}
#footer_box .footer_record p a:hover {
	color: #fb5353;
}


</style>