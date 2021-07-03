<template>
  <div v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <!--轮播展示-->
    <el-row :gutter="20">
      <el-col>
        <div class="img-box-w">
          <el-scrollbar>
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
        <div class="allname-box">
        	<el-button @click="getImgsList">重新排列</el-button>
          <img class="csxz" :src="csxz" />
          <ul v-for="item in names[0].casts">
            <li>{{ item }}</li>
          </ul>
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
  import {
    formatDate
  } from "@/js/Tools";
  export default {
    name: "Player",
    data() {
      return {
        loading: false,
        csxz:require("@/assets/imgs/108/35512783_2.jpg"),
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
        brr: [],
      };
    },
    watch:{
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
      //			this.getImgs//显示林冲
      //			console.log(this.getImgs)
      //	  	console.log(formatDate(Date.now()),'\n',new Date().getTime(),'\n',formatDate(new Date().getTime()));//好使
      //	  	console.log(this.$tools.getTimeFromDate(Date.now()),'\n',this.$tools.getTimeFromDate(new Date().getTime()));//不好使
      // this.rank(this.brr)//冒泡排序对比较字符串无效
      // this.brr.sort((a,b)=>{b-a});//同理
      console.log(1111111111, this.brr);
      //			function sortNumber(a,b){//升序
      //			    return a - b
      //			}
      //			this.brr.sort(sortNumber);
      for (var i = 0; i < this.brr.length; i++) {
        console.log(this.brr[i])
      }
      //			this.rank();
      //			this.brr.sort((a,b)=>{
      //				b-a
      //			})
      console.log(2222222222, this.brr);
//    this.rank2();//执行后无效
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
          if (data.status === 200) {
            this.names = data.data.names.data;
          }
        });
      },
      getImgsList() {
        this.loading = true;
        this.$axios.get("http://127.0.0.1:8090/getimgslist").then((res) => {
          if (res.status === 200) {
            this.loading = false;
            this.imgsList = res.data.imgslist;
            // 图片数组排序
    				var i = 0,j;
            	while (i < this.imgsList.length) {
			          j = i + 1;
			          while (j < this.imgsList.length) {
//			            if (this.imgsList[j] < this.imgsList[i]) {
		            	if(parseInt(this.imgsList[j].imsrc.match(/_(\S+?)\./)[1])<parseInt(this.imgsList[i].imsrc.match(/_(\S+?)\./)[1])){
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
      rank2() {//异步执行瞬间获取排序结果
       console.log('rank2',this.brr)
        var i = 0,j;
        while (i < this.brr.length) {
          j = i + 1;
          while (j < this.brr.length) {
            if (this.brr[j] < this.brr[i]) {
              var temp = this.brr[i];
              this.brr[i] = this.brr[j];
              this.brr[j] = temp;
            }
            j++;
          }
          i++;
        }
        console.log('rank2',this.brr)
    },
      
      rank() {//异步执行时可以得到排序结果，但计算时间长
        // var arr = [1,0,5,6,3,9,22,49,20,11,78,9];//简单执行正确
        //				var arr = this.brr;
        //				console.log('测试执行',arr);
        // 创建一个新数组
       console.log('rank',this.brr)
        for (let i = 0; i <= this.brr.length - 1; i++) {
          // 外层循环控制比较几轮
          for (let j = 0; j <= this.brr.length - i - 1; j++) {
            // 内层循环控制每轮比较几个元素
            console.log(44444444444, parseInt(this.brr[j]), parseInt(this.brr[j + 1]));
            if (parseInt(this.brr[j]) > parseInt(this.brr[j + 1])) {
              // if(parseInt(arr[j].url.match(/_(\S+?)\./)[1])>parseInt(arr[j+1].url.match(/_(\S+?)\./)[1])){
              // console.log(parseInt(arr[j].url.match(/_(\S+?)\./)[1]),'~~~~~~~~~~',parseInt(arr[j+1].url.match(/_(\S+?)\./)[1]));
              // 判断每一次比较的时候，两个数字的大小
              // arr[j]是第j个元素
              // arr[j+1]是第j+1 个元素
              //如果j > j + 1， 把j 和j+i交换，也就是把相对大的值往后排序 也就是从小到大排序
              //如果j < j + 1， 把相对小的值往后排 也就是从大到小排序
              //							console.log(this.brr[j]);
              var temp = this.brr[j];
              this.brr[j] = this.brr[j + 1];
              this.brr[j + 1] = temp;
              // 利用第三方变量交换j 和j + 1 的值
            }
          }
        }
        //   console.log(arr);
        console.log('rank',this.brr)
      },
      
    getImgsUrl() {
      for (let i = 0; i <= this.imgsList.length; i++) {
        let item = this.imgsList[i];
        setTimeout(() => {
          console.log(item);
        });
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
    let () {
      for (let i = 0; i <= 108; i++) {
        this.url = "../../../static/imgs/108/35512783_" + i + ".jpg";
        //	  			console.log(this.url)
      }
    },

  },
  };
</script>

<style scoped lang="scss">
  @keyframes lujunyi{
    /*0%{transform:rotateY(0deg)}
    25%{transform:rotateY(90deg)}
    50%{transform:rotateY(270deg)}
    75%{transform:rotateY(360deg)}
    100%{transform:rotateY(0deg)}*/
   0%{transform:rotate(0deg)}
    25%{transform:rotate(90deg)}
    50%{transform:rotate(270deg)}
    75%{transform:rotate(360deg)}
    100%{transform:rotate(0deg)}
  }
  @keyframes turnAround{
		0%{opacity: 0.5;}
		20%{opacity: 1;}
		40%{opacity: 1;}
		60%{opacity: 1;}
		80%{opacity: 1;}
		100%{opacity: 1;}
	}
  @keyframes turnAround{
		0%{left: 0;}
		20%{left: -244px;}
		40%{left: -244px;}
		60%{left: -244px;}
		80%{left: -244px;}
		100%{left: -244px;}
	}
  .el-scrollbar__wrap {
    /*	height: 400px;*/
    /*overflow-y: hidden;*/
    overflow-x: scroll;
  }

  .img-box-w {

    position: relative;
    .img-box {
      position: absolute;
      height: 400px;
      /*width: 26532px;*/
      width: 29030px;
      border: 10px solid red;
      /*margin-bottom: 20px;*/
      /*overflow-x: scroll;*/
      /*overflow-y: hidden;*/
      float: left;

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
    .csxz{
      width: 244px;
      height: 377px;
       /*transform: rotateY(90deg);
       transition: all 2s;
  		animation: lujunyi 2 slinear 2s infinite alternate;*/
      animation: lujunyi 10s slinear!important;
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
