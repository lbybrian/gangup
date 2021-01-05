<template>
	<div>
		<table>
			<tr>
				<th>图例</th>
				<th>名称</th>
				<th>单价</th>
				<th>数量</th>
				<th>总价</th>
			</tr>
			<tr v-for="item in fruits">
				<!--<ul v-for="item in fruits">-->
						<td><img :src="item.img" class="imgr"/></td>
						<td><b>{{item.name}}</b></td>
						<td><span>{{item.price|moneyRMB}}</span></td>
						<td>
							<!--<el-button  @click="godown">-</el-button>-->
							<el-button :disabled="item.count===0" @click="item.count--">-</el-button>
							<span>{{item.count}}</span>
							<el-button :disabled="item.count===20" @click="item.count++">+</el-button>
						</td>
						<td>{{item.price*item.count}}</td>
				</ul>
			</tr>
		</table>
		<tr>合计：{{total}}</tr>
	</div>
</template>

<script>
	export default{
		name:'shoppingTrolley',
		data(){
			return {
				fruits:[
					{name:'苹果',price:5,count:12,img:'/static/imgs/pingguo.jpg'},
					{name:'菠萝',price:5,count:14,img:'/static/imgs/boluo.jpg'},
					{name:'猕猴桃',price:5,count:15,img:'/static/imgs/mihoutao.png'},
					{name:'梨',price:5,count:42,img:'/static/imgs/lizi.jpg'},
					{name:'香蕉',price:5,count:5,img:'/static/imgs/xiangjiao.jpg'},
					{name:'柠檬',price:5,count:7,img:'/static/imgs/ningmeng.jpg'},
					{name:'橙子',price:5,count:11,img:'/static/imgs/chengzi.jpg'},
					{name:'草莓',price:5,count:14,img:'/static/imgs/caomei.jpg'},
					{name:'西瓜',price:5,count:17,img:'/static/imgs/xigua.jpg'},
				]
			}
		},
		mounted(){
			
		},
		computed:{
			total(){
				let n =0;
				this.fruits.forEach((v)=>{
//					n+=v.count//总数量
					n+=v.count*v.price//总价格
				})
				return n
			}
		},
		methods:{
			godown(){
				
			}
		}
	}
</script>
<style>
	/*.elbtn{*/
	.el-button{}
</style>
<style scoped="scoped">
	.imgr{
		width: 60px;
		height: 60px;
		margin-bottom: 10px;
	}
	/*ul{
		float: left;
		list-style: none;
		padding: 0;
	}*/
	
	ul li{
		display: inline;
		/*float: left;*/
		margin: 20px;
		border: 1px solid #CCCCCC;
	}
	table{
		float: left;
		width: 560px;
		border: 2px solid #CCCCCC;
	}
	table tr{
		/*float: left;*/
		border: 2px solid #CCCCCC;
		height: 70px;
	}
	table tr th{
		/*border: 2px solid #CCCCCC;*/
		float: left;
		margin: 35px;
	}
	table tr>td{
		/*border: 2px solid #CCCCCC;*/
		float: left;
		margin: 30px;
	}
</style>