import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//const state = {
//	csdata:'测试vuex-state',
//	csname:'王晓琦可爱',
//	csage:24,
//	csadd:1,
//	csnum:1,
//	cssum:1,
//	data:'正式vuex-state',
//	name:'正式王晓琦可爱',
//	age:240,
//	add:10,
//	num:10,
//	sum:10,
//}

//const mutations = {
//	
//	CHANGE_CSNAME(){
//		state.csname='改变测试name'
//	},
//	CHANGE_NAME(){
//		state.name='改变name'
//	},
//	CHANGE_CSDATA(){
//		state.csdata='改变测试data'
//	},
//	CHANGE_DATA(){
//		state.name='改变data'
//	},
//
//}
import state from './state'
import mutations from './mutation'
//import {mutations} from './mutation.js'//不可以
import {getter} from './getter'
import actions from './action'


export default new Vuex.Store({
state,
mutations,
//getters,
actions,
modules: {
}

  

})
