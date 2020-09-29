<template>
	<div id="login_box">
		Login
		<br />
		<br />
		<div id="index_pup_box" style="">
			<div class="entry_pop_bg"></div>
			<div class="entry_pop_box">
				<div class="entry_pop_content">

					<div class="enroll_box">
						<div class="fl">
							<div class="fl enroll enroll_add">登录</div>
							<div class="fl enroll">注册</div>
							<div class="clearfix"></div>
						</div>
						<div class="fr close">
							<div class=" layer-cell-close"></div>
						</div>
						<div class="clearfix"></div>
					</div>

					<div class="fl" style="width:430px;">
						

					</div>
					<div class="fr entry_wbox mt50">
						<div class="entry_01">第三方账号登录</div>
						<a class="Wechat" href="//user.tuwan.com/api/url.ashx?app=weixin&amp;redirect_uri=https%3A%2F%2Fy.tuwan.com%2F%3Fsuccess%3D1">
							<div class="entry_w">
								<img src="https://res.tuwan.com/templet/teach/index/images/entry_w.png">&nbsp;微信账号登录
							</div>
						</a>
						<a class="QQ" href="//user.tuwan.com/api/url.ashx?app=qq&amp;redirect_uri=https%3A%2F%2Fy.tuwan.com%2F%3Fsuccess%3D1">
							<div class="entry_qq">
								<img src="https://res.tuwan.com/templet/teach/index/images/entry_qq.png">&nbsp;QQ账号登录
							</div>
						</a>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Login'
	}
</script>

<style scoped="scoped">
	#login_box{
		padding: 0;
		margin: 0;
		list-style: none;
		border: none 0;
		font-family: "微软雅黑",
		"Hiragino Sans GB",
		tahoma,
		arial,
		"\5B8B\4F53";
		-webkit-font-smoothing: antialiased;
		box-sizing: content-box;
	}
	#login_box .entry_pop_bg{
		background-color: #000;
	    height: 100%;
	    opacity: 0.7;
	    position: fixed;
	    top: 0;
	    width: 100%;
	    z-index: 999998;
	}
	#login_box .entry_pop_box{
	    position: fixed;
	    width: 100%;
	    z-index: 999999;
	}
	#login_box .entry_pop_content{
		    background-color: #fff;
    height: 494px;
    margin: 10% auto 0;
    padding: 20px;
    width: 660px;
	}
	#login_box .enroll_box{
		    border-bottom: 1px solid #f3f3f3;
	}
	#login_box .entry_wbox{
		    border-left: 1px solid #f1f1f1;
    padding-bottom: 70px;
    padding-left: 33px;
    padding-right: 15px;
	}
	#login_box .f1{
		float: left;
	}
	#login_box .clearfix{clear: both;}
</style>