<template>
	<div id="login_box">
		<el-container>
			<el-header>账户充值系统</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-main>
					Main
					<input type="radio" name="" id="" value="11111" />111111
					<input type="radio" name="" id="" value="11111" />111111
					<input type="checkbox" name="" id="" value="222222" />222222
					<input type="checkbox" name="" id="" value="222222" />222222
					<keep-alive>
				        <router-view/>
				    </keep-alive>
				</el-main>
			</el-container>
		</el-container>
		
		
		<el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
		  <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
		  	<!--<Enter ref="enterForm" @click="displayNone" ></Enter>-->
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
		
		
<!--		<input type="button" value="登录账户"@click="displayNone" />-->
			<!--<router-view />
		  	<Enter ref="enterForm" ></Enter>-->
		
		
		
	</div>

</template>

<script>
	export default {
		name: 'Pay',
		data(){
			return {
				outerVisible: false,
       			innerVisible: false
			}
		},
		components:{},
		methods:{
			displayNone(){
				this.$refs.enterForm;
				console.log("1111111111111111111111",this.$attr,this.$refs.enterForm)
			},
		}
	}
</script>

<style scoped="scoped">
	.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
</style>