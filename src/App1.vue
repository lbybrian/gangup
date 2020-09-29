<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img src="https://res.tuwan.com/templet/play/index/images/yuewanlogo3.png"></router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/drill">Drill</router-link>
      <router-link to="/pay">Pay</router-link>
      <router-link to="/playr">Playr</router-link>
      <router-link to="/appdownload">Appdownload</router-link>
      <router-link to="/square">Square</router-link>
    </div>
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  display: flex;
  
}

#nav {
	position: fixed;
	
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    margin-right: 30px;
    
  }
}
</style>
