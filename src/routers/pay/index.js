export default {
    path : '/pay',
    component : () => import('@/views/Pay'),
	meta:{
	    isAuthorization:true,
	},
	redirect:'/pay/message',
    children:[
	    {
	    	path:'edit',
	    	component:()=>import('@/views/Pay/Edit')
	    },
	    {
	    	path:'message',
	    	component:()=>import('@/views/Pay/Message')
	    },
	    {
	    	path:'jsdom',
	    	component:()=>import('@/views/Pay/JsDom')
	    },
	    {
	    	path:'shoppingTrolley',
	    	component:()=>import('@/views/Pay/ShoppingTrolley')
	    },
	    {
	    	path:'shuttle',//穿梭框
	    	component:()=>import('@/views/Pay/Shuttle')
	    },
    ]
}