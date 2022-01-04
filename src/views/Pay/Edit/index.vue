<template>
	<div class="edit-box">
		<!--<div class="datalist" v-for="item in dblist">-->
		  	<el-table :data="dblist" style="width: 100%">
				<el-table-column label="日期" width="180">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.time }}</span>
					</template>
				</el-table-column>
				<el-table-column label="姓名" width="180">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
							<p>情报内容: {{ scope.row.content }}</p>
							<p>{{$store.state.csdata}}</p>
							<p>真相: {{ scope.row.username }}</p>
							<p>{{csName}}</p>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">{{ scope.row.content }}</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				
				<!--<el-table-column label="任务名称" width="180">
					<template slot-scope="scope">
						<el-select
							v-model="scope.row.rwmc"	
							multiple
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    multiple
    allow-create
    default-first-option
						>
							<el-option>
								
							</el-option>
						</el-select>
					</template>
				</el-table-column>-->
				
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			
		<!--</div>-->
			<Cs :dblist="dblist"></Cs>
		<p>{{$store.state.csdata}}</p>
		<input type="button" @click="$store.dispatch('getData')" value="测试：mapActions1" style="cursor: pointer;" /><br />
		<input type="button" @click="getData" value="测试：mapActions2" style="cursor: pointer;" /><br />
		<input type="button" @click="csgetDb" value="测试：methods" style="cursor: pointer;" /><br />
		<input type="button" @click="changeCsDataName" value="测试：ChangeData" style="cursor: pointer;" /><br />
		
	
	</div>
</template>

<script>
	import Cs from './cs'
	import {mapActions} from 'vuex'
	 export default {
    data() {
      return {
      	dbname:'csdbs',
      	jhname:'users',
      	userlist:[],
      	options: [],
      	list: [],
      	loading: false,
      	dblist:[{
      		time:'113141413',
      		content:'是撒',
      		defatet:'aaaaaaaaa'
      	}],
        tableData: [{
          time: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },

    components:{
    	Cs
    },
    mounted(){
//  	this.getDb()
    },
    activated(){
    	this.csgetDb()
    },
    computed:{
    	csName(){
    		return this.$store.state.csname
    	}
    },
    methods: {
    	...mapActions(['getData']),
    	async csgetDb(){
//  		const alllist = await this.$store.dispatch('getData')
//  		console.log(alllist)
			const {data} = await this.$store.dispatch('getData');
			this.dblist = data.dataList;
    		console.log()
    	},
    	remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      },
    	getDbMapUser(){
    		
    	},
    	changeCsData(){
    		this.$store.dispatch('csData')
    	},
    	changeCsDataName(){
    		this.$store.dispatch('CsAction')
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