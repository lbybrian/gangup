import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import about from "./about";
import appdownload from "./appdownload";
import drill from "./drill";
import pay from "./pay";
import player from "./player";
import square from "./square";
//import rfloatr from "./rfloatr";
import login from "./login";
import chatroom from "./chatroom";
import zlinscs from "./zlinscs";
import rollingimg from "./rollingimg";
//import nav from "./nav";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",//两种路由模式（hash带#）
  base: process.env.BASE_URL,//公共地址前缀，默认为/
//base: "/hehe",//公共地址前缀，默认为/
  
//meta:{
//	isAuthorization:"kk"
//},
  routes:[
//	nav,
  	home,
  	about,
  	appdownload,
  	pay,
  	player,
//	rfloatr,
  	square,
  	drill,
  	login,
  	chatroom,
  	zlinscs,
  	rollingimg,
  	{
    path: "/*",
    redirect: "home"
  },
//{
//  path: "/home/*",/无意义
//  redirect: "home"
//}
  ]
});

//router.beforeEach((to,from,next)=>{
//	if(to.meta.isAuthorization){
//		next('/login')
//	}
//	else if(!to.meta.isAuthorization){
//		next('/pay')
//	}
//	else{
//		next()
//	}
//})
export default router