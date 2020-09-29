<template>
	<div id="login_box">
		<el-container>
			<el-header><h2>账户充值系统<input type="button" value="管理" @click="findDb()"/></h2></el-header>
			<el-container>
				<el-aside width="200px">
					<!--数据库集合列表-->
					<ul class="aside_ul" v-for="item in asidelist">
						<li class="aside_li">{{item}}</li>
					</ul>
				</el-aside>
				<el-main>
					<!--集合数据渲染-->
					<div v-for="item in mainlist">
						<div>{{item.username}}
						{{item.content}}
						{{item.time}}</div>
					</div>
					<keep-alive>
				        <router-view/>
				    </keep-alive>
				</el-main>
			</el-container>
		</el-container>
		
	</div>
</template>
<script>
	export default {
		name: 'Pay',
		data(){
			return {
				outerVisible: false,
       			innerVisible: false,
       			asidelist:[1,2,3,4,6],//测试
       			mainlist:[],
       			dbname:'csdbs',
       			jhname:'csxjh'
			}
		},
		mounted(){
			//数据库数据测试获取、渲染
//			this.$axios.get('http://127.00.0.1:8090/tianjia',{params}).then(({data})=>{
			this.$axios.get('http://127.00.0.1:8090/getdb').then(({data})=>{
				for (let i=0;i<data.dataList.length;i++){
					if(data.dataList[i].username){
						this.mainlist.push(data.dataList[i])
					}
//					this.mainlist.push(data[i])
				}
//					this.mainlist = data;
					console.log(data,this.mainlist);//其实data.length就是pageSize
			});
		},
		components:{},
		methods:{
			displayNone(){
				this.$refs.enterForm;
				console.log("1111111111111111111111",this.$attr,this.$refs.enterForm)
			},
			createDb(){
				this.$axios.get('http://127.0.0.1:8090/createdb').then(({data})=>{
					console.log(data)
				})
			},
			findDb(){
				this.$axios.post('http://127.0.0.1:8090/finddb',{
					dbname:this.dbname,
					jhname:this.jhname
				}).then(({data})=>{
//					this.dbname = data.dbname;
//					this.jh = data.jh;
					console.log(data)
				})
			}
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