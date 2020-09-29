<template>
	<div id="login_box">
		<div class="main_box">
			<h2>子组件：</h2>
			<!--{{alls}}-->
			<!--{{$props}}-->无数据
			<ss v-bind="$props"></ss>
		</div>
	</div>
</template>
<script>
	import ss from './ss'
	export default {
		name: 'cs',
		data(){
			return {
       			mainlist:[],
       			context:'',
			}
		},
		props:['alls'],
		created(){},
		mounted(){},
		activated(){},
		components:{ss},
		methods:{}
	}
</script>

<style scoped="scoped">
	@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
  	.main_box{
		/*text-align: center;*/
		/*margin: 0 auto;*/
		/*position: relative;*/
	}
 	.el-container {
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