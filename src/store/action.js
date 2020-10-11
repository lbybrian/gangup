import Vue from 'vue'
import axios from 'axios'

const actions = {
	//创建指定集合并添加数据
//	postDbUser(jhname,obj){
//		return axios({
//			url:'',
//			methods:'post',
//			data:jhname
//		})
//	},

//登录
adminLogin({commit}){
	return commit('ADMIN_LOGIN')
},
	//获取指定集合数据
	getDbUser(){
		return 
	},
	CsAction({commit}){
		return new Promise((resolve,reject)=>{
			if(1===1){
				resolve(commit('CHANGE_CSDATA'),commit('CHANGE_CSNAME'))
			}
			else{
				reject()
			}
		}).then(()=>{
//			commit('CHANGE_CSNAME')
			console.log('测试成功',this)
		}).catch((err)=>{
			alert(err)
		})
	},
	csData({commit}){
		commit('CHANGE_CSDATA')
	},
	getData(parameter){
		return axios({
			url:'http://127.0.0.1:8090/getdb',
			method:'get',
			data:parameter
		})
//		.then(({data})=>{
////			console.log('验证成功',parameter.state.csdata,data.dataList)
//			console.log('验证成功',parameter.state,data.dataList)
//			return parameter.state,data.dataList
//		})
//		axios.get('http://127.0.0.1:8090/getdb').then(({data})=>{
//			console.log(data)
//		})
	}
}
export default actions
//export {actions}//为什么不行？？？？