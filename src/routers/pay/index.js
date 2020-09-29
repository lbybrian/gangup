export default {
    path : '/pay',
    component : () => import('@/views/Pay'),
	meta:{
	    isAuthorization:true,
	},
    children:[
	    {
	    	path:'edit',
	    	component:()=>import('@/views/Pay/Edit')
	    },
	    {
	    	path:'message',
	    	component:()=>import('@/views/Pay/Message')
	    }
    ]
}