export default {
    path : '/square',
    components:{
    	default:() => import('@/components/Square'),
    	squarelist:()=> import('@/components/SquareList')
    },
    meta:{
		isShow:true//隐藏header和footer
	},
    children:[
//  	{
//  		path:'squarelist',
//  		component: ()=> import('@/components/SquareList')
//  	}
    ]
}