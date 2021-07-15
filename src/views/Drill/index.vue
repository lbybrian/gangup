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
	        		@click="changeType(item)"
	        		>
	        		{{item.title}}
	        	</div>
	        </div>
	      </el-col>
	      <el-col :span="21">
	      	<div class="r">
	      		<div class="headerBox">
	      			<span>搜索：</span>
	      			<el-input class="search-input" size="mini" suffix-icon="el-icon-search" v-model="searchText" @keyup.enter.native="getDataList()" />
	      			<el-button type="primary" size="mini" @click="visible=true">创建</el-button>
	      		</div>
	      		
					<!--<img class="csxz" :src="csxz" />-->
				<div>
					<el-table :data="tableData">
				      	<el-table-column
					        prop="name"
					        label="姓名"
					        width="80">
				      	</el-table-column>
						<el-table-column
					        prop="address"
					        label="地址"
					        width="280">
				      	</el-table-column>
				      	<el-table-column
					        prop="data"
					        label="操作"
					        solt="operation"
					        width="80">
					        <template slot-scope="scope">
					        	<div v-for="item in scope.row.operation">
									<el-link slot="operation" :underline="false" type='primary' :href="scope.row.newsContent">{{scope.row.operation[0]}}</el-link>
									<el-popconfirm title="确认删除？" @onConfirm="deleteMode(scope.row.id)">
									  	<!--<el-button slot="reference" type='danger'>{{scope.row.operation[1]}}</el-button>-->
										<el-link slot="reference" :underline="false" type='danger'>{{scope.row.operation[1]}}</el-link>
									</el-popconfirm>
					        	</div>
					        </template>
					        
				      	</el-table-column>
					</el-table>
				</div>
	      	</div>
	      </el-col>
	    </el-row>
	    
	    <el-row>
	    	
	    </el-row>
	    
	    <el-dialog title="创建" :visible.sync="visible" width="40%" ref="createRuleForm">
	    	<el-form :model="cFormData" :rule="cRules" lable-width="130px">
	    		<el-form-item lable="测试" prop>
	    			<el-upload
    				  class="upload-demo"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :before-remove="beforeRemove"
					   multiple
					  :limit="3"
					  :on-exceed="handleExceed"
					  :file-list="fileList">
					  <el-button size="small" type="primary">点击上传</el-button>
					  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
	    			</el-upload>
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
				csxz: require("@/assets/imgs/108/35512783_2.jpg"),
				searchText:'',
				visible:false,
				params:{
					id:1,
					objType:1,
				},
				fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
				cFormData:[],
				cRules:[],
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
		        	id:1,
		          date: [],
		          name: '文本',
		          address: '文本文本上海市普陀区金沙江路 1518 弄',
		          operation:'详情',
		          reference:'删除'
		        }, {
		        	id:2,
		          date: [],
		          name: '图像',
		          address: '图像图像上海市普陀区金沙江路 1517 弄',
		          operation:['详情','删除']
		        }, {
		        	id:3,
		          date: [],
		          name: '音乐',
		          address: '音乐音乐上海市普陀区金沙江路 1519 弄',
		          operation:['详情','删除']
		        }, {
		        	id:4,
		          date: [],
		          name: '视频',
		          address: '视频视频上海市普陀区金沙江路 1516 弄',
		          operation:['详情','删除']
		        }]
		      }
		},
		methods:{
			changeType(item){
				this.params.objType=item.val;
				this.searchText=item.title;
				this.getDataList();
			},
			async getDataList(){
				this.tableData=[{
		        	id:1,
		          date: [],
		          name: '文本',
		          address: '文本文本上海市普陀区金沙江路 1518 弄'
		        }, {
		        	id:2,
		          date: [],
		          name: '图像',
		          address: '图像图像上海市普陀区金沙江路 1517 弄'
		        }, {
		        	id:3,
		          date: [],
		          name: '音乐',
		          address: '音乐音乐上海市普陀区金沙江路 1519 弄'
		        }, {
		        	id:4,
		          date: [],
		          name: '视频',
		          address: '视频视频上海市普陀区金沙江路 1516 弄'
		        }];
				await this.tableData.map(item=>{
//					console.log(item);
					if(this.searchText===item.name){
//						this.tableData=[].push(item)
						this.tableData=[];
						this.tableData.push(item);
					}	
//					console.log(this.tableData);
				})
//				const res = await this.$get(url,params);
//				if(res.state===1){
////					Message.success('成功')
//					this.dataList=res.data;
//				}
			},
			deleteMode(){
				
			},
			  handleEdit(index, row) {
			    console.log(index, row);
			  },
			  handleDelete(index, row) {
			    console.log(index, row);
			  },
			  //弹窗上传文件相关4个
			  handleRemove(file, fileList) {
			    console.log(file, fileList);
			  },
			  handlePreview(file) {
			    console.log(file);
			  },
			  handleExceed(files, fileList) {
			    this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			  },
			  beforeRemove(file, fileList) {
			    return this.$confirm(`确定移除 ${ file.name }？`);
			  }
		},
		mounted(){},
	}

</script>

<style scoped="scoped" lang="scss">
@keyframes Tm{
	0%{opacity: 0.1;}
	20%{opacity: 0.5;}
	40%{opacity: 0.7;}
	60%{opacity: 1;}
	80%{opacity: 0.5;}
	100%{opacity: 0.1;}
}
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
		.r{
			
			.headerBox{
				width: 40%;
	    		text-align: left;
	   	 		padding-left: 20px;
		        .search-input{
					width: 30%;
				}
			}
			.csxz{
				position: absolute;
				right: 0;
				animation: Tm 10s linear infinite !important;
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
