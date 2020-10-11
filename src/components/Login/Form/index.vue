<template>
	<div>
<!--<form >-->
	<!--账号：<input type="text" name="" value="111111111" /><br /><br />
	密码：<input type="text" name="" value="111111111" /><br /><br />
	验证码：<input type="text" name="" value="111111111" /><br /><br />-->
	<div class="register_box">
        <div class="register">
            <label> 账号</label>
            <input type="text" placeholder="请输入用户名/手机号" id="username" required="">
            <div class="dislocation dislocation_02 usernameMsg"></div>
        </div>
        <div class="register">
            <label>密码</label>
            <input type="password" id="pwd" placeholder="请输入密码" required="">
            <div class="dislocation dislocation_02 passwordMsg"></div>
        </div>
        <div class="register">
            <label>验证码</label>
            <input type="text" placeholder="验证码" required="" id="check" class="yanzheng identifying">
            <div class="dislocation dislocation_04 codeMsg"></div>
            <a style="padding-left: 20px" href="javascript:;" onclick="loadcode('code', 82, 30);"><img id="code" src="https://user.tuwan.com/api/action.ashx?t=verification&amp;w=82&amp;h=30&amp;rand=0.2945598742742186"></a>
        </div>
    </div>
	<div class="pl">
		<div class="pl_left"><input type="checkbox" name="" value="下次自动登录" />下次自动登录</div>
		<div class="pl_right"><a href="##javascript">忘记密码</a></div>
	</div><br /><br /><hr />
	<input class="btn" type="button" name="" :value='this.valueTitle' :valueTitle="valueTitle" @click="gohome"/>{{aaa}}{{bbb}}
<!--</form>-->
</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          valueTitle:''
        }
      }
    },
    props:["btnValue","signValue","aaa","bbb","csLogin"],
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      gohome(){
		  // const that = this;
   	// this.$router.push({
    //      path: '/pay'
    //    })
		console.log(11111111111,this.$route.meta.isAuthorization,22222222222,this.$props)
//		this.$route.isAuthorization=false;
      },
    },
    created(){
    	this.valueTitle=this.bbb;
    	console.log(this.bbb,222222222)
    }
  }
</script>
<style scoped="scoped">
	.register_box{
		padding: 0;
		margin: 0;
		list-style: none;
		border: none 0;
		font-family: "微软雅黑","Hiragino Sans GB",tahoma,arial,"\5B8B\4F53";
		-webkit-font-smoothing: antialiased;
		box-sizing: content-box;
		font-size: 16px;
		padding-top: 30px;
	}
	.dislocation {
    color: #e11d31;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    margin-left: 12px;
    position: absolute;
    right: 12px;
    text-align: center;
    top: 8px;
    z-index: 5;
}
	.pl{
		/*position: relative;*/
	}
	.pl_left{
		float: left;
	}
	.pl_right{
		position: absolute;
		right: 0;
	}
	.btn{
		background-color: #d02642;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    height: 44px;
    line-height: 44px;
    margin-bottom: 80px;
    margin-left: 80px;
    text-align: center;
    width: 340px;
	}
</style>