<template>
	<div class="nav_box" v-if="!$route.meta.isShow">
		<div class="nav_left">
			<el-menu :router="false" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">
					<router-link to="/" tag="div">
						<!--<img src="https://res.tuwan.com/templet/play/index/images/yuewanlogo3.png">-->
					</router-link>
				</el-menu-item>
			</el-menu>
		</div>
		<div class="nav_center">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="2">
					<!--<router-link to="/home">首页</router-link>-->
					<router-link to="/home">HOMEPAGE</router-link>
				</el-menu-item>
				<el-menu-item index="3">
					<!--<router-link to="/player">约陪玩</router-link>-->
					<router-link to="/player">PLAY</router-link>
				</el-menu-item>
				<el-menu-item index="4">
					<!--<router-link to="/drill">英雄训练营</router-link>-->
					<router-link to="/drill">DRILL</router-link>
				</el-menu-item>
				<el-menu-item index="5">
					<!--<router-link to="/pay">充值</router-link>-->
					<router-link to="/pay">PAYS</router-link>
				</el-menu-item>
				<el-menu-item index="6">
					<el-submenu index="6.5">
						<template slot="title">
							<router-link to="/appdownload">APP</router-link>
						</template>
						<div style="background: none;
				    border: none;
				    top: -20px;
				    position: absolute;
				    left: -102px;
				    width: 338px;
				    display: block;
				    height: 186px;
				    padding-top: 16px;
				    margin-top: 0px;
				    padding-bottom: 16px;
				    margin-bottom: 0px;">
							<router-link to="/appdownload">
								<el-menu-item index="66">
									<img style="vertical-align: middle;" src="https://res.tuwan.com/templet/play/chat/images/ewms.png?v=2"></img>
								</el-menu-item>
							</router-link>
						</div>
					</el-submenu>
				</el-menu-item>
				<el-menu-item index="7">
					<!--<router-link to="/zlinscs">测试</router-link>-->
				</el-menu-item>
				<el-menu-item index="8">
					<div class="search_img_box">
						<input type="text" placeholder="搜索昵称" class="search_input">
						<img src="//res.tuwan.com/templet/play/public/images/search.png" class="search_img">
					</div>
				</el-menu-item>
			</el-menu>
		</div>
		<div class="nav_right">
			<el-menu :default-active="activeIndex" class="el-menu-demo fourright" mode="horizontal" @mouseenter="enters(index)" @mouseleave="leaver()">

				<el-menu-item index="99">
					<el-submenu index="996">
						<template slot="title">
							<!--<router-link to="/square">大厅</router-link>-->
							<router-link to="/square">
								<a class="fl common_right_01 chatroom_enter" style="position:relative;color:#fa6543;font-size:14px" href="" target="_blank">
									<img style="width:36px;" src="https://res.tuwan.com/templet/play/springfestivalbox/chaticon.gif" class="qt">
									<!--<br>大厅-->
									<!--<div>大厅</div>-->
									<div>Lobby</div>
								</a>
							</router-link>
						</template>
						<div style="background: none;
				    border: none;
				    top: -20px;
				    position: absolute;
				    left: -402px;
				    <!--width: 838px;-->
				    display: block;
				    height: 186px;
				    padding-top: 16px;
				    margin-top: 0px;
				    padding-bottom: 16px;
				    margin-bottom: 0px;">
							<router-link to="/square">
								<el-menu-item index="66">
									<ul>
										<li>1111</li>
										<li>2222</li>
									</ul>
								</el-menu-item>
							</router-link>
						</div>
					</el-submenu>
				</el-menu-item>

				<el-menu-item index="10">
					<router-link tag="div" to="/chatroom">
						<!--<a class="fl common_right_01 1 common_right_hover" href="javascript:;"id="msgCenter" target="_blank" >会新窗口打开页面-->
						<a class="fl common_right_01 1 common_right_hover" href="javascript:;" id="msgCenter">
							<img src="//res.tuwan.com/templet/play/public/images/message.png" class="qt" style="display: inline;">
							<img src="//res.tuwan.com/templet/play/public/images/message_hover.png" style="display: none;" class="qt_hover">
							<!--<div>消息</div>-->
							<div>Messages</div>
							<!--<div class="common_message" style="display:none;"></div>
            <div class="common_right_02 fl"></div>-->
						</a>
					</router-link>
				</el-menu-item>
				<el-menu-item index="11">
					<router-link tag="div" to="/about">
						<a id="apply" class="fl common_right_01 2 common_right_hover chatroom_kaihei" style="position:relative;cursor: pointer;" flag="0">
							<img src="//res.tuwan.com/templet/play/public/images/join_us.png?v=1" class="qt" style="display: inline;">
							<img src="//res.tuwan.com/templet/play/public/images/join_us_hover.png?v=1" style="display: none;" class="qt_hover">
							<!--<div>入驻</div>-->
							<div>Enter</div>
						</a>
					</router-link>
				</el-menu-item>
				<el-menu-item index="12">
					<!--<router-link tag="div" to="/login">
            <a href="javascript:;" class="common_right_01 3 common_right_hover" style="" id="loginfalse">
                <img src="//res.tuwan.com/templet/play/public/images/no_login.png" class="qt" style="display: inline;">
                <img src="//res.tuwan.com/templet/play/public/images/no_login_hover.png" style="display: none;" class="qt_hover">
            <div> 注册/登录</div>
            </a>
		</router-link>-->
					<router-link tag="div" to="/login">
						<a href="javascript:;" class="common_right_01 3 common_right_hover" style="" id="loginfalse">
							<img src="//res.tuwan.com/templet/play/public/images/no_login.png" class="qt" style="display: inline;">
							<img src="//res.tuwan.com/templet/play/public/images/no_login_hover.png" style="display: none;" class="qt_hover">
							<!--<div> 注册/登录</div>-->
							<div>RegisterAndLogin</div>
						</a>
					</router-link>
				</el-menu-item>
			</el-menu>
		</div>
	</div>

</template>
<script>
	export default {
		name: "Header",
		data() {
			return {
				seen: false,
				current: 0,
				activeIndex: '1',
			}
		},
		methods: {
			enters(index) {
				this.seen = true;
				this.current = index;
			},
			leaver() {
				this.seen = false;
				this.current = null;
			},
			handleSelect(key, keyPath) {
				// console.log(key, keyPath);
			},
			rightHover() {

			}
		}
	}
</script>
<style>
	/*去掉ele-submenu默认箭头样式*/
	
	.el-submenu__title i {
		display: none;
		/*color: transparent;*/
	}
	
	.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow {
		display: none;
		/*position: static;
	    vertical-align: middle;
	    margin-left: 8px;
	    margin-top: -3px;*/
	}
</style>
<style scoped="scoped" lang="scss">
	.nav_box {
		display: flex;
		height: 80px;
		min-width: 1566px;
		padding-top: 10px;
	}
	
	.nav_left {}
	
	.nav_center {
		a {
			margin-right: 36px;
			font-size: 20px;
			color: #666;
			margin-top: 27px;
			padding-bottom: 8px;
			text-decoration: none;
			/*去掉routerlink默认的下划线*/
			&.router-link-exact-active {
				color: #fa6543;
				border-bottom: solid 3px #FA6543;
			}
			margin-right: 30px;
		}
		a:hover {
			color: #fa6543!important;
			border-bottom: solid 3px #FA6543;
		}
	}
	
	.fourright {
		/*padding-top: 10px;*/
		.common_right_hover:hover {
			color: #FA6543;
		}
		.common_right_hover:hover .qt {
			display: none;
		}
		.common_right_hover:hover .qt_hover {
			display: inline;
		}
	}
	
	.el-menu-demo .el-menu-item {
		border-bottom: none!important;
		/*去掉elementui的下划线*/
		color: #666;
		/*a{color: black;}*/
	}
	
	.search_img_box {
		position: relative;
	}
	
	.search_input {
		padding: 0 10px;
		border: none;
		border-radius: 25px;
		background-color: #f0f0f0;
		display: inline-block;
		line-height: 32px;
		height: 32px;
		width: 148px
	}
	
	.search_input::-ms-input-placeholder {
		text-indent: 38px;
	}
	
	.search_input::-webkit-input-placeholder {
		text-indent: 38px;
	}
	
	.search_img {
		position: absolute;
		right: 22px;
		top: 24px;
		cursor: pointer;
		outline: medium;
	}
	
	.common_right_01 {
		color: #666666;
		font-size: 12px;
		text-align: center;
		line-height: 26px;
		display: block;
	}
	
	.common_right_01_add {
		color: #fa6543
	}
	
	.common_right_02 {
		background-color: #dfdfdf;
		width: 1px;
		height: 20px;
		margin: 0 20px;
		margin-top: 10px;
	}
	
	.common_right_enter {
		font-size: 14px;
		color: #fa6543;
		border-radius: 25px;
		line-height: 34px;
		height: 34px;
		border: #fa6543 solid 1px;
		width: 80px;
		margin-top: 6px;
		margin-right: 30px;
	}
	
	.common_right_enter:hover {
		background-color: #fa6543;
		color: #ffffff;
	}
	
	.common_message {
		position: absolute;
		width: 20px;
		height: 20px;
		background-color: #fa6543;
		font-size: 12px;
		color: #fff;
		line-height: 19px;
		border-radius: 100px;
		margin-top: -54px;
		margin-left: 32px;
	}
</style>