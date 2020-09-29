const filters = {
	imgUrl(v){
		return "http://www.lgstatic.com/"+v;
	}
}
export default{
	install(Vue){
		for(let key in filters){
			Vue.filter(key,filters[key])
		}
	},
//	//获取及时时间
//	getTime(){
//		let date = new Date();
//		return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
//	}
}

