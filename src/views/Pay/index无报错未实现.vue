<template>
	<div id="login_box">
		<el-container>
			<el-header><h2>账户充值系统<input type="button" value="管理" @click=""/></h2></el-header>
			<el-container>
				<el-aside width="200px">
					<!--数据库集合列表-->
					<ul class="aside_ul" v-for="item in asidelist">
						<div class="">
							<li class="aside_li">{{item}}</li>
						</div>
					</ul>
				</el-aside>
				<el-main>
					<div class="main_box">
						<div class="add_box">
							<textarea class="add_textarea" v-model="contents" value=""></textarea>
							<input class="add_button" type="button" value="新增一条" @click="tj()" />
						</div>
						<!--集合数据渲染-->
						<div class="show_box" v-for="item in mainlist">
							<div class="">
								<p><h3>{{item.username}}</h3>{{item.content}}{{item.hehe}}<b>{{item.time}}</b></p>
								<input class="show_button" type="button" value="删除" @click="deleteOne(item._id)"/>
							</div>
						</div>
					</div>
					<!--<keep-alive>
				        <router-view/>
				    </keep-alive>-->
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
       			contents:'',
       			dbname:'csdbs',//数据库名
       			jhname:'csxjh'//集合名
			}
		},
		mounted(){
			//数据库数据测试获取、渲染
			this.$nextTick(()=>{
				this.getDb()
			})
			
			
			
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
//				const that = this;
				let params = new URLSearchParams()
				params.append('csdbs','csxjh')
				this.$axios.post('http://127.0.0.1:8090/finddb',params).then((response)=>{
//					this.dbname = data.dbname;
//					this.jh = data.jh;
					console.log(response)
				})
			},
			async getDb(i=1){
//				this.$nextTick(()=>{
					await this.$axios.get('http://127.00.0.1:8090/getdb?PageIndex='+i).then(({data})=>{
						for (let i=0;i<data.dataList.length;i++){
							if(data.dataList[i].username){
								this.mainlist.push(data.dataList[i])
							}
						}
						console.log(data)
					})
//				})
			},
			tj(){
//				const that = this;
				this.$axios.post('http://127.0.0.1:8090/addnews',{
					dbname:this.dbname,
					jhname:this.jhname,
					contents:this.contents
				}).then(({data})=>{
					this.contents="";
					this.mainlisr = []
					this.getDb();
					console.log(data)
				})
			},
			deleteOne(id){
//				let that = this;
				this.$axios.delete('http://127.0.0.1:8090/delete/'+id).then(({data})=>{
					console.log(data)
					this.$nextTick(()=>{
						this.getDb()
					})
				})
			},
			cs(){
				alert('sssssssssss')
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
    /*margin: 0 auto;*/
  }
  /*.main_box{
		text-align: center;
		margin: 0 auto;
	}*/
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
	/*background: url(/public/static/images/j_img.png) left top no-repeat;*/
	cursor: pointer;
	opacity: .8
}
.add_button{
	background: greenyellow left top no-repeat;
}
.show_button{
	background: gray left top no-repeat;
}
.show_button:hover{
	background: red left top no-repeat;
}
.show_box{
	width: 753px;
	display: block;
	overflow: hidden;
	border: #a5bcff solid 1px;
	background: #f3f8fd;
	margin: 25px auto auto auto;
	font-family: Verdana
}
</style>