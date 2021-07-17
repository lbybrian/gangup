<template>
	<div class="allDiv">
		<div class="header">
			<h2>抽取结果</h2>
			<el-button type="primary" size="mini" class="btn" @click="insertORUpdateEventExtract" v-show="isEdit">完成</el-button>
			<el-button type="primary" size="mini" class="btn" @click="edit" v-show="!isEdit">编辑</el-button>
		</div>
		<div class="dataList">
			<div class="head">
				<span>类型：{{dataList.TypeStatus}}</span>
				<span>关键词：{{dataList.keyWords}}</span>
				<span>属性：{{dataList.tigger}}</span>
			</div>
			<div class="dataBox" v-for="item in typeList">
				<el-row class="tagBox">
					<el-col :span="3" style="min-height: 30px;">
						<h2 :style='colors(item.title)'>{{item.title}}：</h2>

					</el-col>
					<el-col :span="21">
						<span v-for="item2 in dataList.keyMap[item.title]">
							<el-tag 
								:closable="isEdit ? true : false"
								size="medium"
								type="info"
								@close="delPerson(item.title,item2)"
								:style="colors(item.title)"
								style="margin-right: 8px;"
								>
								{{item2}}
							</el-tag>
	<el-button v-if="isEdit && item.id=='zt'" class="button-new-tag" size="small" @click="showInput(ztInputVisible,'zt')">{{ztInputVisible?"确定":"+主体"}}</el-button>
	<el-button v-if="isEdit && item.id=='kt'" class="button-new-tag" size="small" @click="showInput(ktInputVisible,'kt')">{{ktInputVisible?"确定":"+主体"}}</el-button>
	<el-button v-if="isEdit && item.id=='sj'" class="button-new-tag" size="small" @click="showInput(sjInputVisible,'sj')">{{sjInputVisible?"确定":"+主体"}}</el-button>
	<el-button v-if="isEdit && item.id=='dz'" class="button-new-tag" size="small" @click="showInput(dzInputVisible,'dz')">{{dzInputVisible?"确定":"+主体"}}</el-button>
						</span>
					</el-col>
				</el-row>
				<!--<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
					</span>
				</div>
				<!--<div class="tagBox" v-if="isEdit">
					<el-tag closable size="medium" type="info" :style='colors(item)' @close="handleClose(item)">
						{{item}}
					</el-tag>
				</div>
				<div class="tagBox" v-if="!isEdit">
					<el-tag size="medium" type="info" :style='{color:colors}' s>
						{{item}}
					</el-tag>
				</div>-->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['dataList','handleAddtagList','handleDeletetagList'],//父级传出title子级不收，就会在div加上
		data() {
			return {
				typeList: [{
						title: '主体',
						id: 'zt',
						value: []
					},
					{
						title: '客体',
						id: 'kt',
						value: []
					},

					{
						title: '时间',
						id: 'sj',
						value: []
					},
					{
						title: '地址',
						id: 'dz',
						value: []
					},
				],
				isEdit: false,
				ztinputValue: '',
				ktinputValue: '',
				sjinputValue: '',
				dzinputValue: '',
				ztInputVisible: false,
				ktInputVisible: false,
				sjInputVisible: false,
				dzInputVisible: false,
//				datas: []
			}
		},
		watch: {
			ztInputValue(val) {
				this.handleInputConfirm()
			},
			ktInputValue(val) {
				this.handleInputConfirm()
			},
			sjInputValue(val) {
				this.handleInputConfirm()
			},
			dzInputValue(val) {
				this.handleInputConfirm()
			},
		},
		computed: {
			colors(item) {
				return(item) => {
					//				for(i in typeList){
					//					let item =i
					//					return item
					//				}
					switch(item) {
						case '主体':
							return {
								'color': 'red',
							};
						case '客体':
							return {
								'color': 'grey',
							};
						case '时间':
							return {
								'color': 'blue',
							};
						case '地址':
							return {
								'color': 'orange',
							}
							break;
						default:
							return {}
							break;
					}
				}
			}
		},
		created() {
			//			this.getDatas();
			//			console.log('RRRRRRRRRRR', this.dataList)
		},
		methods: {
			//			getDatas() {
			//				this.dataList.keyMap.forEach(item => {
			//					console.log(item, Object.keys(item), Object.values(item));
			//					this.typeList = Object.keys(item);
			//				})
			//			},
			edit(){
				this.isEdit=true;
				this.ztinputVisible=true;
				this.ktinputVisible=true;
				this.sjinputVisible=true;
				this.dzinputVisible=true;
			},
			insertORUpdateEventExtract() {
				this.isEdit = false;
			},
			handleClose(tag) {
				this.typeList.splice(this.typeList.indexOf(tag), 1);
			},
			showInput(isSbmit, key) {
				if(isSbmit) {
					const str = document.getSelection();
					this.handleInputConfirm(str, key)
				} else {
					this[key + "InputVisible"] = true;
				}
			},
			handleInputConfirm(str,keyName) {
				console.log(str,keyName)
//				let inputValue = this.inputValue;
//				if(inputValue) {
//					this.typeList.push(inputValue);
//				}
//				this.inputVisible = false;
//				this.inputValue = '';
				if(!keyName)return;
				let str1=str.toString();
				if(!str1)return;
				this[keyName+"InputVisible"]=false;
				switch(keyName){
					case "zt":return(
						(this.ztInputValue=str1)&&
						this.$emit("handleAddtagList","主体",this.ztInputValue)
//						&&(this.ztInputValue="")
					);
					case "kt":return(
						(this.ktInputValue=str1)&&
						this.$emit("handleAddtagList","客体",this.ktInputValue)
//						&&(this.ztInputValue="")
					);
					case "sj":return(
						(this.sjInputValue=str1)&&
						this.$emit("handleAddtagList","时间",this.sjInputValue)
//						&&(this.ztInputValue="")
					);
					case "dz":return(
						(this.dzInputValue=str1)&&
						this.$emit("handleAddtagList","地址",this.dzInputValue)
//						&&(this.ztInputValue="")
					);
				}
			},
			delPerson(type,tag){
				this.$emit("handleDeletetagList",type,tag);
			}
		}
	}
</script>

<style>
	.el-tag+.el-tag {
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
	.allDiv {
		width: 842px;
		height: 356px;
		border: solid 1px rgba(45, 109, 255, 0.5);
		padding: 10px 10px;
		margin: 0 30px;
		.header {
			position: relative;
			background-color: skyblue;
			height: 40px;
			h2 {
				/*position: absolute;*/
				left: 2%;
				top: 14%;
			}
			.el-button {
				position: absolute;
				right: 2%;
				top: 14%;
			}
		}
		.dataList {
			margin: 20px;
			text-align: left;
			.head {
				margin-bottom: 20px;
				font-size: 16px;
				font-weight: 600;
				span {
					margin-right: 35px;
				}
			}
			.el-button,
			.el-input {
				margin-bottom: 20px;
			}
			.dataBox {
				position: relative;
				text-align: left;
				height: 40px;
				/*h2 {
					position: absolute;
					top: 0;
					left: 0;
				}*/
				.tagBox {
					width: 80%;
					h2 {
						/*min-height: 30px;*/
						position: absolute;
						top: 0;
						left: 0;
					}
				}
			}
		}
	}
</style>