<template>
	<div id="login_box">
		<el-container>
		<!--<el-container direction="vertical">-->
			<el-header>
				<h2>账户充值系统
					<input type="button" value="显示Change组件" @click="goChange"/>
					<!--<input type="button" value="管理" @click="goRouterChange"/><br />-->
				</h2>
			</el-header>
			<el-container>
			<!--<el-container direction="vertical">-->
				<el-aside width="200px">
					<!--数据库集合列表-->
					<!--<ul class="aside_ul" v-for="item in asidelist">
						<div class="">
							<li class="aside_li">{{item}}</li>
						</div>
					</ul>-->
					<router-link tag='div' to="/pay/edit">账户管理</router-link>
					<router-link tag='div' to="/pay/message">消息管理</router-link>
					<router-link tag='div' to="/pay/jsdom">原生JS</router-link>
					<router-link tag='div' to="/pay/shuttle">模拟购物车1</router-link>
					<router-link tag='div' to="/pay/shoppingTrolley">宝贝管理</router-link>
					<!--<router-link tag='div' to="/pay/message">消息管理</router-link>
					<router-link tag='div' to="/pay/message">消息管理</router-link>
					<router-link tag='div' to="/pay/message">消息管理</router-link>
					<router-link tag='div' to="/pay/message">消息管理</router-link>
					<router-link tag='div' to="/pay/message">消息管理</router-link>
					<router-link tag='div' to="/pay/message">消息管理</router-link>
					<router-link tag='div' to="/pay/message">消息管理</router-link>
					<router-link tag='div' to="/pay/message">消息管理</router-link>-->
				
				</el-aside>
				<el-main>
					<Change v-if="showChange"/>
					<keep-alive>
				        <router-view/>
				    </keep-alive>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	import Change from './Change'
//	import Change from '@/views/Pay/Change'
//	import Change from '@/components/Change'
	export default {
		name: 'Pay',
		data(){
			return {
				showChange:false
			}
		},
		components:{
			Change
		},
		created(){
				this.showChange=false
			
			//按下回车执行按钮点击事件
			let _this = this;
			document.onkeydown=(e)=>{
				if(window.event.keyCode===13){
					e.preventDefault() // 阻止浏览器默认换行操作
					_this.addOne()
				}
				
				//以上功能已实现，下面是拓展的方向键和兼容可以不用
//				let e1 = e || event || window.event || arguments.callee.caller.arguments[0]
//	            //键盘按键判断:左箭头-37;上箭头-38；右箭头-39;下箭头-40
//	            //左
//	            if (e1 && e1.keyCode == 37) {
//	                this.decrease()
//	            } else if (e1 && e1.keyCode == 38) {
//	                this.nowStudent--
//	            } else if (e1 && e1.keyCode == 39) {
//	                this.increase()
//	            } else if (e1 && e1.keyCode == 40) {
//	                this.nowStudent++
//	            }
			}
		},
		mounted(){},
		activated(){},
		methods:{
			goChange(){
//				this.showChange=true
				this.showChange=!this.showChange
			},
			goRouterChange(){
				this.$router.push({path:'/pay/change'})
			}
		},
		beforeDestroy(){
				this.showChange=false
			console.log(333333333333333333333,this.showChange)
		}
	}
</script>

<style scoped="scoped">
	.el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    background-color: #E9EEF3;
    color: #000;
    text-align: center;
    line-height: 60px;
  }
  .el-header input{
  	color: blue;
  	cursor:pointer;
  }
  .el-aside {
    /*background-color: #D3DCE6;*/
    background-color: #2d4054;
    color: #FFFFFF;
    text-align: center;
    line-height: 50px;
    height: 600px;
  }
  .aside_ul{
  	/*height: 30%;会出现滚动条*/
  }
  .aside_li.active{
  	background-color:#435466 ;
  }
  .el-main {
    background-color:white;
    color: #333;
    text-align: center;
    line-height: 30px;
    /*margin: 0 auto;*/
  }
  .main_box{
		/*text-align: center;*/
		/*margin: 0 auto;*/
		/*position: relative;*/
	}
  body > .el-container {
    margin-bottom: 40px;
  }
	#login_box {
		padding: 0;
		margin: 0;
		list-style: none;
		border: none 0;
		font-family: "微软雅黑", "Hiragino Sans GB", tahoma, arial, "\5B8B\4F53";
		-webkit-font-smoothing: antialiased;
		box-sizing: content-box;
	}
	
	#login_box .entry_pop_bg {
		background-color: #000;
		height: 100%;
		opacity: 0.7;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999998;
	}
	
	#login_box .entry_pop_box {
		position: fixed;
		width: 100%;
		z-index: 999999;
	}
	
	#login_box .entry_pop_content {
		background-color: #fff;
		height: 494px;
		margin: 10% auto 0;
		padding: 20px;
		width: 660px;
	}
	
	#login_box .enroll_box {
		border-bottom: 1px solid #f3f3f3;
	}
	
	#login_box .entry_wbox {
		border-left: 1px solid #f1f1f1;
		padding-bottom: 70px;
		padding-left: 33px;
		padding-right: 15px;
	}
	
	#login_box .f1 {
		float: left;
	}
	
	#login_box .clearfix {
		clear: both;
	}
	
	
	.add_box{
	width: 713px;
	display: block;
	overflow: hidden;
	border: #a5bcff solid 1px;
	background: #f3f8fd;
	margin: 0 auto;
	font-family: Verdana;
	padding: 15px 20px
}
.add_textarea{
	width: 701px;
	/*height: 70px;*/
	border: #b1b1b1 solid 1px;
	clear: both;
	display: block;
	margin: 10px 0;
	/*line-height: 20px;*/
	padding: 5px;
	box-shadow: inset 0 0 5px #DDD;
	font-family: "Microsoft YaHei"
}
.add_button,.show_button{
	float: right;
	width: 85px;
	height: 27px;
	border: none 0;
	background: tranparent;
	background: gray left top no-repeat;
	/*background: url(/public/static/images/j_img.png) left top no-repeat;*/
	cursor: pointer;
	opacity: .8
}
.add_button:hover{
	background: greenyellow left top no-repeat;
}
.show_button:hover{
	background: red left top no-repeat;
	color: #FFFFFF;
}
.show_box{
	width: 753px;
	display: block;
	overflow: hidden;
	border: #a5bcff solid 1px;
	/*background: #f3f8fd;*/
	margin: 12px auto auto auto;
	font-family: Verdana
}
.show_box p{
	float: left;
}
.show_box input{
	float: right;
}
.noContent {
	text-align: center;
	display: block;
	background: #FFF;
	font: 14px/2.3 "Microsoft YaHei";
	border-bottom: #e9e9e9 solid 1px;
	border-top: #e9e9e9 solid 1px;
	color: #999
}
.page {
	/*text-align: right;*/
	font-size: 0;
	font-family: Verdana;
	padding: 10px 16px;
	/*margin: 0 auto;*/
}

.page a {
	display: inline-block;
	height: 20px;
	padding: 0 7px;
	border: #CCC solid 1px;
	font: 12px/20px Verdana;
	text-decoration: none;
	margin-left: 5px;
	background: #FFF
}

.page a:hover {
	background: #09F;
	color: #FFF;
	border-color: #09F
}

.page .active{
	background: #CCC
}

.page a:active {
	opacity: .8
}
</style>