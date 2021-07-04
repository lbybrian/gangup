<template>
			<div id="main" class="main">
			<!--<div id="redMap"></div>-->
			<h2>北京时间：</h2>
			<div id="timebox" class="timebox" data-number>
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>-
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>-
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>-
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>:
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>:
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>
				<div class="flip">
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</div>
	<!--<remote-script src="../assets/lib/tool.js"></remote-script>-->
		</div>
</template>

<script>
	import {timeNow} from '../assets/lib/tool.js'
//	import'@/assets/lib/tool.js'
	export default{
		name:"TimeLoose",
		data(){
			return {
//				setTimes:function(cb,zzz){
//					cb(zzz)
//				}
//				nowTime:new Date().getTime()
			}
		},
		mothods:{
			setTimes(newtime){
//				setInterval(function(cb){
//					if(typeof cb===)
//					cb(newtime)
//				},1000)
			}
		},
		mounted(){
//			this.setTimes(this.nowTime)
//			console.log(timeNow)
//			console.log(timeNow instanceof Function)
			if(timeNow instanceof Function){
				setInterval(function(){
					timeNow(new Date().getTime());
				},1000)
			}

//			this.setTimes(timeNow,new Date().getTime())
		}
		
	}
</script>

<style>
</style>