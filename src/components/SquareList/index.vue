<template>
	<div id="squarelist_body">
		SQUAREList
		<br />
		<br />
		<br />
		<br />
		<br />
		<div class="box">
			<div class="dot dot1"></div>
			<div class="dot dot2"></div>
			<div class="dot dot3"></div>
			<div class="dot dot4"></div>
			<div class="dot dot5"></div>
			<div class="dot dot6"></div>
			<div class="dot dot7"></div>
			<div class="dot dot8"></div>
			<div class="dot dot9"></div>
			<div class="dot dot10"></div>
			<div class="dot dot11"></div>
			<div class="dot dot12"></div>
			<div class="dot dot13"></div>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		name:'SquareList'
	}
</script>

<style lang="scss">
	/*@keyframes name{
		from{}
		to{}
	}*/
	@keyframes dotOne{
		0%{opacity: 0.5;}
		20%{opacity: 1;}
		40%{opacity: 1;}
		60%{opacity: 1;}
		80%{opacity: 1;}
		100%{opacity: 1;}
	}
	@keyframes dotTwo{
		0%{opacity: 0.5;}
		20%{opacity: 1;}
		40%{opacity: 1;}
		60%{opacity: 1;}
		80%{opacity: 1;}
		100%{opacity: 0.5;}
	}
	@keyframes dotThree{
		0%{opacity: 0.5;}
		20%{opacity: 0.5;}
		40%{opacity: 1;}
		60%{opacity: 1;}
		80%{opacity: 1;}
		100%{opacity: 0.5;}
	}
	@keyframes dotFour{
		0%{opacity: 0.5;}
		20%{opacity: 0.5;}
		40%{opacity: 1;}
		60%{opacity: 1;}
		80%{opacity: 1;}
		100%{opacity: 0.5;}
	}
	@keyframes dotFive{
		0%{opacity: 0.5;}
		20%{opacity: 0.5;}
		40%{opacity: 1;}
		60%{opacity: 1;}
		80%{opacity: 0.5;}
		100%{opacity: 0.5;}
	}
	@keyframes dotSix{
		0%{opacity: 0.5;}
		20%{opacity: 0.5;}
		40%{opacity: 0.5;}
		60%{opacity: 1;}
		80%{opacity: 0.5;}
		100%{opacity: 0.5;}
	}
	@keyframes dotSeven{
		0%{opacity: 0.5;}
		20%{opacity: 0.5;}
		40%{opacity: 0.5;}
		60%{opacity: 1;}
		80%{opacity: 0.5;}
		100%{opacity: 0.5;}
	}
	.box{
		position: relative;
		height: 300px;
		background-color: orange;
		.dot{
			width:16px;
			height: 16px;
			border-radius: 50%;
			position: absolute;
			background-color: #6bffff;
			opacity: 0.5;
		}
		.dot1{
			top: 56%;
			left: 35%;
			animation: dotOne 10s linear infinite;
		}
		.dot2{
			top: 52%;
			left: 36%;
			animation: dotTwo 10s linear infinite;
		}
		.dot3{
			top: 48%;
			left: 38%;
			animation: dotThree 10s linear infinite;
		}
		.dot4{
			top: 45%;
			left: 40%;
			animation: dotFour 10s linear infinite;
		}
		
		.dot5{
			top: 42%;
			left: 43%;
			animation: dotFive 10s linear infinite;
		}.dot6{
			top: 40%;
			left: 47%;
			animation: dotSix 10s linear infinite;
		}
		.dot7{
			top: 39%;
			left: 51%;
			animation: dotSeven 10s linear infinite;
		}
		.dot8{
			top: 40%;
			left: 55%;
		}
		.dot9{
			top: 42%;
			left: 59%;
		}
		
		.dot10{
			top: 45%;
			left: 62%;
		}
		.dot11{
			top: 48%;
			left: 64%;
		}
		.dot12{
			top: 52%;
			left: 66%;
		}
		.dot13{
			top: 56%;
			left: 67%;
		}
	}
</style>