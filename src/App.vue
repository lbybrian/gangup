<template>
<!--  <div id="app" >-->
  <div id="app" :style="{'background-color':bg.backgroundColor[0]}" >
    <div id="nav">
      <Header :changeColor="changeColor" />
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
				index:0,
				bg:{
//					backgroundImage:"url("+require('../public/static/imgs/bg.jpg')+")",
//					backgroundSize: "100%,100%",
//					backgroundRepeat: "round",
//						backgroundColor:['#2ac9b3'],
						backgroundColor:['rgba(255,255,255,0%)'],
//						backgroundColor:['radial-gradient(#062771 15% #04132b 100%)'],
				}
			}
		},
		watch:{
			'bg.backgroundColor'(newi,oldi){
//				console.log(newi,oldi)
				this.bg.backgroundColor=newi
			}
		},
		components:{
			Header,
			Footer,
			Rfloatr
		},
		methods:{
			changeColor(){
					this.bg.backgroundColor.splice(0,1);
					if(this.bg.backgroundColor.length<=1){
						this.bg.backgroundColor=['skyblue','#65c5ec','#0faaea','#29f8a7','#31f829','8c2ac9','pink','#eb87a0','#ee5178','#ecec6f','yellow','orange','#663399','#2ac9b3','white']
					}
					console.log(this.bg.backgroundColor[0],this.bg.backgroundColor.length)
			}
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
