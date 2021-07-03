<template>
	<div class="mainbox" style="width: 100%; height: 100%;">
		<!--<div class="time">{{date}}</div>-->
		<TimeLoose />
		<div id="map" style="height:850px;"></div>
	</div>
</template>

<script>
	import * as $ from 'jquery';
	import * as echarts from 'echarts';
	import 'echarts-gl';
	import TimeLoose from '@/components/TimeLoose'

export default {
	data() {
		return {
			date: new Date(),
		}
	},
	components:{
		TimeLoose
	},
	beforeDestroy(){
		if (this.timer) {
			clearInterval(this.timer);
		}
	},
	mounted() {
		//时间
		let that = this;
		this.timer = setInterval(function() {
			that.date = new Date().toLocaleString();
		});
		//地图
		var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
		var chartDom = document.getElementById('map');
		var myChart = echarts.init(chartDom);
		var option;

		$.getJSON(ROOT_PATH + '/data-gl/asset/data/flights.json', function(data) {

			function getAirportCoord(idx) {
				return [data.airports[idx][3], data.airports[idx][4]];
			}
			var routes = data.routes.map(function(airline) {
				return [
					getAirportCoord(airline[1]),
					getAirportCoord(airline[2])
				];
			});

			myChart.setOption({
				backgroundColor: '#000',
				globe: {
					baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
					heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',

					shading: 'lambert',

					light: {
						ambient: {
							intensity: 0.4
						},
						main: {
							intensity: 0.4
						}
					},

					viewControl: {
						autoRotate: true, //是否自转
					}
				},
				series: {

					type: 'lines3D',

					coordinateSystem: 'globe',

					blendMode: 'lighter',

					lineStyle: {
						width: 1,
						color: 'rgb(50, 50, 150)',
						opacity: 0.1
					},

					data: routes
				}
			});
		});

		option && myChart.setOption(option);

	}
	
}
</script>

<style>
</style>