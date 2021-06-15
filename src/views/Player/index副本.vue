<template>
	<div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">

		<!--轮播展示-->
		<el-row :gutter="20">
			<el-col>
					<div class="img-box-w">
				<el-scrollbar>
						<div class="img-box" >
							<!--<img src="../../../static/imgs/108/35512783_1.jpg" />-->
							<!--<img src="../../../static/imgs/108/35512783_2.jpg" />
							<img src="../../../static/imgs/108/35512783_3.jpg" />
							<img src="../../../static/imgs/108/35512783_4.jpg" />
							<img src="../../../static/imgs/108/35512783_5.jpg" />
							<img src="../../../static/imgs/108/35512783_6.jpg" />
							<img src="../../../static/imgs/108/35512783_7.jpg" />
							<img src="../../../static/imgs/108/35512783_8.jpg" />
							<img src="../../../static/imgs/108/35512783_9.jpg" />
							<img src="../../../static/imgs/108/35512783_10.jpg" />
							<img src="../../../static/imgs/108/35512783_11.jpg" />-->
							<div v-for="item in imgUrls">
								<img  :src="item.url"/>

							</div>
						</div>
				</el-scrollbar>
					</div>
			</el-col>
		</el-row>
		<!--108将和职位-->
		<el-row :gutter="20">
			<el-col :span="18">
				<div class="allname-box">
					<ul v-for="item in names[0].casts">
						<li>{{item}}</li>
					</ul>
				</div>
			</el-col>
			<el-col :span="6">
				<div id="" class="rank-box">
					测试计算属性：
					<div>函数方法: {{currentTime1()}}</div>
    				<div>计算属性: {{currentTime2}}</div>
    				<hr />
					<h3 v-for="item in imgUrls">{{item.url}}</h3>
    				
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
	import { formatDate } from "@/js/Tools"
	export default {
		name: 'Player',
		data() {
			return {
				loading: false,
				names: [{
					casts: [],
					cover_y: 3556,
					id: "26608230",
					star: "108",
					title: "108将",
				}],
				imgsList:[{
					imsrc:'35512783_6.jpg'
				}],
				imgUrls:[{
	    			url:require("@/assets/imgs/108/35512783_2.jpg"),
		    	},
				{
					url:require("@/assets/imgs/108/35512783_6.jpg"),
				},
				{
		    		url:'../../../static/imgs/108/35512783_2.jpg',
					
				}],
			}
		},
		created() {
			this.getNames()
//			this.let()
			this.getImgsList()
//			this.getImgsUrl()
		},
		mounted() {
			console.log(this.getImgs)
			//	  	console.log(formatDate(Date.now()),'\n',new Date().getTime(),'\n',formatDate(new Date().getTime()));//好使
			//	  	console.log(this.$tools.getTimeFromDate(Date.now()),'\n',this.$tools.getTimeFromDate(new Date().getTime()));//不好使
		},
		components: {

		},
		computed: {
			getImgs() {
//				for(let i = 0; i <= 108; i++) {
//					this.url = '../../../static/imgs/108/35512783_' + i + '.jpg';
//				}
				this.imgsList.map(item=>{
//					for(let i = 0; i <= this.imgsList.length; i++) {
//						this.url = '../../../static/imgs/108/35512783_' + i + '.jpg';
//					}
					let zurl={url:require("@/assets/imgs/108/"+item.imsrc)};
					return this.imgUrls.push(zurl)
					console.log(zurl)
//					this.imgUrls.push()
				})
				console.log(this.imgUrls)
				
			},
			currentTime2: function() {
				//              return this.$tools.timeNow(Date.now());
				return formatDate(Date.now());
			}
		},
		methods: {
			currentTime1() {
				return formatDate(Date.now());
			},
			getNames() {
				this.$axios.get('http://127.0.0.1:8090/shuihuname').then(data => {
//					console.log('前端结果', data)
					if(data.status === 200) {
						this.names = data.data.names.data
					}
				})
			},
			getImgsList(){
				this.loading=true;
				this.$axios.get('http://127.0.0.1:8090/getimgslist',).then(res=>{
//					console.log(11111111,res)
					if(res.status === 200) {
						this.loading=false;
						this.imgsList=res.data.imgslist;
//						console.log('图片地址',res,'\n',this.imgsList)
					}
				})
			},
			getImgsUrl(){
				for(let i = 0; i <= this.imgsList.length; i++) {
					let item =this.imgsList[i];
					setTimeout(()=>{
						console.log(item);
					})
//					let zurl={url:require("@/assets/imgs/108/"+item.imsrc)};
//					console.log(zurl)
				}
//				this.imgsList.map(item=>{
////					for(let i = 0; i <= this.imgsList.length; i++) {
////						this.url = '../../../static/imgs/108/35512783_' + i + '.jpg';
////					}
//					let zurl={url:require("@/assets/imgs/108/"+item.imsrc)};
//					return this.imgUrls.push(zurl)
//					console.log(zurl)
////					this.imgUrls.push()
//				})
//				console.log(this.imgUrls)
				
		},
//			getImgsList(){
////				for(){
////					
////				}
//				this.$axios.get('http://127.0.0.1:8090/getimgslist',{responseType:'arraybuffer'}).then(res=>{
////					console.log(11111111,res)
//					if(res.status === 200) {
////						console.log('图片?',res,'\n',res.imgslist.arrayBuffer())
//						console.log('图片?',res)
//						let aimg=this._Base64toFile('../../../static/imgs/108/','测试图片')
//						console.log(aimg)
//					}
//				})
//			},
//			_Base64toFile(dataurl, filename) {//将base64转换为文件
//		        var arr = dataurl.split(','), 
//		        	mime = arr[0].match(/:(.*?);/)[1],
//		            bstr = atob(arr[1]), 
//		            n = bstr.length, 
//		            u8arr = new Uint8Array(n);
//		        while(n--){
//		            u8arr[n] = bstr.charCodeAt(n);
//		        }
//		        return new File([u8arr], filename, {type:mime});
//		   },
			let() {
				for(let i = 0; i <= 108; i++) {
					this.url = '../../../static/imgs/108/35512783_' + i + '.jpg';
					//	  			console.log(this.url)

				}
			}
		}
	}
</script>

<style scoped lang="scss">
.el-scrollbar__wrap {
/*	height: 400px;*/
  /*overflow-y: hidden;*/
  overflow-x: scroll;
}
	.img-box-w {
		/*position: relative;*/
		.img-box {
			/*position: absolute;*/
			height: 400px;
			/*width: 26532px;*/
			width: 29030px;
			border: 10px solid red;
			/*margin-bottom: 20px;*/
			/*overflow-x: scroll;*/
			/*overflow-y: hidden;*/
			float:left;
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
	
	.allname-box {
		background-color: skyblue;
		border: 5px solid black;
		height: 500px;
	}
	
	.rank-box {
		background-color: yellow;
		border: 5px solid black;
		height: 600px;
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->