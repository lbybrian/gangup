<template>
	<div class="ele">
		 <el-container>
      <el-aside width="230px" id="menuClass">
        <!--<el-menu :default-active="'1'" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true" @select="selectHandle" background-color="rgba(8,58,74,0.7)" text-color="#47AFAE" active-text-color="#02feff">-->
        <!--<el-menu :default-active="this.$router.path" router >-->
        <el-menu router >
          <el-menu-item index="/" class="logomenu">
            <template>
              <span style="color: #47AFAE; font-size: 16px">ALLTHISHEHE</span>
            </template>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span slot="title">ALL</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/player/formInfo" @click="setFormData()">formInfo表单</el-menu-item>
              <el-menu-item index="/player/wordCloud">wordCloud词云图</el-menu-item>
              <el-menu-item index="/player/sanKey">formInfo桑基图</el-menu-item>
              <el-menu-item index="/player/gaugeChart">gaugeChart仪表盘</el-menu-item>
              <el-menu-item index="/player/scatterChart">scatterChart散点图</el-menu-item>
              <el-menu-item index="/player/mapBox">mapBox散点图</el-menu-item>
              <el-menu-item index="/player/olGisMap">olGisMap散点图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-notebook-1"></i>
              <span slot="title">THIS</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/log">立即查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          
			<el-submenu index="3">
            <template slot="title">
              <i class="el-icon-notebook-1"></i>
              <span slot="title">HEHE</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/log">立即查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          
        </el-menu>
      </el-aside>

        <el-main style="overflow-x: hidden">
        	<!--<FormInfo />-->
			<!-- <wordCloud :dataObj='dataInfo' ></wordCloud> -->
          <transition>
            <router-view></router-view>
          </transition>
        </el-main>
      

    </el-container>
	</div>
</template>

<script>
	// import FormInfo from '@/components/Ggzj/formInfo'
	// import wordCloud from '@/components/Ggzj/wordCloud'
	
	export default {
	  name: 'Player',
	  data () {
	    return {
				dataInfo: {
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
					dataUrl: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json',
					imageMask: '',
					wordField: 'name',
					weightField: 'value',
					colorField: 'name',
					interactions: [{
						type: 'element-active'
					}],
					state: {
						active: { // 这里可以设置 active 时的样式
							style: {
								lineWidth: 3,
							}
						}
					},
					wordStyle: {
						fontFamily: 'Verdana',
						fontSize: [18, 32],
					},
				}
			}
	  },
	  created () {},
	  mounted () {},
	  components: {
	  	// FormInfo,
	  	// wordCloud
	  },
	  methods: {
		  setFormData(){
      var tData = { ...this.basicData };
      tData.labelWidth = "90px";
      tData.data = [
        {
          name: "单行文本",
          value: "",
          type: "text",
          must: true,
          items: [
            {
              placeholder: "请输入单行文本",
            },
          ],
        },
        {
          name: "多行文本",
          value: "",
          type: "textarea",
          items: [
            {
              placeholder: "请输入文本",
            },
          ],
        },
        {
          name: "只读文本",
          value: "你好，我是不可编辑的文本",
        },
        {
          name: "时间段",
          value: "",
          type: "dateRange",
          items: [""],
        },
        {
          name: "数字输入",
          value: "",
          type: "number",
          must: true,
          checkRule: [
            {
              message: "输入值必须大于2。",
              callback: function (v) {
                var ret = 0;
                if (v < 2) {
                  ret = 2;
                }
                return ret;
              },
            },
          ],
          items: [""],
        },
        {
          name: "多选输入",
          value: "",
          type: "checkbox",
          items: ["选项", "选项", "选项", "选项", "选项", "选项1"],
          folding: false,
        },
        {
          name: "单选输入",
          value: "",
          type: "radio",
          items: ["选项1", "选项2", "选项3", "选项4", "选项5", "选项6"],
        },
        {
          name: "选择框输入",
          value: "",
          type: "select",
          items: [
            {
              options: ["选项1", "选项2", "选项3", "选项4", "选项5", "选项6"],
            },
          ],
        },
        {
          name: "时间输入",
          value: "",
          type: "datePicker",
          items: [""],
        },
        {
          name: "开关输入",
          value: "",
          type: "switch",
          items: [""],
        },
        {
          name: "显示标签",
          value: "",
          type: "tags",
          items: [
            {
              value: [
                {
                  name: "标签1",
                  type: "primary",
                },
                {
                  name: "标签2",
                  type: "primary",
                },
                {
                  name: "标签3",
                  type: "primary",
                },
              ],
            },
          ],
        },
        {
        	name:"提交重置",
        	value:"",
        	type:"button",
        	items:[
        		{
        			value:[
        				{
				        	name:"提交",
				        	type:"button1",
				        },
        				{
				        	name:"重置",
				        	type:"button2",
				        }
        			]
        		}
        	],
        },
      ];
      this.updateExampleData(tData);
    }
	  }
	}
</script>


<style scoped>
/* 这里是element时间选择器的公共样式 */

.dateRange >>> .el-date-table td {
  padding: 0;
}

.dateRange >>> .el-date-range-picker__content {
  padding: 10px;
}

.dateRange >>> .el-date-table th {
  font-size: 12px;
  padding: 0;
}

.dateRange >>> .el-date-range-picker__header div {
  font-size: 14px;
}

.dateRange >>> .el-date-editor .el-range-input {
  width: 70px;
  color: #f0f8ff;
  background: #01131b;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->