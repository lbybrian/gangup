<template>
	<div id="squarelist_body">
		<hr />
		SQUAREList
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
		<hr />
		<br />
		<el-table :data="tableData" style="width: 100%">
			    <el-table-column prop="date" label="DATE">
			    </el-table-column>
			    <el-table-column label="ACCOUNT NUMBER">
			        <template slot-scope="scope">  
			            <p v-for="(item,index) in scope.row.number" :key="index" class="scopeItem">{{item}}</p>
			        </template>
			    </el-table-column>
			    <el-table-column prop="name" label="NAME">
			    </el-table-column>
			    <el-table-column prop="email" label="EMAIL">
			    </el-table-column>
			    <el-table-column prop="type" label="ACCOUNT TYPE">
			    </el-table-column>
			    <el-table-column prop="platform" label="PLATFORM">
			    </el-table-column>
			    <el-table-column prop="currency" label="BASE CURRENCY">
			    </el-table-column>
			    <el-table-column prop="balance" label="ACCOUNT BALANCE">
			    </el-table-column>
			</el-table>
	</div>
	
</template>

<script>
export default{
	name:'SquareList',
	data() {
 
		return {
 
			tableData: [{
					date: "01/03/2018",
					number: ['042018', '042018', '042018', '042018'],
					name: "Danila Mega",
					email: "danilamega@gmail.com",
					type: "Standard STP",
					platform: "MT5",
					currency: "AUD",
					balance: '$0'
				},
				{
					date: "04/03/2018",
					number: ['042018', '042018', '042018', '042018'],
					name: "Navin Shanmugarajan",
					email: "navin.shan@gmail.com",
					type: "RAW ECN",
					platform: "MT4",
					currency: "USD",
					balance: '$0'
				},
				{
					date: "07/03/2018",
					number: ['042018', '042018', '042018', '042018'],
					name: "Alex Wu",
					email: "alex.wu@vantagefx.com",
					type: "Standard STP",
					platform: "MT4",
					currency: "AUS",
					balance: '$0'
				},
				{
					date: "11/03/2018",
					number: ['042018', '042018', '042018', '042018'],
					name: "Austem Plumber",
					email: "austem.plumber@vantagefx.com",
					type: "Standard STP",
					platform: "MT5",
					currency: "CAD",
					balance: '$0'
 
				},
				{
					date: "15/03/2018",
					number: ['042018', '042018', '042018', '042018'],
					name: "Rafael lobo",
					email: "lobinho@hotmail.com",
					type: "Standard STP",
					platform: "MT4",
					currency: "GBP",
					balance: '$0'
				}
			]
		}
	}
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