<template>
<!--  <div id="app" >-->
  <div id="app" :style="bg">
    <div id="nav">
      <Header />
    </div>
    
    <div id="menu">
      <Rfloatr />
	    <keep-alive>
	        <router-view/>
	    </keep-alive>
    </div>
    
    <div id="bottom_box">
    	<Footer />
    </div>
  </div>
</template>

<script>
	import Header from '@/components/Header';
	import Rfloatr from '@/components/Rfloatr';
	import Footer from '@/components/Footer';
	export default {
		
		data(){//备注：这里不可以对象形式data。其中引用的地址不能是绝对地址
			return{
				bg:{
					backgroundImage:"url("+require('../public/static/imgs/bg.jpg')+")",
					backgroundSize: "100%,100%",
					backgroundRepeat: "round",
				}
			
			}
		},
		components:{
			Header,
			Footer,
			Rfloatr
		}
	};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
  /*background-image: url("./assets/bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;*/
}
#nav{
	/*width: 100%;*/
	margin-bottom: 100px;
}
#menu{
	min-height: 100vh;
	overflow: hidden;
}
</style>
