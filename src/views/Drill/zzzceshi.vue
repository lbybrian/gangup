<template>
	<div>
		Drill
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<div id="mycharts" ref="mycharts"></div>
	</div>
</template>

<!-- <script src="shine.js"></script> -->
<script>
	var echarts = require("echarts");
	export default{
		name:"Drill",
		data(){
			return {
				data:{
				  title: { 
					 text: '未来一周气温变化',   //图表顶部的标题 
					 subtext: '纯属虚构'    //副标题
				  },
				  tooltip: {   //鼠标悬浮框的提示文字
					  trigger: 'axis'
					},
				  legend: {
					data:['最高气温','最低气温']
				  },
				  xAxis : [{  //x轴坐标数据
					type : 'category',
					boundaryGap : false,
					data : ['周一','周二','周三','周四','周五','周六','周日']
					}],
				   yAxis : [{   //y轴坐标数据
					  type : 'value',
					  axisLabel : {
						formatter: '{value} °C'
					  }
					}],
				  series: [  //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
					{
					  name:"最高气温",
					  type: "line",  //pie->饼状图  line->折线图  bar->柱状图
					  data:[11, 11, 15, 13, 12, 13, 10], 
					  },
					{
					  name:"最低气温",
					  type: "line",  //pie->饼状图  line->折线图  bar->柱状图
					  data:[1, -2, 2, 5, 3, 2, 0],
					  }
				  ]
				}
			}
		},
		mounted(){
			echarts.init(this.$refs.mycharts).setOption(this.data);
		}
	}

</script>

<style scoped="scoped">
	#mycharts{
		    width: 600px;
		    height: 400px;
		    background-color:blanchedalmond;
	}
</style>