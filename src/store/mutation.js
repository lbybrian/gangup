import state from './state'
//import Vue from 'vue'

const mutations = {
	
	CHANGE_CSNAME(state,obj){
		state.csname='外部改变测试name'
		console.log('执行到了mutations')
	},
	CHANGE_NAME(){
		state.name='外部改变name'
	},
	CHANGE_CSDATA(){
		state.csdata='外部改变测试data'
	},
	CHANGE_DATA(){
		state.name='外部改变data'
	},
//	ADMIN_LOGIN(){
//		let that=Vue;
//        that.$router.push({
//          path: '/'
//        })
//      }

}
export default mutations

//import state from './state'
//export default{
//	mutations:{
//	
//		CHANGE_CSNAME(){
//			state.csname='外部改变测试name'
//		},
//		CHANGE_NAME(){
//			state.name='外部改变name'
//		},
//		CHANGE_CSDATA(){
//			state.csdata='外部改变测试data'
//		},
//		CHANGE_DATA(){
//			state.name='外部改变data'
//		},
//	
//	}
//}
 



