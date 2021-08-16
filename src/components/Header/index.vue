<template>
	<div class="pubhead">

		<el-col :span="1" style="height: 100%;">
			<!--<img src="../assets/image/logo.png"/>-->
			<div>
				<!--<span class="systemtitle">大数据分析通用工具</span>-->
				<el-menu :router="false"  mode="horizontal">
				<el-menu-item index="1">
					<router-link to="/" tag="div">
						<!--<img src="https://res.tuwan.com/templet/play/index/images/yuewanlogo3.png">-->
						<!--<img src="../../../public/static/imgs/yuewanlogo3.png" style="height: 30px;">-->
						<i class="el-icon-s-platform turn"  />
					</router-link>
				</el-menu-item>
			</el-menu>
			</div>
		</el-col>
		<el-col :span="19" style="height: 100%;">
			<el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				
				<el-submenu index="1">
					<template slot="title"><span class="menutitle">Lins</span></template>
					<el-submenu index="1-1">
						<template slot="title"><span :style="showColor">类后台系统</span></template>
						<el-menu-item index="/pay">充值</el-menu-item>
						<el-menu-item index="/appdownload">APP下载</el-menu-item>
						<el-menu-item index="/login">登录注册</el-menu-item>
					</el-submenu>
					<el-menu-item index="/zlinscs">测试组件</el-menu-item>
					<el-menu-item index="/rollingimg">轮播</el-menu-item>
				</el-submenu>

				<el-submenu index="2">
					<template slot="title"><span class="menutitle">Demo组件</span></template>
					<el-menu-item index="/about">入驻企业</el-menu-item>
					<el-menu-item index="/chatroom">消息/聊天室</el-menu-item>
				</el-submenu>

				<el-submenu index="3">
					<template slot="title"><span class="menutitle">NewMyShit</span></template>
					<!--<el-submenu index="/drill">-->
						<!--<template slot="title">训练营</template>-->
						<el-menu-item index="/player">开黑</el-menu-item>
						<el-menu-item index="/drill">关系图</el-menu-item>
						<el-menu-item index="/square">大厅</el-menu-item>
						<!--<el-menu-item index="">情报自动关联</el-menu-item>
						<el-menu-item index="">情报评估管理</el-menu-item>
						<el-menu-item index="">多手段展示</el-menu-item>-->
					<!--</el-submenu>-->
					<!--<el-submenu index="/about">-->
						<!--<template slot="title">入驻</template>-->

						<!--<el-menu-item index="">情报印证对比</el-menu-item>
						<el-menu-item index="">情报整合去重</el-menu-item>-->
					<!--</el-submenu>-->
				</el-submenu>

				<el-submenu index="4">
					<template slot="title"><span class="menutitle">CHMMWJQ</span></template>
					<!--<template slot="title"><span class="menutitle">操作中心</span></template>
						<el-submenu index="4-1">
						<template slot="title"><span :style="showColor">充值</span></template>
						<el-menu-item index="/pay">充值</el-menu-item>
						<el-menu-item index="/appdownload">APP下载</el-menu-item>
						<el-menu-item index="/login">登录注册</el-menu-item>
					</el-submenu>-->
					<el-menu-item index="/ab">自古多情空余恨</el-menu-item>
					<el-menu-item index="/ab/cs">此恨绵绵无绝期</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-col>
		<el-col :span="4" style="height: 100%;">
			<div class="grid-content bg-purple">
				<div>
					<!--<el-avatar shape="circle" :size="40" src="../assets/image/user.png"></el-avatar>-->
					<i class="el-icon-user"></i> 欢迎 : {{ username}}&nbsp;&nbsp;
					<el-link href="/login" type="primary">退出</el-link>
					<el-button @click="changeColor">换肤</el-button>
				</div>
				<!--<el-menu  :default-active="activeIndex"  mode="horizontal">
					<el-submenu>
						<template slot="title"><span> 欢迎 : {{ username}}</span></template>
						<el-menu-item >退出登录</el-menu-item>
						<el-button @click="changeColor">换肤</el-button>
						<el-menu-item >
							<div @click="changeColor">换肤</div>
						</el-menu-item>
					</el-submenu>
				</el-menu>-->
			</div>
		</el-col>

	</div>
</template>
<script>
	export default {
		name: "Header",
		props:['changeColor'],
		data() {
			return {
				seen: false,
				current: 0,
				activeIndex: '1',
				username: 'admin管理员',
				activeIndex: '/',
				showColor: {
					color: ''
				},

			}
		},
		watch: {
			$route: {
				handler(newValue, oldValue) {
					 console.log('``````````Router```````````',newValue.path)
//					if(newValue.path === '/home'||newValue.path === '/drill' || newValue.path === '/zlinscs' || '/rollingimg') {
					if(newValue.path === '/drill' || newValue.path === '/zlinscs' || '/rollingimg') {
						this.showColor.color = ''
					} else {
						this.showColor.color = '#409eff'
						console.log('`````````````Color：',this.showColor.color,'```````````````')
					}
				},
				deep: true,
				immediate: true
			},
		},
//		mounted() {
//			if(!sessionStorage.getItem("path")) {
//				this.$router.push({
//					path: "/label"
//				});
//				this.activeIndex = "/label";
//			} else {
//				this.activeIndex = sessionStorage.getItem("path");
//				// this.$router.push({ path: sessionStorage.getItem("path") });
//			}
//		},
		methods: {
//			changeC(){
//				this.changeColor()
//			},
			goHome() {
				// this.$router.push({
				//   path: `/label`
				// });
				/*location.reload()*/
				// location.hash = `/home`
			},
			exitLogin(val) {
				if(val == "exitLogin") {
					this.$router.push({
						path: `/login`
					});
				}
			},
//			handleSelect(key, keyPath) {
//				this.$router.push({
//					path: key
//				});
//				sessionStorage.setItem("path", key);
//			},

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
<style scoped>
	@keyframes turnAround {
		0% {
			-webkit-transform:rotate(0deg)
		}
		50%{
			-webkit-transform:rotate(180deg)
		}
		100% {
			-webkit-transform:rotate(360deg)
		}
	}
	.pubhead {
		height: 79px !important;
		line-height: 79px;
		border-bottom: 1px solid #ccc;
		color: #606263;
		width: 100%;
		background-size: 100%;
		background: #fff;
		position: fixed;
		overflow: hidden;
		z-index: 1;
	}
	
	.pubhead .systemtitle {
		font-size: 32px;
		font-weight: 500;
		padding-left: 0px;
		display: inline-block;
		text-align: center;
		width: 100%;
	}
	/* .menutitle {
  color: #ffffff;
} */
	.turn{
		animation: turnAround 1s infinite ;
	}
	.menutitle:hover {
		color: #409EFF !important;
	}
	
	/deep/ .el-menu.el-menu--horizontal {
		border-bottom: solid 0px #e6e6e6;
		background: transparent;
	}
	
	/deep/ .el-menu--horizontal>.el-menu-item {
		font-size: 20px;
		float: left;
		height: 80px;
		line-height: 80px;
		margin: 0;
		color: #606263;
	}
	
	/deep/ .el-menu--horizontal>.el-submenu .el-submenu__title {
		font-size: 20px;
		height: 80px;
		line-height: 80px;
		color: #606263;
	}
	
	/deep/ .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
	.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
		background-color: transparent;
		color: #f8f8f8;
	}
	
	/deep/ .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
		background-color: transparent;
		color: #409EFF;
	}
	
	/deep/ .el-menu--horizontal .el-menu .el-menu-item.is-active,
	.el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title {
		color: #409EFF;
	}
	
	/deep/ .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
		border-bottom: 2px solid #409EFF !important;
		color: #409EFF !important;
	}
	
	.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
	.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
		outline: 0;
		color: #409eff;
	}
	
	.el-menu--horizontal .el-menu .el-menu-item.is-active,
	.el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title {
		color: #409eff;
	}
	
	/deep/ .el-menu--horizontal>.el-menu-item.is-active {
		color: #409eff !important;
	}
	
	/deep/ .el-submenu__title i {
		color: white;
	}
</style>