import Vue from 'vue'
//import Vuex from 'vuex'
//Vue.use(Vuex)
import App from '@/App.vue'
import router from '@/routers'
import store from '@/store';
import filter from '@/filters';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts';//全局引入
Vue.prototype.$echarts = echarts;// 这种方法是直接绑定在vue实例上，所以在项目中任何页面，直接 this.$echarts 即可

import axios from 'axios';
Vue.prototype.$axios = axios;
//import {layui,layuicss} from 'layui-src';

//import jquery from 'jquery';

Vue.use(filter);
//Object.keys(filter).forEach(key=>{
//	Vue.filter(key,filter[key])
//})

const bus = new Vue();
Vue.prototype.$bus=bus;


Vue.config.productionTip = false;

Vue.use(ElementUi);
new Vue({
  router,
  store,
//filter,
//   echarts,
  // ElementUi,
//jquery,
//$,
  render: h => h(App)
}).$mount('#app');
