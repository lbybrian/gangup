<template>
	<div id="f">
		<div class="title">Drill</div><br />
		<div class="title">第一个图表为父组件写入</div><br />
		<div id="mycharts" ref="mycharts"></div>
		
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
				// data: {
				//         title: {
				//           text: "ECharts 入门示例"
				//         },
				//         tooltip: {},
				//         xAxis: {
				//           data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				//         },
				//         yAxis: {},
				//         series: [
				//           {
				//             name: "销量",
				//             type: "bar",
				//             data: [5, 20, 36, 10, 10, 20]
				//           }
				//         ]
				//       }
				
				// data:{
				//   title: { 
				// 	 text: '要开黑的人群比例',   //图表顶部的标题 
				// 	 subtext: '快来！'    //副标题
				//   },
				//   tooltip: {   //鼠标悬浮框的提示文字
				// 	  trigger: 'axis'
				// 	},
				//   legend: {
				// 	data:['垃圾菜狗','大神']
				//   },
				//   xAxis : [{  //x轴坐标数据
				// 	type : 'category',
				// 	boundaryGap : false,
				// 	data : ['周一','周二','周三','周四','周五','周六','周日']
				// 	}],
				//    yAxis : [{   //y轴坐标数据
				// 	  type : 'value',
				// 	  axisLabel : {
				// 		formatter: '{value} (万)'
				// 	  }
				// 	}],
				//   series: [  //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
				// 	{
				// 	  name:"垃圾菜狗",
				// 	  type: "line",  //pie->饼状图  line->折线图  bar->柱状图
				// 	  data:[11, 11, 15, 13, 12, 13, 10], 
				// 	  },
				// 	{
				// 	  name:"大神",
				// 	  type: "line",  //pie->饼状图  line->折线图  bar->柱状图
				// 	  data:[1, -2, 2, 5, 3, 2, 0],
				// 	  }
				//   ]
				// }
				
				
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
		}
	}

</script>

<style scoped="scoped">
	#f {
		/*width: 600px;*/
		height: 1000px;
		background-color: skyblue;
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
</style>