<template>
	<div class="right-float" v-if="!$route.meta.isShow" >
	    <div @click="show">
	        <img src="https://res.tuwan.com/templet/play/public/rightfloat/images/float_head.png?v=1" style="width:66px;">
	    </div>
	    <div class="right-float-main" v-show="isShow">
	
	        <a class="right-float-item fast_order" target="_blank" href="//y.tuwan.com/chatroom/">
	            <!-- <div class="right-icon right-chatroom"></div> -->
	            <img style="width:31px;" src="https://res.tuwan.com/templet/play/springfestivalbox/chaticon.gif">
	            <p class="voiceroom">急速点单</p>
	        </a>
	        <a class="right-float-item start_live" target="_blank" href="" style="display:none">
	            <div class="right-icon right-start-live"></div>
	            <p>开始直播</p>
	        </a>
	        <a class="right-float-item free_kaihei" target="_blank" href="//y.tuwan.com/chatroom/304">
	            <div class="right-icon right-kaihei"></div>
	            <p>免费开黑</p>
	        </a>
	        <a class="right-float-item" id="rightfloat_showchat">
	            <div class="messageNums">1</div>
	            <div class="right-icon right-chat"></div>
	            <p>私信</p>
	        </a>
	        <a class="right-float-item" id="dd_kefu_float">
	            <div class="right-icon right-kefu"></div>
	            <p>客服</p>
	        </a>
	        <a class="right-float-item" href="#">
	            <div class="right-icon right-top"></div>
	            <p>顶部</p>
	        </a>
	        <a class="right-float-item" href="#"  @click="show">
	            <p>隐藏</p>
	        </a>
	    </div>
	</div>
</template>

<script>
	export default{
		name:'rfloat',
		data(){
			return{
				isShow:true
			}
		},
		created(){
			this.isShow=false;
		},
		methods:{
			show(){
				this.isShow=!this.isShow;
			}
		}
	}
</script>

<style scoped="scoped">
	.right-float {
        width: 66px;
        text-align: center;
        position: fixed;
        right: 10px;
        bottom: 100px;
        line-height: 0;
        z-index: 9999;
        font-size: 12px;
    }

    .right-float .right-float-main {
        background: #fff;
        padding: 10px 0;
        border-radius: 5px;
        box-shadow: 1px 1px 10px #f0f0f0;
    }

    .right-float .right-float-main p {
        margin: 0;
        padding: 0;
        line-height: 30px;
    }

    .right-float .right-float-main a.right-float-item {
        padding: 4px 0;
        margin-bottom: 10px;
        display: block;
        cursor: pointer;
        position: relative
    }

    .right-float .right-float-main .right-icon {
        height: 32px;
    }

    .right-float .right-float-main .right-kefu {
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/kefu_default.png?v=2) no-repeat center center;
    }

    .right-float .right-float-main .right-chatroom {
        /*background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/chatroom_default.png) no-repeat center center;*/
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/chatroom_select.png?v=2) no-repeat center center;
        /*color: #f64662;*/
    }

    p.voiceroom {
        color: #ff6600;
    }

    .right-float .right-float-main .right-chat {
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/chat_default.png?v=2) no-repeat center center;
    }

    .right-float .right-float-main .right-top {
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/top_default.png?v=2) no-repeat center center;
    }

    .right-float .right-float-main .right-kaihei {
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/kaihei_default.png) no-repeat center center;
    }

    .right-float .right-float-main .right-start-live {
        background: url(https://res.tuwan.com/templet/play/2019nationalday/start_live.png) no-repeat center center;
    }

    .right-float .right-float-main a.right-float-item {
        color: #999;
        text-decoration: none;
    }

    .right-float .right-float-main a.right-float-item:hover p {
        color: #FF6600;
    }

    .right-float .right-float-main a.right-float-item:hover .right-kefu {
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/kefu_select.png?v=2) no-repeat center center;
    }

    .right-float .right-float-main a.right-float-item:hover .right-chatroom {
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/chatroom_select.png?v=2) no-repeat center center;
    }

    .right-float .right-float-main a.right-float-item:hover .right-chat {
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/chat_select.png?v=2) no-repeat center center;
    }

    .right-float .right-float-main a.right-float-item:hover .right-top {
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/top_select.png?v=2) no-repeat center center;
    }

    .right-float .right-float-main a.right-float-item:hover .right-kaihei {
        background: url(https://res.tuwan.com/templet/play/public/rightfloat/images/kaihei_select.png) no-repeat center center;
    }

    .right-float .right-float-main a.right-float-item:hover .right-start-live {
        background: url(https://res.tuwan.com/templet/play/2019nationalday/start_live_hover.png) no-repeat center center;
    }

    /*.messageNums {
        display: none;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: red;
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 20px;
        position: absolute;
        top: -4px;
        left: 43px;
    }*/
</style>