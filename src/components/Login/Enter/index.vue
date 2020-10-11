<template>
	<div class="enter_box">
		Enter主页内容
		<hr />
		<br />
		<br />
		<!--<input type="button" value="儿很" @click="csLogin()" />-->
		<!--<ex />-->
		<!--<p>{{btnValue}}1111111111111111111{{aaa}}</p>-->
		<Form :aaa="aaa" :bbb="bbb" v-bind="$props" />
	</div>
</template>

<script>
//	import Form from '../Form'
	export default{
		name:"Enter",
		data(){
			return{
				aaa:"测试1",
				bbb:"测试2"
			}
			
		},
		props:["btnValue","signValue","csLogin"],
		components:{
			Form:()=>import ('../Form'),
			ex:()=>import ('./ex'),
		},
		created(){
//			this.goAhead()
		},
		methods:{
			goAhead(){
//				window.history.go(-1)
//				this.$router.go(-1)
//				this.go(-1)
				go(-1)
				
			},
//			csLogin(){
//				this.$router.push({
//					path:'./pay'
//				})
//			}
		}
	}
</script>

<style>
	.enter_box{
		position: relative;
	}
	.close{
		/*display: inline-block;*/
		position: absolute;
		float: right;
		
	}
	.close:hover{
		background-color: red;
	}
</style>