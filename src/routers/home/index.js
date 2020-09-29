export default {
    path : '/home',
    component:() => import('@/views/Home'),
//  components :{
//      one:()=>import("@/views/One"),
//      two:()=>import("@/views/Two"),
//      three:()=>import("@/views/Three"),
//      default:() => import('@/views/Home'),
//  },
    children:[
//  	{
//  		path:'rollingimg',
//  		component :() => import('@/components/Rollingimg')
//  	}
    ]
    
        
        
//  children : [
//      {
//          path : 'city',
//          component : () => import('@/components/City')
//      },
//      {
//          path : 'detail/1/:movieId',
//          components : {
//              default : ()=> import('@/components/NowPlaying'),
//              detail : ()=> import('@/views/Movie/detail')
//          },
//          props : {
//              detail : true
//          }
//      },
//      {
//          path : '/movie',
//          redirect : '/movie/nowPlaying'
//      }
//      
////      scrollBehavior (to, from, savedPosition) {
////			return { x:0, y:0}
////		}
//  ]
}