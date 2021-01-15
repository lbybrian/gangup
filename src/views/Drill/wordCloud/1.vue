<template>
  <div>
  	<WordCloud
  		:dataObj="dataObj"
      ref="exampleTestItem"
      >
      </WordCloud>
  </div>
</template>

<script>
import WordCloud from "@/common/wordCloud";
export default {
  name: '',
data() {
		return {
			dataObj: {
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
			}
  	}
  },
	components: {
		WordCloud,
	},
	created(){},
	mounted() {},
	methods: {
    updateData(data) {
      this.dataObj.imageMask = data.imageMask;
      this.$refs.exampleTestItem.updateData(this.dataObj);
    },
  },
}
</script>
