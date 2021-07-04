<template>
	<div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
		<!--轮播展示-->
		<el-row :gutter="20">
			<el-col>
				<div class="img-box-w">
					<el-scrollbar class="el-scrollbar-top">
						<div class="img-box">
							<div v-for="item in imgUrls">
								<img :src="item.url" />
							</div>
						</div>
					</el-scrollbar>
				</div>
			</el-col>
		</el-row>
		<!--108将和职位-->
		<el-row :gutter="20">
			<el-col :span="18">
				<div class="allname-box-w">
					<el-scrollbar class="el-scrollbar-left">
						<div class="allname-box">
							<div class="btnBox">
								<!--<el-button @click="ljy=!ljy">天花板</el-button>
								<el-button @click="getImgsRank">马军五虎将</el-button>
								<el-button @click="getImgsWh">马军八彪将</el-button>
								<el-button @click="getImgsMj">马军小彪将{{}}</el-button>
								<el-button @click="getImgsBj">步军{{}}头领</el-button>
								<el-button @click="getImgsSj">水军{{}}头领</el-button>-->
								<el-button v-for="item in btnRank" @click="getImgsRank">{{item.title}}</el-button>
							</div>
							<div class="imgBox">
								<img class="wh" v-for="item in imgsRank" :src="item.url" />
							</div>
							<!--<img class="csxz" :src="csxz" v-show="ljy"/>
							<img class="wh" v-for="item in imgsRank" :src="item.url" />
							<ul v-for="item in names[0].casts">
								<li>{{ item }}</li>
							</ul>-->
							
						</div>
					</el-scrollbar>
				</div>
			</el-col>
			<el-col :span="6">
				<div id="" class="rank-box">
					测试计算属性：
					<div>函数方法: {{ currentTime1() }}</div>
					<div>计算属性: {{ currentTime2 }}</div>
					<hr />
					<h3 v-for="item in imgUrls">{{ item.url }}</h3>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="20">
			<!--<div>
			 <p v-for="ite in names">{{ite}}</p>
			</div>-->
		</el-row>
		</div>
</template>

<script>
	import { formatDate } from "@/js/Tools";
	export default {
		name: "Player",
		data() {
			return {
				loading: false,
				ljy:false,
				WHsj:false,
				csxz: require("@/assets/imgs/108/35512783_2.jpg"),
				names: [{
					casts: [],
					cover_y: 3556,
					id: "26608230",
					star: "108",
					title: "108将",
				}, ],
				imgsList: [{
					// imsrc:'35512783_6.jpg'//林冲
					imsrc: "",
				}, ],
				imgUrls: [
					// {
					// 	url:require("@/assets/imgs/108/35512783_2.jpg"),
					// },
				],
				imgsRank:[],
				btnRank:[
					{
						title:'天花板',
						sum:1,
						list:[]
					},
					{
						title:'马军五虎将',
						sum:5
					},
					{
						title:'马军八彪将',
						sum:8
					},
					{
						title:'马军小彪将',
						sum:16
					},
					{
						title:'步军头领',
						sum:11
					},
					{
						title:'水军头领',
						sum:8
					}
				],
				brr: [],
			};
		},
		watch: {
			//  	imgUrls(val){
			//  		
			//  	}
		},
		created() {
			this.getNames();
			//			this.let()
			this.getImgsList();
			//			this.getImgsUrl()
			// this.rank(this.imgUrls)
		},
		mounted() {
//			for(var i = 0; i < this.brr.length; i++) {
//				console.log(this.brr[i])
//			}
		},
		components: {},
		computed: {
			// 			getImgs() {
			// //				for(let i = 0; i <= 108; i++) {
			// //					this.url = '../../../static/imgs/108/35512783_' + i + '.jpg';
			// //				}
			// 				this.imgsList.map(item=>{
			// //					for(let i = 0; i <= this.imgsList.length; i++) {
			// //						this.url = '../../../static/imgs/108/35512783_' + i + '.jpg';
			// //					}
			// 					let zurl={url:require("@/assets/imgs/108/"+item.imsrc)};
			// 					return this.imgUrls.push(zurl)
			// //					console.log(zurl)
			// 				})
			// 				console.log(this.imgUrls)

			// 			},
			currentTime2: function() {
				//              return this.$tools.timeNow(Date.now());
				return formatDate(Date.now());
			},
		},
		methods: {
			currentTime1() {
				return formatDate(Date.now());
			},
			getNames() {
				this.$axios.get("http://127.0.0.1:8090/shuihuname").then((data) => {
					//					console.log('前端结果', data)
					if(data.status === 200) {
						this.names = data.data.names.data;
					}
				});
			},
			//马军五虎将//八彪将//。。。
			getImgsRank(){
//				if(this.imgsRank.length>0){
//					this.imgsRank=[]
//				}
//				else{
					this.imgsList.forEach(item=>{
	//					console.log(item.imsrc.match(/_(\S+?)\./)[1])
						this.imgsRank=[];
		            	let zurl = {
								url: require("@/assets/imgs/108/" + item.imsrc)
						};
						if(item.imsrc.match(/_(\S+?)\./)[1]==2){
							this.imgsRank=[];
							this.imgsRank.push(zurl)
						}
			            else if (item.imsrc.match(/_(\S+?)\./)[1]==5||item.imsrc.match(/_(\S+?)\./)[1]==6||item.imsrc.match(/_(\S+?)\./)[1]==7||item.imsrc.match(/_(\S+?)\./)[1]==8||item.imsrc.match(/_(\S+?)\./)[1]==15) {
			            	this.imgsRank=[];
							this.imgsRank.push(zurl)
			            }else if(item.imsrc.match(/_(\S+?)\./)[1]==9||item.imsrc.match(/_(\S+?)\./)[1]==12||item.imsrc.match(/_(\S+?)\./)[1]==16||item.imsrc.match(/_(\S+?)\./)[1]==17||item.imsrc.match(/_(\S+?)\./)[1]==18||item.imsrc.match(/_(\S+?)\./)[1]==19||item.imsrc.match(/_(\S+?)\./)[1]==23||item.imsrc.match(/_(\S+?)\./)[1]==24){
			            	this.imgsRank=[];
							this.imgsRank.push(zurl)
			            }else if(item.imsrc.match(/_(\S+?)\./)[1]==9||item.imsrc.match(/_(\S+?)\./)[1]==12||item.imsrc.match(/_(\S+?)\./)[1]==16||item.imsrc.match(/_(\S+?)\./)[1]==17||item.imsrc.match(/_(\S+?)\./)[1]==18||item.imsrc.match(/_(\S+?)\./)[1]==19||item.imsrc.match(/_(\S+?)\./)[1]==23||item.imsrc.match(/_(\S+?)\./)[1]==24){
			            	this.imgsRank=[];
							this.imgsRank.push(zurl)
			            }
						
					})
//				}
				console.log(this.imgsRank)
			},
			//108排序
			getImgsList() {
				this.loading = true;
				this.$axios.get("http://127.0.0.1:8090/getimgslist").then((res) => {
					if(res.status === 200) {
						this.loading = false;
						this.imgsList = res.data.imgslist;
						// 图片数组排序
						var i = 0,
							j;
						while(i < this.imgsList.length) {
							j = i + 1;
							while(j < this.imgsList.length) {
								//			            if (this.imgsList[j] < this.imgsList[i]) {
								if(parseInt(this.imgsList[j].imsrc.match(/_(\S+?)\./)[1]) < parseInt(this.imgsList[i].imsrc.match(/_(\S+?)\./)[1])) {
									var temp = this.imgsList[i];
									this.imgsList[i] = this.imgsList[j];
									this.imgsList[j] = temp;
								}
								j++;
							}
							i++;
						}
						//先排序再push
						this.imgsList.map((item) => {
							let zurl = {
								url: require("@/assets/imgs/108/" + item.imsrc)
							};
							this.imgUrls.push(zurl);
						});
						
					}
				});
			},
			rank2() { //异步执行瞬间获取排序结果
				console.log('rank2', this.brr)
				var i = 0,
					j;
				while(i < this.brr.length) {
					j = i + 1;
					while(j < this.brr.length) {
						if(this.brr[j] < this.brr[i]) {
							var temp = this.brr[i];
							this.brr[i] = this.brr[j];
							this.brr[j] = temp;
						}
						j++;
					}
					i++;
				}
				console.log('rank2', this.brr)
			},

			getImgsUrl() {
				for(let i = 0; i <= this.imgsList.length; i++) {
					let item = this.imgsList[i];
					setTimeout(() => {
						console.log(item);
					});
				}
			},
			let() {
				for(let i = 0; i <= 108; i++) {
					this.url = "../../../static/imgs/108/35512783_" + i + ".jpg";
					//	  			console.log(this.url)
				}
			},

		},
	};
</script>

<style scoped lang="scss">
	@keyframes lujunyi {
		0%{opacity: 0.1;}
		20%{opacity: 0.5;}
		40%{opacity: 1;}
		60%{opacity: 1;}
		80%{opacity: 0.5;}
		100%{opacity: 0.1;}
	}
	@keyframes wh{
		0%{opacity: 0.1;}
		20%{opacity: 0.5;}
		40%{opacity: 1;}
		60%{opacity: 1;}
		80%{opacity: 0.5;}
		100%{opacity: 0.1;}
	}
	@keyframes turnAround {
		0% {
			opacity: 0.5;
		}
		20% {
			opacity: 1;
		}
		40% {
			opacity: 1;
		}
		60% {
			opacity: 1;
		}
		80% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
	
	@keyframes Runing {
		0% {
			margin-left: 0;
		}
		10% {
			margin-left: -2440px;
		}
		20% {
			margin-left: -4880px;
		}
		30% {
			margin-left: -7320px;
		}
		40% {
			margin-left: -9760px;
		}
		50% {
			margin-left: -12200px;
		}
		60% {
			margin-left: -14640px;
		}
		70% {
			margin-left: -17080px;
		}
		80% {
			margin-left: -19520px;
		}
		90% {
			margin-left: -21960px;
		}
		100% {
			margin-left: 0;
		}
	}
	
	.img-box-w {
		.el-scrollbar-top {
			.el-scrollbar__wrap {
				overflow-x: scroll;
			}
		}
		.img-box {
			/*position: absolute;*/
			height: 400px;
			/*width: 26532px;*/
			width: 29030px;
			border: 10px solid red;
			/*margin-bottom: 20px;*/
			/*overflow-x: scroll;*/
			/*overflow-y: hidden;*/
			float: left;
			animation: Runing 200s linear infinite !important;
			img {
				width: 244px;
				height: 377px;
				margin: 5px;
				border: 5px solid orange;
				display: block;
				float: left;
			}
		}
	}
	
	.allname-box-w {
		overflow-y: hidden;
		.el-scrollbar-left {
			.el-scrollbar__wrap {
				overflow-y: scroll!important;
			}
		}
		.allname-box {
			background-color: skyblue;
			border: 5px solid black;
			height: 500px;
			/*overflow: scroll;*/
			/*.csxz {
				width: 244px;
				height: 377px;
				animation: lujunyi 10s slinear!important;
			}*/
			.csxz{
				position: absolute;
				right: 6px;
				animation: lujunyi 10s linear infinite !important;
			}
			.wh{
				margin: 5px;
				animation: wh 10s linear infinite !important;
				
			}
		}
	}
	
	.rank-box {
		background-color: yellow;
		border: 5px solid black;
		height: 600px;
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this compo
	
nent only -->