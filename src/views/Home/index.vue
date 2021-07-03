<template>
	<div>
		<!--初级banner-->
      <!--<Banner />-->
      
      <!--<roter-view />-->
      <!--<Backtop/>-->
      
      <!--高大尚版-->
      <Banner />
	</div>
    
     
</template>
<script>
	
	import Banner from './Banner';
//	import HomeList from './Banner';
//	import Backtop from '@/components/Backtop';
	export default{
		
		name: 'Home',
		components:{
			Banner,
//			Backtop
		},
		data() {
			return {
			}
		},
		mounted(){
		},
		
	
	}
	
	
</script>

<style>
	/*@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");*/
</style>