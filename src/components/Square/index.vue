<template>
	<div class="square_body">
		<div class="square_box">
			Square
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<SquareList/>
			<!--<router-view to="/square/squarelist"></router-view>-->
			<div class="square_main">
			<a class="fl common_right_01 1 common_right_hover" href="javascript:;" target="_blank" id="msgCenter" @mouseover="mouseover" @mouseleave="mouseleave">
            <img src="//res.tuwan.com/templet/play/public/images/message.png" class="qt" :style="theDisplay">
            <img src="//res.tuwan.com/templet/play/public/images/message_hover.png" :style="Display" class="qt_hover">
            <br> 消息
        </a>
		</div>
		</div>
		
		<!--<div class="f">
			<a class="fl common_right_01 1 common_right_hover" href="javascript:;" target="_blank" id="msgCenter">
            <img src="//res.tuwan.com/templet/play/public/images/message.png" class="qt" style="display: inline;">
            <img src="//res.tuwan.com/templet/play/public/images/message_hover.png" style="display: none;" class="qt_hover">
            <br> 消息
        </a>
		</div>-->
		
	</div>
</template>

<script>
	
	import SquareList from '@/components/SquareList';
	
	var ela = document.querySelector('#msgCenter');
	var tru = document.querySelector('.qt');
	var fal = document.querySelector('.qt_hover');
	
	export default{
		name:"Square",
		components:{
			SquareList,
			
		},
		data(){
			return{
				Display:'display:none',
				theDisplay:'display:block',
				
			}
		},
		mounted(){
			
		},
		methods:{
			changeDisplay(){
				
			},
			mouseover(){
				tru.style=this.Display;
				fal.style=this.theDisplay;
			},
			mouseleave(){
				tru.style=this.theDisplay;
				fal.style=this.Display;
			}
		}
	}
</script>

<style>
</style>