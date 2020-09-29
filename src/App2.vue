<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    
    <div id="menu">
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
	import Footer from '@/components/Footer';
	export default {
		components:{
			Header,
			Footer
		}
	};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*display: flex;*/
  
}

#nav {
	/*position: fixed;*/
  padding: 30px;
  a {
    font-weight: bold;
    font-size: 32px;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #fa6543;
      border-bottom: solid 3px #FA6543;
    }
    margin-right: 30px;
  }
  a:hover{
      color: #fa6543;
      border-bottom: solid 3px #FA6543;
  }
}

/*Header{
    margin: 0;
    list-style: none;
    border: none 0;
    font-family: '微软雅黑','Hiragino Sans GB',tahoma,arial,'\5B8B\4F53';
    -webkit-font-smoothing: antialiased;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;"
}*/
</style>
