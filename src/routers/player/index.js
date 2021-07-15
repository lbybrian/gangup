export default {
    path : '/player',
    component : () => import('@/views/Player'),
    meta:{
		isShow:true//隐藏header和footer
	}
}