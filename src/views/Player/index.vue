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
								<!--<el-button @click="ljy=!ljy;isWH=false;isBB=false;isBJ=false;isSJ=false;isXB=false;">天花板</el-button>-->
								<el-button @click="ljy=!ljy;">天花板</el-button>
								<el-button @click="isWH=true;isBB=false;isBJ=false;isSJ=false;isXB=false">马军五虎将</el-button>
								<el-button @click="isWH=false;isBB=true;isBJ=false;isSJ=false;isXB=false">马军八彪将</el-button>
								<el-button @click="isWH=false;isBB=false;isBJ=false;isSJ=false;isXB=true">马军小彪将{{}}</el-button>
								<el-button @click="isWH=false;isBB=false;isBJ=true;isSJ=false;isXB=false">步军{{}}头领</el-button>
								<el-button @click="isWH=false;isBB=false;isBJ=false;isSJ=true;isXB=false">水军{{}}头领</el-button>
								<!--<el-button v-for="item in btnRank" @click="getImgsRank">{{item.title}}</el-button>-->
							</div>
							<div >
								<!--<img class="csxz" :src="csxz" v-show="ljy"/>-->
								<img class="wh" v-for="item in imgsWh" :src="item.url" v-if="isWH"/>
								<img class="wh" v-for="item in imgsRank" :src="item.url" v-if="isBB"/>
								<img class="wh" v-for="item in imgsBj" :src="item.url" v-if="isBJ"/>
								<img class="wh" v-for="item in imgsSj" :src="item.url" v-if="isSJ"/>
								<img class="wh" v-for="item in imgsMj" :src="item.url" v-if="isXB"/>
							</div>
							<ul v-for="item in names[0].casts">
								<li>{{ item }}</li>
							</ul>
							
						</div>
					</el-scrollbar>
				</div>
			</el-col>
			<el-col :span="6">
				<div id="" class="rank-box">
					<img class="csxz" :src="csxz" v-show="ljy"/>
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
				ljy:true,
				isWH:false,
				isBB:false,
				isBJ:false,
				isSJ:false,
				isXB:false,
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
				imgsWh:[],
				imgsRank:[],
				imgsBj:[],
				imgsSj:[],
				imgsMj:[],
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
			this.getImgsList();
		},
		mounted() {
//			this.getImgsRank();
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
//			getImgsRank(){
////				this.getImgsList();
//				console.log(this.imgsList)
//				if(this.imgsList.length>0){
//					this.imgsWh=[];
//					this.imgsRank=[];
//					this.imgsBj=[];
//					this.imgsSj=[];
//					this.imgsMj=[];
//					this.imgsList.forEach(item=>{
//						console.log(item)
//	//					console.log(item.imsrc.match(/_(\S+?)\./)[1])
//		            	let zurl = {
//								url: require("@/assets/imgs/108/" + item.imsrc)
//						}
//			            if (item.imsrc.match(/_(\S+?)\./)[1]==5||item.imsrc.match(/_(\S+?)\./)[1]==6||item.imsrc.match(/_(\S+?)\./)[1]==7||item.imsrc.match(/_(\S+?)\./)[1]==8||item.imsrc.match(/_(\S+?)\./)[1]==15) {
//							this.imgsWh.push(zurl)
//			            }else if(item.imsrc.match(/_(\S+?)\./)[1]==9||item.imsrc.match(/_(\S+?)\./)[1]==12||item.imsrc.match(/_(\S+?)\./)[1]==16||item.imsrc.match(/_(\S+?)\./)[1]==17||item.imsrc.match(/_(\S+?)\./)[1]==18||item.imsrc.match(/_(\S+?)\./)[1]==19||item.imsrc.match(/_(\S+?)\./)[1]==23||item.imsrc.match(/_(\S+?)\./)[1]==24){
//							this.imgsRank.push(zurl)
//			            }else if(item.imsrc.match(/_(\S+?)\./)[1]==13||item.imsrc.match(/_(\S+?)\./)[1]==14||item.imsrc.match(/_(\S+?)\./)[1]==21||item.imsrc.match(/_(\S+?)\./)[1]==22||item.imsrc.match(/_(\S+?)\./)[1]==25||item.imsrc.match(/_(\S+?)\./)[1]==32||item.imsrc.match(/_(\S+?)\./)[1]==33||item.imsrc.match(/_(\S+?)\./)[1]==36){
//							this.imgsBj.push(zurl)
//			            }else if(item.imsrc.match(/_(\S+?)\./)[1]==26||item.imsrc.match(/_(\S+?)\./)[1]==27||item.imsrc.match(/_(\S+?)\./)[1]==28||item.imsrc.match(/_(\S+?)\./)[1]==29||item.imsrc.match(/_(\S+?)\./)[1]==30||item.imsrc.match(/_(\S+?)\./)[1]==31||item.imsrc.match(/_(\S+?)\./)[1]==68||item.imsrc.match(/_(\S+?)\./)[1]==69){
//							this.imgsSj.push(zurl)
//			            }else if(item.imsrc.match(/_(\S+?)\./)[1]==39||item.imsrc.match(/_(\S+?)\./)[1]==40||item.imsrc.match(/_(\S+?)\./)[1]==41||item.imsrc.match(/_(\S+?)\./)[1]==38||item.imsrc.match(/_(\S+?)\./)[1]==44||item.imsrc.match(/_(\S+?)\./)[1]==45||item.imsrc.match(/_(\S+?)\./)[1]==42||item.imsrc.match(/_(\S+?)\./)[1]==43||item.imsrc.match(/_(\S+?)\./)[1]==48||item.imsrc.match(/_(\S+?)\./)[1]==49||item.imsrc.match(/_(\S+?)\./)[1]==67||item.imsrc.match(/_(\S+?)\./)[1]==72||item.imsrc.match(/_(\S+?)\./)[1]==73||item.imsrc.match(/_(\S+?)\./)[1]==50||item.imsrc.match(/_(\S+?)\./)[1]==51||item.imsrc.match(/_(\S+?)\./)[1]==87){
//							this.imgsMj.push(zurl)
//			            }
//						
//					})
//				}
//				console.log(this.imgsWh)
//			},
			//108排序
			async getImgsList() {
				this.loading = true;
				await this.$axios.get("http://127.0.0.1:8090/getimgslist").then((res) => {
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
//			console.log(this.imgsList);
						this.imgsList.forEach(item=>{
							let zurl = {
								url: require("@/assets/imgs/108/" + item.imsrc)
							};
							if (item.imsrc.match(/_(\S+?)\./)[1]==5||item.imsrc.match(/_(\S+?)\./)[1]==6||item.imsrc.match(/_(\S+?)\./)[1]==7||item.imsrc.match(/_(\S+?)\./)[1]==8||item.imsrc.match(/_(\S+?)\./)[1]==15) {
								this.imgsWh.push(zurl)
				            }else if(item.imsrc.match(/_(\S+?)\./)[1]==9||item.imsrc.match(/_(\S+?)\./)[1]==12||item.imsrc.match(/_(\S+?)\./)[1]==16||item.imsrc.match(/_(\S+?)\./)[1]==17||item.imsrc.match(/_(\S+?)\./)[1]==18||item.imsrc.match(/_(\S+?)\./)[1]==19||item.imsrc.match(/_(\S+?)\./)[1]==23||item.imsrc.match(/_(\S+?)\./)[1]==24){
								this.imgsRank.push(zurl)
				            }else if(item.imsrc.match(/_(\S+?)\./)[1]==13||item.imsrc.match(/_(\S+?)\./)[1]==14||item.imsrc.match(/_(\S+?)\./)[1]==21||item.imsrc.match(/_(\S+?)\./)[1]==22||item.imsrc.match(/_(\S+?)\./)[1]==25||item.imsrc.match(/_(\S+?)\./)[1]==32||item.imsrc.match(/_(\S+?)\./)[1]==33||item.imsrc.match(/_(\S+?)\./)[1]==36){
								this.imgsBj.push(zurl)
				            }else if(item.imsrc.match(/_(\S+?)\./)[1]==26||item.imsrc.match(/_(\S+?)\./)[1]==27||item.imsrc.match(/_(\S+?)\./)[1]==28||item.imsrc.match(/_(\S+?)\./)[1]==29||item.imsrc.match(/_(\S+?)\./)[1]==30||item.imsrc.match(/_(\S+?)\./)[1]==31||item.imsrc.match(/_(\S+?)\./)[1]==68||item.imsrc.match(/_(\S+?)\./)[1]==69){
								this.imgsSj.push(zurl)
				            }else if(item.imsrc.match(/_(\S+?)\./)[1]==39||item.imsrc.match(/_(\S+?)\./)[1]==40||item.imsrc.match(/_(\S+?)\./)[1]==41||item.imsrc.match(/_(\S+?)\./)[1]==38||item.imsrc.match(/_(\S+?)\./)[1]==44||item.imsrc.match(/_(\S+?)\./)[1]==45||item.imsrc.match(/_(\S+?)\./)[1]==42||item.imsrc.match(/_(\S+?)\./)[1]==43||item.imsrc.match(/_(\S+?)\./)[1]==48||item.imsrc.match(/_(\S+?)\./)[1]==49||item.imsrc.match(/_(\S+?)\./)[1]==67||item.imsrc.match(/_(\S+?)\./)[1]==72||item.imsrc.match(/_(\S+?)\./)[1]==73||item.imsrc.match(/_(\S+?)\./)[1]==50||item.imsrc.match(/_(\S+?)\./)[1]==51||item.imsrc.match(/_(\S+?)\./)[1]==87){
								this.imgsMj.push(zurl)
				            }
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
			height: 400px;
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
			.btnBox{
				/*text-align: center;*/
				position: fixed;
				left: 18%;
			}
			.wh{
				margin: 5px;
				/*animation: wh 10s linear infinite !important;*/
			}
		}
	}
	
	.rank-box {
		background-color: yellow;
		border: 5px solid black;
		height: 600px;
		.csxz{
			width: 24%;
    		height: 100%;
			position: absolute;
			right: 6px;
			animation: lujunyi 20s linear infinite !important;
		}
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this compo
	
nent only -->