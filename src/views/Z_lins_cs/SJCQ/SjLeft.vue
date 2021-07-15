<template>
	<div class="sjLeft">
		<el-row class="allBox">
			<el-col :span="20">
				<div class="allBox-top">
					<el-input type="textarea" :autosize="{minRow:3}" v-model="fristTitle"></el-input>
				</div>
				<div class="allBox-down">
					{{fristTitle}}
				</div>
			</el-col>
			<el-col :span="4" class="elCol4">
				<el-button type="primary" size="mini" class="btn" @click="getSelection" >重新选词</el-button>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		props:['title'],
		data(){
			return{
				fristTitle:'',
			}
		},
		created(){
			this.fristTitle=this.title;
		},
		mounted(){
			window.onmouseup=function(){
				this.getSelection();
			}
		},
		methods:{
			getSelection(){
				let txt=document.getSelection();
				this.fristTitle=txt.toString();
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.sjLeft{
		.allBox{
			width: 100%;
			.allBox-top{
				margin-bottom: 14px;
			}
			.all-down{
				min-height: 100px;
				padding: 10px;
				background-color: rgba(45,109,255,0.5);
			}
			.elCol4{
				text-align: center;
				line-height: 40px;
				.el-button{
					margin: 0!important;
				}
			}
		}
	}
</style>