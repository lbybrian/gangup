<template>
	<div 
		v-loading="loading"
	    element-loading-text="拼命加载中"
	    element-loading-spinner="el-icon-loading"
	    element-loading-background="rgba(0, 0, 0, 0.8)"
	>
		
		<!--轮播展示-->
		<el-row :gutter="20">
			<el-col>
				<div class="img-box" v-for="item in imgUrls" >
					<!--<img src="../../../static/imgs/108/35512783_1.jpg" />
					<img src="../../../static/imgs/108/35512783_2.jpg" />
					<img src="../../../static/imgs/108/35512783_3.jpg" />
					<img src="../../../static/imgs/108/35512783_4.jpg" />
					<img src="../../../static/imgs/108/35512783_5.jpg" />-->
					<img src="../../../static/imgs/108/35512783_6.jpg" />
					<img src="/static/imgs/108/35512783_2.jpg" />
					<img :src="url" />
					<img :src="item.url" />
          <!--<el-image style="width: 244px;height: 377px;" :src="imgUrl"></el-image>-->
					
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
	export default {
	  name: 'Player',
	  data () {
	    return {
	    	loading:false,
	    	names:[{
	    		casts:[],
	    		cover_y: 3556,
				id: "26608230",
				star: "108",
				title: "108将",
	    	}],
//	    	url:require("/static/imgs/108/35512783_6.jpg"),
	    	url:require("@/assets/imgs/35512783_6.jpg"),
	    	imgUrls:[{
	    		url:require("@/assets/imgs/35512783_6.jpg"),
	    		url:require("@/assets/imgs/35512783_6.jpg"),
	    		url:require("@/assets/imgs/35512783_6.jpg"),
	    	},
//	    	{
//	    		url:require("@/assets/imgs/35512783_7.jpg")
//	    	},
//	    	{
//	    		url:require("@/assets/imgs/35512783_8.jpg")
//	    	}
	    	]
	    }
	  },
	  created () {
	  	this.getNames()
	  	this.let()
	  },
	  mounted () {
	  },
	  components: {
	  	
	  },
	  computed:{
	  	getImgs(){
	  		for (let i=0;i<=108;i++) {
	  			this.url= '../../../static/imgs/108/35512783_'+i+'.jpg';
	  		}
	  	}
	  },
	  methods: {
	  	getNames(){
	  		this.$axios.get('http://127.0.0.1:8090/shuihuname').then(data=>{
	  			console.log('前端结果',data)
	  			if(data.status===200){
	  				this.names=data.data.names.data
	  			}
	  		})
	  	},
	  	let(){
	  		for (let i=0;i<=108;i++) {
	  			this.url= '../../../static/imgs/108/35512783_'+i+'.jpg';
	  			console.log(this.url)
	  			
	  		}
	  	}
	  }
	}
</script>

<style scoped lang="scss">
	.img-box{
		/*background-color: red;*/
		height: 380px;
		border: 5px solid red;
		margin-bottom:20px;
		overflow-x: scroll;
		overflow-y: hidden;
		img{
			width: 244px;
			height: 377px;
			margin: 5px;
		}
	}
	
	.allname-box{
		background-color: skyblue;
		border: 5px solid black;
		height: 500px;
	}
	
	.rank-box{
		background-color: yellow;
		border: 5px solid black;
		height: 600px;
	}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->