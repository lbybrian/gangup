<template>
	<div id="jsdom">
		<div>
			我怎么了？？
		</div>
	</div>
</template>
<script>
	export default {
		name: 'JsDom',
		data(){
			return {}
		},
		components:{
		},
		created(){},
		mounted(){
			const s = document.createElement('script');
		  	s.type = 'text/javascript';
		  	s.src = '@/js/JsDom.js';
		  	document.body.appendChild(s);
		},
		activated(){},
		methods:{}
	}
</script>

<style scoped="scoped">
	

</style>