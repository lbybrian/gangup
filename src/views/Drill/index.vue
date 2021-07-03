<template>
	<div id="f">
		<el-row>
	      <el-col :span="3">
	        <div class="typeList">
	        	<h1>Drill</h1>
	        	<!--<h2>Drill</h2>-->
	        	<div
	        		v-for="item in typeList"
	        		:class="{typeItem:true,active:params.objType===item.val}"
	        		@click="changeType(item.val)"
	        		>
	        		{{item.title}}
	        	</div>
	        </div>
	      </el-col>
	      <el-col :span="21">
	      	<div>
	      		<div class="headerBox">
	      			<span>搜索：</span>
	      			<el-input class="search-input" size="mini" suffix-icon="el-icon-search" v-model="searchText" @keyup.enter.native="getDataList()" />
	      			<el-button type="primary" size="mini" @click="visible=true">创建</el-button>
	      		</div>
	      	</div>
	      </el-col>
	    </el-row>
	    <el-dialog title="创建" :visible.sync="visible" width="40%" ref="createRuleForm">
	    	<el-form :model="cFormData" :rule="cRules" lable-width="130px">
	    		<el-form-item lable="测试" prop>
	    			
	    		</el-form-item>
	    	</el-form>
	    </el-dialog>
	    
	</div>
</template>
<script>
	export default{
		name:"Drill",
		components:{},
		data(){
			return {
				searchText:'',
				visible:false,
				params:{
					id:1,
					objType:1,
				},
				dataList:[],
				typeList:[
					{
						title:'文本',
						val:1
					},
					{
						title:'图像',
						val:2
					},
					{
						title:'音乐',
						val:3
					},
					{
						title:'视频',
						val:4
					}
				],
		        tableData: [{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }]
		      }
		},
		methods:{
			changeType(type){
				this.params.objType=type;
			},
			async getDataList(){
//				const res = await this.$get(url,params);
//				if(res.state===1){
////					Message.success('成功')
//					this.dataList=res.data;
//				}
			},
		      handleEdit(index, row) {
		        console.log(index, row);
		      },
		      handleDelete(index, row) {
		        console.log(index, row);
		      }
		},
		mounted(){},
	}

</script>

<style scoped="scoped" lang="scss">
	#f {
		/*width: 600px;*/
		/*height: 1000px;*/
		/*background-color: skyblue;*/
		position: relative;
		/*div{
			display: block;
		}*/
		padding: 20px;
		.typeList{
			background-color:gainsboro;
			padding:5px;
			/*h2{
				top: 0;
				left: 0;
				margin-bottom: 20px;
				font-size: 20px;
				/*color: ;*/
			/*}*/
			.typeItem{
				cursor: pointer;
				height: 50px;
				line-height: 50px;
				border-left: 2px solid #FFFFFF;
			}
			.active{
				color: #2d6dff;
				border-left: 2px solid #2D6DFF;
			}
		}
		.headerBox{
			width: 40%;
    		text-align: left;
   	 		padding-left: 20px;
	        .search-input{
				width: 30%;
			}
		}
		
	}
	.title{
		width: 400px;
		background: yellow;
		position: absolute;
		left: 50%;
		margin-left: -200px;
	}
	#mycharts {
		width: 600px;
		height: 400px;
		background-color: blanchedalmond;
		/*margin-top: 50px;*/
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -300px;
		margin-top: -400px;
	}
	.edit-box{
		position: absolute;
		/*top: 60%;*/
		/*bottom: 0;*/
	}
</style>
