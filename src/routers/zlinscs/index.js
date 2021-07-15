export default {
    path : '/zlinscs',
    component : () => import('@/views/Z_lins_cs'),
    meta:{
		isShow:true//隐藏header和footer
	},
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