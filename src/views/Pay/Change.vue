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
				<div class="show_box_top" >
					<h3>{{item.content}}{{item.hehe}}</h3>
					<!--<input type="text" value="item.content" />-->
					<textarea v-show="isShow===true" class="updata_textarea" v-model="upcontext" value=""></textarea>
				</div>
				<div class="show_box_bottom">
					<input class="show_button" type="button" value="删除" @click="deleteOne(item._id)"/>	
					<input class="show_button xg" type="button" value="保存" @click="changeOne(item._id)"/>
					<input v-show="isShow===false" class="show_button bj" type="button" value="修改内容"@click="displayBlack"/>
					{{item.username}}{{item.csdata}}<b>{{item.time}}</b>
				</div>
			</div>
			<div class="page" v-show="mainlist.length>=1">
	        	<!--<a v-for="item in pageSum" href="javascript:;" @click="getDb(item)" :class="{active:pageIndex===item}">{{item}}</a>-->
	        	<a v-for="item in pageSum" href="javascript:;" @click="getDb(item)" :class="{active:pageIndex===item}">{{item}}</a>
	        </div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Change',
		data(){
			return {
       			mainlist:[],
       			context:'',
       			upcontext:'',
       			dbname:'csdbs',//数据库名
       			jhname:'csxjh',//集合名	
       			pageIndex:1,//当前页
       			pageSum:1,//总页
       			isShow:false
			}
		},
		created(){
			//按下回车执行按钮点击事件
			let _this = this;
			document.onkeydown=(e)=>{
				if(window.event.keyCode===13){
					e.preventDefault(); // 阻止浏览器默认换行操作
					_this.addOne();
//					_this.changeOne();
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
			this.getDb();
		},
		activated(){
			this.getDb();
		},
		components:{},
		methods:{
			displayBlack(e){
				console.log(e.target)
				if(e.target){
					this.isShow=!this.isShow;
				}
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
						console.log(this.mainlist)
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
			async changeOne(id){
				await this.$axios.put('http://127.0.0.1:8090/change/'+id,{
//					params:{
					dbname:this.dbname,
					jhname:this.jhname,
					upcontent:this.upcontext
//				}
				}).then(({data})=>{
					if(this.upcontext===''){
						this.isShow=false;
					}else{
						this.isShow=false;
						this.upcontext='';
						this.getDb();
						console.log(data);
					}
				})
			}
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
.add_textarea,.updata_textarea{
	width: 701px;
	/*height: 70px;*/
	border: #b1b1b1 solid 1px;
	clear: both;
	display: block;
	margin: 5px 0;
	/*line-height: 20px;*/
	padding: 2px;
	box-shadow: inset 0 0 5px #DDD;
	font-family: "Microsoft YaHei"
}
.updata_textarea{
	width: 360px;
	/*float: right;*/
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
.xg{
	background: yellow left top no-repeat;
	/*float: right;*/
}
.bj{
	background: skyblue left top no-repeat;
	/*float: left;*/
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
.show_box_top{
	padding: 0;
	margin: 0;
	min-height: 40px;
	/*float: left;*/
}
.show_box_bottom{
	max-height: 60px;
	/*float: right;*/
}
.show_box p{
	/*float: left;*/
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