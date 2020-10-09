<template>
	<div id="login_box">
		Login&Sign
		<div id="index_pup_box" style="">
			<div class="entry_pop_bg"></div>
			<div class="entry_pop_box">
				<el-container>
					<div class="entry_pop_content">
					<el-container>
					<el-header>
						<div class="enroll_box enter_box">
							<div class="enter_box_nav_left">
								<div class="fl enroll enroll_add">
									<router-link to="/login/enter">登录</router-link>
								</div>
								<div class="fl enroll">
									<router-link to="/login/sign">注册</router-link>
								</div>
								
							</div>
							<div class="fr close">
								<div class="layer-cell-close" @click="this.goAhead">
									<!--<input type="button" name="" id="" value="X" />-->
									<a href="#javascript::">X</a>
								</div>
							</div>
						</div>
					</el-header>
					</el-container>
					<el-container>
						<el-main>
							Main内容
							<!--qqqqq<Enter :btnValue="btnValue" />-->
							<div><input type="button"  @click="$emit('one')" value="子组件按钮"></div>
							<keep-alive>
						        <router-view/>
						    </keep-alive>
						</el-main>
						
						<el-aside width="200px">
							<div class="fr entry_wbox mt50">
								<div class="entry_01">第三方账号登录</div>
								<a class="Wechat" href="https://user.tuwan.com/api/url.ashx?app=weixin&amp;redirect_uri=https%3A%2F%2Fy.tuwan.com%2F%3Fsuccess%3D1">
									<div class="entry_w">
										<img src="https://res.tuwan.com/templet/teach/index/images/entry_w.png">&nbsp;微信账号登录
									</div>
								</a>
								<a class="QQ" href="https://user.tuwan.com/api/url.ashx?app=qq&amp;redirect_uri=https%3A%2F%2Fy.tuwan.com%2F%3Fsuccess%3D1">
									<div class="entry_qq">
										<img src="https://res.tuwan.com/templet/teach/index/images/entry_qq.png">&nbsp;QQ账号登录
									</div>
								</a>
							</div>
						</el-aside>
					</el-container>
					<!--<div class="clearfix">
						55555555555555555555555555555555555555
						<el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
						  <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
						  	<Enter></Enter>
						  	333333333333333333333333
						  	<Ex></Ex>
						    <el-dialog
						      width="30%"
						      title="内层 Dialog"
						      :visible.sync="innerVisible"
						      append-to-body>
						    </el-dialog>
						    444444444444444444
						    <aform></aform>
						    <div slot="footer" class="dialog-footer">
						      <el-button @click="outerVisible = false">取 消</el-button>
						      <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
						    </div>
						  </el-dialog>
					</div>-->
					</div>
				</el-container>
			</div>
		</div>
	</div>

</template>

<script>
//	import Enter from './Enter'
//	import Ex from './Enter/ex.vue'
//	import Sign from './Sign'
//	import aform from './Form'
	
	export default {
		name: 'Login',
		data(){
			return {
				outerVisible: false,
       			innerVisible: false,
       			btnValue:"登录",
       			signValue:"注册"
			}
		},
		components:{
//			Enter,
//			Ex,
//			Sign,
//			aform,
			Enter: () => import("./Enter"),
			Sign: () => import("./Sign"),
//			aform: () => import("./Form"),
//			Ex: () => import("./Enter/ex"),
		},
		mounted(){
			this.$on("one",function () {
                console.log("子组件")
            })
		},
		methods:{
			//模拟登陆
			csLogin(){
				console.log()
			},
//			displayNone(){
//				this.$refs.enterForm;
//				console.log("1111111111111111111111",this.$attr,this.$refs.enterForm)
//			},
			goAhead(){
//				window.history.go(-1)
				this.$router.go(-1)
//				this.$router.push({path:'/pay'})
			}
		}
	}
</script>
<style>
	.el-container{
	}
	.fl:hover{
	    border-bottom: 3px solid #d02642;
	    color: #d02642;
	}
	.close:hover{
		color: white;
	}
</style>
<style scoped="scoped">
	.enroll{
		color: #111111;
	    cursor: pointer;
	    font-size: 24px;
	    padding: 20px;
	}
	.enter_box{
		position: relative;
	}
	.close{
		/*display: inline-block;*/
		position: absolute;
		float: right;
		cursor: pointer;
	    height: 22px;
	    position: absolute;
	    right: 15px;
	    top: 15px;
	    width: 22px;
	    z-index: 2;
	}
	.close:hover{
		background-color: red;
	}
	.enter_box_nav_left{
		float: left;
	}
	#login_box{
		padding: 0;
		margin: 0;
		list-style: none;
		border: none 0;
		font-family: "微软雅黑",
		"Hiragino Sans GB",
		tahoma,
		arial,
		"\5B8B\4F53";
		-webkit-font-smoothing: antialiased;
		box-sizing: content-box;
	}
	#login_box .entry_pop_bg{
		background-color: #000;
	    height: 100%;
	    opacity: 0.7;
	    position: fixed;
	    top: 0;
	    width: 100%;
	    z-index: 999998;
	}
	#login_box .entry_pop_box{
	    position: fixed;
	    width: 100%;
	    z-index: 999999;
	}
	#login_box .entry_pop_content{
		    background-color: #fff;
		    width: 660px;
		    height: 494px;
		    /*margin: 10% auto 0;*/
			margin: auto auto 20px;
		    padding: 20px;
	}
	#login_box .enroll_box{
		right: 0;
		    border-bottom: 1px solid #f3f3f3;
	}
	#login_box .entry_wbox{
		    border-left: 1px solid #f1f1f1;
    padding-bottom: 70px;
    padding-left: 33px;
    padding-right: 15px;
	}
	#login_box .f1{
		float: left;
	}
	#login_box .clearfix{clear: both;}
</style>