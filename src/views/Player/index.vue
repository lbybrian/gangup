<template>
	<div>
		 <!--<p v-for="ite in names">{{}}</p>-->
	</div>
</template>

<script>
	export default {
	  name: 'Player',
	  data () {
	    return {
	    	names:[]
	    }
	  },
	  created () {},
	  mounted () {
	  	this.getNames()
	  },
	  components: {},
	  methods: {
	  	getNames(){
	  		this.$axios.get('http://127.0.0.1:8090/shuihuname').then(data=>{
	  			console.log('前端结果',data)
	  		})
	  	}
	  }
	}
</script>

<style scoped>
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->