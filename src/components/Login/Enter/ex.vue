<template>
	<div id="">
		ex:内容
		<!--<el-dialog
	  title="提示(ex内容)"
	  :visible.sync="dialogVisible"
	  width="30%"
	  :before-close="handleClose">
	  <span>这是一段信息</span>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogVisible = false">取 消</el-button>
	    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  		</span>
	</el-dialog>-->
		
	</div>
	
</template>

<script>
	export default {
		name:"ex",
		components:{
    		
		},
	    data() {
	      return {
	        dialogVisible: false
	      };
	    },
	    methods: {
	      handleClose(done) {
	        this.$confirm('确认关闭？')
	          .then(_ => {
	            done();
	          })
	          .catch(_ => {});
	      }
	    }
  };
</script>

<style>
</style>