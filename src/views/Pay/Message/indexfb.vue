<template>
	<div id="login_box">
		<div class="main_box">
			<div class="add_box">
				<textarea class="add_textarea" v-model="context" value=""></textarea>
				<input class="add_button" type="button" value="新增一条" @click="addOne()" />
			</div>
			<div class="noContent" v-show="mainlist.length < 1">暂无数据</div>
			<!--集合数据渲染-->
			<div class="show_box" v-for="item in mainlist">
				<p><h3>{{item.content}}{{item.hehe}}</h3>{{item.username}}{{item.csdata}}<b>{{item.time}}</b></p>
				<input class="show_button" type="button" value="删除" @click="deleteOne(item._id)"/>
			</div>
			<div class="page" v-show="mainlist.length>=1">
	        	<!--<a v-for="item in pageSum" href="javascript:;" @click="getDb(item)" :class="{active:pageIndex===item}">{{item}}</a>-->
	        	<a v-for="item in pageSum" href="javascript:;" @click="getDb(item)" :class="{active:pageIndex===item}">{{item}}</a>
	        </div>
		</div>
		
		<cs :alls="alls"  ></cs>
		<!--<cs v-bind="$props"  ></cs>-->
	</div>
</template>
<script>
	import cs from './cs'
	export default {
		name: 'Message',
		data(){
			return {
       			mainlist:[],
       			context:'',
       			alls:{},
       			dbname:'csdbs',//数据库名
       			jhname:'csxjh',//集合名	
       			pageIndex:1,//当前页
       			pageSum:1,//总页
			}
		},
		created(){
			//存储数据
			this.SetDatas();
			//按下回车执行按钮点击事件
			let _this = this;
			document.onkeydown=(e)=>{
				if(window.event.keyCode===13){
					e.preventDefault() // 阻止浏览器默认换行操作
					_this.addOne()
				}
			}
			    // 按下回车执行登录按钮点击事件
//			    var _self = this
//			    document.onkeydown = function(e) {
//			      var key = window.event.keyCode
//			      if (key == 13) {
//			        _self.addOne()
//			      }
//			  }
		},
		mounted(){
			//按下回车执行按钮点击事件
			let _this = this;
			document.onkeydown=(e)=>{
				if(window.event.keyCode===13){
					e.preventDefault() // 阻止浏览器默认换行操作
					_this.addOne()
				}
			}
			this.getDb();
		},
		activated(){
//			this.getDb();

			
		},
		components:{cs},
		methods:{
			
			SetDatas(){
				this.$axios.get('http://127.0.0.1:8090/getdbs').then(({data})=>{
//					console.log(data,11111111111111111111,JSON.stringify(data.allDatas))
					window.localStorage.setItem('dbdatas',JSON.stringify(data.allDatas))
					this.alls=data.allDatas;
				})
			},
			
			addOne(){
				this.$axios.post('http://127.0.0.1:8090/addnews',{
					dbname:this.dbname,
					jhname:this.jhname,
					context:this.context
				}).then(({data})=>{
                    if(data.ok ===1){
                        this.context = "";
                        this.getDb();
                    }else{
                        alert(data.msg);
                    }
				})
			},
			async getDb(pageIndex=1){
					await this.$axios.get('http://127.00.0.1:8090/getdb?PageIndex='+pageIndex,
//						{params:{
//							pageIndex:this.pageIndex
//						}}
					).then(({data})=>{
						this.pageIndex = data.PageIndex;
						this.pageSum = data.pageSum;
						this.mainlist=data.dataList;

//						this.mainlist=[];
//						const datas = data.dataList;//时间最新在上显示
//						for (let i=0;i<datas.length;i++){
//							if(datas[i].username||datas[i].csdata){
//								this.mainlist.push(datas[i])
//							}
//						}
//						console.log(data,this.mainlist)
					})
			},
			async deleteOne(id){
				await this.$axios.delete('http://127.0.0.1:8090/delete/'+id).then(({data})=>{
					console.log(data)
					if(data.ok===1){
						this.getDb(this.pageIndex)
					}else{
						alert(this.msg)
					}
				})
			},
		}
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