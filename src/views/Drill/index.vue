<template>
	<div id="f">
		
		<WordCloud
  		:dataObj="dataObj"
      	ref="exampleTestItem"
      >
      </WordCloud>
		
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
import WordCloud from "./wordCloud";
	export default{
		name:"Drill",
		components:{
//			Helloworld
			WordCloud
		},
		data(){
			return {
				dataObj:{
				changeSign: true,
				data: [{
						"value": 4,
						"name": "Arc Diagram"
					},
					{
						"value": 4,
						"name": "Bar Chart"
					},
					{
						"value": 4,
						"name": "Canvas"
					},
					{
						"value": 4,
						"name": "Chart"
					},
					{
						"value": 4,
						"name": "DAG"
					},
					{
						"value": 4,
						"name": "DG"
					},
					{
						"value": 4,
						"name": "Facet"
					},
					{
						"value": 4,
						"name": "Geo"
					},
					{
						"value": 4,
						"name": "Line"
					},
					{
						"value": 4,
						"name": "MindMap"
					},
					{
						"value": 4,
						"name": "Pie"
					},
					{
						"value": 4,
						"name": "Pizza Chart"
					},
					{
						"value": 4,
						"name": "Punch Card"
					},
					{
						"value": 4,
						"name": "SVG"
					},
					{
						"value": 4,
						"name": "Sunburst"
					},
					{
						"value": 4,
						"name": "Tree"
					},
					{
						"value": 4,
						"name": "UML"
					},

					{
						"value": 3,
						"name": "Chart"
					},
					{
						"value": 3,
						"name": "View"
					},
					{
						"value": 3,
						"name": "Geom"
					},
					{
						"value": 3,
						"name": "Shape"
					},
					{
						"value": 3,
						"name": "Scale"
					},
					{
						"value": 3,
						"name": "Animate"
					},
					{
						"value": 3,
						"name": "Global"
					},
					{
						"value": 3,
						"name": "Slider"
					},
					{
						"value": 3,
						"name": "Connector"
					},
					{
						"value": 3,
						"name": "Transform"
					},
					{
						"value": 3,
						"name": "Util"
					},
					{
						"value": 3,
						"name": "DomUtil"
					},
					{
						"value": 3,
						"name": "MatrixUtil"
					},
					{
						"value": 3,
						"name": "PathUtil"
					},
					{
						"value": 3,
						"name": "G"
					},
					{
						"value": 3,
						"name": "2D"
					},
					{
						"value": 3,
						"name": "3D"
					},
					{
						"value": 3,
						"name": "Line"
					},
					{
						"value": 3,
						"name": "Area"
					},
					{
						"value": 3,
						"name": "Interval"
					},
					{
						"value": 3,
						"name": "Schema"
					},
					{
						"value": 3,
						"name": "Edge"
					},
					{
						"value": 3,
						"name": "Polygon"
					},
					{
						"value": 3,
						"name": "Heatmap"
					},
					{
						"value": 3,
						"name": "Render"
					},
					{
						"value": 3,
						"name": "Tooltip"
					},
					{
						"value": 3,
						"name": "Axis"
					},
					{
						"value": 3,
						"name": "Guide"
					},
					{
						"value": 3,
						"name": "Coord"
					},
					{
						"value": 3,
						"name": "Legend"
					},
					{
						"value": 3,
						"name": "Path"
					},
					{
						"value": 3,
						"name": "Helix"
					},
					{
						"value": 3,
						"name": "Theta"
					},
					{
						"value": 3,
						"name": "Rect"
					},
					{
						"value": 3,
						"name": "Polar"
					},
					{
						"value": 3,
						"name": "Dsv"
					},
					{
						"value": 3,
						"name": "Csv"
					},
					{
						"value": 3,
						"name": "Tsv"
					},
					{
						"value": 3,
						"name": "GeoJSON"
					},
					{
						"value": 3,
						"name": "TopoJSON"
					},
					{
						"value": 3,
						"name": "Filter"
					},
					{
						"value": 3,
						"name": "Map"
					},
					{
						"value": 3,
						"name": "Pick"
					},
					{
						"value": 3,
						"name": "Rename"
					},
					{
						"value": 3,
						"name": "Filter"
					},
					{
						"value": 3,
						"name": "Map"
					},
					{
						"value": 3,
						"name": "Pick"
					},
					{
						"value": 3,
						"name": "Rename"
					},
					{
						"value": 3,
						"name": "Reverse"
					},
					{
						"value": 3,
						"name": "sort"
					},
					{
						"value": 3,
						"name": "Subset"
					},
					{
						"value": 3,
						"name": "Partition"
					},
					{
						"value": 3,
						"name": "Imputation"
					},
					{
						"value": 3,
						"name": "Fold"
					},
					{
						"value": 3,
						"name": "Aggregate"
					},
					{
						"value": 3,
						"name": "Proportion"
					},
					{
						"value": 3,
						"name": "Histogram"
					},
					{
						"value": 3,
						"name": "Quantile"
					},
					{
						"value": 3,
						"name": "Treemap"
					},
					{
						"value": 3,
						"name": "Hexagon"
					},
					{
						"value": 3,
						"name": "Binning"
					},
					{
						"value": 3,
						"name": "kernel"
					},
					{
						"value": 3,
						"name": "Regression"
					},
					{
						"value": 3,
						"name": "Density"
					},
					{
						"value": 3,
						"name": "Sankey"
					},
					{
						"value": 3,
						"name": "Voronoi"
					},
					{
						"value": 3,
						"name": "Projection"
					},
					{
						"value": 3,
						"name": "Centroid"
					},
					{
						"value": 3,
						"name": "H5"
					},
					{
						"value": 3,
						"name": "Mobile"
					},
				],
				dataUrl:'https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json',
					imageMask:'',
					wordField:'name',
					weightField:'value',
					colorField:'name',
					interactions:[{ type: 'element-active' }],
					state:{
						active: {// 这里可以设置 active 时的样式
		          style: {
		            lineWidth: 3,
		          }
						}
					},
					wordStyle:{
							fontFamily: 'Verdana',
							fontSize: [18, 32],
					},
			},
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