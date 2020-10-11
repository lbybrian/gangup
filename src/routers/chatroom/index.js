export default{
	path:'/chatroom',
	name:'chatroom',
	component:()=>import('@/components/Chatroom'),
	meta:{
		isShow:true//隐藏header和footer
	}
}
//export default{
//	path:'/chatroom',
//	component:()=>import{'@components/Chatroom'}
//}
