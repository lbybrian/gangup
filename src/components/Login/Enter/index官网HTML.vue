<template>
	<div id="" ref="enterForm">
		
		<div class="enroll_content" style="display: none;" ref="displaynone">
							<div class="register_box">
								<div class="register">
									<label> 手机</label>22
									<input type="text" placeholder="请输入手机号" required="" id="ctl00_mainContent_txt_phone">
									<div class="dislocation dislocation_01" id="phone_tishi"></div>
								</div>
								<div class="register">
									<label>用户名</label>22
									<input type="text" placeholder="请输入用户名" required="" id="user_name">
									<div class="dislocation dislocation_02" id="username_tishi"></div>
								</div>
								<div class="register">
									<label>密码</label>22
									<input type="password" placeholder="请输入密码" required="" id="userpwd">
									<div class="dislocation dislocation_03" id="userpwd_tishi"></div>
								</div>
								<div class="register">
									<label>验证码</label>22
									<input type="password" placeholder="验证码" class="identifying yanzheng" required="" id="phonecode">
									<div class="dislocation dislocation_0aa dislocation_04"></div>
									<button class="identif yanzheng_02" id="getcode">获取验证码</button>
								</div>
							</div>
							<input type="radio" class="fl radio_01" checked="checked" required="">
							<div class="radio_box fl"><span>已阅读并同意</span>
								<a style="color: #666" href="https://y.tuwan.com/userpoolpc" target="_blank">《兔玩网用户使用协议》</a>
							</div>
							<div class="clearfix"></div>
							<button class="identif_go mt35" id="button_post1">注册</button>
						</div>
		
		
		<div class="enroll_content" >
							<div class="register_box">
								<div class="register">
									<label> 账号</label>11
									<input type="text" placeholder="请输入用户名/手机号" id="username" required="">
									<div class="dislocation dislocation_02 usernameMsg"></div>
								</div>
								<div class="register">
									<label>密码</label>11
									<input type="password" id="pwd" placeholder="请输入密码" required="">
									<div class="dislocation dislocation_02 passwordMsg"></div>
								</div>
								<div class="register">
									<label>验证码</label>11
									<input type="text" placeholder="验证码" required="" id="check" class="yanzheng identifying">
									<div class="dislocation dislocation_04 codeMsg"></div>
									<a style="padding-left: 20px" href="javascript:;" onclick="loadcode('code', 82, 30);"><img id="code" src="https://user.tuwan.com/api/action.ashx?t=verification&amp;w=82&amp;h=30&amp;rand=0.7947571664754762"></a>
								</div>
							</div>

							<div class="voluntarily_box">
								<input type="checkbox" checked="" class="fl voluntarily01"><span></span>
								<div class="fl voluntarily02">下次自动登录</div>
								<a href="https://user.tuwan.com/resetpwd/" target="_blank" title="忘记密码？">
									<div class="fr voluntarily03">忘记密码?</div>
								</a>
							</div>
							<button class="identif_go mt35" id="button_post" @click="check_login">登录</button>
						</div>
						
						
						
		
	</div>
</template>

<script>
	export default {
		name: 'Enter',
		components:{},
		methods:{
			displayNone(){
				
			},
			check_login(){
				    this.$refs.displaynone;
				console.log(11111111111,this.$refs.displaynone)
			}
//    handleDetail2(record){
//  },
       
    
		}
	}
</script>

<style>
</style>