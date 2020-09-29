<template>
  <div class="about">
    <h1>This is an about page</h1><hr />
    <!--<p>测试'拉钩'数据：{{results}}</p>-->
    <div  v-for="item in results">
    	<h3>{{item.companyFullName}}</h3>
    	<!--<img width="100px" :src="`http://www.lgstatic.com/`+item.companyLogo" />-->
    	<img width="100px" :src="item.companyLogo | imgUrl" />
    	<!--<button value="加载更多" @click="Addmore()"></button>-->
    </div>
    	<input type="button" value="上一页"@click="Fenye(--pageindex)" />&nbsp;&shy;
    	<input type="button" value="下一页"@click="Fenye(++pageindex)" /><br />
    	<input type="button" value="加载更多"@click="Getcompany(++pageindex)" />
  </div>
</template>
<script>
//	import Header from '@/components/Header';
//	import Footer from '@/components/Footer';
	export default {
		data(){
			return {
				results:[],
				pageindex:1,
			}
		},
		mounted(){
			this.Getcompany();
		},
		methods:{
			//获取接口数据--实现加载更多
			Getcompany(pageNo=1,pageSize=10){
				this.$axios.get("http://127.0.0.1:8090/lagougou",{
					params:{pageNo,pageSize},
				}).then(({data})=>{
					this.results = [...this.results,...data];
					console.log(data,data.length);//其实data.length就是pageSize
				})
			},
			Fenye(pageNo=1){
				this.$axios.get("http://127.0.0.1:8090/lagougou",{
					params:{pageNo},
				}).then(({data})=>{
					this.results = data;
					console.log(data);
				})
		}
		},
		components:{},
	};
</script>
