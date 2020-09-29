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
					
					
					<el-col :span="12">
    <h5>自定义颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
				</el-aside>
				<el-main>
					<div class="main_box">
						<div class="add_box">
							<textarea class="add_textarea" v-model="context" value=""></textarea>
							<input class="add_button" type="button" value="新增一条" @click="addOne()" />
						</div>
        				<div class="noContent" v-show="mainlist.length < 1">暂无留言</div>
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
					<keep-alive>
				        <router-view/>
				    </keep-alive>
				</el-main>
			</el-container>
		</el-container>
		<!--<Edit/>-->
	</div>
</template>
<script>
	import Edit from './Edit'
	export default {
		name: 'Pay',
		data(){
			return {
				outerVisible: false,
       			innerVisible: false,
       			asidelist:['csjh集合','csxjh集合'],//测试
       			mainlist:[],
       			context:'',
       			dbname:'csdbs',//数据库名
       			jhname:'csxjh',//集合名	
       			pageIndex:1,//当前页
       			pageSum:1,//总页
			}
		},
		components:{
			Edit,
			
		},
		created(){
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
			this.getDb();
		},
		activated(){},
		components:{},
		methods:{
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
						this.mainlist=[];
						const datas = data.dataList;//时间最新在上显示
						for (let i=0;i<datas.length;i++){
							if(datas[i].username||datas[i].csdata){
								this.mainlist.push(datas[i])
							}
						}
						console.log(data)
					})
			},
			deleteOne(id){
				this.$axios.delete('http://127.0.0.1:8090/delete/'+id).then(({data})=>{
					console.log(data)
						this.getDb(this.pageIndex)
				})
			},
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
  .main_box{
		/*text-align: center;*/
		/*margin: 0 auto;*/
		position: relative;
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