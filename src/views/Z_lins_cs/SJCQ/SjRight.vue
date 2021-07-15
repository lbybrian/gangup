<template>
	<div class="allDiv">
		<div class="header">
			<h2>抽取结果</h2>
			<el-button type="primary" size="mini" class="btn" @click="insertORUpdateEventExtract" v-show="isEdit">完成</el-button>
			<el-button type="primary" size="mini" class="btn" @click="isEdit=true" v-show="!isEdit">编辑</el-button>
		</div>
		<div class="dataList">
			<div class="head"><span>类型：</span></div>
			<div></div>
			<el-input
				  class="input-new-tag"
				  v-if="inputVisible"
				  v-model="inputValue"
				  ref="saveTagInput"
				  size="small"
				  @keyup.enter.native="handleInputConfirm"
				  @blur="handleInputConfirm"
				>
			</el-input>
			<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
			<div class="dataBox" v-for="item in typeList">
				<h2 :style='{color:colors}'>{{item}}：</h2>
				<div class="tagBox" v-if="isEdit">
					<!--<el-tag closable size="medium" type="info" :style=renderStyle(item) @clise="delPerson(item)">-->
					<el-tag closable size="medium" type="info" :style='{color:colors}' @close="handleClose(item)">
						{{item}}
					</el-tag>
				</div>
				<div class="tagBox" v-if="!isEdit">
					<el-tag size="medium" type="info" :style='{color:colors}'s>
						{{item}}
					</el-tag>
				</div>
			</div>
		</div>
	</div>
</template>
	
<script>
	export default{
		props:['dataList'],
		data(){
			return{
				isEdit:false,
//				typeList:['主体','客体','时间','地点'],
				typeList:[],
				inputValue:'',
				inputVisible:false,
//				colors:null
				colors:'',
				datas:[]
			}
		},
		computed:{
//			colors(item){
////				for(i in typeList){
////					let item =i
////					return item
////				}
//				switch (item){ 
//				  case '主体':colors={color:'red'};
//				  break; 
//				  case '客体':color='gerry';
//				  break; 
//				  case '时间':color='blue';
//				  break; 
//				  case '地址':color='yellow';
//				  break; 
//				}
//	      
//			}
		},
		created(){
			this.getDatas();
			this.typeList.forEach(item=>{
//				console.log(item)
				this.getcolors(item)
			})
			
			console.log('RRRRRRRRRRR',this.dataList)
		},
		methods:{
			getDatas(){
				this.dataList.forEach(item=>{
					console.log(item,Object.keys(item),Object.values(item));
					this.typeList=Object.keys(item);
				})
//				switch (item){ 
//				  case '主体':this.colors='red';
//			console.log(1111111111,this.colors)
//				  break; 
//				  case '客体':this.colors='gerry';
//			console.log(2222222222,this.colors)
//				  break; 
//				  case '时间':this.colors='orange';
//			console.log(33333333333,this.colors)
//				  break; 
//				  case '地点':this.colors='blue';
//			console.log(4444444444,this.colors)
//				  break; 
//				}
			},
			getcolors(item){
				console.log(item)
//				switch (item){ 
//				  case '主体':this.colors={color:'red'};
//				  break; 
//				  case '客体':this.colors={color:'gerry'};
//				  break; 
//				  case '时间':this.colors={color:'orange'};
//				  break; 
//				  case '地点':this.colors={color:'blue'};
//				  break; 
//				}
				switch (item){ 
				  case '主体':this.colors='red';
			console.log(1111111111,this.colors)
				  break; 
				  case '客体':this.colors='gerry';
			console.log(2222222222,this.colors)
				  break; 
				  case '时间':this.colors='orange';
			console.log(33333333333,this.colors)
				  break; 
				  case '地点':this.colors='blue';
			console.log(4444444444,this.colors)
				  break; 
				}
			},
			insertORUpdateEventExtract(){
				this.isEdit=false;
			},
			handleClose(tag) {
		        this.typeList.splice(this.typeList.indexOf(tag), 1);
	      	},
	      	handleInputConfirm() {
		        let inputValue = this.inputValue;
		        if (inputValue) {
		          this.typeList.push(inputValue);
		        }
		        this.inputVisible = false;
		        this.inputValue = '';
	      	},
	      	showInput() {
		        this.inputVisible = true;
		        this.$nextTick(_ => {
		          this.$refs.saveTagInput.$refs.input.focus();
//		          this.$refs.saveTagInput.focus();
		        });
	    	 },	
		}
	}
</script>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
<style lang="scss" scoped="scoped">
	.allDiv{
		width: 842px;
		height: 356px;
		border: solid 1px rgba(45,109,255,0.5);
		padding: 10px 10px;
		margin: 0 30px;
		.header{
			position: relative;
			background-color:skyblue;
			height:40px;
			h2{
				/*position: absolute;*/
				left: 2%;
				top: 14%;
			}
			.el-button{
				position: absolute;
				right: 2%;
				top: 14%;
			}
		}
		.dataList{
			margin: 20px;
			text-align: left;
			.head{
				margin-bottom: 20px;
				font-size:16px;
				font-weight: 600;
			}
			.el-button,.el-input{
				margin-bottom: 20px;
			}
			.dataBox{
				/*position: relative;*/
				text-align: left;
				h2{
					/*position: absolute;*/
					top: 0;
					left: 0;
				}
				.tagBox{
					/*position: absolute;*/
					width: 80%;
					/*left: 8%;*/
				}
			}
		}
	}
</style>