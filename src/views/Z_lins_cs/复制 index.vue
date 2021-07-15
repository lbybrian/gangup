<template>
	<div id="zIndex">
		zlinscszlinscszlinscszlinscszlinscszlinscs
		zlinscs
		zlinscs
		<el-menu :router="true" mode="horizontal" background-color="#1c213f" text-color="#fff">
		    <el-submenu index="22">
				<template slot="title">
					<i class="el-icon-menu">aaaaaaaa</i>
				</template>
				<el-menu-item index="pay">
					选项一
					<a href="">dowload微信
						<router-link to="/pay">充值<img src="/static/imgs/download_wx.jpg"></router-link>
					</a>
				</el-menu-item>
					<!--<el-submenu index="112">
						<template slot="title">选项二</template>
						<el-menu-item index="2-1">选项二-一</el-menu-item>
					</el-submenu>-->
			</el-submenu>
		</el-menu>
		
		111111111111111111111111111111111
		<div id="">
			<input  type="button" value="BBBBBB"  @click="$emit('one')"/>
			<template v-show="type = username" >{{type}}</template>
			<a v-show="type = username">{{user}}</a>
			<!--<a v-else="user">{{user}}</a>-->
		</div>
		<Login @click="$emit('one')" />
	</div>
</template>

<script>
	import { mapGetters,mapMuntations,mapActions } from 'vuex'
	
	export default {
		name:'Z_lins_cs',
		data(){
			return {
				name2:'张三',
				type:'username',
				user:'赵柳',
				isShow:true
			}
		},
		computed:{
			//第三题
//			getName(){
//				return res=>{
//					return '张三'
//				}
//			},
			//第二题
			...mapGetters(['name3']),//李四
			...mapGetters('userInfo',['name3']),//王五
		},
		components:{
			Login: () => import("@/components/Login"),
		},
		mounted(){
			
//			console.log(this.name2)
//			console.log(this.getName)
//		this.$bus.$on('change',true),
		this.$on("one",function () {
                console.log("父组件")
            }),
			this.getName().then(res=>{
				console.log(res)
			})
		},
		methods:{
			//bus测试组件间(与login组件)传值显示与隐藏
			chnage(qq){
				this.isShow=false;
			},
			
			getName(){
				return new Promise(function(a,b){
					setTimeout(()=>{
						a(1);
					},1000*5)
				}).then(res=>{
					return 'ok'
				}).catch(err =>{
					return 'err'
				})
			}
		}
	}
</script>

<style>
</style>