export default {
    path : '/square',
    components:{
    	default:() => import('@/components/Square'),
    	squarelist:()=> import('@/components/SquareList')
    },
    children:[
//  	{
//  		path:'squarelist',
//  		component: ()=> import('@/components/SquareList')
//  	}
    ]
}