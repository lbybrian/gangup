import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	search:"",
	type:"0"
}

const mutations = {
	storeSearch(state,params){
		state.search = params.search;
		state.type = params.type;
	},
}

const actions = {
	commitSearch({commit},params){
		commit('storeSearch',params);
	}
}

const getters = {
	getSearch: state =>{
		return state.search;
	},
	getType: state =>{
		return state.type;
	}
}

export default new Vuex.Store({
	actions,
	getters,
	mutations,
	state
})
