<template>
	<div class="edit-box">
		
		<input type="button" @click="$store.dispatch('getData')" value="测试：mapActions1" style="cursor: pointer;" /><br />
		<input type="button" @click="getData" value="测试：mapActions2" style="cursor: pointer;" /><br />
		<input type="button" @click="getDb" value="测试：methods" style="cursor: pointer;" /><br />
		  <el-table :data="tableData" style="width: 100%">
			<el-table-column label="日期" width="180">
				<template slot-scope="scope">
					<i class="el-icon-time"></i>
					<span style="margin-left: 10px">{{ scope.row.time }}</span>
				</template>
			</el-table-column>
			<el-table-column label="姓名" width="180">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.name }}</p>
						<p>住址: {{ scope.row.address }}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.name }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	 export default {
    data() {
      return {
        tableData: [{
          time: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    mounted(){
//  	this.getDb()
    },
    methods: {
    	...mapActions(['getData']),
    	getDb(){
    		this.$store.dispatch('getData')
			console.log('111111111')
    		
    	},
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped="scoped">
	@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
	.el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    background-color: #E9EEF3;
    color: #000;
    text-align: center;
    line-height: 60px;
  }
  .el-header input{
  	color: blue;
  	cursor:pointer;
  }
  .el-aside {
    /*background-color: #D3DCE6;*/
    background-color: #2d4054;
    color: #FFFFFF;
    text-align: center;
    line-height: 50px;
    height: 600px;
  }
  .aside_ul{
  	/*height: 30%;会出现滚动条*/
  }
  .aside_li.active{
  	background-color:#435466 ;
  }
  .el-main {
    background-color:white;
    color: #333;
    text-align: center;
    line-height: 30px;
    /*margin: 0 auto;*/
  }
  .main_box{
		/*text-align: center;*/
		/*margin: 0 auto;*/
		/*position: relative;*/
	}
  .el-container {
    margin-bottom: 40px;
  }
</style>