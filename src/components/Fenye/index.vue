<template>
	<div>
		<div>
			<div id="divZhuanXiangKeCheng" class="index-zhuanxiangkecheng">
				<div class="page-width zhuanxiangkecheng-content">
					<div class="text-center tixikecheng-title">
						<h3 class="index-h3-title text-center">更多教学课程</h3>
					</div>
					<div class="discount_banner" style="display:none;">
					</div>
					<div class="filters">
						<div class="filterbtn" data-id="-1">热门</div><div id="allcourse" class="filterbtn current" data-id="0">全部</div><div class="filterbtn" data-id="336414">上单</div><div class="filterbtn" data-id="335938">打野</div><div class="filterbtn" data-id="335772">中单</div><div class="filterbtn" data-id="336558">射手</div><div class="filterbtn" data-id="335825">辅助</div>
					</div>
					<div id="box" v-for="item in datas">
						<ul>
							<li>
								<h3>{{item.companyFullName}}</h3>
								<!--<h3>{{item.companyName}}</h3>-->
								<!--<img width="100px" :src="'https://www.lgstatic.com/'+item.companyLogo"/>-->
								<img width="100px" :src="item.companyLogo | imgUrl"/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<input type="button" value="上一页" @click="Fenye(--pageindex)" />
		<input type="button" value="下一页" @click="Fenye(++pageindex)" />
	</div>
</template>

<script>
	
	

	export default{
		data(){
			return{
				datas:[],
				pageindex:1,
			}
		},
		mounted(){
			this.Fenye();
		},
		methods:{
			Fenye(pageNo=1){
				this.$axios.get('http://127.0.0.1:8090/lagougou',{params:{pageNo}}).then((data)=>{
					console.log(data.data)
					this.datas = data.data;
				})
			}
		},
		filtters:{
			imgUrl(v){
				return 'https://www.lgstatic.com/'+v
			}
		}
		
	}
</script>

<style scoped="scoped">
	#box{
		width: 100%;
		margin-bottom: 100px;
	}
	ul li{
		float: left;
	}
</style>