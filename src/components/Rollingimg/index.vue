<template>
    <div class="layui-carousel" id="test1">
<!--    	111111111111111-->
<!--仅轮播-->
      <div carousel-item>
        <div><a href="#::javascript"><img src="/static/imgs/img1.jpg" /></a></div>
        <div><a href="#::javascript"><img src="/static/imgs/img2.jpg" /></a></div>
        <div><a href="#::javascript"><img src="/static/imgs/img3.jpg" /></a></div>
        <div><a href="#::javascript"><img src="/static/imgs/img4.jpg" /></a></div>
      </div>
    </div>
     
</template>
<script>
	
	export default{
		
		name: 'Rollingimg',
		data() {
			return {

			}
		},
		mounted(){
			this.layuiLb();
		},
		methods: {
			//layui轮播图
			layuiLb(){
				this.$nextTick(function() {
					window.layui.use('carousel', function() {
						var carousel = window.layui.carousel;
						//建造实例
						carousel.render({
							elem: '#test1',
							arrow: 'hover',//箭头是否显示always始终显示none不显示
							autoplay: true,//自动切换
							interval: 2000,
							indicator: 'inside',//定位选择按钮位置outside容器外none不显示
							index: 0,
							anim: 'default', //默认左右updown上下切换fade渐变切换
							width: '1200px',
							height: '330px',
							trigger: 'click'
						});
					});
				})
			},
			
		},
		
	
	}
	
	

	
	
	
</script>

<style>
</style>