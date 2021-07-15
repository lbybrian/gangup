<template>
	<div>
		ABBBBBB
		<div>{{d}}、{{time}}</div>
		<hr  />
		<div>
		     <div class="box">
		       <span>姓名： {{infos.name}}</span><br/>
		       <span>{{infos.age}}</span><br/>
		       <span>{{infos.message}}</span><br/>
		       <el-button @click="addtooltip" v-show='!isShow'>查看地址信息</el-button>
		       <el-button @click="reset" v-show='isShow' >取消</el-button>
		     </div>
	  	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				time:'',
				d:'',
				isShow:false,
				infos: {
		          name: '张三',
		          age: 24
		        }
			}
		},
		created(){
			this.time = new Date().toLocaleTimeString();
			this.getDay()
		},
		methods:{
			addtooltip() {
				this.isShow=true;	
//	          this.infos.message = '出生于四川遂宁';
	          this.$set(this.infos,'message','出生于四川遂宁')
	          this.$set(this.infos,'age','28')
	      },
	      reset(){
			this.isShow=false;
	      	this.$delete(this.infos,'message','出生于四川遂宁')
	      	this.$set(this.infos,'age','25')
	      },
	      getDay(){
	      	let d= new Date().getDay();
			switch (d) 
			{ 
			  case 0:this.d="今天是星期日"; 
			  break; 
			  case 1:this.d="今天是星期一"; 
			  break; 
			  case 2:this.d="今天是星期二"; 
			  break; 
			  case 3:this.d="今天是星期三"; 
			  break; 
			  case 4:this.d="今天是星期四"; 
			  break; 
			  case 5:this.d="今天是星期五"; 
			  break; 
			  case 6:this.d="今天是星期六"; 
			  break; 
			}
	      }
			
		}
	}
</script>

<style>
</style>