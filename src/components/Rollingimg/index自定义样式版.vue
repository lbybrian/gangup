<template>
<div class="flb">
	
	<div class="layui-carousel" id="test1">
		<div carousel-item >
			<div><img src="/static/imgs/img1.jpg" /></div>
			<div><img src="/static/imgs/img2.jpg" /></div>
			<div><img src="/static/imgs/img3.jpg" /></div>
			<div><img src="/static/imgs/img4.jpg" /></div>
		</div>
	</div>
	
</div>

</template>
<script>
	export default {
		name: 'Login',
		data() {
			return {

			}
		},
		//	export default{
//		name:'Login',
//		data(){
//			return{
//				
//			}
//		},
//		methods:{},
//		mounted: function () {
//			
//			this.$nextTick(function(){
//				window.layui.use('carousel', function(){
//			      var carousel = window.layui.carousel;
//			      //建造实例
//			      carousel.render({
//			        elem: '#test1',
//			        arrow: 'hover',
//			        autoplay:true,
//			        interval:1000,
//			        indicator:'inside',
//			        index:0,
//			        anim:'default',//默认左右updown上下切换fade渐变切换
//			        width:'1500px',
//			        height:'330px',
//			        trigger:'click'
//			      });
//			    });
//				
//			})
//		}
//	}
		methods: {
			//layui轮播图
			layuiLb(){
				this.$nextTick(function() {
					window.layui.use('carousel', function() {
						var carousel = window.layui.carousel;
						//建造实例
						carousel.render({
							elem: '#test1',
							arrow: 'hover',
							autoplay: true,
							interval: 3000,
							indicator: 'inside',
							index: 0,
							anim: 'default', //默认左右updown上下切换fade渐变切换
							width: '1000px',
							height: '330px',
							trigger: 'click'
						});
					});
				})
			}
		},
		mounted(){
			this.layuiLb();
		},
		
	}
</script>

<style scoped="scoped">
	.flb{
		/*position: relative;*/
		height: 400px;
	}
	.layui-carousel {
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		margin: auto;
		padding: 0;
	}
</style>