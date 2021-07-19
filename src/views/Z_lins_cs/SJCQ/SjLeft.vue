<template>
	<div class="sjLeft">
		<el-row class="allBox">
			<el-col :span="20">
				<div class="allBox-top">
					<el-input type="textarea" :autosize="{minRows:3}"  v-model="fristTitle" :value="fristTitle || ''"></el-input>
				</div>
				<div class="allBox-down" v-html="fristTitle1">
					<!--{{fristTitle}}-->
				</div>
			</el-col>
			<el-col :span="4" class="elCol4">
				<el-button type="primary" size="mini" class="btn" @click="" >事件抽取</el-button>
				<el-button type="primary" size="mini" class="btn" @click="resetDataList(0)" v-if="isReset">完成</el-button>
				<el-button type="primary" size="mini" class="btn" @click="resetDataList(1)" v-else>重新选词</el-button>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		props:['title','dataList'],
		watch:{
			"dataList.keyMap":{
				immediate:true,
				deep:true,
				handler(val){
					this.fristTitle1=this.fristTitle;
					val['主体']&&val['主体'].map((item)=>{
						if(this.fristTitle1.indexOf(item)!=-1){
							this.fristTitle1=this.fristTitle1.replace(item,`<span style="color:#feb123;">${item}</span>`)
						}
					})
					val['客体']&&val['客体'].map((item)=>{
						if(this.fristTitle1.indexOf(item)!=-1){
							this.fristTitle1=this.fristTitle1.replace(item,`<span style="color:#27b865;">${item}</span>`)
						}
					})
					val['时间']&&val['时间'].map((item)=>{
						if(this.fristTitle1.indexOf(item)!=-1){
							this.fristTitle1=this.fristTitle1.replace(item,`<span style="color:#8b572a;">${item}</span>`)
						}
					})
					val['地点']&&val['地点'].map((item)=>{
						if(this.fristTitle1.indexOf(item)!=-1){
							this.fristTitle1=this.fristTitle1.replace(item,`<span style="color:#2468f2;">${item}</span>`)
						}
					})
				}
			}
		},
		data(){
			return{
				fristTitle:'',
				fristTitle1:'',
				isReset:false,
			}
		},
		created(){
			this.fristTitle=this.title;
		},
		mounted(){
//			window.onmouseup=function(){
//				this.getSelection();
//			}
		},
		methods:{
			getSelection(){
				let txt=document.getSelection();
				this.fristTitle=txt.toString();
			},
			resetDataList(numb){
//				console.log(document.getElementByclassName('sjcqDetail'));
//				console.log(document.getElementsByClassName('sjcqDetail')[0])
				if(numb){
					document.getElementsByClassName('sjcqDetail')[0].style.userSelect='text';
					document.getElementsByClassName('sjcqDetail')[0].style.color='yellow';
					this.isReset=true;
				}else{
					this.getSelection();
					document.getElementsByClassName('sjcqDetail')[0].style.userSelect='none';
					document.getElementsByClassName('sjcqDetail')[0].style.color='grey';
					this.isReset=false;
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.sjLeft{
		.allBox{
			width: 100%;
			min-height: 550px;
			border-right: 2px solid gray;
			.allBox-top{
				margin-bottom: 14px;
			}
			.allBox-down{
				min-height: 100px;
				padding: 10px;
				background-color: rgba(45,109,255,0.5);
			}
			.elCol4{
				text-align: center;
				line-height: 40px;
				/*.el-button{
					margin: 0!important;
				}*/
				.btn{
					/*margin-bottom: 5px;*/
				}
			}
		}
	}
</style>