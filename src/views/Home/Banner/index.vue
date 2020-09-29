<template>
	<div>
		<div id="banner_body" class="banner_bg">
			<!--//轮播图-->
			<div class="banner_main">
				<Rollingimg />
				<!--导航链接栏-->
				<div class="banner_date">
					<div style="margin-top: 30px;">
						<div class="banner_date_title">
							<span>热门游戏</span>
							<a href="#::javascript">更多</a>
						</div>
						<div style="margin-top: 20px;">
							<a href="#::javascript"><i class="iconfont &#xe626;"></i><em>线上LOL</em></a>
							<a href="#::javascript"><i class="iconfont &#xe639;"></i><em>DNF</em></a>
							<a href="#::javascript"><i class="iconfont &#xe600;"></i><em>王者荣耀</em></a>
							<a href="#::javascript"><i class="iconfont &#xe616;"></i><em>APEX</em></a>
							<a href="#::javascript"><i class="iconfont &#xe628;"></i><em>绝地求生</em></a>
						</div>
					</div>
						<div class="chest">
							<h2 class="h2-1">WHAT WE DO</h2>
							<h2 class="h2-2">我们能为您做什么？</h2>
							<div class="qq"></div>
							<p>
								测试团队组建于2009年，为海内外上千家企业提供过优质的网站建设服务。测试团队组建于2009年，为海内外上千家企业提供过优质的网站建设服务。测试团队组建于2009年，。测试团队组建于2009年，为海内外上千家企业提供过优质的网站建设服务。测试团队组建于2009年，为海内外上千家企业提供过优质的网站建设服务。测试团队组建于2009年，为海内外上千家企业提供过优质的网站建设服务。
							</p>

							<ul class="chest2">
								<li class="i1"><img src="/static/images/20160818204902_46414.png" /><b>定制网站建设</b></li>
								<li class="i2"><img src="/static/images/20160818205246_25471.png" /><b>HTML5网站建设</b></li>
								<li class="i3"><img src="/static/images/20160818205329_25470.png" /><b>移动端开发</b></li>
								<li class="i4"><img src="/static/images/20160818205400_95921.png" /><b>域名服务器</b></li>
							</ul>
						</div>
						<div class="chest3">
							<div class="chest3-1">
								<p class="p1">我们的案例</p>
								<p class="p2">OURCASE</p>
							</div>
							<ul class="chest3-2" id="ulbox">
								<li v-for="item in 3">
									<img src="/static/images/未标题-1.png" @click="$store.dispatch('CsAction')"/>
									<h5 @click="$store.commit('CHANGE_CSNAME')">{{$store.state.csdata}}</h5>
									<h6>个人网站，企业网站制作</h6>
									<a href="#::jsvascript"><img src="/static/images/未标题-6.jpg" /></a>
								</li>
								<li v-for="item in 3">
									<img src="/static/images/未标题-1.png" @click="$store.commit('CHANGE_CSNAME')"/>
									<h5 @click="$store.commit('CHANGE_CSNAME')">{{$store.state.csname}}</h5>
									<!--<h6>个人网站，企业网站制作</h6>-->
									<h6>点击右下角箭头，回到顶部</h6>
									<a href="#"><img src="/static/images/未标题-6.jpg" /></a>
								</li>
							</ul>
						</div>
					</div>
						<div class="fb">
							<h4>让我来谈谈您的项目</h4>
							<span></span>
							<p>我要乘风破浪</p>
						</div>
						<div class="fbb">
							<h4>你的双眸</h4>
							<h5>困住了不羁的我</h5>
							<div class="zcl">
								<p></p>
								<span></span>
								<h6></h6>
							</div>
							<ul>
								<li>公司动态</li>
								<li>公司动态</li>
								<li class="li3">公司动态</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Rollingimg from '@/components/Rollingimg';
	export default {

		name: 'Banner',
		components: {
			Rollingimg
		},
		data() {
			return {
				ullist:[]
			}
		},
		mounted() {
//			let Ul = document.querySelector('#ulbox')
//			this.ullist = Ul.innerHTML;
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	#banner_body {
		width: 100%;
		height: 496px;
		/*overflow: hidden;*/
		/*background-image: url();*/
		/*background-color: red;*/
		box-sizing: content-box;
	}
	/*.banner_bg{
		background: url(../images/newbanner-1.jpg) no-repeat top center;
    height: 496px;
    position: absolute;
    width: 100%;
    }*/
	
	#banner_body .banner_main {
		padding-top: 30px;
		position: relative;/*防止绝对定位导致高度塌陷*/
		width: 1200px;
		height: 260px;
		left: 50%;
		margin-left: -600px;
		img {
			vertical-align: middle;
			cursor: pointer;
		}
	}
	/*#banner_body .banner_main img{
    	vertical-align: middle;
    	cursor: pointer;
    }*/
	
	#banner_body .banner_date {
		margin: 0 auto;
		width: 1200px;
		/*.banner_data_title a{}*/
	}
	
	#banner_body .banner_data_title span {
		font-size: 16px;
		margin-right: 10px;
		line-height: 20px;
		color: #fff;
		height: 20px;
		float: left;
		letter-spacing: 2px;
	}
	
	a {
		text-decoration: none;
	}
	
	.box-X,
	.logo,
	.gps,
	.chest,
	h2,
	.chest2,
	p,
	.chest3,
	h4,
	h5,
	h6,
	body,
	ul,
	li,
	ol {
		margin: 0;
		padding: 0
	}
	
	li {
		list-style: none
	}
	
	img {
		border: 0;
		vertical-align: middle;
	}
	/*全局样式*/
	
	.head {
		height: 70px;
		background: #c8251e;
	}
	
	.logo {
		width: 378px;
		height: 70px;
		float: left;
	}
	
	.logo img {
		margin: 9px 0 0 114px;
	}
	
	.head .gps {
		width: 750px;
		height: 70px;
		float: left;
	}
	
	.head .gps li {
		width: 95px;
		height: 70px;
		border-left: 1px solid #d2625e;
		float: left;
	}
	
	.head .gps a {
		display: block;
		width: 95px;
		color: #fff;
		text-align: center;
		line-height: 70px;
	}
	
	.head b {
		display: block;
		width: 168px;
		height: 70px;
		float: left;
		line-height: 70px;
		color: #fff;
	}
	
	.head b img {
		margin: 24px 14px 0 20px;
		float: left;
	}
	
	.head li:hover {
		background: #414141;
	}
	
	.neck {
		height: 500px;
		background: url(/static/images/20160821133638_67592.jpg) no-repeat center;
		position: relative;
	}
	
	.neck img {
		display: block;
		width: 47px;
		height: 257px;
		float: right;
		margin-top: 180px;
	}
	
	.neck .span1 {
		display: block;
		font-size: 59px;
		color: #b5b1ae;
		float: right;
		margin-top: 190px;
	}
	
	.neck .span2 {
		display: block;
		font-size: 59px;
		color: #b5b1ae;
		float: left;
		margin: 190px 0 0 50px;
	}
	
	.neck .span3 {
		display: block;
		font-size: 39px;
		color: #b5b1ae;
		position: absolute;
		top: 454px;
		left: 690px;
		transform: rotate(-90deg);
	}
	
	.span4 {
		width: 60px;
		height: 4px;
		position: absolute;
		top: 404PX;
		left: 670px;
	}
	
	.span4 .span4-1 {
		width: 25px;
		height: 4px;
		background: #fff;
		float: left;
	}
	
	.span4 .span4-2 {
		width: 25px;
		height: 4px;
		background: #fff;
		float: right;
	}
	
	.chest {
		height: 572px;
		background: #fff;
	}
	
	.chest .h2-1 {
		font-size: 48px;
		margin-top: 52px;
		text-align: center;
	}
	
	.chest .h2-2 {
		font-size: 48px;
		color: #e60002;
		margin-top: 22px;
		text-align: center;
	}
	
	.chest .qq {
		width: 50px;
		height: 3px;
		background: #afafaf;
		margin: 17px auto;
		/*line-through;*/
	}
	
	.chest p {
		width: 874px;
		height: 74px;
		font-size: 12px;
		line-height: 23px;
		text-align: center;
		margin: 17px auto;
	}
	
	.chest2 {
		width: 1040px;
		height: 142px;
		margin: 55px auto;
		margin-left: 170px;
	}
	
	.chest2 li {
		width: 142px;
		height: 142px;
		float: left;
		margin: 0 59px 0 59px;
	}
	
	.chest2 li b {
		margin: 26px auto;
		margin-left: 23px;
	}
	
	.chest2 .i1:hover {
		background: url(/static/images/20160818204917_80717.png);
	}
	
	.chest2 .i2:hover {
		background: url(/static/images/20160818205259_15898.png);
	}
	
	.chest2 .i3:hover {
		background: url(/static/images/20160818205339_75592.png);
	}
	
	.chest2 .i4:hover {
		background: url(/static/images/20160818205411_74101.png);
	}
	
	.chest3 {
		width: 1263px;
		height: 1110px;
		background: #B5B1AE;
		margin: 0 auto;
	}
	
	.chest3-1 {
		width: 234px;
		height: 175px;
		font-size: 30px;
		margin: 0 auto;
		text-align: center;
		padding-top: 59px;
	}
	
	.chest3-1 .p1 {
		color: #E60002;
	}
	
	.chest3-2 {
		width: 1263px;
		height: 866px;
		margin: 0 auto;
	}
	
	.chest3-2 li {
		width: 391px;
		height: 406px;
		background: #fff;
		border-bottom: 1px solid #e7e7e7;
		margin: 10px;
		float: left;
		position: relative;
		/*overflow: hidden;*/
	}
	
	.chest3-2 li a {
		display: block;
		width: 24px;
		height: 24px;
		position: absolute;
		right: 18px;
		bottom: 12px;
		/*overflow: hidden;*/
	}
	
	.chest3-2 li h5 {
		/*width: 162px;*/
		height: 17px;
		font-size: 16px;
		margin: 19px 0 15px 20px;
	}
	
	.chest3-2 li h6 {
		font-size: 12px;
		color: #9e989c;
		margin-left: 20px;
	}
	/*这是分这是分割线 这是分割线 这是分割线 这是分割线 这是分割线 这是分割线 这是分割线 这是分割线 这是分割线 这是分割线 割线*/
	
	.fb {
		width: 1263px;
		height: 247px;
		background: #ce0000;
		margin: 0 auto;
		padding-top: 56px;
	}
	
	.fb h4 {
		width: 266px;
		height: 30px;
		font-size: 28px;
		color: #fff;
		margin: 0 auto;
	}
	
	.fb span {
		display: block;
		width: 50px;
		height: 35px;
		background: url(/static/images/未标题-7.png) #ce0000;
		margin: 38px auto;
	}
	
	.fb p {
		width: 141px;
		height: 44px;
		border: 2px solid #fff;
		background: #cd0000;
		margin: 34px auto;
		font-size: 10px;
		color: #fff;
		text-align: center;
		line-height: 44px;
	}
	/*冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝冯宝宝*/
	
	.fbb {
		width: 1263px;
		height: 577px;
		background: #e4e4e4;
		margin: 0 auto;
		padding-top: 59px;
	}
	
	.fbb h4 {
		width: 85px;
		height: 22px;
		font-size: 20px;
		color: #838383;
		margin: 0 auto;
	}
	
	.fbb h5 {
		width: 120px;
		height: 30px;
		font-size: 16px;
		margin: 20px auto;
		text-align: center;
		line-height: 30px;
	}
	
	.fbb .zcl {
		width: 114px;
		height: 3px;
		margin: 16px auto;
	}
	
	.fbb .zcl p {
		width: 30px;
		height: 1px;
		background: #838383;
		float: left;
		margin-top: 1px;
	}
	
	.fbb .zcl span {
		display: block;
		width: 52px;
		height: 3px;
		background: #838383;
		float: left;
	}
	
	.fbb .zcl h6 {
		width: 32px;
		height: 1px;
		background: #838383;
		float: right;
		margin-top: 1px;
	}
	
	.fbb ul {
		width: 336px;
		height: 90px;
		margin: 0 auto;
	}
	
	.fbb li {
		width: 65px;
		height: 15px;
		margin-right: 70px;
		float: left;
		line-height: 90px;
	}
	
	.fbb .li3 {
		margin-right: 0;
	}
	
	.fbb li:hover {
		color: #CD0000;
	}
</style>