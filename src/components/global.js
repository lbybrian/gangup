import Vue from 'vue'

const requireCom = require.context('./Common',true,/\.vue/)
// 字符串首字母大写处理
requireCom.keys().forEach(key=>{
	function strUp(str){
      return str.charAt(0).toUpperCase()+str.slice(1)
    }
// 获取单个组件内容
const _com = requireCom(key)
// 获取组件名称
const _comName = strUp(key.replace(/^\.\//,'').replace(/\.\w+$/,''));
// 注册到vue上
Vue.component(_comName,_com.default || _com )
})



