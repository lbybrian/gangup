<template>
  <div>
    <div ref="gisMap" id="gisMap" :style="cssType || 'width:100%;height:400px;'"></div>
  </div>
</template>

<script>
// import mapboxgl from 'mapbox-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
// import MapboxLanguage from '@mapbox/mapbox-gl-language'

import "ol/ol.css";
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import { defaults as defaultControls, FullScreen,ScaleLine, ZoomSlider } from 'ol/control.js';
import Projection from 'ol/proj/Projection';
import {fromLonLat} from 'ol/proj';
import { log } from '@antv/g2plot/lib/utils';
import { LineString, MultiPolygon, Point, Polygon } from "ol/geom";
import Feature from "ol/Feature";
import { Heatmap as HeatmapLayer, Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import Overlay from "ol/Overlay";
import {
    Circle as CircleStyle,
    Fill,
    Icon,
    Stroke,
    Style,
    Text
} from "ol/style";

export default {
  name: 'olgismap',
  props: {
    cssType: Object,
  },
  data() {
    return {
      map: '',
      mapData: {
        geojson: {
          features: [
            {
              type: 'Point',
              coordinates: [116.382422,39.898995],//坐标
              description: '首都北京',//描述
              color: "black",
            },
          ],
        },
        center: [116.382422,39.898995],
        zoom: 4,
        minZoom: 2,
        maxZoom: 19,
      },
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.init();
      this.showPoint(this.mapData,this.map);
    })
  },
  methods: {
    init() {
      let that = this
      this.map = new Map({
        target: 'gisMap',
        view: new View({
          center: fromLonLat(that.mapData.center),
          zoom: that.mapData.zoom,
          minZoom: that.mapData.minZoom || 2,
          maxZoom: that.mapData.maxZoom || 19,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          // 使用谷歌地图或者本地地图
          // new TileLayer({
          //   source: new XYZ({
          //     url: 'http://10.170.130.230:8091/server/map/{x}/{y}/{z}'
          //     // url: "http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G",
          //   })
          // }),
          // new TileLayer({
          //   source: new XYZ({
          //     url: 'http://10.170.130.230:8091/server/mapImage/{x}/{y}/{z}'
          //     // url: "http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G",
          //   })
          // }), 
        ],
      });
    },

    showPoint(data,map) {
      let features = [];
      data.geojson.features.forEach(item => {
        console.log(item);
        let location = fromLonLat(item.coordinates);
        let feature = new Feature({
          geometry: new Point(location),
          description: item.description,
          color: item.color,
          id: Math.ceil(Math.random() * 1000)
        });
        features.push(feature);
      });
      const styleFunction = function(feature) {
        const properties = feature.getProperties();
        const color = properties.color;
        let image = new CircleStyle({
            fill: new Fill({
                color: color ? color : "red",
            }),
            stroke: new Stroke({
                color: "white",
                width: 2
            }),
            radius: 4
        });
        // if (map.getView().getZoom() > 4) {
        //     switch (type) {
        //         case "原油":
        //             image = new Icon({
        //                 anchor: [0.6, 0.9],
        //                 src: require("@/assets/img/crudeOil.png")
        //             });
        //             break;
        //         case "天然气":
        //             image = new Icon({
        //                 anchor: [0.6, 0.9],
        //                 src: require("@/assets/img/naturalGas.png")
        //             });
        //             break;
        //         default:
        //             image = new Icon({
        //                 anchor: [0.6, 0.9],
        //                 src: require("@/assets/img/default.png")
        //             });
        //     }
        // }
        const styleConf = {
            image: image
        };
        let style = new Style(styleConf);
        return style;
      };
      var source = new VectorSource({});
      var vector = new VectorLayer({
        source: source,
        style: styleFunction,
        id: "point"
      });
      source.addFeatures(features);
      map.addLayer(vector);
    },








    // 初始化
    // init() {
    //   let that = this
    //   mapboxgl.accessToken =
    //     'pk.eyJ1Ijoia3hzNTU1IiwiYSI6ImNraW9kM2FkMjE5c3YycWxiZnRjaWJnb2MifQ.QlQsQo9VBaaNCmGRbUUTBg' //引用官方地图，账户Token
    //   const map = new mapboxgl.Map({
    //     container: this.$refs.basicMapbox, // 内容展示区域
    //     style: 'mapbox://styles/kxs555/cki5l0a6t6a4n19p5knj7cmnw', //地图的 Mapbox 配置样式，详见官方文档。方式一：官方地图
    //     // style: {//方式二：离线地图
    //     //   version: 8,//样式规范版本号必须为8，不能更改
    //     //   sources: {},//资源此处资源和图层在load里加载
    //     //   layers: []//图层
    //     // },
    //     center: that.mapData.center, //地图展示中心点
    //     zoom: that.mapData.zoom, //初始缩放比
    //     dragRotate: false, //禁止鼠标右键旋转地图
    //   })
    //   // 设置语言
    //   var language = new MapboxLanguage({ defaultLanguage: 'zh' }) //初始化语言为中文zh
    //   map.addControl(language) //添加到地图
    //   //画锚点--start
    //   var size = 35
    //   var pulsingDot = {
    //     width: size,
    //     height: size,
    //     data: new Uint8Array(size * size * 4),

    //     onAdd: function () {
    //       var canvas = document.createElement('canvas')
    //       canvas.width = this.width
    //       canvas.height = this.height
    //       this.context = canvas.getContext('2d')
    //     },
    //     render: function () {
    //       var duration = 1000
    //       var t = (performance.now() % duration) / duration
    //       var radius = (size / 2) * 0.3
    //       var outerRadius = (size / 2) * 0.5 * t + radius
    //       var context = this.context

    //       // draw outer circle
    //       context.clearRect(0, 0, this.width, this.height)
    //       context.beginPath()
    //       context.arc(
    //         this.width / 2,
    //         this.height / 2,
    //         outerRadius,
    //         0,
    //         Math.PI * 2
    //       )
    //       context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')'
    //       context.fill()
    //       // draw inner circle
    //       context.beginPath()
    //       context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2)
    //       context.fillStyle = '#ff0202'
    //       context.strokeStyle = 'white'
    //       context.lineWidth = 1 + 4 * (1 - t)
    //       context.fill()
    //       context.stroke()
    //       this.data = context.getImageData(0, 0, this.width, this.height).data
    //       map.triggerRepaint()
    //       return true
    //     },
    //   }
    //   //画锚点--end

    //   //地图所需资源加载
    //   map.on('load', function () {
    //     //mapBox添加离线地图资源--start
    //     // 此处为加载离线mapBox地图（服务器地图）
    //     // map.addSource("google.tile", {
    //     //   type: "raster",
    //     //   tiles: ["http://21.5.4.203:8085/MapServer?lyr=sh&x={x}&y={y}&z={z}"],//离线部署地址
    //     //   tileSize: 256
    //     // });
    //     // map.addLayer({
    //     //   id: "google",
    //     //   type: "raster",
    //     //   source: "google.tile",
    //     // });
    //     //mapBox添加离线地图资源--end

    //     // 加载锚点--start
    //     map.addImage('pulsing-dot', pulsingDot)
    //     map.addSource('points', {
    //       //第一个参数对应addLayer的id
    //       type: 'geojson',
    //       data: that.mapData.geojson,
    //     })
    //     map.addLayer({
    //       id: 'points',
    //       type: 'symbol',
    //       source: 'points',
    //       layout: {
    //         'visibility': that.mapData.pointsVisibility, //显示visible，隐藏none
    //         'icon-image': 'pulsing-dot', //对应addImage第一个参数
    //         'icon-allow-overlap': false, //是否可以重叠
    //       },
    //     })
    //     //加载锚点--end

    //     //添加线条 --start
    //     map.addSource('lineSS', {
    //       type: 'geojson',
    //       data: that.mapData.lineBox,
    //     })
    //     map.addLayer({
    //       id: 'lineSS',
    //       type: 'line',
    //       source: 'lineSS',
    //       layout: {
    //         'visibility': that.mapData.lineSvisibility, //显示visible，隐藏none
    //         'line-join': 'round',
    //         'line-cap': 'round',
    //         // 'icon-allow-overlap': false,
    //       },
    //       paint: {
    //         'line-color': '#F7455D',
    //         'line-width': 2,
    //       },
    //     })
    //     //添加线条 --end
    //     //加载浮点信息提示--start
    //     const popup = new mapboxgl.Popup({
    //       closeButton: false, //信息弹窗右上角关闭按钮
    //       closeOnClick: false, //点击地图关闭弹窗
    //     })
    //     //获取焦点触发
    //     map.on('mouseenter', 'points', function (e) {
    //       map.getCanvas().style.cursor = 'pointer'
    //       var coordinates = e.features[0].geometry.coordinates.slice()
    //       var description = e.features[0].properties.description
    //       while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
    //       }
    //       popup.setLngLat(coordinates).setHTML(description).addTo(map)
    //     })
    //     //失去焦点触发
    //     map.on('mouseleave', 'points', function () {
    //       map.getCanvas().style.cursor = ''
    //       popup.remove()
    //     })
    //     //加载浮点信息提示--end
    //   })
    // },
    //数据更新
    // dataUpdate(geo) {
    //   this.mapData.lineBox.features[0].geometry.coordinates=[]
    //   if (geo && geo.geojson.length > 0) {
    //     for (let i = 0; i < geo.geojson.length; i++) {
    //       this.mapData.geojson.features[i] = {
    //         type: 'Feature',
    //         properties: {
    //           description: geo.geojson[i].time + geo.geojson[i].description,
    //         },
    //         geometry: {
    //           type: 'Point',
    //           coordinates: geo.geojson[i].coordinates,
    //         },
    //       }
    //       this.mapData.lineBox.features[0].geometry.coordinates.push(geo.geojson[i].coordinates)
    //     }
    //     console.log(this.mapData.lineBox)
    //     this.mapData.pointsVisibility = geo.pointsVisibility
    //     this.mapData.lineSvisibility = geo.lineSvisibility
    //     this.mapData.zoom = geo.zoom
    //     // this.mapData.center = this.mapData.geojson.features[0].geometry.coordinates
    //     this.init()
    //   }
    // },
  },
}
</script>

<style scoped>
.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
</style>
