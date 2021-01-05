<template>
	<div>
		<div id="box">
			<div class="leftbox">
				<ul >
					<li v-for="item in leftDatas">
						<label>
							<input type="checkbox" v-model="item.check" />&spades;&nbsp;<b>{{item.name}}</b>
						</label>
					</li>
				</ul>
			</div>
			<div class="middlebox">
				<div><button class="btna" @click="toRight">向右>>></button></div>
				<div><button class="btna" @click="toLeft">向左<<<</button></div>
			</div>
			<div class="rightbox">
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
					{name:'标题1',check:false},
					{name:'标题2',check:false},
					{name:'标题3',check:false},
					{name:'标题4',check:false},
					{name:'标题5',check:false},
					{name:'标题6',check:false},
				],
				rightDatas:[]
			}
		},
		methods:{
			toRight(){
				let a =this.leftDatas.filter((z)=>{
					return z.check===true
				})
				console.log(a)
//				this.rightDatas=[...a]
//				this.rightDatas=this.rightDatas.concat([...a])
				this.rightDatas=[...this.rightDatas,...a]
				this.leftDatas=this.leftDatas.filter((z)=>{
					return z.check===false
				})
				
			},
			toLeft(){
				let b=this.rightDatas.filter(z=>{
					return z.check===false
				})
				this.leftDatas=[...this.rightDatas,...b]
				this.rightDatas=this.rightDatas.filter((z)=>{
					return z.check===true
				})
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
		height:600px;
		margin-right: 60px;
	}
	.btna{
		width: 30px;
		cursor: pointer;
		padding: 5px;
		border-radius: 8px;
	}
	.btna:hover{
		background-color: skyblue;
	}
</style>