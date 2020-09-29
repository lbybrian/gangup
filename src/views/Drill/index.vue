<template>
	<div id="f">
		<div class="title">第一个图表为父组件写入</div><br />
		<div class="echarts-box">
			<div id="mycharts" ref="mycharts"></div>
		</div>
		<div class="edit-box">
		  <el-table :data="tableData" style="width: 100%">
			<el-table-column label="日期" width="180">
				<template slot-scope="scope">
					<i class="el-icon-time"></i>
					<span style="margin-left: 10px">{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="姓名" width="180">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.name }}</p>
						<p>住址: {{ scope.row.address }}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.name }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
		<!--<Helloworld />-->
	</div>
</template>

<!-- <script src="shine.js"></script> -->
<script>
	
//	import Helloworld from  '@/components/Helloworld.vue';
	export default{
		name:"Drill",
		components:{
//			Helloworld
		},
		data(){
			return {
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
		      handleEdit(index, row) {
		        console.log(index, row);
		      },
		      handleDelete(index, row) {
		        console.log(index, row);
		      }
		},
		mounted(){
			
		    // this.$echarts.init(this.$refs.mycharts).setOption(this.data);
			
			     let mychart = this.$echarts.init(this.$refs.mycharts);
			     mychart.showLoading();
			     setTimeout(function() {
			      let self = this;
			      self.data = {     
			          series : [
			              {
			                  name: '访问来源',
			                  type: 'pie',
			                  radius: '55%',
			                  roseType: 'angle',
			                  backgroundColor: '#2c343c',
			                  itemStyle: {
			                  // 阴影的大小
			                  shadowBlur: 200,
			                  // 阴影水平方向上的偏移
			                  shadowOffsetX: 30,
			                  // 阴影垂直方向上的偏移
			                  shadowOffsetY: 40,
			                  emphasis: {shadowBlur: 800,},
			                  // 阴影颜色
			                  shadowColor: 'rgba(0, 0, 0, 0.5)',                 
			                  }, 
			                  textStyle: {
			                        color: 'rgba(255, 255, 255, 0.3)'
			                      },   
			                  labelLine: {
			                        lineStyle: {
			                            color: 'rgba(255, 255, 255, 0.3)'
			                        }
			                    }, 
			                  // 高亮样式。
			                  emphasis: {
			                      itemStyle: {
			                          // 高亮时点的颜色。
			                          color: 'blue'
			                      },
			                      label: {
			                          show: true,
			                          // 高亮时标签的文字。
			                          color: 'black'
			                      }
			                  },           
			                  data:[
			                      {value:235, name:'视频广告'},
			                      {value:274, name:'联盟广告'},
			                      {value:310, name:'邮件营销'},
			                      {value:335, name:'直接访问'},
			                      {value:400, name:'搜索引擎'}
			                  ]
			              }
			          ]
			     }; 
			     mychart.hideLoading();
			     mychart.setOption(this.data);
			    }, 3000);
			     console.log(this.a);
			     console.log(this.data); 
			     
		},
		
	}

</script>

<style scoped="scoped">
	#f {
		/*width: 600px;*/
		height: 1000px;
		/*background-color: skyblue;*/
		position: relative;
		/*div{
			display: block;
		}*/
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