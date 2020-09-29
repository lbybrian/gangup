<template>
	<div id="csbox">
		    父子分割线<hr />
		<table>
		    <thead>
		        <tr>
		            <th>子组件数据哦:</th>
		            <th v-for="bank in bankDto">{{bank.sName}}</th>
		        </tr>
		    </thead>
		    <tbody>
		    	<div class="t-left">
		    		<h3><b>父级给的：</b></h3>
			    	 <tr v-for="item in dblist">
			    	    <td>{{item.time}}</td>
			    	    <td>{{item.content}}</td>
			    	    <td>{{item.username}}</td>
			    	</tr>
		    	</div>
		    	<div class="t-right">
		    		<h3><b>自己的：</b></h3>
			        <tr v-for="agent in manageFDto">
			            <td>{{agent.agent_name}}</td>
			            <!--<td v-for="item in manageProDto">{{item.process}}</td>-->
			        </tr>
		    	</div>
		    </tbody>
		</table>
		    父子分割线<hr />
	</div>
</template>

<script>
export default {
	name:'cs',
	data() {
		return {
			//银行列表
			bankDto: {
			    0: {bankName: "中国工商银行", bankCode: "20000001", sName: "工行"},
			    1: {bankName: "民生银行", bankCode: "20000007", sName: "民生"},
			    2: {bankName: "中国银行", bankCode: "20000002", sName: "中行"},
			},
			//地区列表，
			manageFDto: {
			    0: {agent_code: "8611", agent_name: "北京"},
			    1: {agent_code: "8612", agent_name: "天津"},
			    2: {agent_code: "8613", agent_name: "河北"},
			    3: {agent_code: "8615", agent_name: "内蒙古"},
			    4: {agent_code: "8623", agent_name: "黑龙江"},
			    5: {agent_code: "8631", agent_name: "上海"},
			    6: {agent_code: "8632", agent_name: "江苏"},
			    7: {agent_code: "8633", agent_name: "浙江"},
			    8: {agent_code: "8634", agent_name: "安徽"},
			    9: {agent_code: "8636", agent_name: "江西"},
			},
			//表格内容列表
			manageProDto: {
			    0: {zhcode: "20000001", process: "谈费率", ffcode: "8623"},
			    1: {zhcode: "20000007", process: "谈费率", ffcode: "8623"},
			   	2: {zhcode: "20000002", process: "谈费率", ffcode: "8623"},
			}
		}
	},
    props:['dblist'],
	
}

</script>

<style>
	.t-left{
		float: left;
	}
	.t-right{
		float: left;
	}
</style>