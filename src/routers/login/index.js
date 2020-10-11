export default {
    path : '/login',
//  component : () => import('@/components/Login/LoginRouter'),//测试登录
    component : () => import('@/components/Login'),
    redirect:'/login/sign',
    meta:{
    	isAuthorization:false
    },
    children:[
	    {
	    	path:'enter',
	    	component:()=> import('@/components/Login/Enter')
	    },
	    {
	    	path:'ex',
	    	component:()=> import('@/components/Login/Enter/ex.vue')
	    },
	    {
	    	path:'sign',
	    	component:()=> import('@/components/Login/Sign')
	    },
	    {
	    	path:'form',
	    	component:()=> import('@/components/Login/Form')
	    },
	    {
	    	path:'*',
	    	redirect:'enter'
	    }
    ],
}