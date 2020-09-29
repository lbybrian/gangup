<template>
	<div id="csbox">
		<!--//分公司列-->
		    <table cellSpacing=0 cellPadding=0 id="left_table2" class="table table-bordered">
		        <tr v-for="agent in companyDto">
		            <th ><p>{{agent.agent_name}}</p></th>
		        </tr>
		    </table>
		<!--//分公司行-->
			<table cellSpacing=0 cellPadding=0  id="right_table1" class="table table-bordered">
			    <tr>
			        <th v-for="bank in bankDto"><p>{{bank.sName}}</p></th>
			    </tr>
			</table>
		<!--//右下角内容-->
			<table cellSpacing=0 cellPadding=0 id="right_table2" class="table table-bordered">
			    <tr v-for="proce in bankProductFproce" >
			        <td>
			            这个地方该如何与bank.sName和agent.agent_name对应呢？
			        </td>
			    </tr>
			</table>
	</div>
</template>

<script>
	export default {
		name:'cs',
	data() {
		return {
			"companyDto": [{
				"agent_code": "6666",
				"agent_name": "北京"
			},
			{
				"agent_code": "4444",
				"agent_name": "南京"
			},
			{
				"agent_code": "5555",
				"agent_name": "东京"
			}
			],
			"bankProductFproce": [{
				"zhcode": "99999",
				"process": "不准入",
				"ffcode": "6666"
			}],
			"bankDto": [{
				"bankName": "中国建设银行",
				"bankCode": "99999",
				"sName": "建行"
			},
			{
				"bankName": "中国招商银行",
				"bankCode": "99999",
				"sName": "招商"
			},
			{
				"bankName": "中国民生银行",
				"bankCode": "99999",
				"sName": "民生"
			}],

//			agent_code对应ffcode， zhcode对应bankCode
		}
	}
}</script>

<style>
</style>