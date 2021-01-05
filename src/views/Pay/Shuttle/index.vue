<template>
	<div>
		<div id="box">
			<div class="leftbox">
				<h3>商品：</h3>
				<ul >
					<li v-for="item in leftDatas">
						<label>
							<input type="checkbox" v-model="item.check" />&spades;&nbsp;<b>{{item.name}}</b>
						</label>
					</li>
				</ul>
			</div>
			<div class="middlebox">
				<div><button class="btna" @click="toRight">加入购物车</button></div>
				<div><button class="btna" @click="toLeft">移出购物车</button></div>
			</div>
			<div class="rightbox">
				<h3>购物车：</h3>
				<ul>
					<li v-for="item in rightDatas">
						<label>
							<input type="checkbox" v-model="item.check" />&spades;&nbsp;<b>{{item.name}}</b>
						</label>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Shuttle',
		data(){
			return {
				leftDatas:[
					{name:'商品1',check:false},
					{name:'商品2',check:false},
					{name:'商品3',check:false},
					{name:'商品4',check:false},
					{name:'商品5',check:false},
					{name:'商品6',check:false},
				],
				rightDatas:[]
			}
		},
		methods:{
			filterData(dat,state){
				return dat.filter(z=>{
					return z.check===state
				})
			},
			toRight(){
				let a =this.filterData(this.leftDatas,true)
				this.rightDatas=[...this.rightDatas,...a]
				this.leftDatas=this.filterData(this.leftDatas,false)
				
			},
			toLeft(){
				let a =this.filterData(this.rightDatas,true)
				this.leftDatas=[...this.leftDatas,...a]
				this.rightDatas=this.filterData(this.rightDatas,false)
				
			}
		}
	}
</script>

<style>
	.box{
		float: left;
	}
	.middlebox{
		float: left;
		width: 100px;
	}
	.leftbox,.rightbox {
		float: left;
		padding: 20px;
		border: 2px solid #000000;
		width: 200px;
		margin-right: 60px;
	}
	.btna{
		width: 80px;
		cursor: pointer;
		padding: 5px;
		border-radius: 8px;
	}
	.btna:hover{
		background-color: skyblue;
	}
</style>