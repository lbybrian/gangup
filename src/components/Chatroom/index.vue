<template>
	<div>
		<iframe src="javascript:false" title="" frameborder="0" tabindex="-1" style="position: absolute; width: 0px; height: 0px; border: 0px;"></iframe>

		<div id="chat-play" style="display: none;"></div>
		<div id="diandian_remote" style="display: none;">
			<div id="agora_remote3328661" style="float:left; width:810px;height:607px;display:inline-block;">
				<div id="player_3328661" style="width: 100%; height: 100%; position: relative; overflow: hidden;">
					<video id="video3328661" style="width: 100%; height: 100%; position: absolute; display: none; object-fit: cover" playsinline="">
						
					</video>
				</div>
			</div>
		</div>
		
		<div class="chat-main">
		<div class="chat-head" style="background: url(https://res.tuwan.com/templet/play/chat/auto/images/chatheadbg.png) no-repeat 0 0 #f58;">
			<!-- <div class="chat-head" style="background: url(https://res.tuwan.com/templet/play/2019xmas/xmas_banner.jpg) no-repeat 0 0 #996699;"> -->
			<!-- <div class="chat-head" style="background: url(https://res.tuwan.com/templet/play/2020/2020vday/sf_banner.jpg) no-repeat 0 0 #996699;"> -->
			<div style="display: flex; height: 65px;">
				<div class="chat-head-left">
					<div class="chat-logo">
						<a href="/" target="_black">
							<p></p>
						</a>
					</div>
					<div style="display: none;" id="div-shangdang">
						<button id="btnShangDang" status="0">上档</button>
					</div>
				</div>
				<div class="chat-head-right">
					<div style="font-size: 12px; color: #fff; text-align: center;  align-items: center; flex-flow: wrap; display: inline-flex; ">
						<div style="margin-right: 44px; font-size: 16px;cursor: pointer;" id="divNoLogin">
							<span id="chatHeadYkNickname">游客ID</span>
							<span style="padding:0 16px;">|</span>
							<span class="chat-btnlogin">登录</span>
							<span style="padding:0 16px;">|</span>
							<span class="chat-btnout"style="" @click="goBack">退出</span>
						</div>
						<div style="margin-right: 44px; font-size: 16px; display: none" id="divLogin">
							<a href="javascript:;" class="user-own-message">私信<em></em>
								<div class="flex newimmessage-tips">
									<p></p>
								</div>
							</a>
							<span style="padding:0 16px;">|</span>
							<a class="jump-to-center" target="_blank" href=""><span id="chatHeadImage"></span></a>
							<a class="jump-to-center" target="_blank" href=""><span account="0" id="chatHeadNickname"></span></a>
							<span style="padding:0 16px;">|</span>
							<span class="chat-btnoutlogin" style="">退出</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="flex chat-content">
			<div class="flex chat-left"><ul class="flex chat-left-catorage"><li data-type="attent" class="">关注<span></span></li><li data-type="lol" class="">LOL<span></span></li><li data-type="pubg" class="current">绝地<span></span></li><li data-type="game" class="">综合<span></span></li><li data-type="mobile" class="">手游<span></span></li><li data-type="amuse" class="">娱乐<span></span></li><li data-type="order" class="">派单<span></span></li></ul><div class="scroll chat-rooms-all"><div class="chat-room-list"><ul><li data-type="attent" class="hide">
							<div class="rooms"><div class="attent-rec"><div class="room-item" channel="65672fe5f27c1e547393cdcc05df6731">
					<div class="flex room-item-name" data-cid="11298" data-channel="65672fe5f27c1e547393cdcc05df6731" data-typeid="24">
					<div class="flex room-item-roal" data-channel="65672fe5f27c1e547393cdcc05df6731" data-cid="11298">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200806/9378591596685627.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:inline" class="span-jian">荐</span>女战士“姝玥”美人官方厅（新）</p>
						<p class="room-item-name-roomtitle">扶摇直上，一起加油吧</p>
					</div>
					<div style="display:none" class="room-item-name-num">（<font>42</font>）</div>
					<div data-cid="11298" data-channel="65672fe5f27c1e547393cdcc05df6731" style="display:block" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="38325a132e65c9aa0e55c1ab87d12a10">
					<div class="flex room-item-name" data-cid="11289" data-channel="38325a132e65c9aa0e55c1ab87d12a10" data-typeid="24">
					<div class="flex room-item-roal" data-channel="38325a132e65c9aa0e55c1ab87d12a10" data-cid="11289">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200807/5573221596779163.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:inline" class="span-jian">荐</span>❀LOL自由开黑厅❀（新）</p>
						<p class="room-item-name-roomtitle">10号7点开厅 来领福利</p>
					</div>
					<div style="display:none" class="room-item-name-num">（<font>34</font>）</div>
					<div data-cid="11289" data-channel="38325a132e65c9aa0e55c1ab87d12a10" style="display:block" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div></div><div class="user-attent"></div><div style="padding-left:10px;font-size:14px;color:#666;margin-top:20px;">热门大厅</div><div class="attent-hot"><div class="room-item" channel="fff868c946ccc8c07290288ee87b69a6">
					<div class="flex room-item-name" data-cid="304" data-channel="fff868c946ccc8c07290288ee87b69a6" data-typeid="10">
					<div class="flex room-item-roal" data-channel="fff868c946ccc8c07290288ee87b69a6" data-cid="304">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200321/2742401584771019.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀LOL开黑一厅❀</p>
						<p class="room-item-name-roomtitle">招优秀主持队长~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>39</font>）</div>
					<div data-cid="304" data-channel="fff868c946ccc8c07290288ee87b69a6" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="00e0ac97e2861540548bef7cb7c24728">
					<div class="flex room-item-name" data-cid="1207" data-channel="00e0ac97e2861540548bef7cb7c24728" data-typeid="10">
					<div class="flex room-item-roal" data-channel="00e0ac97e2861540548bef7cb7c24728" data-cid="1207">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200304/3267331583320583.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀LOL玉剑传说厅❀</p>
						<p class="room-item-name-roomtitle">宝藏女孩两亿元</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>49</font>）</div>
					<div data-cid="1207" data-channel="00e0ac97e2861540548bef7cb7c24728" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="e402a08e8e10d7ec3b1252e793326392">
					<div class="flex room-item-name" data-cid="11276" data-channel="e402a08e8e10d7ec3b1252e793326392" data-typeid="24">
					<div class="flex room-item-roal" data-channel="e402a08e8e10d7ec3b1252e793326392" data-cid="11276">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200727/1685431595812779.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL电玩女神厅♡</p>
						<p class="room-item-name-roomtitle">招优质妹子主持~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>31</font>）</div>
					<div data-cid="11276" data-channel="e402a08e8e10d7ec3b1252e793326392" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="8b2687b80edf08385f6b7bbe8b6c17d8">
					<div class="flex room-item-name" data-cid="2013" data-channel="8b2687b80edf08385f6b7bbe8b6c17d8" data-typeid="18">
					<div class="flex room-item-roal" data-channel="8b2687b80edf08385f6b7bbe8b6c17d8" data-cid="2013">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200727/1078931595843512.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>岁月英才私立ღ</p>
						<p class="room-item-name-roomtitle">天籁歌手 治愈废嗓滚刀肉</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>82</font>）</div>
					<div data-cid="2013" data-channel="8b2687b80edf08385f6b7bbe8b6c17d8" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="403ed266d1dc9f99cfa05d06bcc63f21">
					<div class="flex room-item-name" data-cid="6152" data-channel="403ed266d1dc9f99cfa05d06bcc63f21" data-typeid="24">
					<div class="flex room-item-roal" data-channel="403ed266d1dc9f99cfa05d06bcc63f21" data-cid="6152">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200330/3699551585577215.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL觅心女王厅♡</p>
						<p class="room-item-name-roomtitle">皓月清凉 特务是人间曙光</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>73</font>）</div>
					<div data-cid="6152" data-channel="403ed266d1dc9f99cfa05d06bcc63f21" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="f298312a6ea30e8f225448ed1f5a7062">
					<div class="flex room-item-name" data-cid="5551" data-channel="f298312a6ea30e8f225448ed1f5a7062" data-typeid="18">
					<div class="flex room-item-roal" data-channel="f298312a6ea30e8f225448ed1f5a7062" data-cid="5551">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200612/3675701591930296.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>瓜瓜点唱∮1998ツ</p>
						<p class="room-item-name-roomtitle">欢迎大家前来听歌~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>27</font>）</div>
					<div data-cid="5551" data-channel="f298312a6ea30e8f225448ed1f5a7062" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="d834d3cb5ec89d363eaef704a948e431">
					<div class="flex room-item-name" data-cid="6885" data-channel="d834d3cb5ec89d363eaef704a948e431" data-typeid="16">
					<div class="flex room-item-roal" data-channel="d834d3cb5ec89d363eaef704a948e431" data-cid="6885">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200616/2078291592274989.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>ღ幼儿园综合游戏厅ღ</p>
						<p class="room-item-name-roomtitle">8.11百日晚会biu~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>39</font>）</div>
					<div data-cid="6885" data-channel="d834d3cb5ec89d363eaef704a948e431" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="98ff3af9c71053d7e765074937ede898">
					<div class="flex room-item-name" data-cid="8687" data-channel="98ff3af9c71053d7e765074937ede898" data-typeid="16">
					<div class="flex room-item-roal" data-channel="98ff3af9c71053d7e765074937ede898" data-cid="8687">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200629/1696371593426217.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>绝色仙女游戏开黑厅</p>
						<p class="room-item-name-roomtitle">向来缘浅，奈何情深</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>85</font>）</div>
					<div data-cid="8687" data-channel="98ff3af9c71053d7e765074937ede898" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="e86c6c8a356e831ba41c0274b34dedf1">
					<div class="flex room-item-name" data-cid="3715" data-channel="e86c6c8a356e831ba41c0274b34dedf1" data-typeid="24">
					<div class="flex room-item-roal" data-channel="e86c6c8a356e831ba41c0274b34dedf1" data-cid="3715">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20191202/3678911575266561.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL比尔吉沃特厅♡</p>
						<p class="room-item-name-roomtitle">欢迎菊花ADC家哥哥们</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>79</font>）</div>
					<div data-cid="3715" data-channel="e86c6c8a356e831ba41c0274b34dedf1" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="31e3ff9223c924f8ed01e6e8ea35a655">
					<div class="flex room-item-name" data-cid="8681" data-channel="31e3ff9223c924f8ed01e6e8ea35a655" data-typeid="24">
					<div class="flex room-item-roal" data-channel="31e3ff9223c924f8ed01e6e8ea35a655" data-cid="8681">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200718/1560741595058552.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>瓜瓜ღ唯野呐之声</p>
						<p class="room-item-name-roomtitle">全麦优质歌手 声优</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>30</font>）</div>
					<div data-cid="8681" data-channel="31e3ff9223c924f8ed01e6e8ea35a655" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="4b8e6719884870c01f8e2c9e524e58ed">
					<div class="flex room-item-name" data-cid="3713" data-channel="4b8e6719884870c01f8e2c9e524e58ed" data-typeid="24">
					<div class="flex room-item-roal" data-channel="4b8e6719884870c01f8e2c9e524e58ed" data-cid="3713">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200713/2279131594612427.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀LOL黎明使者厅❀ </p>
						<p class="room-item-name-roomtitle">招牛逼女主持女队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>13</font>）</div>
					<div data-cid="3713" data-channel="4b8e6719884870c01f8e2c9e524e58ed" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="65672fe5f27c1e547393cdcc05df6731">
					<div class="flex room-item-name" data-cid="11298" data-channel="65672fe5f27c1e547393cdcc05df6731" data-typeid="24">
					<div class="flex room-item-roal" data-channel="65672fe5f27c1e547393cdcc05df6731" data-cid="11298">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200806/9378591596685627.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>女战士“姝玥”美人官方厅（新）</p>
						<p class="room-item-name-roomtitle">扶摇直上，一起加油吧</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>40</font>）</div>
					<div data-cid="11298" data-channel="65672fe5f27c1e547393cdcc05df6731" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c1f6899cd9f0977d6b238cf0407c6f07">
					<div class="flex room-item-name" data-cid="1900" data-channel="c1f6899cd9f0977d6b238cf0407c6f07" data-typeid="24">
					<div class="flex room-item-roal" data-channel="c1f6899cd9f0977d6b238cf0407c6f07" data-cid="1900">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190709/1307271562663086.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>云顶之弈开黑一厅</p>
						<p class="room-item-name-roomtitle">反の天天开心</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>75</font>）</div>
					<div data-cid="1900" data-channel="c1f6899cd9f0977d6b238cf0407c6f07" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="987cf5905fb6f5d326e677069465cb22">
					<div class="flex room-item-name" data-cid="4489" data-channel="987cf5905fb6f5d326e677069465cb22" data-typeid="24">
					<div class="flex room-item-roal" data-channel="987cf5905fb6f5d326e677069465cb22" data-cid="4489">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200214/1398511581648915.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL魔法猫咪厅♡</p>
						<p class="room-item-name-roomtitle">祖哥❤妮可 永远在一起！</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>62</font>）</div>
					<div data-cid="4489" data-channel="987cf5905fb6f5d326e677069465cb22" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="20d6490ad92586b0823b5295bbc06d0d">
					<div class="flex room-item-name" data-cid="8700" data-channel="20d6490ad92586b0823b5295bbc06d0d" data-typeid="16">
					<div class="flex room-item-roal" data-channel="20d6490ad92586b0823b5295bbc06d0d" data-cid="8700">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200704/1084851593853711.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>国色天香游戏开黑厅（新）</p>
						<p class="room-item-name-roomtitle">破产姐妹难兄难弟</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>22</font>）</div>
					<div data-cid="8700" data-channel="20d6490ad92586b0823b5295bbc06d0d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="fc195174a0bf3bb5cd8a9307e54c7a58">
					<div class="flex room-item-name" data-cid="11283" data-channel="fc195174a0bf3bb5cd8a9307e54c7a58" data-typeid="24">
					<div class="flex room-item-roal" data-channel="fc195174a0bf3bb5cd8a9307e54c7a58" data-cid="11283">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200729/1103151596006952.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL人间春色厅♡</p>
						<p class="room-item-name-roomtitle">❤守护菊花ADC家哥哥们❤</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>83</font>）</div>
					<div data-cid="11283" data-channel="fc195174a0bf3bb5cd8a9307e54c7a58" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="15cf53a33b07499c12cdceac8a6e5f52">
					<div class="flex room-item-name" data-cid="8510" data-channel="15cf53a33b07499c12cdceac8a6e5f52" data-typeid="24">
					<div class="flex room-item-roal" data-channel="15cf53a33b07499c12cdceac8a6e5f52" data-cid="8510">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200707/1324201594085459.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀遇见神鹿厅❀</p>
						<p class="room-item-name-roomtitle">❥招主持队长and管理</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>32</font>）</div>
					<div data-cid="8510" data-channel="15cf53a33b07499c12cdceac8a6e5f52" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="4caf58cb6dfd731835f64779b52a2f36">
					<div class="flex room-item-name" data-cid="6151" data-channel="4caf58cb6dfd731835f64779b52a2f36" data-typeid="24">
					<div class="flex room-item-roal" data-channel="4caf58cb6dfd731835f64779b52a2f36" data-cid="6151">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200807/1383521596782192.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平精英无敌战神厅❀</p>
						<p class="room-item-name-roomtitle">迷弟独宠温妤</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>5</font>）</div>
					<div data-cid="6151" data-channel="4caf58cb6dfd731835f64779b52a2f36" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="1cae36dcf2481a703e7d7ba302e3b459">
					<div class="flex room-item-name" data-cid="2328" data-channel="1cae36dcf2481a703e7d7ba302e3b459" data-typeid="24">
					<div class="flex room-item-roal" data-channel="1cae36dcf2481a703e7d7ba302e3b459" data-cid="2328">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20191017/1549871571292403.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>云顶之弈开黑二厅</p>
						<p class="room-item-name-roomtitle">最爱二厅小宝贝</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>82</font>）</div>
					<div data-cid="2328" data-channel="1cae36dcf2481a703e7d7ba302e3b459" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="4af0951d8a4a289223908a9b456233c8">
					<div class="flex room-item-name" data-cid="8499" data-channel="4af0951d8a4a289223908a9b456233c8" data-typeid="24">
					<div class="flex room-item-roal" data-channel="4af0951d8a4a289223908a9b456233c8" data-cid="8499">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200527/1816581590548975.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>LOL至尊魔女厅</p>
						<p class="room-item-name-roomtitle">小赵挚爱陈姐</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>20</font>）</div>
					<div data-cid="8499" data-channel="4af0951d8a4a289223908a9b456233c8" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div></div></div>
					   </li><li data-type="lol" class="hide">
							<div class="rooms"><div class="room-item" channel="fff868c946ccc8c07290288ee87b69a6">
					<div class="flex room-item-name" data-cid="304" data-channel="fff868c946ccc8c07290288ee87b69a6" data-typeid="10">
					<div class="flex room-item-roal" data-channel="fff868c946ccc8c07290288ee87b69a6" data-cid="304">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200321/2742401584771019.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀LOL开黑一厅❀</p>
						<p class="room-item-name-roomtitle">招优秀主持队长~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>40</font>）</div>
					<div data-cid="304" data-channel="fff868c946ccc8c07290288ee87b69a6" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="65672fe5f27c1e547393cdcc05df6731">
					<div class="flex room-item-name" data-cid="11298" data-channel="65672fe5f27c1e547393cdcc05df6731" data-typeid="24">
					<div class="flex room-item-roal" data-channel="65672fe5f27c1e547393cdcc05df6731" data-cid="11298">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200806/9378591596685627.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>女战士“姝玥”美人官方厅（新）</p>
						<p class="room-item-name-roomtitle">扶摇直上，一起加油吧</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>42</font>）</div>
					<div data-cid="11298" data-channel="65672fe5f27c1e547393cdcc05df6731" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="e86c6c8a356e831ba41c0274b34dedf1">
					<div class="flex room-item-name" data-cid="3715" data-channel="e86c6c8a356e831ba41c0274b34dedf1" data-typeid="24">
					<div class="flex room-item-roal" data-channel="e86c6c8a356e831ba41c0274b34dedf1" data-cid="3715">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20191202/3678911575266561.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL比尔吉沃特厅♡</p>
						<p class="room-item-name-roomtitle">欢迎菊花ADC家哥哥们</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>75</font>）</div>
					<div data-cid="3715" data-channel="e86c6c8a356e831ba41c0274b34dedf1" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="00e0ac97e2861540548bef7cb7c24728">
					<div class="flex room-item-name" data-cid="1207" data-channel="00e0ac97e2861540548bef7cb7c24728" data-typeid="10">
					<div class="flex room-item-roal" data-channel="00e0ac97e2861540548bef7cb7c24728" data-cid="1207">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200304/3267331583320583.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀LOL玉剑传说厅❀</p>
						<p class="room-item-name-roomtitle">宝藏女孩两亿元</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>43</font>）</div>
					<div data-cid="1207" data-channel="00e0ac97e2861540548bef7cb7c24728" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="fc195174a0bf3bb5cd8a9307e54c7a58">
					<div class="flex room-item-name" data-cid="11283" data-channel="fc195174a0bf3bb5cd8a9307e54c7a58" data-typeid="24">
					<div class="flex room-item-roal" data-channel="fc195174a0bf3bb5cd8a9307e54c7a58" data-cid="11283">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200729/1103151596006952.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL人间春色厅♡</p>
						<p class="room-item-name-roomtitle">❤守护菊花ADC家哥哥们❤</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>83</font>）</div>
					<div data-cid="11283" data-channel="fc195174a0bf3bb5cd8a9307e54c7a58" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="38325a132e65c9aa0e55c1ab87d12a10">
					<div class="flex room-item-name" data-cid="11289" data-channel="38325a132e65c9aa0e55c1ab87d12a10" data-typeid="24">
					<div class="flex room-item-roal" data-channel="38325a132e65c9aa0e55c1ab87d12a10" data-cid="11289">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200807/5573221596779163.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>❀LOL自由开黑厅❀（新）</p>
						<p class="room-item-name-roomtitle">10号7点开厅 来领福利</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>34</font>）</div>
					<div data-cid="11289" data-channel="38325a132e65c9aa0e55c1ab87d12a10" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="e402a08e8e10d7ec3b1252e793326392">
					<div class="flex room-item-name" data-cid="11276" data-channel="e402a08e8e10d7ec3b1252e793326392" data-typeid="24">
					<div class="flex room-item-roal" data-channel="e402a08e8e10d7ec3b1252e793326392" data-cid="11276">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200727/1685431595812779.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL电玩女神厅♡</p>
						<p class="room-item-name-roomtitle">招优质妹子主持~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>28</font>）</div>
					<div data-cid="11276" data-channel="e402a08e8e10d7ec3b1252e793326392" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="403ed266d1dc9f99cfa05d06bcc63f21">
					<div class="flex room-item-name" data-cid="6152" data-channel="403ed266d1dc9f99cfa05d06bcc63f21" data-typeid="24">
					<div class="flex room-item-roal" data-channel="403ed266d1dc9f99cfa05d06bcc63f21" data-cid="6152">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200330/3699551585577215.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL觅心女王厅♡</p>
						<p class="room-item-name-roomtitle">皓月清凉 特务是人间曙光</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>78</font>）</div>
					<div data-cid="6152" data-channel="403ed266d1dc9f99cfa05d06bcc63f21" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="4b8e6719884870c01f8e2c9e524e58ed">
					<div class="flex room-item-name" data-cid="3713" data-channel="4b8e6719884870c01f8e2c9e524e58ed" data-typeid="24">
					<div class="flex room-item-roal" data-channel="4b8e6719884870c01f8e2c9e524e58ed" data-cid="3713">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200713/2279131594612427.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀LOL黎明使者厅❀ </p>
						<p class="room-item-name-roomtitle">招牛逼女主持女队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>11</font>）</div>
					<div data-cid="3713" data-channel="4b8e6719884870c01f8e2c9e524e58ed" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c1f6899cd9f0977d6b238cf0407c6f07">
					<div class="flex room-item-name" data-cid="1900" data-channel="c1f6899cd9f0977d6b238cf0407c6f07" data-typeid="24">
					<div class="flex room-item-roal" data-channel="c1f6899cd9f0977d6b238cf0407c6f07" data-cid="1900">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190709/1307271562663086.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>云顶之弈开黑一厅</p>
						<p class="room-item-name-roomtitle">反の天天开心</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>81</font>）</div>
					<div data-cid="1900" data-channel="c1f6899cd9f0977d6b238cf0407c6f07" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="987cf5905fb6f5d326e677069465cb22">
					<div class="flex room-item-name" data-cid="4489" data-channel="987cf5905fb6f5d326e677069465cb22" data-typeid="24">
					<div class="flex room-item-roal" data-channel="987cf5905fb6f5d326e677069465cb22" data-cid="4489">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200214/1398511581648915.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL魔法猫咪厅♡</p>
						<p class="room-item-name-roomtitle">祖哥❤妮可 永远在一起！</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>55</font>）</div>
					<div data-cid="4489" data-channel="987cf5905fb6f5d326e677069465cb22" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="1cae36dcf2481a703e7d7ba302e3b459">
					<div class="flex room-item-name" data-cid="2328" data-channel="1cae36dcf2481a703e7d7ba302e3b459" data-typeid="24">
					<div class="flex room-item-roal" data-channel="1cae36dcf2481a703e7d7ba302e3b459" data-cid="2328">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20191017/1549871571292403.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>云顶之弈开黑二厅</p>
						<p class="room-item-name-roomtitle">最爱二厅小宝贝</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>76</font>）</div>
					<div data-cid="2328" data-channel="1cae36dcf2481a703e7d7ba302e3b459" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="4af0951d8a4a289223908a9b456233c8">
					<div class="flex room-item-name" data-cid="8499" data-channel="4af0951d8a4a289223908a9b456233c8" data-typeid="24">
					<div class="flex room-item-roal" data-channel="4af0951d8a4a289223908a9b456233c8" data-cid="8499">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200527/1816581590548975.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>LOL至尊魔女厅</p>
						<p class="room-item-name-roomtitle">小赵挚爱陈姐</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>18</font>）</div>
					<div data-cid="8499" data-channel="4af0951d8a4a289223908a9b456233c8" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="221077a305e6e698b128f51eda9f2a70">
					<div class="flex room-item-name" data-cid="7730" data-channel="221077a305e6e698b128f51eda9f2a70" data-typeid="24">
					<div class="flex room-item-roal" data-channel="221077a305e6e698b128f51eda9f2a70" data-cid="7730">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200509/1935391589035644.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL蕉泥座人厅♡</p>
						<p class="room-item-name-roomtitle">❀好水人美路子野❀</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>34</font>）</div>
					<div data-cid="7730" data-channel="221077a305e6e698b128f51eda9f2a70" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="0e7e56c119404f8793aaa6745e098979">
					<div class="flex room-item-name" data-cid="11284" data-channel="0e7e56c119404f8793aaa6745e098979" data-typeid="24">
					<div class="flex room-item-roal" data-channel="0e7e56c119404f8793aaa6745e098979" data-cid="11284">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200729/1044161596007032.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>LOL含羞蓓蕾厅</p>
						<p class="room-item-name-roomtitle">15号晚7点首次拍卖活动</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>97</font>）</div>
					<div data-cid="11284" data-channel="0e7e56c119404f8793aaa6745e098979" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="ce60622c8d787aa75f719715f8e8ac49">
					<div class="flex room-item-name" data-cid="8527" data-channel="ce60622c8d787aa75f719715f8e8ac49" data-typeid="24">
					<div class="flex room-item-roal" data-channel="ce60622c8d787aa75f719715f8e8ac49" data-cid="8527">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200609/1678991591679096.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL永恒之森厅♡</p>
						<p class="room-item-name-roomtitle">招优秀女主持队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>30</font>）</div>
					<div data-cid="8527" data-channel="ce60622c8d787aa75f719715f8e8ac49" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="dd490c7d76b710a0451e9b4129777ce7">
					<div class="flex room-item-name" data-cid="8528" data-channel="dd490c7d76b710a0451e9b4129777ce7" data-typeid="24">
					<div class="flex room-item-roal" data-channel="dd490c7d76b710a0451e9b4129777ce7" data-cid="8528">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200609/7832311591679571.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>LOL暗夜猫女厅</p>
						<p class="room-item-name-roomtitle">你的名字 我的故事</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>30</font>）</div>
					<div data-cid="8528" data-channel="dd490c7d76b710a0451e9b4129777ce7" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="44e9820256aea80e23ee1283df1b146f">
					<div class="flex room-item-name" data-cid="8683" data-channel="44e9820256aea80e23ee1283df1b146f" data-typeid="24">
					<div class="flex room-item-roal" data-channel="44e9820256aea80e23ee1283df1b146f" data-cid="8683">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200622/1771351592819962.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL虚空之女厅♡</p>
						<p class="room-item-name-roomtitle">深情不及久伴厚爱无需多言</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>34</font>）</div>
					<div data-cid="8683" data-channel="44e9820256aea80e23ee1283df1b146f" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="6a5190ae35fdd226fbdb895811a1364d">
					<div class="flex room-item-name" data-cid="8677" data-channel="6a5190ae35fdd226fbdb895811a1364d" data-typeid="24">
					<div class="flex room-item-roal" data-channel="6a5190ae35fdd226fbdb895811a1364d" data-cid="8677">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200612/1779071591963993.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL大魔王开黑厅♡(新)</p>
						<p class="room-item-name-roomtitle">能能的任务就是让小星开心</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>16</font>）</div>
					<div data-cid="8677" data-channel="6a5190ae35fdd226fbdb895811a1364d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="32f5a436d340b8066a4a09b51597b10a">
					<div class="flex room-item-name" data-cid="11286" data-channel="32f5a436d340b8066a4a09b51597b10a" data-typeid="24">
					<div class="flex room-item-roal" data-channel="32f5a436d340b8066a4a09b51597b10a" data-cid="11286">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200731/1826001596195717.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀LOL暴走萝莉厅❀</p>
						<p class="room-item-name-roomtitle">招收主持队长小姐姐</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>28</font>）</div>
					<div data-cid="11286" data-channel="32f5a436d340b8066a4a09b51597b10a" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c56c2d6236c6e75eb04021a120679816">
					<div class="flex room-item-name" data-cid="11279" data-channel="c56c2d6236c6e75eb04021a120679816" data-typeid="24">
					<div class="flex room-item-roal" data-channel="c56c2d6236c6e75eb04021a120679816" data-cid="11279">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200728/1909581595937057.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>ღLOL腥红之月厅ღ</p>
						<p class="room-item-name-roomtitle">美女 来当主持不咯</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>25</font>）</div>
					<div data-cid="11279" data-channel="c56c2d6236c6e75eb04021a120679816" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="ffc8ef194fdb27028a6d57e3ce2c55e5">
					<div class="flex room-item-name" data-cid="9671" data-channel="ffc8ef194fdb27028a6d57e3ce2c55e5" data-typeid="24">
					<div class="flex room-item-roal" data-channel="ffc8ef194fdb27028a6d57e3ce2c55e5" data-cid="9671">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200714/1480281594710156.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀LOL兔宝宝厅❀</p>
						<p class="room-item-name-roomtitle">清风十里不及KK回眸一眼</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>25</font>）</div>
					<div data-cid="9671" data-channel="ffc8ef194fdb27028a6d57e3ce2c55e5" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="74b47d4cc3b846388016f5b0ccf63647">
					<div class="flex room-item-name" data-cid="1405" data-channel="74b47d4cc3b846388016f5b0ccf63647" data-typeid="0">
					<div class="flex room-item-roal" data-channel="74b47d4cc3b846388016f5b0ccf63647" data-cid="1405">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200403/1436611585894376.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀官方点单厅❀</p>
						<p class="room-item-name-roomtitle">❥ 龙翼最美❥</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>32</font>）</div>
					<div data-cid="1405" data-channel="74b47d4cc3b846388016f5b0ccf63647" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="e5060f5fdf449f8ee5a4f3f283d02fcd">
					<div class="flex room-item-name" data-cid="6812" data-channel="e5060f5fdf449f8ee5a4f3f283d02fcd" data-typeid="24">
					<div class="flex room-item-roal" data-channel="e5060f5fdf449f8ee5a4f3f283d02fcd" data-cid="6812">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200428/9195471588040145.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>云顶梦游仙境厅</p>
						<p class="room-item-name-roomtitle">牛爹打女人牛得一笔</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>25</font>）</div>
					<div data-cid="6812" data-channel="e5060f5fdf449f8ee5a4f3f283d02fcd" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="09322efd58b3321134c0db1f91e81ced">
					<div class="flex room-item-name" data-cid="4187" data-channel="09322efd58b3321134c0db1f91e81ced" data-typeid="10">
					<div class="flex room-item-roal" data-channel="09322efd58b3321134c0db1f91e81ced" data-cid="4187">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200103/1398841578034802.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL战争女神厅♡</p>
						<p class="room-item-name-roomtitle">招优秀的主持队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>43</font>）</div>
					<div data-cid="4187" data-channel="09322efd58b3321134c0db1f91e81ced" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="2922a7628c7e27d221ca92de4385601a">
					<div class="flex room-item-name" data-cid="8304" data-channel="2922a7628c7e27d221ca92de4385601a" data-typeid="24">
					<div class="flex room-item-roal" data-channel="2922a7628c7e27d221ca92de4385601a" data-cid="8304">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200513/2028811589372195.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span> ♡LOL甜心宝贝厅♡</p>
						<p class="room-item-name-roomtitle">向胃猛冲の阴阳妹妹厅</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>23</font>）</div>
					<div data-cid="8304" data-channel="2922a7628c7e27d221ca92de4385601a" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="dd43832a7d162883311f2af8ccd5df2a">
					<div class="flex room-item-name" data-cid="11278" data-channel="dd43832a7d162883311f2af8ccd5df2a" data-typeid="24">
					<div class="flex room-item-roal" data-channel="dd43832a7d162883311f2af8ccd5df2a" data-cid="11278">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200727/1242131595851622.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡云顶江苏同城厅♡</p>
						<p class="room-item-name-roomtitle">招优质主持</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>23</font>）</div>
					<div data-cid="11278" data-channel="dd43832a7d162883311f2af8ccd5df2a" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="a81ba36869893c0ba66f4144ddcb9136">
					<div class="flex room-item-name" data-cid="6756" data-channel="a81ba36869893c0ba66f4144ddcb9136" data-typeid="24">
					<div class="flex room-item-roal" data-channel="a81ba36869893c0ba66f4144ddcb9136" data-cid="6756">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200629/2896861593426097.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL夺命美人厅♡</p>
						<p class="room-item-name-roomtitle">心肝宝贝刘雨柔</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>20</font>）</div>
					<div data-cid="6756" data-channel="a81ba36869893c0ba66f4144ddcb9136" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="d78bf70ac5998dd0e65d3aa5472cb31b">
					<div class="flex room-item-name" data-cid="11296" data-channel="d78bf70ac5998dd0e65d3aa5472cb31b" data-typeid="24">
					<div class="flex room-item-roal" data-channel="d78bf70ac5998dd0e65d3aa5472cb31b" data-cid="11296">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200805/1795601596627069.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>♡LOL灵魂莲华厅♡（新）</p>
						<p class="room-item-name-roomtitle">强势招收主持队长小可爱</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>20</font>）</div>
					<div data-cid="11296" data-channel="d78bf70ac5998dd0e65d3aa5472cb31b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="f78815d88dbca3f035f386879845546d">
					<div class="flex room-item-name" data-cid="8684" data-channel="f78815d88dbca3f035f386879845546d" data-typeid="24">
					<div class="flex room-item-roal" data-channel="f78815d88dbca3f035f386879845546d" data-cid="8684">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200629/2069281593426160.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL偶像歌手厅♡</p>
						<p class="room-item-name-roomtitle">❤处对象进厅找紧不紧❤</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>33</font>）</div>
					<div data-cid="8684" data-channel="f78815d88dbca3f035f386879845546d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="800c9cab13c432e57459a6e078f13339">
					<div class="flex room-item-name" data-cid="8675" data-channel="800c9cab13c432e57459a6e078f13339" data-typeid="24">
					<div class="flex room-item-roal" data-channel="800c9cab13c432e57459a6e078f13339" data-cid="8675">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200610/7613261591791770.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡LOL耀星女神厅♡</p>
						<p class="room-item-name-roomtitle">7号晚8点女神妙妙屋</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>21</font>）</div>
					<div data-cid="8675" data-channel="800c9cab13c432e57459a6e078f13339" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="b8b1c6190a3aedb46c68ce6066cac7a7">
					<div class="flex room-item-name" data-cid="11295" data-channel="b8b1c6190a3aedb46c68ce6066cac7a7" data-typeid="24">
					<div class="flex room-item-roal" data-channel="b8b1c6190a3aedb46c68ce6066cac7a7" data-cid="11295">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200805/7951201596626988.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>♡LOL糖果屋厅♡（新）</p>
						<p class="room-item-name-roomtitle">❤招优质主持和队长❤</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>28</font>）</div>
					<div data-cid="11295" data-channel="b8b1c6190a3aedb46c68ce6066cac7a7" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="1a5afdf3ec864c9ee8b55ffabbf2295d">
					<div class="flex room-item-name" data-cid="11282" data-channel="1a5afdf3ec864c9ee8b55ffabbf2295d" data-typeid="24">
					<div class="flex room-item-roal" data-channel="1a5afdf3ec864c9ee8b55ffabbf2295d" data-cid="11282">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200729/9958501596006825.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>LOL恶魔审判厅</p>
						<p class="room-item-name-roomtitle">8月12日20点隆重开厅</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>12</font>）</div>
					<div data-cid="11282" data-channel="1a5afdf3ec864c9ee8b55ffabbf2295d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div></div>
					   </li><li data-type="pubg" class="">
							<div class="rooms"><div class="room-item" channel="18e06302c5f58e1dd7fc382dde38dc77">
					<div class="flex room-item-name" data-cid="2739" data-channel="18e06302c5f58e1dd7fc382dde38dc77" data-typeid="24">
					<div class="flex room-item-roal" data-channel="18e06302c5f58e1dd7fc382dde38dc77" data-cid="2739">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200216/1196371581783641.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀绝地求生开黑三厅❀</p>
						<p class="room-item-name-roomtitle">11号20点刮出你的大奖</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>26</font>）</div>
					<div data-cid="2739" data-channel="18e06302c5f58e1dd7fc382dde38dc77" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="465b01e4f46b8cd27dc29ebf7ea41745">
					<div class="flex room-item-name" data-cid="10635" data-channel="465b01e4f46b8cd27dc29ebf7ea41745" data-typeid="24">
					<div class="flex room-item-roal" data-channel="465b01e4f46b8cd27dc29ebf7ea41745" data-cid="10635">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200725/1211391595680272.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>童心PUBG开黑厅（新）</p>
						<p class="room-item-name-roomtitle">"兔猪"小可爱,在这里等你哦!</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>18</font>）</div>
					<div data-cid="10635" data-channel="465b01e4f46b8cd27dc29ebf7ea41745" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="e0616b68d80e394a76eeb720ffea9a35">
					<div class="flex room-item-name" data-cid="11281" data-channel="e0616b68d80e394a76eeb720ffea9a35" data-typeid="24">
					<div class="flex room-item-roal" data-channel="e0616b68d80e394a76eeb720ffea9a35" data-cid="11281">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200728/1294401595937479.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>绝地竞技开黑厅（新）</p>
						<p class="room-item-name-roomtitle">13-01点进厅免费开黑</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>26</font>）</div>
					<div data-cid="11281" data-channel="e0616b68d80e394a76eeb720ffea9a35" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="1dd451a92df52e10d0bd266434878489">
					<div class="flex room-item-name current" data-cid="11292" data-channel="1dd451a92df52e10d0bd266434878489" data-typeid="10">
					<div class="flex room-item-roal" data-channel="1dd451a92df52e10d0bd266434878489" data-cid="11292">
						<div class="flex room-item-zhuan-kuang">
							<img class="" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200804/9227691596541521.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>♡CSgogo仙女厅♡（新）</p>
						<p class="room-item-name-roomtitle">仙女厅招主持队长欢迎入职</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>18</font>）</div>
					<div data-cid="11292" data-channel="1dd451a92df52e10d0bd266434878489" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons">
						
						<div class="person-area persons-anchor"><div style="order:100" data-color="#666" data-vip="0" class="flex person-item" data-nickname="婷婷好了" data-uid="3328661" data-teacher="1" data-vipicon="https://res.tuwan.com/templet/play/images/app/0.png">
					<div class="person-thumb">
						<img src="https://ucavatar.tuwan.com/data/avatar/003/32/86/61_avatar_middle.jpg?random=20200812" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'">
					</div>
					<div class="person-info">
						<p class="flex person-honor">
						<span><i class="chat-room-peiwan-tag">主持</i></span>
						<span>
							<img src="https://res.tuwan.com/templet/play/images/app/0.png">
						</span>
						<span>
							<img src="https://res.tuwan.com/templet/play/chat/v2/images/empty.png">
						</span>
					</p>
						<p class="person-name " style="color:#666">婷婷好了</p>
					</div>
				</div><div style="order:92" data-color="#666" data-vip="8" class="flex person-item" data-nickname="宇众不同♕阿宇吵了" data-uid="2181595" data-teacher="0" data-vipicon="https://res.tuwan.com/templet/play/images/app/8.gif">
					<div class="person-thumb">
						<img src="https://ucavatar3.tuwan.com/data/avatar/002/18/15/95_avatar_middle.jpg?random=20200812" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'">
					</div>
					<div class="person-info">
						<p class="flex person-honor">
						<span><i class="chat-room-peiwan-tag">主持</i></span>
						<span>
							<img src="https://res.tuwan.com/templet/play/images/app/8.gif">
						</span>
						<span>
							<img src="https://img3.tuwandata.com/uploads/repayment/20190121/20190121_1548074646_60323.jpg">
						</span>
					</p>
						<p class="person-name " style="color:#666">宇众不同<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/nianguan.gif?v=1">阿宇吵了</p>
					</div>
				</div><div style="order:98" data-color="" data-vip="2" class="flex person-item" data-nickname="畅畅行了" data-uid="3079204" data-teacher="1" data-vipicon="https://res.tuwan.com/templet/play/images/app/2.png">
					<div class="person-thumb">
						<img src="https://ucavatar.tuwan.com/data/avatar/003/07/92/04_avatar_middle.jpg?random=20200812" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'">
					</div>
					<div class="person-info">
						<p class="flex person-honor">
						<span><i class="chat-room-peiwan-tag">主持</i></span>
						<span>
							<img src="https://res.tuwan.com/templet/play/images/app/2.png">
						</span>
						<span>
							<img src="https://img3.tuwandata.com/uploads/repayment/20190227/20190227_1551232744_42185.jpg">
						</span>
					</p>
						<p class="person-name ygb_title" style="color:">畅畅行了</p>
					</div>
				</div></div>
						<div class="person-area persons-paidan"><div style="order:98" data-color="#ff9402" data-vip="2" class="flex person-item" data-nickname="喵喵淦了" data-uid="3249944" data-teacher="1" data-vipicon="https://res.tuwan.com/templet/play/images/app/2.png">
					<div class="person-thumb">
						<img src="https://ucavatar3.tuwan.com/data/avatar/003/24/99/44_avatar_middle.jpg?random=20200812" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'">
					</div>
					<div class="person-info">
						<p class="flex person-honor">
						<span><i class="chat-room-peiwan-tag">队长</i></span>
						<span>
							<img src="https://res.tuwan.com/templet/play/images/app/2.png">
						</span>
						<span>
							<img src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
						</span>
					</p>
						<p class="person-name " style="color:#ff9402">喵喵淦了</p>
					</div>
				</div></div>
						<div class="person-area persons-boss"><div style="order:97" data-color="#666" data-vip="3" class="flex person-item" data-nickname="柔王丸c" data-uid="2984302" data-teacher="0" data-vipicon="https://res.tuwan.com/templet/play/images/app/3.png">
					<div class="person-thumb">
						<img src="https://ucavatar.tuwan.com/data/avatar/002/98/43/02_avatar_middle.jpg?random=20200812" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'">
					</div>
					<div class="person-info">
						<p class="flex person-honor">
						<span><img src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png"></span>
						<span>
							<img src="https://res.tuwan.com/templet/play/images/app/3.png">
						</span>
						<span>
							<img src="https://res.tuwan.com/templet/play/chat/v2/images/empty.png">
						</span>
					</p>
						<p class="person-name " style="color:#666">柔王丸c</p>
					</div>
				</div><div style="order:99" data-color="#209948" data-vip="1" class="flex person-item" data-nickname="远 玥" data-uid="2316705" data-teacher="0" data-vipicon="https://res.tuwan.com/templet/play/images/app/1.png">
					<div class="person-thumb">
						<img src="https://ucavatar.tuwan.com/data/avatar/002/31/67/05_avatar_middle.jpg?random=20200812" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'">
					</div>
					<div class="person-info">
						<p class="flex person-honor">
						<span><img src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png"></span>
						<span>
							<img src="https://res.tuwan.com/templet/play/images/app/1.png">
						</span>
						<span>
							<img src="https://res.tuwan.com/templet/play/chat/v2/images/empty.png">
						</span>
					</p>
						<p class="person-name " style="color:#209948">远 玥</p>
					</div>
				</div></div>
						<div class="person-area persons-teachers"><div style="order:97" data-color="#666" data-vip="3" class="flex person-item" data-nickname="给你的若尘" data-uid="1964856" data-teacher="1" data-vipicon="https://res.tuwan.com/templet/play/images/app/3.png">
					<div class="person-thumb">
						<img src="https://ucavatar2.tuwan.com/data/avatar/001/96/48/56_avatar_middle.jpg?random=20200812" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'">
					</div>
					<div class="person-info">
						<p class="flex person-honor">
						<span><i class="chat-room-peiwan-tag">陪玩</i></span>
						<span>
							<img src="https://res.tuwan.com/templet/play/images/app/3.png">
						</span>
						<span>
							<img src="https://res.tuwan.com/templet/play/chat/v2/images/empty.png">
						</span>
					</p>
						<p class="person-name " style="color:#666">给你的若尘</p>
					</div>
				</div></div>
						<div class="person-area persons-youke"><div style="order:100" data-color="#666" data-vip="0" class="flex person-item" data-nickname="游客816012501" data-uid="816012501" data-teacher="0" data-vipicon="">
					<div class="person-thumb">
						<img src="https://uc.tuwan.com/images/noavatar_1.jpg" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'">
					</div>
					<div class="person-info">
						
						<p class="person-name " style="color:#666">游客816012501</p>
					</div>
				</div></div>
					</div>
				</div><div class="room-item" channel="0faa55092e185b73217909d1570ec9ef">
					<div class="flex room-item-name" data-cid="11287" data-channel="0faa55092e185b73217909d1570ec9ef" data-typeid="24">
					<div class="flex room-item-roal" data-channel="0faa55092e185b73217909d1570ec9ef" data-cid="11287">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200731/1709871596195822.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>绝地人间春色厅</p>
						<p class="room-item-name-roomtitle">招主持队长进厅应聘咨询</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>9</font>）</div>
					<div data-cid="11287" data-channel="0faa55092e185b73217909d1570ec9ef" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="7b91ea7bb2e562e0d028c32418dda2b1">
					<div class="flex room-item-name" data-cid="3707" data-channel="7b91ea7bb2e562e0d028c32418dda2b1" data-typeid="24">
					<div class="flex room-item-roal" data-channel="7b91ea7bb2e562e0d028c32418dda2b1" data-cid="3707">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200423/1929471587619221.jpeg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀绝地求生开黑四厅❀</p>
						<p class="room-item-name-roomtitle">世界浮躁  你很温柔</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>54</font>）</div>
					<div data-cid="3707" data-channel="7b91ea7bb2e562e0d028c32418dda2b1" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="3e9d39342c4ed7df7c8f170ed1d244a0">
					<div class="flex room-item-name" data-cid="527" data-channel="3e9d39342c4ed7df7c8f170ed1d244a0" data-typeid="24">
					<div class="flex room-item-roal" data-channel="3e9d39342c4ed7df7c8f170ed1d244a0" data-cid="527">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20191031/3032861572493694.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>绝地求生开黑一厅</p>
						<p class="room-item-name-roomtitle">反の天天开心哦</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>51</font>）</div>
					<div data-cid="527" data-channel="3e9d39342c4ed7df7c8f170ed1d244a0" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="0ec0dde1d3e73787d308daf6ade5de32">
					<div class="flex room-item-name" data-cid="8513" data-channel="0ec0dde1d3e73787d308daf6ade5de32" data-typeid="24">
					<div class="flex room-item-roal" data-channel="0ec0dde1d3e73787d308daf6ade5de32" data-cid="8513">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200727/9694891595812987.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>PUBG花魁厅</p>
						<p class="room-item-name-roomtitle">花魁厅永远是大叔的家</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>37</font>）</div>
					<div data-cid="8513" data-channel="0ec0dde1d3e73787d308daf6ade5de32" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="594e4a14fb4d32c65570fc8f7b375b08">
					<div class="flex room-item-name" data-cid="8742" data-channel="594e4a14fb4d32c65570fc8f7b375b08" data-typeid="24">
					<div class="flex room-item-roal" data-channel="594e4a14fb4d32c65570fc8f7b375b08" data-cid="8742">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200708/4477801594208315.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>绝地花季少女厅（新）</p>
						<p class="room-item-name-roomtitle">久处不月，待你如初</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>26</font>）</div>
					<div data-cid="8742" data-channel="594e4a14fb4d32c65570fc8f7b375b08" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="10a19821709f81625c4d08f6475bc346">
					<div class="flex room-item-name" data-cid="8686" data-channel="10a19821709f81625c4d08f6475bc346" data-typeid="24">
					<div class="flex room-item-roal" data-channel="10a19821709f81625c4d08f6475bc346" data-cid="8686">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200623/4836691592913082.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>PUBG落地成盒厅</p>
						<p class="room-item-name-roomtitle">rapper小太阳欢迎大家～</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>12</font>）</div>
					<div data-cid="8686" data-channel="10a19821709f81625c4d08f6475bc346" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="b2799dfa15cf383c36f396644569b6fe">
					<div class="flex room-item-name" data-cid="881" data-channel="b2799dfa15cf383c36f396644569b6fe" data-typeid="24">
					<div class="flex room-item-roal" data-channel="b2799dfa15cf383c36f396644569b6fe" data-cid="881">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200407/7792911586250127.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡PUBG绝地仙女厅♡</p>
						<p class="room-item-name-roomtitle">啾咪❤开黑首选仙女厅</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>25</font>）</div>
					<div data-cid="881" data-channel="b2799dfa15cf383c36f396644569b6fe" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="a86138ced8794a28af7e79324ab939f7">
					<div class="flex room-item-name" data-cid="6098" data-channel="a86138ced8794a28af7e79324ab939f7" data-typeid="24">
					<div class="flex room-item-roal" data-channel="a86138ced8794a28af7e79324ab939f7" data-cid="6098">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200528/9167121590675745.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>绝地战争女神厅</p>
						<p class="room-item-name-roomtitle">13-01点进厅免费开黑</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>21</font>）</div>
					<div data-cid="6098" data-channel="a86138ced8794a28af7e79324ab939f7" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="3052cfec56ed68ef334aec5040dc8d82">
					<div class="flex room-item-name" data-cid="5547" data-channel="3052cfec56ed68ef334aec5040dc8d82" data-typeid="24">
					<div class="flex room-item-roal" data-channel="3052cfec56ed68ef334aec5040dc8d82" data-cid="5547">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200229/1280381582970636.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>绝地Sixsix开黑厅</p>
						<p class="room-item-name-roomtitle">空山新雨后 天气晚来裘</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>31</font>）</div>
					<div data-cid="5547" data-channel="3052cfec56ed68ef334aec5040dc8d82" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="fd975106388b04627fe22104c0bcc0d1">
					<div class="flex room-item-name" data-cid="10043" data-channel="fd975106388b04627fe22104c0bcc0d1" data-typeid="24">
					<div class="flex room-item-roal" data-channel="fd975106388b04627fe22104c0bcc0d1" data-cid="10043">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200715/1245381594795974.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>热心网友游戏厅</p>
						<p class="room-item-name-roomtitle">所有游戏都能玩，妹子特能撩</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>21</font>）</div>
					<div data-cid="10043" data-channel="fd975106388b04627fe22104c0bcc0d1" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div></div>
					   </li><li data-type="game" class="hide">
							<div class="rooms"><div class="room-item" channel="d834d3cb5ec89d363eaef704a948e431">
					<div class="flex room-item-name" data-cid="6885" data-channel="d834d3cb5ec89d363eaef704a948e431" data-typeid="16">
					<div class="flex room-item-roal" data-channel="d834d3cb5ec89d363eaef704a948e431" data-cid="6885">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200616/2078291592274989.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>ღ幼儿园综合游戏厅ღ</p>
						<p class="room-item-name-roomtitle">8.11百日晚会biu~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>37</font>）</div>
					<div data-cid="6885" data-channel="d834d3cb5ec89d363eaef704a948e431" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="98ff3af9c71053d7e765074937ede898">
					<div class="flex room-item-name" data-cid="8687" data-channel="98ff3af9c71053d7e765074937ede898" data-typeid="16">
					<div class="flex room-item-roal" data-channel="98ff3af9c71053d7e765074937ede898" data-cid="8687">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200629/1696371593426217.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>绝色仙女游戏开黑厅</p>
						<p class="room-item-name-roomtitle">向来缘浅，奈何情深</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>79</font>）</div>
					<div data-cid="8687" data-channel="98ff3af9c71053d7e765074937ede898" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="4cd2ec6d2d042dabcca5f8bddcce3f5a">
					<div class="flex room-item-name" data-cid="10050" data-channel="4cd2ec6d2d042dabcca5f8bddcce3f5a" data-typeid="24">
					<div class="flex room-item-roal" data-channel="4cd2ec6d2d042dabcca5f8bddcce3f5a" data-cid="10050">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200720/1351491595235960.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>私人定制语游综合厅（新）</p>
						<p class="room-item-name-roomtitle">浮世万千  只愿有你</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>50</font>）</div>
					<div data-cid="10050" data-channel="4cd2ec6d2d042dabcca5f8bddcce3f5a" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="68d8a113cddf0359e9f1cbbd144f2ccd">
					<div class="flex room-item-name" data-cid="6100" data-channel="68d8a113cddf0359e9f1cbbd144f2ccd" data-typeid="24">
					<div class="flex room-item-roal" data-channel="68d8a113cddf0359e9f1cbbd144f2ccd" data-cid="6100">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200811/2073251597114554.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>茶颜悦色游戏开黑厅</p>
						<p class="room-item-name-roomtitle">愿你既无忧烦 又无羁束</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>41</font>）</div>
					<div data-cid="6100" data-channel="68d8a113cddf0359e9f1cbbd144f2ccd" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="20d6490ad92586b0823b5295bbc06d0d">
					<div class="flex room-item-name" data-cid="8700" data-channel="20d6490ad92586b0823b5295bbc06d0d" data-typeid="16">
					<div class="flex room-item-roal" data-channel="20d6490ad92586b0823b5295bbc06d0d" data-cid="8700">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200704/1084851593853711.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>国色天香游戏开黑厅（新）</p>
						<p class="room-item-name-roomtitle">破产姐妹难兄难弟</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>20</font>）</div>
					<div data-cid="8700" data-channel="20d6490ad92586b0823b5295bbc06d0d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="3c667eaecabbddd6cd681b1d05c6e807">
					<div class="flex room-item-name" data-cid="2327" data-channel="3c667eaecabbddd6cd681b1d05c6e807" data-typeid="24">
					<div class="flex room-item-roal" data-channel="3c667eaecabbddd6cd681b1d05c6e807" data-cid="2327">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200717/1450331594985459.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>DNF天空之城</p>
						<p class="room-item-name-roomtitle">破晓庆功宴·福利送送送送</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>12</font>）</div>
					<div data-cid="2327" data-channel="3c667eaecabbddd6cd681b1d05c6e807" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="0d2e1b21169044da2adb3b07610e8301">
					<div class="flex room-item-name" data-cid="8693" data-channel="0d2e1b21169044da2adb3b07610e8301" data-typeid="24">
					<div class="flex room-item-roal" data-channel="0d2e1b21169044da2adb3b07610e8301" data-cid="8693">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200702/6791371593658233.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>万妖女王自由开黑厅</p>
						<p class="room-item-name-roomtitle">8月12晚八点先锋评选</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>44</font>）</div>
					<div data-cid="8693" data-channel="0d2e1b21169044da2adb3b07610e8301" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="982b26891deff3bcae3146f6b07e8500">
					<div class="flex room-item-name" data-cid="11304" data-channel="982b26891deff3bcae3146f6b07e8500" data-typeid="24">
					<div class="flex room-item-roal" data-channel="982b26891deff3bcae3146f6b07e8500" data-cid="11304">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200810/1722001597049505.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>三生树下三生情▪剑三厅（新）</p>
						<p class="room-item-name-roomtitle">8.13 晚七点半寻找你的情缘</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>26</font>）</div>
					<div data-cid="11304" data-channel="982b26891deff3bcae3146f6b07e8500" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="bd801ef4a006a0870b108c7526ed4094">
					<div class="flex room-item-name" data-cid="8949" data-channel="bd801ef4a006a0870b108c7526ed4094" data-typeid="10">
					<div class="flex room-item-roal" data-channel="bd801ef4a006a0870b108c7526ed4094" data-cid="8949">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200714/8287951594709673.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>风华绝代游戏开黑厅（新）</p>
						<p class="room-item-name-roomtitle">8月15满月活动,</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>15</font>）</div>
					<div data-cid="8949" data-channel="bd801ef4a006a0870b108c7526ed4094" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="18e80089f793eba2a01d78be61f94de9">
					<div class="flex room-item-name" data-cid="1511" data-channel="18e80089f793eba2a01d78be61f94de9" data-typeid="24">
					<div class="flex room-item-roal" data-channel="18e80089f793eba2a01d78be61f94de9" data-cid="1511">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200717/1051101594985558.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>DNF云上长安</p>
						<p class="room-item-name-roomtitle">招优质主持队长๑</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>18</font>）</div>
					<div data-cid="1511" data-channel="18e80089f793eba2a01d78be61f94de9" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="5d2fde73e45fda141bec1c75d4237793">
					<div class="flex room-item-name" data-cid="2015" data-channel="5d2fde73e45fda141bec1c75d4237793" data-typeid="24">
					<div class="flex room-item-roal" data-channel="5d2fde73e45fda141bec1c75d4237793" data-cid="2015">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200717/8197671594985641.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>DNF战灵天舞</p>
						<p class="room-item-name-roomtitle">星座妹妹在这等你哦</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>19</font>）</div>
					<div data-cid="2015" data-channel="5d2fde73e45fda141bec1c75d4237793" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c51bb9b27e807b520faa8eb844a40116">
					<div class="flex room-item-name" data-cid="8500" data-channel="c51bb9b27e807b520faa8eb844a40116" data-typeid="24">
					<div class="flex room-item-roal" data-channel="c51bb9b27e807b520faa8eb844a40116" data-cid="8500">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200527/1816721590549479.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>炫舞甜心天使厅</p>
						<p class="room-item-name-roomtitle">招优秀主持队长❤</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>13</font>）</div>
					<div data-cid="8500" data-channel="c51bb9b27e807b520faa8eb844a40116" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="957d063236470dbb080ad7626d7812d5">
					<div class="flex room-item-name" data-cid="3716" data-channel="957d063236470dbb080ad7626d7812d5" data-typeid="24">
					<div class="flex room-item-roal" data-channel="957d063236470dbb080ad7626d7812d5" data-cid="3716">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200717/6448251594985597.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>DNF月光酒馆</p>
						<p class="room-item-name-roomtitle">独饮一人酒，独想心上人。</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>13</font>）</div>
					<div data-cid="3716" data-channel="957d063236470dbb080ad7626d7812d5" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="130427a07061676c83de546f867b4e7a">
					<div class="flex room-item-name" data-cid="8707" data-channel="130427a07061676c83de546f867b4e7a" data-typeid="24">
					<div class="flex room-item-roal" data-channel="130427a07061676c83de546f867b4e7a" data-cid="8707">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200707/1539021594114914.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>炫舞小小爱神厅</p>
						<p class="room-item-name-roomtitle">招优秀主持队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>15</font>）</div>
					<div data-cid="8707" data-channel="130427a07061676c83de546f867b4e7a" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="7fb7a0e1dc6e8b9f3c06b41d881c890f">
					<div class="flex room-item-name" data-cid="11302" data-channel="7fb7a0e1dc6e8b9f3c06b41d881c890f" data-typeid="24">
					<div class="flex room-item-roal" data-channel="7fb7a0e1dc6e8b9f3c06b41d881c890f" data-cid="11302">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200807/3644461596795738.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>DNF手游官方开黑一厅</p>
						<p class="room-item-name-roomtitle">8.12正式开厅</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>16</font>）</div>
					<div data-cid="11302" data-channel="7fb7a0e1dc6e8b9f3c06b41d881c890f" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="a57270ec5e4f121bab10b6f11863c857">
					<div class="flex room-item-name" data-cid="11301" data-channel="a57270ec5e4f121bab10b6f11863c857" data-typeid="24">
					<div class="flex room-item-roal" data-channel="a57270ec5e4f121bab10b6f11863c857" data-cid="11301">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200807/6243521596781562.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>人间仙境(单机)开黑厅</p>
						<p class="room-item-name-roomtitle">试营业：招主持＆队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>40</font>）</div>
					<div data-cid="11301" data-channel="a57270ec5e4f121bab10b6f11863c857" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div></div>
					   </li><li data-type="mobile" class="hide">
							<div class="rooms"><div class="room-item" channel="15cf53a33b07499c12cdceac8a6e5f52">
					<div class="flex room-item-name" data-cid="1234" data-channel="15cf53a33b07499c12cdceac8a6e5f52" data-typeid="24">
					<div class="flex room-item-roal" data-channel="15cf53a33b07499c12cdceac8a6e5f52" data-cid="1234">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200707/1324201594085459.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀遇见神鹿厅❀</p>
						<p class="room-item-name-roomtitle">❥招主持队长and管理</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>31</font>）</div>
					<div data-cid="1234" data-channel="15cf53a33b07499c12cdceac8a6e5f52" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="88380a8d763c2a5274985042788f8a97">
					<div class="flex room-item-name" data-cid="11294" data-channel="88380a8d763c2a5274985042788f8a97" data-typeid="24">
					<div class="flex room-item-roal" data-channel="88380a8d763c2a5274985042788f8a97" data-cid="11294">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200805/2068921596626898.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀无与伦比厅❀（新）</p>
						<p class="room-item-name-roomtitle">8.12晚20点等你来</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>12</font>）</div>
					<div data-cid="11294" data-channel="88380a8d763c2a5274985042788f8a97" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="bb78db1f7bf5df3e24a8be8ad12f4cfe">
					<div class="flex room-item-name" data-cid="11293" data-channel="bb78db1f7bf5df3e24a8be8ad12f4cfe" data-typeid="24">
					<div class="flex room-item-roal" data-channel="bb78db1f7bf5df3e24a8be8ad12f4cfe" data-cid="11293">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200804/9266741596541717.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者鳞潇阁❀（新）</p>
						<p class="room-item-name-roomtitle">鳞潇阁正式开厅</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>8</font>）</div>
					<div data-cid="11293" data-channel="bb78db1f7bf5df3e24a8be8ad12f4cfe" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="94892002c22fac0f6e8ea34d798d9e10">
					<div class="flex room-item-name" data-cid="11291" data-channel="94892002c22fac0f6e8ea34d798d9e10" data-typeid="24">
					<div class="flex room-item-roal" data-channel="94892002c22fac0f6e8ea34d798d9e10" data-cid="11291">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200804/1959341596520458.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>❀狼人杀丘比特厅❀（新）</p>
						<p class="room-item-name-roomtitle">招优质主持/陪陪</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>8</font>）</div>
					<div data-cid="11291" data-channel="94892002c22fac0f6e8ea34d798d9e10" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="8dfe5834e81b4a163b64170480b340c7">
					<div class="flex room-item-name" data-cid="11285" data-channel="8dfe5834e81b4a163b64170480b340c7" data-typeid="24">
					<div class="flex room-item-roal" data-channel="8dfe5834e81b4a163b64170480b340c7" data-cid="11285">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200731/1387661596172722.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>❀和平精英火箭少女厅❀（新）</p>
						<p class="room-item-name-roomtitle">ck我们的好大哥</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>22</font>）</div>
					<div data-cid="11285" data-channel="8dfe5834e81b4a163b64170480b340c7" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="39d023e564003b866e516bc703596d11">
					<div class="flex room-item-name" data-cid="10634" data-channel="39d023e564003b866e516bc703596d11" data-typeid="24">
					<div class="flex room-item-roal" data-channel="39d023e564003b866e516bc703596d11" data-cid="10634">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200725/1749221595666078.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>❀和平精英国民女神厅❀（新）</p>
						<p class="room-item-name-roomtitle">网恋首选 全厅女神随你挑</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>27</font>）</div>
					<div data-cid="10634" data-channel="39d023e564003b866e516bc703596d11" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="83dba1f1156d2127c2f27a7bb99dd27d">
					<div class="flex room-item-name" data-cid="6073" data-channel="83dba1f1156d2127c2f27a7bb99dd27d" data-typeid="0">
					<div class="flex room-item-roal" data-channel="83dba1f1156d2127c2f27a7bb99dd27d" data-cid="6073">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/1204731585208117.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀手游一元点单①厅❀</p>
						<p class="room-item-name-roomtitle">乃难 蓝难 满难 月难</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>19</font>）</div>
					<div data-cid="6073" data-channel="83dba1f1156d2127c2f27a7bb99dd27d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c857bf027249f8149808b4791c4de842">
					<div class="flex room-item-name" data-cid="8705" data-channel="c857bf027249f8149808b4791c4de842" data-typeid="0">
					<div class="flex room-item-roal" data-channel="c857bf027249f8149808b4791c4de842" data-cid="8705">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200707/1417891594112552.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀手游一元点单③厅❀</p>
						<p class="room-item-name-roomtitle">猪圈ovo招主持客服</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>10</font>）</div>
					<div data-cid="8705" data-channel="c857bf027249f8149808b4791c4de842" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="4caf58cb6dfd731835f64779b52a2f36">
					<div class="flex room-item-name" data-cid="6151" data-channel="4caf58cb6dfd731835f64779b52a2f36" data-typeid="24">
					<div class="flex room-item-roal" data-channel="4caf58cb6dfd731835f64779b52a2f36" data-cid="6151">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200807/1383521596782192.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平精英无敌战神厅❀</p>
						<p class="room-item-name-roomtitle">迷弟独宠温妤</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>5</font>）</div>
					<div data-cid="6151" data-channel="4caf58cb6dfd731835f64779b52a2f36" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="5fc4cf4941538b2bfe428a08a4a7748b">
					<div class="flex room-item-name" data-cid="8760" data-channel="5fc4cf4941538b2bfe428a08a4a7748b" data-typeid="24">
					<div class="flex room-item-roal" data-channel="5fc4cf4941538b2bfe428a08a4a7748b" data-cid="8760">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200709/1463871594295269.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀时光厅❀</p>
						<p class="room-item-name-roomtitle">77牛逼！！！（破音）</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>14</font>）</div>
					<div data-cid="8760" data-channel="5fc4cf4941538b2bfe428a08a4a7748b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="95f84b6014b51c785ef26fbbfc248a76">
					<div class="flex room-item-name" data-cid="8515" data-channel="95f84b6014b51c785ef26fbbfc248a76" data-typeid="24">
					<div class="flex room-item-roal" data-channel="95f84b6014b51c785ef26fbbfc248a76" data-cid="8515">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200602/1473331591064814.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀综合开黑厅❀</p>
						<p class="room-item-name-roomtitle">七七❤海浪</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>21</font>）</div>
					<div data-cid="8515" data-channel="95f84b6014b51c785ef26fbbfc248a76" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="a0d444f5e01b559fa44579737433792b">
					<div class="flex room-item-name" data-cid="8302" data-channel="a0d444f5e01b559fa44579737433792b" data-typeid="24">
					<div class="flex room-item-roal" data-channel="a0d444f5e01b559fa44579737433792b" data-cid="8302">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200513/1025191589370758.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀定制恋人厅❀</p>
						<p class="room-item-name-roomtitle">社会你笙哥，人狠话不多</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>23</font>）</div>
					<div data-cid="8302" data-channel="a0d444f5e01b559fa44579737433792b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="2e35f658dadf97352dbcc9f03b11a201">
					<div class="flex room-item-name" data-cid="4490" data-channel="2e35f658dadf97352dbcc9f03b11a201" data-typeid="24">
					<div class="flex room-item-roal" data-channel="2e35f658dadf97352dbcc9f03b11a201" data-cid="4490">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200203/3311231580710203.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀休闲开黑厅❀</p>
						<p class="room-item-name-roomtitle">招优秀主持队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>20</font>）</div>
					<div data-cid="4490" data-channel="2e35f658dadf97352dbcc9f03b11a201" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="2afc0518f1101a6c5fa4470f55b991b2">
					<div class="flex room-item-name" data-cid="8678" data-channel="2afc0518f1101a6c5fa4470f55b991b2" data-typeid="24">
					<div class="flex room-item-roal" data-channel="2afc0518f1101a6c5fa4470f55b991b2" data-cid="8678">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200612/8115221591964216.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平精英哈拉少厅❀</p>
						<p class="room-item-name-roomtitle">恰鸡老阿姨欢迎回家~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>8</font>）</div>
					<div data-cid="8678" data-channel="2afc0518f1101a6c5fa4470f55b991b2" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="6de291420e83989648f6b357ebfa7aea">
					<div class="flex room-item-name" data-cid="10046" data-channel="6de291420e83989648f6b357ebfa7aea" data-typeid="24">
					<div class="flex room-item-roal" data-channel="6de291420e83989648f6b357ebfa7aea" data-cid="10046">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200731/1596821596195856.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀娜可露露厅❀</p>
						<p class="room-item-name-roomtitle">沫沫软软野酱开心快乐</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>2</font>）</div>
					<div data-cid="10046" data-channel="6de291420e83989648f6b357ebfa7aea" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="6369e079791fb0233265299dc881490d">
					<div class="flex room-item-name" data-cid="2735" data-channel="6369e079791fb0233265299dc881490d" data-typeid="24">
					<div class="flex room-item-roal" data-channel="6369e079791fb0233265299dc881490d" data-cid="2735">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20191219/1949931576725452.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❦王者荣耀开黑一厅❦</p>
						<p class="room-item-name-roomtitle">阿梨小可爱</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>11</font>）</div>
					<div data-cid="2735" data-channel="6369e079791fb0233265299dc881490d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="64040d5fd615e95946d23877ac61883e">
					<div class="flex room-item-name" data-cid="8688" data-channel="64040d5fd615e95946d23877ac61883e" data-typeid="24">
					<div class="flex room-item-roal" data-channel="64040d5fd615e95946d23877ac61883e" data-cid="8688">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200806/2868481596685051.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>❀和平精英星河学院厅❀（新）</p>
						<p class="room-item-name-roomtitle">招收队长/主持</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>16</font>）</div>
					<div data-cid="8688" data-channel="64040d5fd615e95946d23877ac61883e" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="25e363ec133df729a683b468313a51bd">
					<div class="flex room-item-name" data-cid="6153" data-channel="25e363ec133df729a683b468313a51bd" data-typeid="24">
					<div class="flex room-item-roal" data-channel="25e363ec133df729a683b468313a51bd" data-cid="6153">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200402/1634261585798866.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者海洋之心厅❀</p>
						<p class="room-item-name-roomtitle">旧城独宠酒儿小宝贝</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>22</font>）</div>
					<div data-cid="6153" data-channel="25e363ec133df729a683b468313a51bd" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="eaaa7b1040209522f86b9b4573fc0a7e">
					<div class="flex room-item-name" data-cid="4486" data-channel="eaaa7b1040209522f86b9b4573fc0a7e" data-typeid="24">
					<div class="flex room-item-roal" data-channel="eaaa7b1040209522f86b9b4573fc0a7e" data-cid="4486">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200714/8297161594709884.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平精英青丘厅❀</p>
						<p class="room-item-name-roomtitle">如人饮水冷暖自知</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>18</font>）</div>
					<div data-cid="4486" data-channel="eaaa7b1040209522f86b9b4573fc0a7e" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="044e886222d1b945f086316d11adff48">
					<div class="flex room-item-name" data-cid="10436" data-channel="044e886222d1b945f086316d11adff48" data-typeid="24">
					<div class="flex room-item-roal" data-channel="044e886222d1b945f086316d11adff48" data-cid="10436">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200721/1309041595332883.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀北京厅❀</p>
						<p class="room-item-name-roomtitle">北京厅超爱达老爷</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>18</font>）</div>
					<div data-cid="10436" data-channel="044e886222d1b945f086316d11adff48" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="f5a5966e7f39a77c1b7b326f60050836">
					<div class="flex room-item-name" data-cid="6757" data-channel="f5a5966e7f39a77c1b7b326f60050836" data-typeid="24">
					<div class="flex room-item-roal" data-channel="f5a5966e7f39a77c1b7b326f60050836" data-cid="6757">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200421/9214041587454284.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀陪你开黑厅❀</p>
						<p class="room-item-name-roomtitle">招募优质主持-队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>8</font>）</div>
					<div data-cid="6757" data-channel="f5a5966e7f39a77c1b7b326f60050836" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="bb6ca69116f8a68bfe2b74bd36c9be8c">
					<div class="flex room-item-name" data-cid="8706" data-channel="bb6ca69116f8a68bfe2b74bd36c9be8c" data-typeid="24">
					<div class="flex room-item-roal" data-channel="bb6ca69116f8a68bfe2b74bd36c9be8c" data-cid="8706">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200707/7849331594114501.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀后宫厅❀</p>
						<p class="room-item-name-roomtitle">7.31满月庆典</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>8</font>）</div>
					<div data-cid="8706" data-channel="bb6ca69116f8a68bfe2b74bd36c9be8c" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="ab34efc9fef1314f1a4989efadb72f31">
					<div class="flex room-item-name" data-cid="1406" data-channel="ab34efc9fef1314f1a4989efadb72f31" data-typeid="24">
					<div class="flex room-item-roal" data-channel="ab34efc9fef1314f1a4989efadb72f31" data-cid="1406">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20191029/9712481572338044.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀自由开黑厅❀</p>
						<p class="room-item-name-roomtitle">偏爱啾啾</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>29</font>）</div>
					<div data-cid="1406" data-channel="ab34efc9fef1314f1a4989efadb72f31" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="ff23bf0231793477678c3ab8919c927c">
					<div class="flex room-item-name" data-cid="5700" data-channel="ff23bf0231793477678c3ab8919c927c" data-typeid="24">
					<div class="flex room-item-roal" data-channel="ff23bf0231793477678c3ab8919c927c" data-cid="5700">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200308/2477081583642238.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平精英魔仙厅❀</p>
						<p class="room-item-name-roomtitle">豪豪独爱软软</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>15</font>）</div>
					<div data-cid="5700" data-channel="ff23bf0231793477678c3ab8919c927c" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="ebda04ba11dbe1aba3c936fe562bc5be">
					<div class="flex room-item-name" data-cid="8311" data-channel="ebda04ba11dbe1aba3c936fe562bc5be" data-typeid="24">
					<div class="flex room-item-roal" data-channel="ebda04ba11dbe1aba3c936fe562bc5be" data-cid="8311">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200518/8228931589794405.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平精英大吉大利厅❀</p>
						<p class="room-item-name-roomtitle">招主持/队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>19</font>）</div>
					<div data-cid="8311" data-channel="ebda04ba11dbe1aba3c936fe562bc5be" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="9716809e98f4266648270fe7617a08ac">
					<div class="flex room-item-name" data-cid="6755" data-channel="9716809e98f4266648270fe7617a08ac" data-typeid="24">
					<div class="flex room-item-roal" data-channel="9716809e98f4266648270fe7617a08ac" data-cid="6755">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200421/1863401587451264.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀云顶手游开黑一厅❀</p>
						<p class="room-item-name-roomtitle">开箱马车海底翻倍咯</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>13</font>）</div>
					<div data-cid="6755" data-channel="9716809e98f4266648270fe7617a08ac" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="dce69f2f159721977a53009c835a6712">
					<div class="flex room-item-name" data-cid="1314" data-channel="dce69f2f159721977a53009c835a6712" data-typeid="24">
					<div class="flex room-item-roal" data-channel="dce69f2f159721977a53009c835a6712" data-cid="1314">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200422/8792211587547727.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平精英开黑一厅❀</p>
						<p class="room-item-name-roomtitle">八月你好 好好爱我</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>17</font>）</div>
					<div data-cid="1314" data-channel="dce69f2f159721977a53009c835a6712" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="aa6e68e34d030631bfff42e2472fd20a">
					<div class="flex room-item-name" data-cid="7121" data-channel="aa6e68e34d030631bfff42e2472fd20a" data-typeid="24">
					<div class="flex room-item-roal" data-channel="aa6e68e34d030631bfff42e2472fd20a" data-cid="7121">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200504/4022961588587412.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀蔷薇恋人厅❀</p>
						<p class="room-item-name-roomtitle">枪和玫瑰随时为公主待命</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>15</font>）</div>
					<div data-cid="7121" data-channel="aa6e68e34d030631bfff42e2472fd20a" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="de05f66e6ccabfd5c130cbd222286717">
					<div class="flex room-item-name" data-cid="4186" data-channel="de05f66e6ccabfd5c130cbd222286717" data-typeid="10">
					<div class="flex room-item-roal" data-channel="de05f66e6ccabfd5c130cbd222286717" data-cid="4186">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200323/3170021584965402.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀绝色战神厅❀</p>
						<p class="room-item-name-roomtitle">神仙哥哥爸比</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>21</font>）</div>
					<div data-cid="4186" data-channel="de05f66e6ccabfd5c130cbd222286717" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="af3116b6aafe9d5c53a5b53654959d9b">
					<div class="flex room-item-name" data-cid="8690" data-channel="af3116b6aafe9d5c53a5b53654959d9b" data-typeid="24">
					<div class="flex room-item-roal" data-channel="af3116b6aafe9d5c53a5b53654959d9b" data-cid="8690">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200624/2073971592998024.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀荒野乱斗开黑一厅❀</p>
						<p class="room-item-name-roomtitle">好色施主</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>17</font>）</div>
					<div data-cid="8690" data-channel="af3116b6aafe9d5c53a5b53654959d9b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="55a285c2f737749c18a0186b74fde784">
					<div class="flex room-item-name" data-cid="8691" data-channel="55a285c2f737749c18a0186b74fde784" data-typeid="24">
					<div class="flex room-item-roal" data-channel="55a285c2f737749c18a0186b74fde784" data-cid="8691">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200629/1420811593431315.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀荒野乱斗开黑二厅❀</p>
						<p class="room-item-name-roomtitle">综合游戏开黑女神守护</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>16</font>）</div>
					<div data-cid="8691" data-channel="55a285c2f737749c18a0186b74fde784" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="d115c2ac83985ae27699753b2a0fcd66">
					<div class="flex room-item-name" data-cid="8303" data-channel="d115c2ac83985ae27699753b2a0fcd66" data-typeid="24">
					<div class="flex room-item-roal" data-channel="d115c2ac83985ae27699753b2a0fcd66" data-cid="8303">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200513/1676871589371880.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平精英恶魔宝贝厅❀</p>
						<p class="room-item-name-roomtitle">阿晚是最漂亮的！！！</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>19</font>）</div>
					<div data-cid="8303" data-channel="d115c2ac83985ae27699753b2a0fcd66" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="47e976c98a54058bffc0da64170656d2">
					<div class="flex room-item-name" data-cid="5933" data-channel="47e976c98a54058bffc0da64170656d2" data-typeid="24">
					<div class="flex room-item-roal" data-channel="47e976c98a54058bffc0da64170656d2" data-cid="5933">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200313/1860221584097461.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀李白厅❀</p>
						<p class="room-item-name-roomtitle">氪金少年陈鑫鑫</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>7</font>）</div>
					<div data-cid="5933" data-channel="47e976c98a54058bffc0da64170656d2" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="fd072e7792eb0416f23b728c289884f6">
					<div class="flex room-item-name" data-cid="8702" data-channel="fd072e7792eb0416f23b728c289884f6" data-typeid="10">
					<div class="flex room-item-roal" data-channel="fd072e7792eb0416f23b728c289884f6" data-cid="8702">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200706/1511241594039115.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❧王者荣耀王上宫殿❧</p>
						<p class="room-item-name-roomtitle">忍疼永远的家</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>22</font>）</div>
					<div data-cid="8702" data-channel="fd072e7792eb0416f23b728c289884f6" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="199c2e42c602a8a10d133a7f66e8ece2">
					<div class="flex room-item-name" data-cid="8310" data-channel="199c2e42c602a8a10d133a7f66e8ece2" data-typeid="24">
					<div class="flex room-item-roal" data-channel="199c2e42c602a8a10d133a7f66e8ece2" data-cid="8310">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200518/1015601589787964.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀欢乐开黑厅❀</p>
						<p class="room-item-name-roomtitle">招优质主持队长</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>18</font>）</div>
					<div data-cid="8310" data-channel="199c2e42c602a8a10d133a7f66e8ece2" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="86aa37ca977f680d9304346da382c6a3">
					<div class="flex room-item-name" data-cid="8948" data-channel="86aa37ca977f680d9304346da382c6a3" data-typeid="24">
					<div class="flex room-item-roal" data-channel="86aa37ca977f680d9304346da382c6a3" data-cid="8948">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200710/1270291594380561.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❧王者荣耀心有所属厅❧</p>
						<p class="room-item-name-roomtitle">顽固王子最帅</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>12</font>）</div>
					<div data-cid="8948" data-channel="86aa37ca977f680d9304346da382c6a3" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="b5fb9ad1105a272fa84a696999de9d4b">
					<div class="flex room-item-name" data-cid="8696" data-channel="b5fb9ad1105a272fa84a696999de9d4b" data-typeid="24">
					<div class="flex room-item-roal" data-channel="b5fb9ad1105a272fa84a696999de9d4b" data-cid="8696">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200630/5588261593519066.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平饭店❀</p>
						<p class="room-item-name-roomtitle">网恋滴滴小姨妈</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>26</font>）</div>
					<div data-cid="8696" data-channel="b5fb9ad1105a272fa84a696999de9d4b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="b65577dd6ed8d9345d85ddaac5010e42">
					<div class="flex room-item-name" data-cid="4073" data-channel="b65577dd6ed8d9345d85ddaac5010e42" data-typeid="10">
					<div class="flex room-item-roal" data-channel="b65577dd6ed8d9345d85ddaac5010e42" data-cid="4073">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20191219/2073581576719453.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♛和平精英快乐女神厅♛</p>
						<p class="room-item-name-roomtitle">欢迎进来耍.</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>22</font>）</div>
					<div data-cid="4073" data-channel="b65577dd6ed8d9345d85ddaac5010e42" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="faccbeba9afe6a385bcc982e2249e428">
					<div class="flex room-item-name" data-cid="10435" data-channel="faccbeba9afe6a385bcc982e2249e428" data-typeid="24">
					<div class="flex room-item-roal" data-channel="faccbeba9afe6a385bcc982e2249e428" data-cid="10435">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200721/1016621595332766.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♛QQ手游陌予厅♛</p>
						<p class="room-item-name-roomtitle">8号晚8点88等你呦爸爸</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>20</font>）</div>
					<div data-cid="10435" data-channel="faccbeba9afe6a385bcc982e2249e428" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="3e29b8fa8c3de782e93d0416206340d1">
					<div class="flex room-item-name" data-cid="1219" data-channel="3e29b8fa8c3de782e93d0416206340d1" data-typeid="24">
					<div class="flex room-item-roal" data-channel="3e29b8fa8c3de782e93d0416206340d1" data-cid="1219">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200715/2466991594816237.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀和平精英开黑二厅❀</p>
						<p class="room-item-name-roomtitle">佳佳天天开心</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>16</font>）</div>
					<div data-cid="1219" data-channel="3e29b8fa8c3de782e93d0416206340d1" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="b343c8109f6a3faa218a551300dc345a">
					<div class="flex room-item-name" data-cid="5322" data-channel="b343c8109f6a3faa218a551300dc345a" data-typeid="24">
					<div class="flex room-item-roal" data-channel="b343c8109f6a3faa218a551300dc345a" data-cid="5322">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200224/1529651582535953.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀王者荣耀百里桃花厅❀</p>
						<p class="room-item-name-roomtitle">仙女下凡最美桃子</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>28</font>）</div>
					<div data-cid="5322" data-channel="b343c8109f6a3faa218a551300dc345a" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c4c102558e2ab54436f044fa7459e062">
					<div class="flex room-item-name" data-cid="11300" data-channel="c4c102558e2ab54436f044fa7459e062" data-typeid="24">
					<div class="flex room-item-roal" data-channel="c4c102558e2ab54436f044fa7459e062" data-cid="11300">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200807/6278981596780491.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❧王者QAQ女仆咖啡厅❧</p>
						<p class="room-item-name-roomtitle">8.11试营业，欢迎~~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>7</font>）</div>
					<div data-cid="11300" data-channel="c4c102558e2ab54436f044fa7459e062" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div></div>
					   </li><li data-type="amuse" class="hide">
							<div class="rooms"><div class="room-item" channel="8b2687b80edf08385f6b7bbe8b6c17d8">
					<div class="flex room-item-name" data-cid="2013" data-channel="8b2687b80edf08385f6b7bbe8b6c17d8" data-typeid="18">
					<div class="flex room-item-roal" data-channel="8b2687b80edf08385f6b7bbe8b6c17d8" data-cid="2013">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200727/1078931595843512.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>岁月英才私立ღ</p>
						<p class="room-item-name-roomtitle">天籁歌手 治愈废嗓滚刀肉</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>83</font>）</div>
					<div data-cid="2013" data-channel="8b2687b80edf08385f6b7bbe8b6c17d8" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="f298312a6ea30e8f225448ed1f5a7062">
					<div class="flex room-item-name" data-cid="5551" data-channel="f298312a6ea30e8f225448ed1f5a7062" data-typeid="18">
					<div class="flex room-item-roal" data-channel="f298312a6ea30e8f225448ed1f5a7062" data-cid="5551">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200612/3675701591930296.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>瓜瓜点唱∮1998ツ</p>
						<p class="room-item-name-roomtitle">欢迎大家前来听歌~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>35</font>）</div>
					<div data-cid="5551" data-channel="f298312a6ea30e8f225448ed1f5a7062" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="31e3ff9223c924f8ed01e6e8ea35a655">
					<div class="flex room-item-name" data-cid="8681" data-channel="31e3ff9223c924f8ed01e6e8ea35a655" data-typeid="24">
					<div class="flex room-item-roal" data-channel="31e3ff9223c924f8ed01e6e8ea35a655" data-cid="8681">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200718/1560741595058552.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>瓜瓜ღ唯野呐之声</p>
						<p class="room-item-name-roomtitle">全麦优质歌手 声优</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>23</font>）</div>
					<div data-cid="8681" data-channel="31e3ff9223c924f8ed01e6e8ea35a655" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="826160b931204508cf1d170079a0d8e1">
					<div class="flex room-item-name" data-cid="8698" data-channel="826160b931204508cf1d170079a0d8e1" data-typeid="24">
					<div class="flex room-item-roal" data-channel="826160b931204508cf1d170079a0d8e1" data-cid="8698">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200718/4399771595058529.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>瓜瓜ღ微夏蜜语馆</p>
						<p class="room-item-name-roomtitle">给你喜欢的歌手打call</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>19</font>）</div>
					<div data-cid="8698" data-channel="826160b931204508cf1d170079a0d8e1" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="27743a4de9afb2ced4e57beee30bfe03">
					<div class="flex room-item-name" data-cid="8519" data-channel="27743a4de9afb2ced4e57beee30bfe03" data-typeid="24">
					<div class="flex room-item-roal" data-channel="27743a4de9afb2ced4e57beee30bfe03" data-cid="8519">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200604/8218391591262244.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>✧瓜瓜の倚月听雪楼✧</p>
						<p class="room-item-name-roomtitle">倚月听鹅楼</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>32</font>）</div>
					<div data-cid="8519" data-channel="27743a4de9afb2ced4e57beee30bfe03" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c41e12ecb399df68dac106f36d3a4540">
					<div class="flex room-item-name" data-cid="8301" data-channel="c41e12ecb399df68dac106f36d3a4540" data-typeid="24">
					<div class="flex room-item-roal" data-channel="c41e12ecb399df68dac106f36d3a4540" data-cid="8301">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200527/5532141590574531.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♡瓜瓜の睡意魔法研究所♡</p>
						<p class="room-item-name-roomtitle">请给我们歌手投个票叭！</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>20</font>）</div>
					<div data-cid="8301" data-channel="c41e12ecb399df68dac106f36d3a4540" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="19e8e2ddb2eba44c073b449e58f8261f">
					<div class="flex room-item-name" data-cid="6101" data-channel="19e8e2ddb2eba44c073b449e58f8261f" data-typeid="24">
					<div class="flex room-item-roal" data-channel="19e8e2ddb2eba44c073b449e58f8261f" data-cid="6101">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200527/2055831590577146.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>瓜瓜ღ星恋少女</p>
						<p class="room-item-name-roomtitle">❀炎炎夏日与我相恋</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>11</font>）</div>
					<div data-cid="6101" data-channel="19e8e2ddb2eba44c073b449e58f8261f" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="2c20ee00b867a4a72b69f594683f6b2b">
					<div class="flex room-item-name" data-cid="8680" data-channel="2c20ee00b867a4a72b69f594683f6b2b" data-typeid="24">
					<div class="flex room-item-roal" data-channel="2c20ee00b867a4a72b69f594683f6b2b" data-cid="8680">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200622/1716221592816523.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>ฅ瓜瓜の猫耳铃铛居酒屋ฅ</p>
						<p class="room-item-name-roomtitle">ฅ温一壶酒 等一个人ฅ喵</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>24</font>）</div>
					<div data-cid="8680" data-channel="2c20ee00b867a4a72b69f594683f6b2b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="bf5af23905d33af2cf8aab44e381c3f6">
					<div class="flex room-item-name" data-cid="8699" data-channel="bf5af23905d33af2cf8aab44e381c3f6" data-typeid="24">
					<div class="flex room-item-roal" data-channel="bf5af23905d33af2cf8aab44e381c3f6" data-cid="8699">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200704/7007961593852910.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♦瓜瓜の执事女仆咖啡厅♦</p>
						<p class="room-item-name-roomtitle">❤欢迎主人回家❤</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>17</font>）</div>
					<div data-cid="8699" data-channel="bf5af23905d33af2cf8aab44e381c3f6" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="67fe620d82677b99ae8f29ae1c654513">
					<div class="flex room-item-name" data-cid="8306" data-channel="67fe620d82677b99ae8f29ae1c654513" data-typeid="24">
					<div class="flex room-item-roal" data-channel="67fe620d82677b99ae8f29ae1c654513" data-cid="8306">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200529/1871881590729509.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>瓜瓜✿忘忧阁✿</p>
						<p class="room-item-name-roomtitle">♥优质古风女厅♥</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>14</font>）</div>
					<div data-cid="8306" data-channel="67fe620d82677b99ae8f29ae1c654513" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="f8dbf417f2d4ffa60ce96f6f10fcc613">
					<div class="flex room-item-name" data-cid="10047" data-channel="f8dbf417f2d4ffa60ce96f6f10fcc613" data-typeid="24">
					<div class="flex room-item-roal" data-channel="f8dbf417f2d4ffa60ce96f6f10fcc613" data-cid="10047">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200730/9385771596096752.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>瓜瓜ღ旋转木马</p>
						<p class="room-item-name-roomtitle">ฅ星河万里，满眼是你</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>10</font>）</div>
					<div data-cid="10047" data-channel="f8dbf417f2d4ffa60ce96f6f10fcc613" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="a016d7e933e83667630274ceef5fffed">
					<div class="flex room-item-name" data-cid="10438" data-channel="a016d7e933e83667630274ceef5fffed" data-typeid="24">
					<div class="flex room-item-roal" data-channel="a016d7e933e83667630274ceef5fffed" data-cid="10438">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200723/1313091595491836.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>๑瓜瓜の狐妖缘结御神社๑</p>
						<p class="room-item-name-roomtitle">๑品如是溪一的大姐๑</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>15</font>）</div>
					<div data-cid="10438" data-channel="a016d7e933e83667630274ceef5fffed" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="b6968a78541dab270328103837f7c02e">
					<div class="flex room-item-name" data-cid="11299" data-channel="b6968a78541dab270328103837f7c02e" data-typeid="24">
					<div class="flex room-item-roal" data-channel="b6968a78541dab270328103837f7c02e" data-cid="11299">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200807/5938011596772424.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>瓜瓜ღ再见前任情感传达（新）</p>
						<p class="room-item-name-roomtitle">试营业啦~~\(≧▽≦)/~</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>12</font>）</div>
					<div data-cid="11299" data-channel="b6968a78541dab270328103837f7c02e" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="787a215b40d2b3d2f887dbe7acb1bf65">
					<div class="flex room-item-name" data-cid="4481" data-channel="787a215b40d2b3d2f887dbe7acb1bf65" data-typeid="24">
					<div class="flex room-item-roal" data-channel="787a215b40d2b3d2f887dbe7acb1bf65" data-cid="4481">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200624/1586301592976647.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>瓜瓜的秘密基地</p>
						<p class="room-item-name-roomtitle">♔我想见你不远万里♕</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>7</font>）</div>
					<div data-cid="4481" data-channel="787a215b40d2b3d2f887dbe7acb1bf65" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="465afe8e8cffacc508b59838617bb749">
					<div class="flex room-item-name" data-cid="10437" data-channel="465afe8e8cffacc508b59838617bb749" data-typeid="24">
					<div class="flex room-item-roal" data-channel="465afe8e8cffacc508b59838617bb749" data-cid="10437">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200804/1684661596520258.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>♪瓜瓜の爱丽丝梦游仙境♪（新）</p>
						<p class="room-item-name-roomtitle">招实力唱将女歌手</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>5</font>）</div>
					<div data-cid="10437" data-channel="465afe8e8cffacc508b59838617bb749" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="8d1f29341e0a4013735775024c827676">
					<div class="flex room-item-name" data-cid="11297" data-channel="8d1f29341e0a4013735775024c827676" data-typeid="24">
					<div class="flex room-item-roal" data-channel="8d1f29341e0a4013735775024c827676" data-cid="11297">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200807/3052111596783548.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>ω爱酱の侦探剧本推理馆ω（新）</p>
						<p class="room-item-name-roomtitle">10号 试营业</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="11297" data-channel="8d1f29341e0a4013735775024c827676" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="3f5b93f235064cac7cd879f4b69af5f6">
					<div class="flex room-item-name" data-cid="11303" data-channel="3f5b93f235064cac7cd879f4b69af5f6" data-typeid="24">
					<div class="flex room-item-roal" data-channel="3f5b93f235064cac7cd879f4b69af5f6" data-cid="11303">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200810/2092601597035066.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:#ff0000"><span style="display:none" class="span-jian">荐</span>瓜瓜ღ妙妙屋（新）</p>
						<p class="room-item-name-roomtitle">今晚试营业</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="11303" data-channel="3f5b93f235064cac7cd879f4b69af5f6" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="1f03355dfb41ec2861f351841f42ce8d">
					<div class="flex room-item-name" data-cid="11288" data-channel="1f03355dfb41ec2861f351841f42ce8d" data-typeid="18">
					<div class="flex room-item-roal" data-channel="1f03355dfb41ec2861f351841f42ce8d" data-cid="11288">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200801/1844891596276558.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>♪王牌歌手♪寻找点点最强音</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="11288" data-channel="1f03355dfb41ec2861f351841f42ce8d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div></div>
					   </li><li data-type="order" class="hide">
							<div class="rooms"><div class="room-item" channel="74b47d4cc3b846388016f5b0ccf63647">
					<div class="flex room-item-name" data-cid="1405" data-channel="74b47d4cc3b846388016f5b0ccf63647" data-typeid="0">
					<div class="flex room-item-roal" data-channel="74b47d4cc3b846388016f5b0ccf63647" data-cid="1405">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200403/1436611585894376.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀官方点单厅❀</p>
						<p class="room-item-name-roomtitle">❥ 龙翼最美❥</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>32</font>）</div>
					<div data-cid="1405" data-channel="74b47d4cc3b846388016f5b0ccf63647" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="83dba1f1156d2127c2f27a7bb99dd27d">
					<div class="flex room-item-name" data-cid="6073" data-channel="83dba1f1156d2127c2f27a7bb99dd27d" data-typeid="0">
					<div class="flex room-item-roal" data-channel="83dba1f1156d2127c2f27a7bb99dd27d" data-cid="6073">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/1204731585208117.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀手游一元点单①厅❀</p>
						<p class="room-item-name-roomtitle">乃难 蓝难 满难 月难</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>19</font>）</div>
					<div data-cid="6073" data-channel="83dba1f1156d2127c2f27a7bb99dd27d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c857bf027249f8149808b4791c4de842">
					<div class="flex room-item-name" data-cid="8705" data-channel="c857bf027249f8149808b4791c4de842" data-typeid="0">
					<div class="flex room-item-roal" data-channel="c857bf027249f8149808b4791c4de842" data-cid="8705">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200707/1417891594112552.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀手游一元点单③厅❀</p>
						<p class="room-item-name-roomtitle">猪圈ovo招主持客服</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>10</font>）</div>
					<div data-cid="8705" data-channel="c857bf027249f8149808b4791c4de842" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="d7d69260740da004777f29ef65b90dc4">
					<div class="flex room-item-name" data-cid="2" data-channel="d7d69260740da004777f29ef65b90dc4" data-typeid="1">
					<div class="flex room-item-roal" data-channel="d7d69260740da004777f29ef65b90dc4" data-cid="2">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190422/1204281555903792.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ①</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>17</font>）</div>
					<div data-cid="2" data-channel="d7d69260740da004777f29ef65b90dc4" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="fcf03b6d3e8623fd19ed1bdb9a6e56e3">
					<div class="flex room-item-name" data-cid="3" data-channel="fcf03b6d3e8623fd19ed1bdb9a6e56e3" data-typeid="1">
					<div class="flex room-item-roal" data-channel="fcf03b6d3e8623fd19ed1bdb9a6e56e3" data-cid="3">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190615/5510731560583519.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ②</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>1</font>）</div>
					<div data-cid="3" data-channel="fcf03b6d3e8623fd19ed1bdb9a6e56e3" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="10680604128dcf107077df181efa2faa">
					<div class="flex room-item-name" data-cid="4" data-channel="10680604128dcf107077df181efa2faa" data-typeid="1">
					<div class="flex room-item-roal" data-channel="10680604128dcf107077df181efa2faa" data-cid="4">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190615/1534281560583525.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ③</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>1</font>）</div>
					<div data-cid="4" data-channel="10680604128dcf107077df181efa2faa" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="cdd5a2e229cf59e97e36a3f5c92f4106">
					<div class="flex room-item-name" data-cid="5" data-channel="cdd5a2e229cf59e97e36a3f5c92f4106" data-typeid="1">
					<div class="flex room-item-roal" data-channel="cdd5a2e229cf59e97e36a3f5c92f4106" data-cid="5">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190615/1479101560583531.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ④</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>2</font>）</div>
					<div data-cid="5" data-channel="cdd5a2e229cf59e97e36a3f5c92f4106" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="a7986db5bf27d7f1591db703e4b89d93">
					<div class="flex room-item-name" data-cid="6" data-channel="a7986db5bf27d7f1591db703e4b89d93" data-typeid="1">
					<div class="flex room-item-roal" data-channel="a7986db5bf27d7f1591db703e4b89d93" data-cid="6">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190615/1682391560583538.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ⑤</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="6" data-channel="a7986db5bf27d7f1591db703e4b89d93" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c5bd6f4356cfecbb6f8a09f34d92c673">
					<div class="flex room-item-name" data-cid="7" data-channel="c5bd6f4356cfecbb6f8a09f34d92c673" data-typeid="1">
					<div class="flex room-item-roal" data-channel="c5bd6f4356cfecbb6f8a09f34d92c673" data-cid="7">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190615/8583351560583543.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ⑥</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>2</font>）</div>
					<div data-cid="7" data-channel="c5bd6f4356cfecbb6f8a09f34d92c673" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="8c94972c7cc2ad9efbdbcbc23d82f139">
					<div class="flex room-item-name" data-cid="149" data-channel="8c94972c7cc2ad9efbdbcbc23d82f139" data-typeid="1">
					<div class="flex room-item-roal" data-channel="8c94972c7cc2ad9efbdbcbc23d82f139" data-cid="149">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190615/1512151560583549.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ⑦</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>9</font>）</div>
					<div data-cid="149" data-channel="8c94972c7cc2ad9efbdbcbc23d82f139" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="bc8545d4f6d6e1436b1f017041b6d97e">
					<div class="flex room-item-name" data-cid="150" data-channel="bc8545d4f6d6e1436b1f017041b6d97e" data-typeid="1">
					<div class="flex room-item-roal" data-channel="bc8545d4f6d6e1436b1f017041b6d97e" data-cid="150">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190615/9692541560583555.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ⑧</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="150" data-channel="bc8545d4f6d6e1436b1f017041b6d97e" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="8c14b695e4eb6b5c6abf80ee587046ae">
					<div class="flex room-item-name" data-cid="151" data-channel="8c14b695e4eb6b5c6abf80ee587046ae" data-typeid="1">
					<div class="flex room-item-roal" data-channel="8c14b695e4eb6b5c6abf80ee587046ae" data-cid="151">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190615/1465401560583568.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ⑨</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="151" data-channel="8c14b695e4eb6b5c6abf80ee587046ae" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="93d714ab31780cd65809a1ddfa8af973">
					<div class="flex room-item-name" data-cid="152" data-channel="93d714ab31780cd65809a1ddfa8af973" data-typeid="1">
					<div class="flex room-item-roal" data-channel="93d714ab31780cd65809a1ddfa8af973" data-cid="152">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20190615/4779561560583574.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>  ☀ 端游派单大厅 ☀ ⑩</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>1</font>）</div>
					<div data-cid="152" data-channel="93d714ab31780cd65809a1ddfa8af973" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="a54174e5241e03637108d184dc7f227b">
					<div class="flex room-item-name" data-cid="6102" data-channel="a54174e5241e03637108d184dc7f227b" data-typeid="1">
					<div class="flex room-item-roal" data-channel="a54174e5241e03637108d184dc7f227b" data-cid="6102">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/1150911585207523.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑪</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="6102" data-channel="a54174e5241e03637108d184dc7f227b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="63e7f764f448a0b64e0ce6bd8162cd71">
					<div class="flex room-item-name" data-cid="6103" data-channel="63e7f764f448a0b64e0ce6bd8162cd71" data-typeid="1">
					<div class="flex room-item-roal" data-channel="63e7f764f448a0b64e0ce6bd8162cd71" data-cid="6103">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/1850361585207580.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑫</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="6103" data-channel="63e7f764f448a0b64e0ce6bd8162cd71" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="aabe16b55773ca4f1e86e1c885cabf19">
					<div class="flex room-item-name" data-cid="6104" data-channel="aabe16b55773ca4f1e86e1c885cabf19" data-typeid="1">
					<div class="flex room-item-roal" data-channel="aabe16b55773ca4f1e86e1c885cabf19" data-cid="6104">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/1385361585207591.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑬</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>1</font>）</div>
					<div data-cid="6104" data-channel="aabe16b55773ca4f1e86e1c885cabf19" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="04e9f8225364a200c01671da92c62f6e">
					<div class="flex room-item-name" data-cid="6105" data-channel="04e9f8225364a200c01671da92c62f6e" data-typeid="1">
					<div class="flex room-item-roal" data-channel="04e9f8225364a200c01671da92c62f6e" data-cid="6105">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/6960451585207611.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑭</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="6105" data-channel="04e9f8225364a200c01671da92c62f6e" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="da9ad7291f3e96a1a96fe8f3e7650e6a">
					<div class="flex room-item-name" data-cid="6106" data-channel="da9ad7291f3e96a1a96fe8f3e7650e6a" data-typeid="1">
					<div class="flex room-item-roal" data-channel="da9ad7291f3e96a1a96fe8f3e7650e6a" data-cid="6106">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/1743351585207621.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑮</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>7</font>）</div>
					<div data-cid="6106" data-channel="da9ad7291f3e96a1a96fe8f3e7650e6a" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c7c370e403d28a9d08324acc04f34ca5">
					<div class="flex room-item-name" data-cid="6107" data-channel="c7c370e403d28a9d08324acc04f34ca5" data-typeid="1">
					<div class="flex room-item-roal" data-channel="c7c370e403d28a9d08324acc04f34ca5" data-cid="6107">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/7914101585212094.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑯</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="6107" data-channel="c7c370e403d28a9d08324acc04f34ca5" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="06047d6d411b36be0b5874ccffcb438b">
					<div class="flex room-item-name" data-cid="6108" data-channel="06047d6d411b36be0b5874ccffcb438b" data-typeid="1">
					<div class="flex room-item-roal" data-channel="06047d6d411b36be0b5874ccffcb438b" data-cid="6108">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/1381261585212102.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑰</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="6108" data-channel="06047d6d411b36be0b5874ccffcb438b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="fb8f5743e34c995347d15be4f581d04c">
					<div class="flex room-item-name" data-cid="6109" data-channel="fb8f5743e34c995347d15be4f581d04c" data-typeid="1">
					<div class="flex room-item-roal" data-channel="fb8f5743e34c995347d15be4f581d04c" data-cid="6109">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/1193501585212107.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑱</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="6109" data-channel="fb8f5743e34c995347d15be4f581d04c" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="87f766552a2d512d1bd79d41fb92b6b4">
					<div class="flex room-item-name" data-cid="6110" data-channel="87f766552a2d512d1bd79d41fb92b6b4" data-typeid="1">
					<div class="flex room-item-roal" data-channel="87f766552a2d512d1bd79d41fb92b6b4" data-cid="6110">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/1768641585212110.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑲</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>3</font>）</div>
					<div data-cid="6110" data-channel="87f766552a2d512d1bd79d41fb92b6b4" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="c2976cf470f17fe47c2181a113cde194">
					<div class="flex room-item-name" data-cid="6111" data-channel="c2976cf470f17fe47c2181a113cde194" data-typeid="1">
					<div class="flex room-item-roal" data-channel="c2976cf470f17fe47c2181a113cde194" data-cid="6111">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200326/6419381585212115.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ⑳</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="6111" data-channel="c2976cf470f17fe47c2181a113cde194" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="97243193830ca11d720165ec9b58b83f">
					<div class="flex room-item-name" data-cid="7118" data-channel="97243193830ca11d720165ec9b58b83f" data-typeid="10">
					<div class="flex room-item-roal" data-channel="97243193830ca11d720165ec9b58b83f" data-cid="7118">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200610/1374171591782298.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>点单厅测试05—加冕</p>
						<p class="room-item-name-roomtitle">啊啊啊</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="7118" data-channel="97243193830ca11d720165ec9b58b83f" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="b4a2b1040af3528d6a038bd2eedcad2a">
					<div class="flex room-item-name" data-cid="8951" data-channel="b4a2b1040af3528d6a038bd2eedcad2a" data-typeid="1">
					<div class="flex room-item-roal" data-channel="b4a2b1040af3528d6a038bd2eedcad2a" data-cid="8951">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200710/7837611594385165.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ㉑</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="8951" data-channel="b4a2b1040af3528d6a038bd2eedcad2a" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="a82cc15f898d0df0925144d991346e3b">
					<div class="flex room-item-name" data-cid="8952" data-channel="a82cc15f898d0df0925144d991346e3b" data-typeid="1">
					<div class="flex room-item-roal" data-channel="a82cc15f898d0df0925144d991346e3b" data-cid="8952">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200710/1462741594385249.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ㉒</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="8952" data-channel="a82cc15f898d0df0925144d991346e3b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="0cdaf34d32d0f18393115df560360c8b">
					<div class="flex room-item-name" data-cid="8953" data-channel="0cdaf34d32d0f18393115df560360c8b" data-typeid="1">
					<div class="flex room-item-roal" data-channel="0cdaf34d32d0f18393115df560360c8b" data-cid="8953">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200710/6640011594385309.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ㉓</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="8953" data-channel="0cdaf34d32d0f18393115df560360c8b" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="b1cccfe11884a5225b46dafe4105d7a6">
					<div class="flex room-item-name" data-cid="8954" data-channel="b1cccfe11884a5225b46dafe4105d7a6" data-typeid="1">
					<div class="flex room-item-roal" data-channel="b1cccfe11884a5225b46dafe4105d7a6" data-cid="8954">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200710/1509081594385376.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ㉔</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="8954" data-channel="b1cccfe11884a5225b46dafe4105d7a6" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="22af608c151c6ac5ba5d7ee7dbc54cc8">
					<div class="flex room-item-name" data-cid="8950" data-channel="22af608c151c6ac5ba5d7ee7dbc54cc8" data-typeid="1">
					<div class="flex room-item-roal" data-channel="22af608c151c6ac5ba5d7ee7dbc54cc8" data-cid="8950">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200710/2140101594384675.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>☀ 手游派单大厅 ☀ ㉕</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="8950" data-channel="22af608c151c6ac5ba5d7ee7dbc54cc8" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="8f33ae26b24f34d83261aa60d9e1881c">
					<div class="flex room-item-name" data-cid="3771" data-channel="8f33ae26b24f34d83261aa60d9e1881c" data-typeid="21">
					<div class="flex room-item-roal" data-channel="8f33ae26b24f34d83261aa60d9e1881c" data-cid="3771">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200520/1745981589982849.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>点点开黑520爱情盛典</p>
						<p class="room-item-name-roomtitle">有你是幸运，愿余生都幸运</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="3771" data-channel="8f33ae26b24f34d83261aa60d9e1881c" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						<div class="flex left-search-person" data-channel="8f33ae26b24f34d83261aa60d9e1881c" style="display: none;">
					<input type="text" placeholder="请输入用户名或ID">
				</div>
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="729e57a0718e383af09f79d96307ccba">
					<div class="flex room-item-name" data-cid="157" data-channel="729e57a0718e383af09f79d96307ccba" data-typeid="24">
					<div class="flex room-item-roal" data-channel="729e57a0718e383af09f79d96307ccba" data-cid="157">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20181213/1171331544698205.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>测试专用-手游1</p>
						<p class="room-item-name-roomtitle">我是药神</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>1</font>）</div>
					<div data-cid="157" data-channel="729e57a0718e383af09f79d96307ccba" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="8d24c3d235a7475513f8366161c45ae2">
					<div class="flex room-item-name" data-cid="7728" data-channel="8d24c3d235a7475513f8366161c45ae2" data-typeid="21">
					<div class="flex room-item-roal" data-channel="8d24c3d235a7475513f8366161c45ae2" data-cid="7728">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200521/1949611590058444.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>❀❀盛夏の好声音❀❀</p>
						<p class="room-item-name-roomtitle">谁能问鼎？尽在14日19:30</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="7728" data-channel="8d24c3d235a7475513f8366161c45ae2" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						<div class="flex left-search-person" data-channel="8d24c3d235a7475513f8366161c45ae2" style="display: none;">
					<input type="text" placeholder="请输入用户名或ID">
				</div>
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="d580442492d95080238ab6dac7a8ce6d">
					<div class="flex room-item-name" data-cid="3710" data-channel="d580442492d95080238ab6dac7a8ce6d" data-typeid="24">
					<div class="flex room-item-roal" data-channel="d580442492d95080238ab6dac7a8ce6d" data-cid="3710">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20191125/1264011574678444.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>测试自由模式-先锋</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>2</font>）</div>
					<div data-cid="3710" data-channel="d580442492d95080238ab6dac7a8ce6d" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="da686c39b94c4bbeadf3c62901ce885e">
					<div class="flex room-item-name" data-cid="8511" data-channel="da686c39b94c4bbeadf3c62901ce885e" data-typeid="24">
					<div class="flex room-item-roal" data-channel="da686c39b94c4bbeadf3c62901ce885e" data-cid="8511">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200601/1692211590994996.png">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>加冕活动测试</p>
						<p class="room-item-name-roomtitle"></p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="8511" data-channel="da686c39b94c4bbeadf3c62901ce885e" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="d9bdcd2d09407212ecaf536cb731d927">
					<div class="flex room-item-name" data-cid="1" data-channel="d9bdcd2d09407212ecaf536cb731d927" data-typeid="0">
					<div class="flex room-item-roal" data-channel="d9bdcd2d09407212ecaf536cb731d927" data-cid="1">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200114/7631631578972375.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>培训专用厅-LOL</p>
						<p class="room-item-name-roomtitle">喵喵喵</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="1" data-channel="d9bdcd2d09407212ecaf536cb731d927" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="ac3baeee467e96d7d25627ac1fe3cdeb">
					<div class="flex room-item-name" data-cid="2025" data-channel="ac3baeee467e96d7d25627ac1fe3cdeb" data-typeid="11">
					<div class="flex room-item-roal" data-channel="ac3baeee467e96d7d25627ac1fe3cdeb" data-cid="2025">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200331/1272881585649954.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>娱乐歌厅测试-娱乐</p>
						<p class="room-item-name-roomtitle">风里雨里，织梦等你</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="2025" data-channel="ac3baeee467e96d7d25627ac1fe3cdeb" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div><div class="room-item" channel="f8938b7115c317e6acc7a3948bd3818e">
					<div class="flex room-item-name" data-cid="6627" data-channel="f8938b7115c317e6acc7a3948bd3818e" data-typeid="23">
					<div class="flex room-item-roal" data-channel="f8938b7115c317e6acc7a3948bd3818e" data-cid="6627">
						<div class="flex room-item-zhuan-kuang">
							<img class="room-route" src="https://res.tuwan.com/templet/play/chat/images/sanjiaoicon.png?v=1">
						</div>
					</div>
					<div class="room-item-name-icon">
						<img src="https://img3.tuwandata.com/uploads/chatroom/20200414/1166071586861604.jpg">
					</div>
					<div class="room-item-name-info">
						<p class="room-item-name-roomname" style="color:"><span style="display:none" class="span-jian">荐</span>测试奖励发放02</p>
						<p class="room-item-name-roomtitle">哈哈哈“无则留空”是谁</p>
					</div>
					<div style="display:block" class="room-item-name-num">（<font>0</font>）</div>
					<div data-cid="6627" data-channel="f8938b7115c317e6acc7a3948bd3818e" style="display:none" class="room-item-attenticon"></div>
				</div>
					<div class="room-item-perons hide">
						<div class="flex left-search-person" data-channel="f8938b7115c317e6acc7a3948bd3818e" style="display: none;">
					<input type="text" placeholder="请输入用户名或ID">
				</div>
						<div class="person-area persons-anchor"></div>
						<div class="person-area persons-paidan"></div>
						<div class="person-area persons-boss"></div>
						<div class="person-area persons-teachers"></div>
						<div class="person-area persons-youke"></div>
					</div>
				</div></div>
					   </li></ul></div></div></div>
			<!-- 中间style -->
			<div class="flex chat-center" style="flex-direction: column;">
				<div class="flex chat-center-main">
					<div class="flex chat-center-left" style="position: relative; background: rgb(255, 255, 255);">
						<div class="jiamian-svga-bg" id="jiamianSvgaBg" style="display: none;"></div>

						<div class="inithide chatroom-guanzhu" style="display: none;">加关注</div>

						<div class="room-seats-all-room">
							<!-- <div class="channel_task_star"></div> -->
							<!-- 新重构 -->
							<div class="room-seats-content" style="position: relative;">
								<div id="newBannerSvga" style="width: 100%; height:100%; position: absolute;top: 0; left: 0; overflow: hidden;">
								</div>
								<div class="room-seats-main" style="background: url(&quot;https://img3.tuwandata.com/uploads/chatroom/20200805/5097181596592402.png&quot;) 0% 0% / cover no-repeat;"><div class="flex new-kaihei-content">
                    <div class="flex flex-dir-col flex-jc flex-ac">
                    <div>
                        <div class="seat-item-empty seat-item speaking" style="width:271px;height:150px;" data-uid="3328661" data-color="#666" data-aposition="2" data-nickname="婷婷好了" data-level="1">
                    <div class="seat-head" style="width:120px; height:120px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar3.tuwan.com/data/avatar/003/32/86/61_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:block">主持</span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close"></div>
                    </div>
                    <p class="seat-user-name haveuser">婷婷好了</p>
                    
                </div>
                    </div>
                    <div class="flex" style="margin-top:10px">
                        <div class="seat-item-empty seat-item" style="width:82px;height:102px;" data-uid="0" data-color="#666" data-aposition="3" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:64px; height:64px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://res.tuwan.com/templet/play/chat/v2/images/empty.png">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:block">嘉宾</span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:block">1</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name">虚位以待</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:82px;height:102px;" data-uid="3088839" data-color="#ff6699" data-aposition="4" data-nickname="紧不紧了" data-level="1">
                    <div class="seat-head" style="width:64px; height:64px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar.tuwan.com/data/avatar/003/08/88/39_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:block">嘉宾</span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:block">2</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close"></div>
                    </div>
                    <p class="seat-user-name haveuser">紧不紧了</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:82px;height:102px;" data-uid="3224595" data-color="#ff6699" data-aposition="5" data-nickname="落霓懵了" data-level="1">
                    <div class="seat-head" style="width:64px; height:64px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar3.tuwan.com/data/avatar/003/22/45/95_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:block">嘉宾</span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:block">3</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close"></div>
                    </div>
                    <p class="seat-user-name haveuser">落霓懵了</p>
                    
                </div>
                    </div>
                </div>
                    <div class="flex flex-1 flex-dir-col flex-jc new-kaihei-teams"><div class="flex flex-1 flex-ac kaihei-team-item" data-fid="451" data-carchannel="undefined" data-carkey="undefined" data-cartoken="undefined">
                    <div class="new-team-name" style="color:#c2a4ff">★自由组队★</div>
                    <div class="flex" style="align-items:center">
                        <div class="seat-item-empty seat-item " style="width:120px;height:124px;" data-uid="3326670" data-color="#ff6699" data-tposition="1" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:92px; height:92px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar.tuwan.com/data/avatar/003/32/66/70_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:block">队长</span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">莎莎傻了</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="3327755" data-color="#ff6699" data-tposition="2" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar.tuwan.com/data/avatar/003/32/77/55_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">白笙菜了</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="3152706" data-color="#ff6699" data-tposition="3" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar1.tuwan.com/data/avatar/003/15/27/06_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">豆仔没了</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="3257061" data-color="#2b6cfe" data-tposition="4" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar2.tuwan.com/data/avatar/003/25/70/61_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">渡劫过了</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="2210844" data-color="#666" data-tposition="5" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head car">
                            <img class="seat-head-img" src="https://ucavatar2.tuwan.com/data/avatar/002/21/08/44_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">疾风废了</p>
                    
                </div>
                    </div>
                    <div class="flex-1 new-xuanyan" style="color:#c2a4ff">
                        <div>队长宣言：</div>
                        <div class="new-xuanyan-edit new-xuanyan-edit-0"><span>点击这里可以填写队长宣言哦~</span><em class="editicon-0"></em></div>
                    </div>
                </div><div class="flex flex-1 flex-ac kaihei-team-item" data-fid="453" data-carchannel="undefined" data-carkey="undefined" data-cartoken="undefined">
                    <div class="new-team-name" style="color:#becfff">★自由组队★</div>
                    <div class="flex" style="align-items:center">
                        <div class="seat-item-empty seat-item " style="width:120px;height:124px;" data-uid="2863565" data-color="#ffe14c" data-tposition="1" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:92px; height:92px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar2.tuwan.com/data/avatar/002/86/35/65_avatar_middle.jpg?random=1597162027">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:block">队长</span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">女王嘟了</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="3079204" data-color="#ffe14c" data-tposition="2" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar.tuwan.com/data/avatar/003/07/92/04_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">畅畅行了</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="2950721" data-color="#ffe14c" data-tposition="3" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar.tuwan.com/data/avatar/002/95/07/21_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">猫子跪了</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="3336542" data-color="#ffe14c" data-tposition="4" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar3.tuwan.com/data/avatar/003/33/65/42_avatar_middle.jpg?random=1597129744">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">园长困了</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="0" data-color="#666" data-tposition="5" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head car">
                            <img class="seat-head-img" src="https://res.tuwan.com/templet/play/chat/v2/images/empty.png">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name">点击上车</p>
                    
                </div>
                    </div>
                    <div class="flex-1 new-xuanyan" style="color:#becfff">
                        <div>队长宣言：</div>
                        <div class="new-xuanyan-edit new-xuanyan-edit-1"><span>点击这里可以填写队长宣言哦~</span><em class="editicon-1"></em></div>
                    </div>
                </div><div class="flex flex-1 flex-ac kaihei-team-item" data-fid="454" data-carchannel="undefined" data-carkey="undefined" data-cartoken="undefined">
                    <div class="new-team-name" style="color:#ffc6cb">★自由组队★</div>
                    <div class="flex" style="align-items:center">
                        <div class="seat-item-empty seat-item " style="width:120px;height:124px;" data-uid="3339938" data-color="#666" data-tposition="1" data-nickname="小洁语了" data-level="1">
                    <div class="seat-head" style="width:92px; height:92px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar3.tuwan.com/data/avatar/003/33/99/38_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:block">队长</span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">小洁语了</p>
                    
                </div><div class="seat-item-empty seat-item" style="width:106px;height:110px;" data-uid="0" data-color="#666" data-tposition="2" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://res.tuwan.com/templet/play/chat/v2/images/empty.png">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name">点击上车</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="3288136" data-color="#666" data-tposition="3" data-nickname="招女友ღ打单养你" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar2.tuwan.com/data/avatar/003/28/81/36_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">招女友ღ打单养你</p>
                    
                </div><div class="seat-item-empty seat-item " style="width:106px;height:110px;" data-uid="3165672" data-color="#666" data-tposition="4" data-nickname="日日日了૭" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head add">
                            <img class="seat-head-img" src="https://ucavatar3.tuwan.com/data/avatar/003/16/56/72_avatar_middle.jpg?random=20200811">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name haveuser">日日日了૭</p>
                    
                </div><div class="seat-item-empty seat-item" style="width:106px;height:110px;" data-uid="0" data-color="#666" data-tposition="5" data-nickname="" data-level="1">
                    <div class="seat-head" style="width:76px; height:76px">
                    <!-- 背光 -->
                            
                    <!-- 声纹 -->
                        <div class="seat-wave"></div>
                        <div class="seat-svga" svgapath=""></div>                        
                        <!-- 头像 -->
                        <div class="seat-user-head car">
                            <img class="seat-head-img" src="https://res.tuwan.com/templet/play/chat/v2/images/empty.png">
                        </div>
                        <!-- 老板牌子 -->
                        
                        <!-- 角色 -->
                        <span class="seat-role-tag" style="display:none"></span>
                        <!-- 序号 -->
                        <div class="seat-number" style="display:none">0</div>
                        <!-- 声优厅魅力值 -->
                        
                        <!-- 关闭 -->                        
                        <div class="seat-close" style="display: none;"></div>
                    </div>
                    <p class="seat-user-name">点击上车</p>
                    
                </div>
                    </div>
                    <div class="flex-1 new-xuanyan" style="color:#ffc6cb">
                        <div>队长宣言：</div>
                        <div class="new-xuanyan-edit new-xuanyan-edit-2"><span>点击这里可以填写队长宣言哦~</span><em class="editicon-2"></em></div>
                    </div>
                </div></div>
                </div></div>
							</div>


						</div>


						<!-- 聊天窗口 -->

						<div class="flex chat-center-window">

							<div id="chatNewmessage" class="chat-center-newmessage" style="display: none;">有新消息</div>





							<div class="channel-queuelist common-queuelist" data-type="" style="display: none;">
								<div class="channel-queuelist-title">点单排队列表</div>
								<ul class="channel-queuelist-content scroll"></ul>
								<div class="channel-selfqueue-content"></div>
							</div>

							<div class="chat-center-window-main">
								<div class="flex chat-center-message"><div class="chatroom-gonggao"></div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/0.png">
                    </span>
                            
                            <span style="position:relative;" account="3328661" class="chat-message-in-nickname "><font style="color:#666">婷婷好了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="婷婷好了" data-uid="3328661" class="chat-center-talktext " style="">
                            💕❥.欢迎各位小宝贝来到CSGOGO仙女厅<br><br>»&gt;💕❤我是婷婷 温柔甜美 只属于你✿(๑❛ᴗ❛๑)۶<br><br>»&gt;💕❤人间不值得，我值得，欢迎回家~
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            = =我怀疑是嘟嘟上的园长的号
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">陪玩</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/6.gif">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20200103/20200103_1578035134_85113.gif">
                        </span>
                            
                            <span style="position:relative;" account="2260308" class="chat-message-in-nickname "><font style="color:#ff6699">柔弱的角♚粒粒吃了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="柔弱的角♚粒粒吃了" data-uid="2260308" class="chat-center-talktext " style="">
                            我也去睡了
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            赌一毛
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/0.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg">
                        </span>
                            
                            <span style="position:relative;" account="3334227" class="chat-message-in-nickname "><font style="color:#666">嘟嘟的小嘴</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="嘟嘟的小嘴" data-uid="3334227" class="chat-center-talktext " style="">
                            ?
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            我堵一毛
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/1.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg">
                        </span>
                            
                            <span style="position:relative;" account="3336542" class="chat-message-in-nickname ygb_title"><font style="color:">园长困了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="园长困了" data-uid="3336542" class="chat-center-talktext " style="">
                            嘟嘟在打游戏
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/0.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg">
                        </span>
                            
                            <span style="position:relative;" account="3334227" class="chat-message-in-nickname "><font style="color:#666">嘟嘟的小嘴</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="嘟嘟的小嘴" data-uid="3334227" class="chat-center-talktext " style="">
                            晚安
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            ==
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            她在跟谁打
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/1.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg">
                        </span>
                            
                            <span style="position:relative;" account="3336542" class="chat-message-in-nickname ygb_title"><font style="color:">园长困了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="园长困了" data-uid="3336542" class="chat-center-talktext " style="">
                            布吉岛 俺今天玩的想吐
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            狗女人 一边跟我打电话一边打
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            = =
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            你辛苦啦哈哈哈
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            溜了
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190327/20190327_1553666110_16842.jpg">
                        </span>
                            
                            <span style="position:relative;" account="2950721" class="chat-message-in-nickname ygb_title"><font style="color:">心有所属<img style="width:24px;height:24px;margin-top:-7px" src="https://res.tuwan.com/templet/play/fanli4/yueguan.gif?v=1">猫子跪了</font><img style="position:absolute;right:-40px; bottom:0; width:40px;" src="https://img3.tuwandata.com/uploads/repayment/20191127/20191127_1574817602_10267.gif"></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="心有所属♔猫子跪了" data-uid="2950721" class="chat-center-talktext " style="">
                            跐溜~
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/1.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg">
                        </span>
                            
                            <span style="position:relative;" account="3336542" class="chat-message-in-nickname ygb_title"><font style="color:">园长困了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="园长困了" data-uid="3336542" class="chat-center-talktext " style="">
                            是真的有点要呕
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/0.png">
                    </span>
                            
                            <span style="position:relative;" account="3328661" class="chat-message-in-nickname "><font style="color:#666">婷婷好了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="婷婷好了" data-uid="3328661" class="chat-center-talktext " style="">
                            💕❥.欢迎各位小宝贝来到CSGOGO仙女厅<br><br>»&gt;💕❤我是婷婷 温柔甜美 只属于你✿(๑❛ᴗ❛๑)۶<br><br>»&gt;💕❤人间不值得，我值得，欢迎回家~
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/0.png">
                    </span>
                            
                            <span style="position:relative;" account="3328661" class="chat-message-in-nickname "><font style="color:#666">婷婷好了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="婷婷好了" data-uid="3328661" class="chat-center-talktext " style="">
                            💕❥.欢迎各位小宝贝来到CSGOGO仙女厅<br><br>»&gt;💕❤我是婷婷 温柔甜美 只属于你✿(๑❛ᴗ❛๑)۶<br><br>»&gt;💕❤人间不值得，我值得，欢迎回家~
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/0.png">
                    </span>
                            
                            <span style="position:relative;" account="3328661" class="chat-message-in-nickname "><font style="color:#666">婷婷好了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="婷婷好了" data-uid="3328661" class="chat-center-talktext " style="">
                            💕❥.欢迎各位小宝贝来到CSGOGO仙女厅<br><br>»&gt;💕❤我是婷婷 温柔甜美 只属于你✿(๑❛ᴗ❛๑)۶<br><br>»&gt;💕❤人间不值得，我值得，欢迎回家~
                        </div>
                    </div><div class="flex getredbag-message" style="margin:10px 0;">
										<div account="816012501" class="flex welcome-get-message">欢迎<span>游客816012501</span>进入房间</div>
									</div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/1.png">
                    </span>
                            
                            <span style="position:relative;" account="2316705" class="chat-message-in-nickname "><font style="color:#209948">远 玥</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="远 玥" data-uid="2316705" class="chat-center-talktext " style="" id="sessionid_2316705_1597166722126_33c3a200">
                            上面没有一个能开麦的？
                        </div>
                    </div><div class="flex getredbag-message" style="margin:10px 0;">
										<div account="3249944" class="flex welcome-get-message">欢迎&nbsp;<img class="iconvip" src="https://res.tuwan.com/templet/play/images/app/2.png">&nbsp;<span>喵喵淦了</span>进入房间</div>
									</div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/1.png">
                    </span>
                            
                            <span style="position:relative;" account="2316705" class="chat-message-in-nickname "><font style="color:#209948">远 玥</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="远 玥" data-uid="2316705" class="chat-center-talktext " style="" id="sessionid_2316705_1597166742802_4f0f171c">
                            天天哈勒把
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/0.png">
                    </span>
                            
                            <span style="position:relative;" account="3328661" class="chat-message-in-nickname "><font style="color:#666">婷婷好了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="婷婷好了" data-uid="3328661" class="chat-center-talktext " style="" id="sessionid_3328661_1597166745_be4d8a7e">
                            💕❥.欢迎各位小宝贝来到CSGOGO仙女厅<br><br>»&gt;💕❤我是婷婷 温柔甜美 只属于你✿(๑❛ᴗ❛๑)۶<br><br>»&gt;💕❤人间不值得，我值得，欢迎回家~
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/1.png">
                    </span>
                            
                            <span style="position:relative;" account="2316705" class="chat-message-in-nickname "><font style="color:#209948">远 玥</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="远 玥" data-uid="2316705" class="chat-center-talktext " style="" id="sessionid_2316705_1597166760045_187a1788">
                            对
                        </div>
                    </div><div class="flex getredbag-message" style="margin:10px 0;">
										<div account="2518204" class="flex welcome-get-message">欢迎&nbsp;<img class="iconvip" src="https://res.tuwan.com/templet/play/images/app/3.png">&nbsp;<span>偏爱小鱼宝ഒ</span>进入房间</div>
									</div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">队长</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
                        </span>
                            
                            <span style="position:relative;" account="3249944" class="chat-message-in-nickname "><font style="color:#ff9402">喵喵淦了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="喵喵淦了" data-uid="3249944" class="chat-center-talktext " style="" id="sessionid_3249944_1597166768271_514880">
                            <img style="width:24px;" class="emoji" src="https://res.tuwan.com/templet/play/chat/images/emoji/emoji3@2x.png">
                        </div>
                    </div><div class="flex getredbag-message" style="margin:10px 0;">
										<div account="1782515" class="flex welcome-get-message">欢迎&nbsp;<img class="iconvip" src="https://res.tuwan.com/templet/play/images/app/8.gif">&nbsp;<span>爱鱼宝真是太好了</span>进入房间</div>
									</div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">队长</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
                        </span>
                            
                            <span style="position:relative;" account="3249944" class="chat-message-in-nickname "><font style="color:#ff9402">喵喵淦了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="喵喵淦了" data-uid="3249944" class="chat-center-talktext " style="" id="sessionid_3249944_1597166781796_912896">
                            <img style="width:24px;" class="emoji" src="https://res.tuwan.com/templet/play/chat/images/emoji/emoji3@2x.png">
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/0.png">
                    </span>
                            
                            <span style="position:relative;" account="3328661" class="chat-message-in-nickname "><font style="color:#666">婷婷好了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="婷婷好了" data-uid="3328661" class="chat-center-talktext " style="" id="sessionid_3328661_1597166783_fd88485b">
                            💕❥.欢迎各位小宝贝来到CSGOGO仙女厅<br><br>»&gt;💕❤我是婷婷 温柔甜美 只属于你✿(๑❛ᴗ❛๑)۶<br><br>»&gt;💕❤人间不值得，我值得，欢迎回家~
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">队长</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
                        </span>
                            
                            <span style="position:relative;" account="3249944" class="chat-message-in-nickname "><font style="color:#ff9402">喵喵淦了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="喵喵淦了" data-uid="3249944" class="chat-center-talktext " style="" id="sessionid_3249944_1597166794377_707453">
                            没啥事的
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/8.gif">
                    </span>
                            
                            <span style="position:relative;" account="1782515" class="chat-message-in-nickname "><font style="color:#ff9402">爱鱼宝真是太好了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="爱鱼宝真是太好了" data-uid="1782515" class="chat-center-talktext " style="" id="sessionid_1782515_1597166748330_fe699f1b">
                            这是阿宇的？
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">队长</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
                        </span>
                            
                            <span style="position:relative;" account="3249944" class="chat-message-in-nickname "><font style="color:#ff9402">喵喵淦了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="喵喵淦了" data-uid="3249944" class="chat-center-talktext " style="" id="sessionid_3249944_1597166811190_219178">
                            不用
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">队长</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
                        </span>
                            
                            <span style="position:relative;" account="3249944" class="chat-message-in-nickname "><font style="color:#ff9402">喵喵淦了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="喵喵淦了" data-uid="3249944" class="chat-center-talktext " style="" id="sessionid_3249944_1597166837676_700038">
                            有老板在吗
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">队长</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
                        </span>
                            
                            <span style="position:relative;" account="3249944" class="chat-message-in-nickname "><font style="color:#ff9402">喵喵淦了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="喵喵淦了" data-uid="3249944" class="chat-center-talktext " style="">
                            <div class="flex chat-gift-main">
                                <div class="chat-gift-content chat-gift-content-fen">                                    
                                    <span style="color: #f4205b">喵喵淦了</span>送给<span style="color: #f4205b">远 玥 </span>么么哒<span style="color: #f4205b">x</span><span style="color: #f4205b">1</span>
                                </div>
                            </div>
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            
                    <span class="chatroom-tag">
                        <img class="img-laoban-icon" src="https://res.tuwan.com/templet/play/chat/images/laobanicon.png">
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/1.png">
                    </span>
                            
                            <span style="position:relative;" account="2316705" class="chat-message-in-nickname "><font style="color:#209948">远 玥</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="远 玥" data-uid="2316705" class="chat-center-talktext " style="">
                            <div class="flex chat-gift-main">
                                <div class="chat-gift-content chat-gift-content-fen">                                    
                                    <span style="color: #f4205b">远 玥</span>送给<span style="color: #f4205b">喵喵淦了 </span>么么哒<span style="color: #f4205b">x</span><span style="color: #f4205b">1</span>
                                </div>
                            </div>
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">队长</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
                        </span>
                            
                            <span style="position:relative;" account="3249944" class="chat-message-in-nickname "><font style="color:#ff9402">喵喵淦了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="喵喵淦了" data-uid="3249944" class="chat-center-talktext " style="" id="sessionid_3249944_1597166872682_923278">
                            哈哈
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">队长</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span><span class="chatroom-tag">
                            <img style="height:18px;" src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
                        </span>
                            
                            <span style="position:relative;" account="3249944" class="chat-message-in-nickname "><font style="color:#ff9402">喵喵淦了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="喵喵淦了" data-uid="3249944" class="chat-center-talktext " style="" id="sessionid_3249944_1597166909063_126949">
                            小四呢
                        </div>
                    </div><div class="flex getredbag-message" style="margin:10px 0;">
										<div account="816579931" class="flex welcome-get-message">欢迎<span>游客816579931</span>进入房间</div>
									</div><div class="flex getredbag-message" style="margin:10px 0;">
										<div account="3309274" class="flex welcome-get-message">欢迎&nbsp;<img class="iconvip" src="https://res.tuwan.com/templet/play/images/app/2.png">&nbsp;<span>莎莎の光♚༺๑辄胤๑༻</span>进入房间</div>
									</div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">陪玩</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span>
                            
                            <span style="position:relative;" account="3309274" class="chat-message-in-nickname "><font style="color:#ff6699">莎莎の光♚༺๑辄胤๑༻</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="莎莎の光♚༺๑辄胤๑༻" data-uid="3309274" class="chat-center-talktext " style="" id="sessionid_3309274_1597166972255_d80b4b33">
                            怎么不来和叔叔唠嗑呢
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">陪玩</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span>
                            
                            <span style="position:relative;" account="3309274" class="chat-message-in-nickname "><font style="color:#ff6699">莎莎の光♚༺๑辄胤๑༻</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="莎莎の光♚༺๑辄胤๑༻" data-uid="3309274" class="chat-center-talktext " style="" id="sessionid_3309274_1597166981356_9228b146">
                            是啊
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">陪玩</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span>
                            
                            <span style="position:relative;" account="3309274" class="chat-message-in-nickname "><font style="color:#ff6699">莎莎の光♚༺๑辄胤๑༻</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="莎莎の光♚༺๑辄胤๑༻" data-uid="3309274" class="chat-center-talktext " style="" id="sessionid_3309274_1597166984468_470ba8ed">
                            现在就是他啊
                        </div>
                    </div><div class="flex getredbag-message" style="margin:10px 0;">
										<div account="3309274" class="flex welcome-get-message">欢迎&nbsp;<img class="iconvip" src="https://res.tuwan.com/templet/play/images/app/2.png">&nbsp;<span>莎莎の光♚༺๑辄胤๑༻</span>进入房间</div>
									</div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">主持</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/0.png">
                    </span>
                            
                            <span style="position:relative;" account="3328661" class="chat-message-in-nickname "><font style="color:#666">婷婷好了</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="婷婷好了" data-uid="3328661" class="chat-center-talktext " style="" id="sessionid_3328661_1597167124_b9f3ec63">
                            💕❥.欢迎各位小宝贝来到CSGOGO仙女厅<br><br>»&gt;💕❤我是婷婷 温柔甜美 只属于你✿(๑❛ᴗ❛๑)۶<br><br>»&gt;💕❤人间不值得，我值得，欢迎回家~
                        </div>
                    </div><div class="flex getredbag-message" style="margin:10px 0;">
										<div account="2316705" class="flex welcome-get-message">欢迎&nbsp;<img class="iconvip" src="https://res.tuwan.com/templet/play/images/app/1.png">&nbsp;<span>远 玥</span>进入房间</div>
									</div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">陪玩</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span>
                            
                            <span style="position:relative;" account="3309274" class="chat-message-in-nickname "><font style="color:#ff6699">莎莎の光♚༺๑辄胤๑༻</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="莎莎の光♚༺๑辄胤๑༻" data-uid="3309274" class="chat-center-talktext " style="" id="sessionid_3309274_1597167147789_42dee75e">
                            ...
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">陪玩</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span>
                            
                            <span style="position:relative;" account="3309274" class="chat-message-in-nickname "><font style="color:#ff6699">莎莎の光♚༺๑辄胤๑༻</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="莎莎の光♚༺๑辄胤๑༻" data-uid="3309274" class="chat-center-talktext " style="" id="sessionid_3309274_1597167152113_6fc29596">
                            你怎么就跑过来了
                        </div>
                    </div><div class="chat-text-content">
                        <div style="display:flex; align-items:center;">
                            <span class="chatroom-tag">
                        <i class="chat-room-peiwan-tag">陪玩</i>
                    </span>
                    
                    <span class="chatroom-tag">
                        <img style="height:18px;" src="https://res.tuwan.com/templet/play/images/app/2.png">
                    </span>
                            
                            <span style="position:relative;" account="3309274" class="chat-message-in-nickname "><font style="color:#ff6699">莎莎の光♚༺๑辄胤๑༻</font></span>                            
                            <span class="chat-center-time"></span>
                        </div>
                        <div data-nickname="莎莎の光♚༺๑辄胤๑༻" data-uid="3309274" class="chat-center-talktext " style="" id="sessionid_3309274_1597167159265_203914c6">
                            告辞告辞
                        </div>
                    </div><div class="flex getredbag-message" style="margin:10px 0;">
										<div account="2316705" class="flex welcome-get-message">欢迎&nbsp;<img class="iconvip" src="https://res.tuwan.com/templet/play/images/app/1.png">&nbsp;<span>远 玥</span>进入房间</div>
									</div></div>

							</div>
							<!-- dddddddddddddddddddddddd -->

							<div class="flex room-buttons">
								<div class="opbutton" data-num="1" data-type=""></div>
								<div class="opbutton" data-num="2" data-type=""></div>
								<div class="opbutton" data-num="3" data-type=""></div>
							</div>
							
							<!-- <div class="chat-diandan">

								<div class="inithide btns-op diandanroom-btns">
									<span class="chat-shangmai-btn">上麦</span>
									<span class="chat-diandan-btn">点单</span>
									<span class="chat-paidan-btn">派单</span>
								</div>
								<div class="inithide btns-op paidanroom-btns">
									<span class="chat-diandan-complete" style="display:none;">完成派单</span>
									<span class="chat-diandan-shiyin" style="display:none;" status="0">试音</span>
								</div>
								<div class="inithide btns-op carteamroom-btns">
									<span class="chat-shangche-btn">开车</span>
								</div>

								<div class="inithide btns-op ktvroom-btns">
									<span class="chat-diandan-shangkeng" status="0">试音</span>
								</div>

								<div class="inithide btns-op chat-diandan-btn-music" status="0">
									<span class="chat-diandan-btn-music-text">点歌</span>
									<div class="chat-diandan-list ktv-diandan-list">
										<p class="chat-diange-currlist-text ktv-diandan-list-text">当前排队点歌</p>
										<div class="chat-diandan-list-content ktv-diandan-list-content">
											<ul class="flex" style="flex-direction: column;"></ul>
										</div>
										<div class="chat-center-myneeddiandan ktv-diandan-myneeddiandan">我要点歌</div>
									</div>
								</div>

								<div class="inithide btns-op chat-fm-btns">
									<span class="fm-shangmai">上麦</span>
									<span class="inithide fm-self-kaibo" style="display: none;">开播</span>
									<div class="chat-diandan-list fm-diandan-list">
										<p class="chat-diange-currlist-text fm-diandan-list-text">当前排队列表</p>
										<div class="chat-diandan-list-content fm-diandan-list-content">
											<ul class="flex" style="flex-direction: column;">

											</ul>
										</div>
										<div class="chat-center-myneeddiandan fm-diandan-myneeddiandan">取消排队</div>
									</div>
								</div>
							</div> -->
							

							<div class="boss-comein-chat" id="bossComein">
							</div>
							<div class="boss-comein-chat-new" id="bossComeinNew">

							</div>

							<div class="flex yaoqing-float" style="z-index: 9">
								<p class="yaoqing-title"> 邀请队友</p>
								<p class="yaoqing-tips">快去邀请好友来一起玩游戏吧~</p>
								<div class="flex">
									<div class="yaoqing-item qqshare">
										<img src="https://res.tuwan.com/templet/play/chat/auto/images/qqicon.png?v=1">
										<p>QQ分享</p>
									</div>
									<div class="yaoqing-item qqquanshare">
										<img src="https://res.tuwan.com/templet/play/chat/auto/images/qqkongjianicon.png?v=1">
										<p>QQ空间</p>
									</div>
									<div class="yaoqing-item weiboshare">
										<img src="https://res.tuwan.com/templet/play/chat/auto/images/weibo.png">
										<p>微博</p>
									</div>
								</div>
								<div class="yaoqing-close"></div>
							</div>
							


						</div>
						<div class="inithide chatroom-redjilu" style="display: none;">查看红包记录</div>
						<!-- 红包记录2 -->
						<div class="inithide mask-content redpacket-jilu-content" style="display: none;">
							<h4>红包领取记录</h4>
							<div class="redpacket-jilu-list scroll">
								<ul>

								</ul>
							</div>
							<span class="mask-close" onclick="document.querySelector('.redpacket-jilu-content').style.display='none'"></span>
							<span class="redpacket-jilu-resfest">刷新</span>
						</div>
					
				<div class="baoboxmessage-main" style="transform: matrix3d(1, 0, 0, 0, 0, 0.634846, -0.772639, 0, 0, 0.772639, 0.634846, 0, 0, -36.5154, -77.2639, 1);"><div class="baoboxmessage-content">
					<div class="baoboxmessage-head">
						<img src="https://ucavatar2.tuwan.com/data/avatar/001/50/95/81_avatar_middle.jpg?random=20200812">
					</div>
					<div class="baoboxmessage-info">
						<p class="baoboxmessage-openuser-info">
							<span><img src="https://res.tuwan.com/templet/play/images/app/7.gif"></span>
							<span><img src="https://img3.tuwandata.com/uploads/repayment/20190227/20190227_1551232796_46506.jpg"></span>
							<span>别唱歌了♔偏爱雨夜ഒ</span>
						</p>
						<p>
							<font>赠送</font> 小酒窝鹿鹿 <font>银宝箱x10</font>获得
						</p>
						<p class="baoboxmessage-roomname">
							♡LOL战争女神厅♡
						</p>
					</div>
					<div class="baoboxmessage-gift">
						<img src="https://img3.tuwandata.com/uploads/play/1247351552549343.png"><font style="color:#fff;font-size:18px;margin-left:10px;">x1</font>
					</div>
				</div></div>
			</div>
					<div class="chat-center-right" style="height: 422px;">
						<div class="inithide right_chatroom_guanming" title="仙女厅招主持队长欢迎入职" style="display: block;">仙女厅招主持队长欢迎入职</div>

						<!-- 新的右侧组件用 -->
						<div class="right">
							<div class="inithide rightsearch" style="padding:10px 20px 0 20px;display:none">
								<div class="flex chat-right-search">
									<input id="inputSearchKeywords1" type="text" placeholder="请输入导师昵称">
									<span style="cursor: pointer;" id="btnSearchTeacher1"></span>
								</div>
							</div>
							<div class="right-main">
								<div class="right-tabs">
									<ul><li class="current" data-type="3">贡献榜</li><li class="" data-type="2">魅力榜</li><li class="" data-type="4">车队</li><li class="" data-type="1">告白墙</li></ul>
									<span class="refsh" style="display: none;">换一批</span>
								</div>
								<div class="right-info-content">
									<ul class="scroll"><li style="display:block" data-type="3"><div class="right-paihang-item carpai carpai1" data-uid="2301956" data-info="{&quot;uid&quot;:2301956,&quot;nickname&quot;:&quot;昊哥哥的公主殿下&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/7.gif&quot;,&quot;score&quot;:&quot;43220&quot;,&quot;avatar&quot;:&quot;https://ucavatar.tuwan.com/data/avatar/002/30/19/56_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190110/20190110_1547090786_44230.jpg&quot;}">
							 <div class="car-qs-div">
							<img class="carqiansan-header" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'" src="https://ucavatar.tuwan.com/data/avatar/002/30/19/56_avatar_middle.jpg?random=20200812">
							<div class="car-qs-guan car-qs-guan-1"></div>
						</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>昊哥哥的公主殿下</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/7.gif">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190110/20190110_1547090786_44230.jpg">
								</div>
							</div>
							<div class="flex" style="color: #666; align-items:center;">43220&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item carpai carpai2" data-uid="3343791" data-info="{&quot;uid&quot;:3343791,&quot;nickname&quot;:&quot;JJ盖世英雄&quot;,&quot;sex&quot;:0,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/1.png&quot;,&quot;score&quot;:&quot;21729&quot;,&quot;avatar&quot;:&quot;https://ucavatar1.tuwan.com/data/avatar/003/34/37/91_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg&quot;}">
							 <div class="car-qs-div">
							<img class="carqiansan-header" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'" src="https://ucavatar1.tuwan.com/data/avatar/003/34/37/91_avatar_middle.jpg?random=20200812">
							<div class="car-qs-guan car-qs-guan-2"></div>
						</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>JJ盖世英雄</p>
									<span class="sex-girl">♀</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/1.png">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg">
								</div>
							</div>
							<div class="flex" style="color: #666; align-items:center;">21729&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item carpai carpai3" data-uid="2181595" data-info="{&quot;uid&quot;:2181595,&quot;nickname&quot;:&quot;阿宇吵了&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/8.gif&quot;,&quot;score&quot;:&quot;15436&quot;,&quot;avatar&quot;:&quot;https://ucavatar2.tuwan.com/data/avatar/002/18/15/95_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190121/20190121_1548074646_60323.jpg&quot;}">
							 <div class="car-qs-div">
							<img class="carqiansan-header" onerror="this.src='https://uc.tuwan.com/images/noavatar_1.jpg'" src="https://ucavatar2.tuwan.com/data/avatar/002/18/15/95_avatar_middle.jpg?random=20200812">
							<div class="car-qs-guan car-qs-guan-3"></div>
						</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>阿宇吵了</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/8.gif">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190121/20190121_1548074646_60323.jpg">
								</div>
							</div>
							<div class="flex" style="color: #666; align-items:center;">15436&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3336542" data-info="{&quot;uid&quot;:3336542,&quot;nickname&quot;:&quot;园长困了&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/1.png&quot;,&quot;score&quot;:&quot;8750&quot;,&quot;avatar&quot;:&quot;https://ucavatar3.tuwan.com/data/avatar/003/33/65/42_avatar_middle.jpg?random=1597129744&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg&quot;}">
							 <div class="car-qs-paimingnum">4</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>园长困了</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/1.png">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">8750&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="1844103" data-info="{&quot;uid&quot;:1844103,&quot;nickname&quot;:&quot;绝地仙女厅客服&quot;,&quot;sex&quot;:2,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/7.gif&quot;,&quot;score&quot;:&quot;8209&quot;,&quot;avatar&quot;:&quot;https://ucavatar3.tuwan.com/data/avatar/001/84/41/03_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190729/20190729_1564395734_47535.gif&quot;}">
							 <div class="car-qs-paimingnum">5</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>绝地仙女厅客服</p>
									<span class="sex-girl">♀</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/7.gif">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190729/20190729_1564395734_47535.gif">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">8209&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3309274" data-info="{&quot;uid&quot;:3309274,&quot;nickname&quot;:&quot;༺๑辄胤๑༻&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/2.png&quot;,&quot;score&quot;:&quot;7787&quot;,&quot;avatar&quot;:&quot;https://ucavatar1.tuwan.com/data/avatar/003/30/92/74_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;&quot;}">
							 <div class="car-qs-paimingnum">6</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>༺๑辄胤๑༻</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/2.png">
									
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">7787&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="1860950" data-info="{&quot;uid&quot;:1860950,&quot;nickname&quot;:&quot;✿巧儿想要了&quot;,&quot;sex&quot;:2,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/6.gif&quot;,&quot;score&quot;:&quot;7140&quot;,&quot;avatar&quot;:&quot;https://ucavatar2.tuwan.com/data/avatar/001/86/09/50_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20191119/20191119_1574140864_89262.gif&quot;}">
							 <div class="car-qs-paimingnum">7</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>✿巧儿想要了</p>
									<span class="sex-girl">♀</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/6.gif">
									<img src="https://img3.tuwandata.com/uploads/repayment/20191119/20191119_1574140864_89262.gif">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">7140&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3152706" data-info="{&quot;uid&quot;:3152706,&quot;nickname&quot;:&quot;豆仔没了&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/3.png&quot;,&quot;score&quot;:&quot;5388&quot;,&quot;avatar&quot;:&quot;https://ucavatar3.tuwan.com/data/avatar/003/15/27/06_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png&quot;}">
							 <div class="car-qs-paimingnum">8</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>豆仔没了</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/3.png">
									<img src="https://img3.tuwandata.com/uploads/repayment/20200806/20200806_1596717066_49662.png">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">5388&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3342890" data-info="{&quot;uid&quot;:3342890,&quot;nickname&quot;:&quot;不懵圈了&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/1.png&quot;,&quot;score&quot;:&quot;5327&quot;,&quot;avatar&quot;:&quot;https://ucavatar3.tuwan.com/data/avatar/003/34/28/90_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190626/20190626_1561543073_67763.gif&quot;}">
							 <div class="car-qs-paimingnum">9</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>不懵圈了</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/1.png">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190626/20190626_1561543073_67763.gif">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">5327&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="2411650" data-info="{&quot;uid&quot;:2411650,&quot;nickname&quot;:&quot;蕾拉仙了&quot;,&quot;sex&quot;:2,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/7.gif&quot;,&quot;score&quot;:&quot;5124&quot;,&quot;avatar&quot;:&quot;https://ucavatar1.tuwan.com/data/avatar/002/41/16/50_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/chatroom/20200628/0a7a4d1048f70f2783987bae149664d9.gif&quot;}">
							 <div class="car-qs-paimingnum">10</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>蕾拉仙了</p>
									<span class="sex-girl">♀</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/7.gif">
									<img src="https://img3.tuwandata.com/uploads/chatroom/20200628/0a7a4d1048f70f2783987bae149664d9.gif">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">5124&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3069209" data-info="{&quot;uid&quot;:3069209,&quot;nickname&quot;:&quot;却后余生&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/3.png&quot;,&quot;score&quot;:&quot;4844&quot;,&quot;avatar&quot;:&quot;https://ucavatar2.tuwan.com/data/avatar/003/06/92/09_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;&quot;}">
							 <div class="car-qs-paimingnum">11</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>却后余生</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/3.png">
									
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">4844&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3327755" data-info="{&quot;uid&quot;:3327755,&quot;nickname&quot;:&quot;白笙菜了&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/0.png&quot;,&quot;score&quot;:&quot;4596&quot;,&quot;avatar&quot;:&quot;https://ucavatar2.tuwan.com/data/avatar/003/32/77/55_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190729/20190729_1564395734_47535.gif&quot;}">
							 <div class="car-qs-paimingnum">12</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>白笙菜了</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/0.png">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190729/20190729_1564395734_47535.gif">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">4596&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="2863565" data-info="{&quot;uid&quot;:2863565,&quot;nickname&quot;:&quot;女王嘟了&quot;,&quot;sex&quot;:2,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/8.gif&quot;,&quot;score&quot;:&quot;3763&quot;,&quot;avatar&quot;:&quot;https://ucavatar.tuwan.com/data/avatar/002/86/35/65_avatar_middle.jpg?random=1597162027&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/chatroom/20200810/afa9efb072a849360274df566b8fcd66.GIF&quot;}">
							 <div class="car-qs-paimingnum">13</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>女王嘟了</p>
									<span class="sex-girl">♀</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/8.gif">
									<img src="https://img3.tuwandata.com/uploads/chatroom/20200810/afa9efb072a849360274df566b8fcd66.GIF">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">3763&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3257061" data-info="{&quot;uid&quot;:3257061,&quot;nickname&quot;:&quot;渡劫过了&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/4.png&quot;,&quot;score&quot;:&quot;3601&quot;,&quot;avatar&quot;:&quot;https://ucavatar3.tuwan.com/data/avatar/003/25/70/61_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190626/20190626_1561543073_67763.gif&quot;}">
							 <div class="car-qs-paimingnum">14</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>渡劫过了</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/4.png">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190626/20190626_1561543073_67763.gif">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">3601&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3020504" data-info="{&quot;uid&quot;:3020504,&quot;nickname&quot;:&quot;东北战狼灰灰꧔ꦿ&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/2.png&quot;,&quot;score&quot;:&quot;2930&quot;,&quot;avatar&quot;:&quot;https://ucavatar3.tuwan.com/data/avatar/003/02/05/04_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190227/20190227_1551232744_42185.jpg&quot;}">
							 <div class="car-qs-paimingnum">15</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>东北战狼灰灰꧔ꦿ</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/2.png">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190227/20190227_1551232744_42185.jpg">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">2930&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="1976062" data-info="{&quot;uid&quot;:1976062,&quot;nickname&quot;:&quot;第一书记&quot;,&quot;sex&quot;:1,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/9.gif&quot;,&quot;score&quot;:&quot;2924&quot;,&quot;avatar&quot;:&quot;https://ucavatar.tuwan.com/data/avatar/001/97/60/62_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/chatroom/20200617/e738a6b24b6e8861b921f480e77acd73.gif&quot;}">
							 <div class="car-qs-paimingnum">16</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>第一书记</p>
									<span class="sex-man">♂</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/9.gif">
									<img src="https://img3.tuwandata.com/uploads/chatroom/20200617/e738a6b24b6e8861b921f480e77acd73.gif">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">2924&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3040010" data-info="{&quot;uid&quot;:3040010,&quot;nickname&quot;:&quot;柯柯来了&quot;,&quot;sex&quot;:2,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/3.png&quot;,&quot;score&quot;:&quot;2797&quot;,&quot;avatar&quot;:&quot;https://ucavatar1.tuwan.com/data/avatar/003/04/00/10_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190227/20190227_1551232796_46506.jpg&quot;}">
							 <div class="car-qs-paimingnum">17</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>柯柯来了</p>
									<span class="sex-girl">♀</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/3.png">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190227/20190227_1551232796_46506.jpg">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">2797&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3342521" data-info="{&quot;uid&quot;:3342521,&quot;nickname&quot;:&quot;钻石王老大&quot;,&quot;sex&quot;:0,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/1.png&quot;,&quot;score&quot;:&quot;2011&quot;,&quot;avatar&quot;:&quot;https://ucavatar3.tuwan.com/data/avatar/003/34/25/21_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg&quot;}">
							 <div class="car-qs-paimingnum">18</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>钻石王老大</p>
									<span class="sex-girl">♀</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/1.png">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190319/20190319_1552984415_34304.jpg">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">2011&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3336736" data-info="{&quot;uid&quot;:3336736,&quot;nickname&quot;:&quot;派狂魔&quot;,&quot;sex&quot;:0,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/1.png&quot;,&quot;score&quot;:&quot;1678&quot;,&quot;avatar&quot;:&quot;https://ucavatar1.tuwan.com/data/avatar/003/33/67/36_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;&quot;}">
							 <div class="car-qs-paimingnum">19</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>派狂魔</p>
									<span class="sex-girl">♀</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/1.png">
									
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">1678&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div><div class="right-paihang-item paihang-other" data-uid="3088839" data-info="{&quot;uid&quot;:3088839,&quot;nickname&quot;:&quot;紧不紧了&quot;,&quot;sex&quot;:2,&quot;vipicon&quot;:&quot;https://res.tuwan.com/templet/play/images/app/5.gif&quot;,&quot;score&quot;:&quot;1414&quot;,&quot;avatar&quot;:&quot;https://ucavatar.tuwan.com/data/avatar/003/08/88/39_avatar_middle.jpg?random=20200812&quot;,&quot;medal&quot;:&quot;https://img3.tuwandata.com/uploads/repayment/20190227/20190227_1551232796_46506.jpg&quot;}">
							 <div class="car-qs-paimingnum">20</div>
							<div class="carpaihang-userinfo" style="flex:1">
								<div class="flex carpaihang-userinfo-name">
									<p>紧不紧了</p>
									<span class="sex-girl">♀</span>
								</div>
								<div>
									<img src="https://res.tuwan.com/templet/play/images/app/5.gif">
									<img src="https://img3.tuwandata.com/uploads/repayment/20190227/20190227_1551232796_46506.jpg">
								</div>
							</div>
							<div class="flex" style="color: #999; align-items:center;">1414&nbsp;<img src="https://res.tuwan.com/templet/play/chat/auto/images/zhuanicon.png" style="width:20px;height:20px"></div>
						</div></li><li style="display:none" data-type="2"></li><li style="display:none" data-type="4"><div style="color:#999; font-size:14px; text-align:center; margin-top:20px">现在还没有车队哦~</div></li><li style="display:none" data-type="1"></li></ul>
								</div>
							</div>
						</div>

						<!-- -->




						<div class="inithide right-bang" style="display: none;">

							<div class="right-bang-tab">
								<div class="current">守护榜</div>
								<div class="">贡献榜</div>
								<div class="">魅力榜</div>
							</div>

							<div class="right-bang-list-main">
								<div class="right-bang-list">
									<div class="right-shouhu">
										<div class="flex right-bang-title"></div>
										<div class="flex bang-num-info" style="text-align: left; width: 90%;">
											<span class="shouhu-number"></span>
											<span class="bang-help"></span>
										</div>
										<div class="rank-list">
											<ul></ul>
										</div>
									</div>
								</div>
								<div class="right-bang-list" style="display: none;">
									<div class="rank-list">
										<ul></ul>
									</div>
								</div>
								<div class="right-bang-list" style="display: none;">
									<div class="rank-list">
										<ul></ul>
									</div>
								</div>
							</div>
						</div>
						<div class="flex inithide right-bang-self-fixed" style="display: none;">

						</div>

						<div class="flex inithide right-bang-join-fixed" style="display: none;">
							<div class="right-bang-join-text"></div>
							<div>
								<button>加入守护</button>
							</div>
						</div>

						<!-- LOL比赛 -->
						<div class="flex inithide right-lol-match" style="display: none;">
							<div class="right-bang-tab">
								<div class="current">战队</div>
								<div class="">月榜</div>
							</div>

							
							<div class="lol-match-self-match" style="padding:0 12px; margin-top: 10px;">

							</div>

							<div class="right-lol-match-list-main">
								<div class="right-bang-list right-lol-match-info">

								</div>
								<div class="right-bang-list" style="display: none;">
									<div class="rank-list">
										<ul>

										</ul>
									</div>
								</div>
							</div>

						</div>

					</div>

				</div>



				<!-- 聊天输入框 -->
				<div class="flex flexvcenter chat-center-inputcontent">
					<div class="flex chat-center-input-left">
						<div class="flex chat-center-gift" style="">
							<div class="flexinline chat-center-gift-show" style="font-size: 14px; align-items: center;">
								<img src="https://res.tuwan.com/templet/play/chat/images/gifticon.png?v2" style="height: 24px;">
								<span style="margin-left: 6px;">赠送礼物</span>
							</div>
							<div class="flex chat-center-gift-content">
								<div class="flex" style="background:#eee;">
									<div class="flex chat-center-gift-tab">
									</div>
									<div style="flex: 1; cursor: default; text-align: right;">
										<img id="imgshoucong" style="display: none;" src="https://res.tuwan.com/templet/play/chat/chatv2/images/shoucongicon.png">
									</div>

								</div>
								<div class="chat-center-gift-list"></div>
								<div class="flex gift-window-bottom">
									<!-- 数量  -->
									<div class="flex gift-window-bottom-count" style="background: #fff;">
										<span>数量</span>
										<span><input type="number" value="1" id="inputGiftCount"></span>
										<span id="spanShowGiftCount" style="padding:0 10px;">
											<img src="https://res.tuwan.com/templet/play/teacher/images/top_kong_hover.png">
										</span>
										<div class="gift-count-list" id="giftCountList">
											<span class="current">10</span>
											<span>66</span>
											<span>520</span>
											<span>888</span>
											<span>1314</span>
										</div>
									</div>
									<!-- 先赠送的导师  -->
									<div class="flex sendgift-user" style="align-items: center;">
										<div style="font-size: 14px; margin-left: 16px;">赠送给：</div>
										<div class="flex gift-send-teacher-content gift-window-bottom-count" style="background: #fff;">
											<span id="selectGiftTeacher" uid="0">送给麦上所有人</span>
											<span id="spanTeacherShow" style="padding:0 10px;">
												<img src="https://res.tuwan.com/templet/play/teacher/images/top_kong_hover.png">
											</span>

											<div class="flex gift-send-teacher-list">
												<div id="divTeacherList">

												</div>
											</div>
										</div>
									</div>
									<div class="flex baobox-title" style="align-items: center;font-size:14px;color: #666; justify-content: center; background:#fff; padding:0 10px;margin-left: 10px; height: 30px;border-radius: 3px; display: none;">

									</div>

									<div class="gift-send-btn" style="margin-left: 10px;">赠送</div>
									<div class="gift-my-money">
										<p>我的钻石：<font id="font-my-diamond"></font>
										</p>
										<p>我的余额：<font id="font-my-yue"></font>
										</p>
									</div>
									<div class="gift-go-congzi" style="flex: 1 auto;">
										<a href="/recharge/" target="_blank">去充值</a>
									</div>
								</div>

								<div class="div-futext" style="display:none;position: absolute;right: 0;top: 0;">
									<select class="eff-select">
										<option value="3d">3d</option>
										<option value="eff">eff</option>
									</select>
									<input type="text">
									<button>确定</button>
								</div>
							</div>
						</div>

						<!-- 红包功能 发红包 -->

						<div class="flex inithide chat-center-redpacket" style="display: none;">
							<div class="flexinline" style="font-size: 14px; align-items: center;">
								<img src="https://res.tuwan.com/templet/play/chat/images/redpacket.png?v3" style="height: 24px;">
								<span style="margin-left: 6px;">发红包</span>
							</div>
						</div>
						<!-- 发红包按钮结束 -->

						<div class="flex flexvcenter chat-input-text">
							<div class="flex flexvcenter chat-input-smile">
								<img src="https://res.tuwan.com/templet/play/chat/images/smile.png">
								<!-- 表情 -->
								<div class="chat-emoji-list">

								</div>
							</div>

							<!-- <input type="text" name=""> -->
							<textarea maxlength="80"></textarea>

							<div class="flex flexvcenter chat-input-camer">
								<form action="#" id="uploadForm">
									<input id="chatFileUploadImage" type="file" name="">
								</form>
							</div>
							<div class="inline-flex flexvcenter flexhcenter chat-input-btn-send">
								发送
							</div>
						</div>
					</div>


					<div class="flex chat-function">
						<div class="flex chat-function-box">
							<div class="flex chat-function-div chat-function-huatong">
								<div class="chat-huatong chat-huatong-jin" style="">
									<div class="chat-micphone-volume" style="display: none;">
										<input min="0" max="100" step="1" type="range" name="">
									</div>
								</div>
								<div class="chat-function-text">话筒</div>
							</div>

							<div class="flex chat-function-div chat-function-yinliang">
								<div class="chat-background" style="margin-right: 6px;">
									<div class="chat-voice-volume">
										<input value="100" min="0" max="100" step="1" type="range" name="">
									</div>

								</div>
								<div class="chat-function-text">音量</div>
							</div>
							<div class="flex inithide chat-function-div chat-function-noani" style="display: none;" original-title="开启后可屏蔽他人送出的礼物特效">
								<div class="flex">
									<span class="chat-function-text">屏蔽礼物动画</span>
								</div>
							</div>
							<div class="flex chat-function-div chat-function-tsjy">
								<div class="flex chat-dd-kefu" id="dd_kefu_chat" style="display: flex;">
									<span class="chat-function-text">联系客服</span>
								</div>
							</div>

						</div>
						<div class="chat-talk-tips"></div>
					</div>
				</div>

			</div>
		</div>

		<!-- 页脚 -->
		<div id="preinfoTips" class="preinfotips" style="background:rgba(0,0,0,0.4);display: none;">
			<div class="pretips-content">
				<span class="pretips-close" onclick="document.getElementById('preinfoTips').style.display='none';"></span>
				<div class="pretipsinfo">
					<img class="downloadhead" style="width:200px; height:200px; margin-left: 25px;" src="https://res.tuwan.com/templet/play/chat/wave/images/downloadhead.png?v=1" alt="">
					<audio id="downloadmp3" src="https://res.tuwan.com/templet/play/chat/wave/images/download.mp3" loop="true" preload="auto"></audio>
					<div style="width: 300px;">
						<p style="font-size:24px; color:#666; margin-top: 20px;">请下载客户端获得最佳体验哦~~</p>
						<p style="font-size: 12px; color: #999; margin-top: 10px;">大神妹子免费陪你开黑，人满立即发车</p>
						<div style="display:flex; margin-top:10px;">
							<div class="download_now" style="background: #ff5588;" onclick="location.href='https://dynamics-share.tuwan.com/lolGangUp1.0.1.exe'">立即下载</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
		
	</div>
</template>

<script>
	export default{
		name:'chatroom',
		data(){
			return {
				
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)//window.history.go(-1)
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped">
	* {
    font-family: "Microsoft YaHei";
}
a{
	text-decoration: none;
}
ul{list-style: none;}
a,p,ul,li,div,ol{padding: 9;margin: 0;}
body{}
.chat-main{
	font-family: "Microsoft YaHei";
	-webkit-font-smoothing: antialiased;
	padding: 0;
	margin: 0;
	height: 100%;
	overflow: hidden;
}
.chat-head{
	-webkit-font-smoothing: antialiased;
	font-family: "Microsoft YaHei";
	backface-visibility: hidden;
	height: 65px;
	order: 1;
	background: url(https://res.tuwan.com/templet/play/chat/auto/images/chatheadbg.png) no-repeat 0 0 #f58;
	}
	.chat-head-left {
    width: 314px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.chat-head-right {
    flex: 1 auto;
    height: 100%;
    display: flex;
    justify-content: flex-end;
}
			.flex chat-content{-webkit-font-smoothing: antialiased;
font-family: "Microsoft YaHei";
backface-visibility: hidden;
display: flex;
flex: 1 auto;
flex-direction: row;
flex-flow: row;
order: 2;}
.chat-content .chat-left {
    width: 290px;
    flex: 0 0 300px;
    order: 1;
    position: relative;
    flex-direction: column;
}
.chat-content .chat-left ul.chat-left-catorage {
    height: 52px;
    line-height: 52px;
    list-style: none;
    padding: 0 10px;
    background: #fff;
    z-index: 3;
    position: absolute;
    left: 0;
    top: 0;
    width: 292px;
    display: flex;
    box-sizing: border-box;
}
.chat-content .chat-left ul.chat-left-catorage li {
    flex: 1;
    text-align: center;
    cursor: pointer;
    color: #999;
    position: relative;
}
.chat-left .chat-rooms-all {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-top: 52px;
    padding-bottom: 10px;
    box-sizing: border-box;
    border-right: solid 1px #eee;
    overflow-y: auto;
    overflow-x: hidden;
}
.hide {
    display: none!important;
}
.chat-left .chat-room-list .room-item {
    padding: 0;
    flex-direction: column;
}
.chat-left .chat-room-list .room-item-name {
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
}
.chat-left .chat-room-list .room-item-name .room-item-roal {
    width: 36px;
    height: 38px;
    justify-content: center;
    align-items: center;
}
.chat-left .chat-room-list .room-item-name .room-item-roal .room-item-zhuan-kuang {
    width: 14px;
    height: 14px;
    border-radius: 2px;
    border: solid 1px #ccc;
    align-items: center;
    justify-content: center;
}

.chat-left .chat-room-list .room-item-name .room-item-roal img.room-route {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
.chat-left .room-item-perons {
    display: flex;
    flex-direction: column;
}
.chat-left .chat-room-list .room-item {
    padding: 0;
    flex-direction: column;
}
.chat-left .chat-room-list .room-item-name {
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
}

.chat-left .chat-room-list .room-item-name .room-item-roal .room-item-zhuan-kuang {
    width: 14px;
    height: 14px;
    border-radius: 2px;
    border: solid 1px #ccc;
    align-items: center;
    justify-content: center;
}
.chat-left .chat-room-list .room-item-name .room-item-name-icon {
    height: 38px;
    width: 38px;
    margin: 0 10px 0 0;
}
.chat-content .chat-center {
    flex: 5 auto;
    order: 2;
}
.flex {
    display: flex;
}
.flex-1 {
    flex: 1;
}
.chat-center-main {
    flex-direction: row;
    flex: 1 auto;
}
.chat-center-left {
    flex: 1 auto;
    flex-direction: column;
    margin: 10px;
    border-radius: 8px;
}
.jiamian-svga-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.room-seats-content {
    border-radius: 8px;
    overflow: hidden;
}
	
.room-seats-main {
    border-radius: 10px;
    position: relative;
    z-index: 1;
}
.new-kaihei-content {
    height: 402px;
}
.flex-dir-col {
    flex-direction: column;
}
.flex-ac {
    align-items: center;
}
.flex-jc {
    justify-content: center;
}

.seat-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 300px;
}
.seat-item .seat-head {
    position: relative;
    width: 120px;
    height: 120px;
}
.seat-item .seat-user-head.add {
    background: url(https://res.tuwan.com/templet/play/chat/chatv2/images/addicon.png) no-repeat;
    background-size: 100% 100%;
}
.seat-item img.seat-head-img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    z-index: 3;
}
.new-kaihei-content .new-kaihei-teams {
    margin-left: 10px;
}
.new-kaihei-content .new-team-name {
    writing-mode: vertical-lr;
    white-space: nowrap;
    line-height: 1.4;
    font-size: 14px;
    letter-spacing: 4px;
    margin-right: 10px;
}
.seat-item .seat-wave {
    position: absolute;
    width: 100%;
    height: 100%;
    background: 0 0;
    border: solid 1px transparent;
    border-radius: 100%;
    top: -1px;
    left: -1px;
    opacity: 0;
}
.seat-item .seat-svga {
    position: absolute;
    width: 164px;
    height: 164px;
    z-index: 4;
    background: rgba(255,255,255,.8);
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: none;
}
.new-kaihei-content .new-xuanyan {
    font-size: 14px;
    cursor: pointer;
    display: none;
}
.chat-center-window {
    flex: 1 auto;
    position: relative;
}
.chat-center-window .chat-center-newmessage {
    position: absolute;
    width: 100px;
    right: 10px;
    background: url(https://res.tuwan.com/templet/play/chat/h5/images/downicon.png) no-repeat left 30px center rgba(254,102,153,.5);
    height: 30px;
    border-radius: 30px;
    padding: 0 20px;
    background-size: 12px 14px;
    line-height: 30px;
    color: #fff;
    text-indent: 30px;
    cursor: pointer;
    z-index: 9;
    display: none;
    bottom: 100px;
}
.common-queuelist {
    display: none;
    flex-direction: column;
    position: absolute;
    right: 0;
    bottom: 90px;
    width: 404px;
    height: 352px;
    background: #fee5eb;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 2px;
    z-index: 801;
}
.channel-queuelist-title {
    text-align: center;
    color: #ff6691;
    font-size: 20px;
    font-weight: 700;
    height: 48px;
    line-height: 48px;
}
.channel-queuelist-content {
    list-style: none;
    height: 300px;
    flex: 1;
    background: #fff;
    font-size: 14px;
    color: #666;
    padding-top: 10px;
    box-sizing: border-box;
}
.scroll {
    overflow-x: hidden;
    overflow-y: auto;
}
.channel-selfqueue-content {
    height: 50px;
    display: none;
}
.chat-center-window-main {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow-y: auto;
    z-index: 1;
}
.chat-center-window .chat-center-message {
    flex-direction: column;
    padding: 20px;
}
.chat-center-window .chat-text-content {
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
}
.chat-center-window .chatroom-tag {
    margin-right: 5px;
}
i.chat-room-peiwan-tag, span.chat-room-peiwan-tag {
    display: inline-flex;
    border-radius: 3px;
    background: #f459a3;
    padding: 0 3px;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    margin-top: 2px;
    height: 18px;
    line-height: 18px;
}
.chat-center-window .chat-center-time {
    color: #999;
}
.chat-center-window .chat-center-talktext {
    line-height: 30px;
    color: #333;
    position: relative;
}
.room-buttons {
    position: absolute;
    right: 10px;
    bottom: 10px;
    height: 64;
    flex-wrap: nowrap;
    justify-content: flex-end;
}
.room-buttons {
    position: absolute;
    right: 10px;
    bottom: 10px;
    height: 64;
    flex-wrap: nowrap;
    justify-content: flex-end;
}
.chatroom-redjilu {
    display: none;
    position: absolute;
    width: 106px;
    height: 22px;
    right: 10px;
    top: 60px;
    z-index: 999;
    color: #9a9aa9;
    line-height: 20px;
    font-size: 12px;
    text-indent: 26px;
    cursor: pointer;
    text-decoration: underline;
}
.redpacket-jilu-content {
    position: absolute;
    right: 20px;
    top: 100px;
    width: 380px;
    max-height: 504px;
    min-height: 100px;
    background: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
    z-index: 100020;
    display: none;
}
.redpacket-jilu-content h4 {
    margin: 0;
    padding: 0;
    text-align: center;
}
.redpacket-jilu-list {
    max-height: 444px;
    margin-top: 10px;
}
.redpacket-jilu-content .mask-close {
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(https://res.tuwan.com/templet/play/chat/images/carautocloseicon.png) no-repeat center center;
    right: 0;
    top: 0;
    cursor: pointer;
}
.redpacket-jilu-resfest {
    position: absolute;
    right: 60px;
    top: 10px;
    cursor: pointer;
    font-size: 14px;
    color: #666;
}
.baoboxmessage-main {
    display: flex;
    background: url(https://res.tuwan.com/templet/play/chat/chatv2/images/baoboxbg.png) no-repeat;
    width: 760px;
    height: 100px;
    justify-content: center;
    font-size: 16px;
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -380px;
    z-index: 820;
    pointer-events: none;
}
.baoboxmessage-content {
    display: flex;
    align-items: center;
}
.baoboxmessage-head img {
    width: 61px;
    height: 61px;
    border-radius: 100%;
}
.baoboxmessage-info {
    flex: 1;
    margin: 0 10px;
}
.baoboxmessage-info p {
    margin: 3px 0;
    color: #fff;
}
.baoboxmessage-openuser-info span {
    margin-right: 5px;
}
.baoboxmessage-openuser-info img {
    height: 20px;
}
.baoboxmessage-info p.baoboxmessage-roomname {
    background: url(https://res.tuwan.com/templet/play/chat/chatv2/images/roomicon.png) no-repeat 0 center;
    padding-left: 18px;
    font-size: 12px;
    color: rgba(255,255,255,0.7);
}
.baoboxmessage-gift {
    margin-left: 50px;
}
.baoboxmessage-gift img {
    width: 84px;
}
.chat-center .chat-center-right {
    flex: 0 0 340px;
    border-left: solid 1px #eee;
    position: relative;
    display: flex;
    flex-direction: column;
}
.right_chatroom_guanming {
    display: none;
    color: #ff4c82;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    width: 314px;
    height: 36px;
    margin: 0 auto;
    margin-top: 10px;
    background: url(https://res.tuwan.com/templet/play/chat/wave/images/chatroom_guanming.png?v=1) no-repeat;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 5px;
    box-sizing: border-box;
}
.right {
    display: flex;
    flex-direction: column;
    flex: 1;
}
.chat-right-search {
    background: #fee5eb;
    height: 36px;
    border-radius: 36px;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 10px;
}
.chat-right-search input[type=text] {
    border: none;
    outline: 0;
    height: 26px;
    background: 0 0;
    text-indent: 10px;
    flex: 1 auto;
}
.chat-right-search span {
    width: 48px;
    height: 36px;
    background: url(https://res.tuwan.com/templet/play/chat/images/searchicon.png?v=1) no-repeat center center;
}
.right-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
}
.right-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eee;
    position: relative;
}
.right-tabs ul {
    list-style: none;
    display: flex;
}
.right-tabs ul li.current {
    color: #666;
}
.right-tabs ul li {
    display: flex;
    color: #999;
    max-width: 92px;
    height: 42px;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 8px;
    font-size: 16px;
    white-space: nowrap;
}
.right-tabs .refsh {
    background: url(https://res.tuwan.com/templet/play/chat/images/refshicon.png?v=1) no-repeat left center;
    text-indent: 20px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: #999;
    right: 10px;
    cursor: pointer;
    display: none;
}
.right-info-content{
	flex: 1;
	position: relative;
}
.right-info-content ul {
    list-style: none;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: auto;
    width: 100%;
    padding-bottom: 10px;
    box-sizing: border-box;
}
.right .right-main .right-info-content .carpai1 {
    background: url(https://res.tuwan.com/templet/play/chat/carteam/images/carpaihang1bg.png) no-repeat;
    background-size: contain;
}
.right .right-main .right-info-content .carpai {
    height: 90px;
    margin-top: 6px;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.right .right-main .right-info-content .right-paihang-item {
    margin-top: 6px;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.right .right-main .right-info-content .carpai div.car-qs-div{
	line-height: 0;
	position: relative;
	width: 58px;
	height: 78px;
}
.right .right-main .right-info-content .carpai div.car-qs-div .car-qs-guan-1 {
    background: url(https://res.tuwan.com/templet/play/chat/carteam/images/carpaiahanghead1.png) no-repeat;
}
.right .right-main .right-info-content .carpai div.car-qs-div .car-qs-guan {
    position: absolute;
    width: 67px;
    height: 78px;
    top: -2px;
    left: -4px;
}
.right .right-main .right-info-content div.carpaihang-userinfo {
    padding-left: 10px;
}
.right .right-main .right-info-content div.carpaihang-userinfo .carpaihang-userinfo-name {
    align-items: center;
}
.right .right-main .right-info-content div.carpaihang-userinfo p {
    font-size: 14px;
}
.right .right-main .right-info-content div.carpaihang-userinfo span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    margin-left: 4px;
    font-size: 6px;
    color: #fff;
    text-align: center;
    line-height: 16px;
}
.right .right-main .right-info-content div.carpaihang-userinfo img {
    height: 16px;
}
.right .right-main .right-info-content .carpai div.car-qs-div {
    line-height: 0;
    position: relative;
    width: 58px;
    height: 78px;
}
.right .right-main .right-info-content .carpai img.carqiansan-header {
    width: 58px;
    height: 58px;
    border-radius: 100%;
    margin-top: 13px;
}
.right .right-main .right-info-content .carpai div.car-qs-div .car-qs-guan-1 {
    background: url(https://res.tuwan.com/templet/play/chat/carteam/images/carpaiahanghead1.png) no-repeat;
}
.right .right-main .right-info-content .carpai div.car-qs-div .car-qs-guan {
    position: absolute;
    width: 67px;
    height: 78px;
    top: -2px;
    left: -4px;
}
.right .right-main .right-info-content div.carpaihang-userinfo span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    margin-left: 4px;
    font-size: 6px;
    color: #fff;
    text-align: center;
    line-height: 16px;
}
.right-bang, .right-lol-match {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    display: none;
}
.right-bang .right-bang-tab, .right-lol-match .right-bang-tab {
    display: flex;
    padding: 0 50px;
    border-bottom: 1px solid #eee;
    margin: 0 20px;
    flex: 0 0 42px;
}
.right-bang .right-bang-tab>div.current, .right-lol-match .right-bang-tab>div.current {
    color: #666;
}
.right-bang .right-bang-tab>div, .right-lol-match .right-bang-tab>div {
    flex: 1;
    text-align: center;
    color: #999;
    font-size: 16px;
    height: 42px;
    line-height: 42px;
    cursor: pointer;
}
.right-bang .right-bang-list-main {
    flex: 1;
    margin-top: 16px;
}
.right-shouhu {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
}
.right-bang-title {
    align-items: center;
    width: 314px;
    height: 94px;
    background: url(https://res.tuwan.com/templet/play/chat/chatv2/images/bangtitlebg.png) no-repeat;
}
.bang-num-info {
    justify-content: space-between;
    margin: 10px 0;
}
.bang-help {
    width: 20px;
    height: 20px;
    background: url(https://res.tuwan.com/templet/play/chat/chatv2/images/banghelp.png) no-repeat;
    cursor: pointer;
}
div.rank-list {
    box-sizing: border-box;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    padding: 0 10px;
    padding-bottom: 70px;
}
.right-bang-join-fixed, .right-bang-self-fixed {
    position: fixed;
    margin: 0;
    width: 341px;
    height: 70px;
    background: rgba(255,255,255,.9);
    bottom: 40px;
    align-items: center;
    box-shadow: 0 0 10px #ccc;
}
.right-bang-join-fixed .right-bang-join-text {
    font-size: 14px;
    flex: 1;
}
.right-bang-join-fixed>div {
    margin: 10px;
}
.right-bang-join-fixed .right-bang-join-text {
    font-size: 14px;
    flex: 1;
}
.right-bang-join-fixed>div {
    margin: 10px;
}
.right-bang-join-fixed button, .right-bang-self-fixed .right-bang-self-xubtn button {
    border: 0;
    border-style: none;
    background: #ff6691;
    color: #fff;
    border-radius: 4px;
    outline: 0;
}
.zbox-btn, button, input[type=button], input[type=reset], input[type=submit] {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    padding: 6px 12px;
    cursor: pointer;
    -webkit-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    text-align: center;
    vertical-align: top;
    white-space: nowrap;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #fff;
    background-clip: padding-box;
}
.right-lol-match {
    position: relative;
}
.right-bang, .right-lol-match {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    display: none;
}
.right-bang .right-bang-tab, .right-lol-match .right-bang-tab {
    display: flex;
    padding: 0 50px;
    border-bottom: 1px solid #eee;
    margin: 0 20px;
    flex: 0 0 42px;
}
.right-bang .right-bang-tab>div.current, .right-lol-match .right-bang-tab>div.current{color: #666666;}
.right-bang .right-bang-tab>div, .right-lol-match .right-bang-tab>div{
	flex: 1;
	text-align: center;
	color: #999999;
	font-size: 16px;
	height: 42px;
	line-height: 42px;
	cursor: pointer;
}
.right-bang .right-bang-tab>div, .right-lol-match .right-bang-tab>div {
    flex: 1;
    text-align: center;
    color: #999;
    font-size: 16px;
    height: 42px;
    line-height: 42px;
    cursor: pointer;
}
.right-lol-match .right-lol-match-info{
	padding: 0 12px;
}
.chat-center-inputcontent{
	height: 40px;
	flex: 0 0 40px;
	background: #fee5eb;
}
.flexvcenter{
	align-items: center;
}
.chat-center-input-left{
	align-items: center;
	height: 36px;
}
.chat-center-gift {
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
    border-right: solid 1px #eee;
    position: relative;
    margin: 0 10px;
    background: #fff;
    border-radius: 10px;
    height: 32px;
}
element.style {
    font-size: 14px;
    align-items: center;
}
.chat-center-gift .chat-center-gift-show {
    color: #b17d8a;
}
.flexinline {
    display: inline-flex;
}
.chat-center-gift .chat-center-gift-content {
    position: absolute;
    left: 10px;
    bottom: 46px;
    width: 665px;
    height: 350px;
    background: #fff;
    border: solid 1px #ddd;
    flex-direction: column;
    display: none;
    z-index: 999;
}
.chat-center-gift-tab {
    align-items: center;
    text-align: center;
    height: 50px;
    padding: 0 16px;
    background: #eee;
    color: #333;
}
.chat-center-gift-list {
    display: flex;
    flex: 1 auto;
    padding: 10px;
    height: 234px;
    width: 646px;
    overflow-y: auto;
    overflow-x: hidden;
}
.gift-window-bottom {
    height: 40px;
    background: #efefef;
    align-items: center;
}
.gift-window-bottom .gift-window-bottom-count {
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
    padding-left: 10px;
    background: #fff;
    position: relative;
}
.gift-window-bottom .gift-window-bottom-count span {
    font-size: 14px;
    color: #666;
}
.gift-window-bottom .gift-window-bottom-count input {
    border-style: none;
    outline: 0;
    height: 24px;
    width: 40px;
    text-align: center;
    color: #333;
}
.gift-count-list {
    position: absolute;
    background: #fff;
    border: solid 1px #ddd;
    width: 280px;
    bottom: 40px;
    left: 0;
    padding: 6px 10px;
    display: none;
    z-index: 9;
    line-height: 24px;
}
.gift-count-list span.current, .gift-count-list span:hover {
    border: solid 1px #f60;
    color: #f60;
}
.gift-window-bottom .gift-window-bottom-count span {
    font-size: 14px;
    color: #666;
}
.gift-window-bottom .gift-window-bottom-count {
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
    padding-left: 10px;
    background: #fff;
    position: relative;
}
#selectGiftTeacher {
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.gift-window-bottom .gift-window-bottom-count span {
    font-size: 14px;
    color: #666;
}
.gift-send-teacher-list {
    position: absolute;
    bottom: 38px;
    right: 0;
    background: #fff;
    width: 200px;
    border: solid 1px #ddd;
    flex-direction: column;
    max-height: 600px;
    overflow-y: auto;
    display: none;
}
.gift-send-teacher-list>div {
    line-height: 30px;
    background: #fff;
    text-align: center;
    padding: 10px 0;
    font-size: 14px;
}
.gift-send-btn {
    background: #f91b00;
    font-size: 14px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    padding: 0 16px;
    margin-left: 16px;
    border-radius: 4px;
}
.gift-my-money {
    font-size: 12px;
    margin-left: 10px;
    color: #333;
}
.gift-my-money p>font {
    font-size: 12px;
    color: red;
}
.gift-go-congzi {
    text-align: right;
}
.gift-go-congzi a {
    font-size: 14px;
    background: #faba05;
    padding: 6px 10px;
    border-radius: 5px;
    color: #f91b00;
    margin-right: 10px;
}
select:not(:-internal-list-box) {
    overflow: visible !important;
}
user agent stylesheet
select {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: menulist;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    cursor: default;
    margin: 0em;
    font: 400 13.3333px Arial;
    border-radius: 0px;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
    border-image: initial;
}
option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
.zbox-btn, button, input[type=button], input[type=reset], input[type=submit] {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    padding: 6px 12px;
    cursor: pointer;
    -webkit-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    text-align: center;
    vertical-align: top;
    white-space: nowrap;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #fff;
    background-clip: padding-box;
}
.chat-center-redpacket {
    margin-left: 0;
    color: #b17d8a;
}

.chat-center-redpacket {
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
    border-right: solid 1px #eee;
    position: relative;
    margin: 0 10px;
    background: #fff;
    border-radius: 10px;
    height: 32px;
}
.flexinline{
	display: inline-flex;
}
.chat-input-text {
    background: #fff;
    border-radius: 10px;
    margin-right: 10px;
}
.flexvcenter {
    align-items: center;
}
.chat-input-smile {
    margin-left: 10px;
    position: relative;
}
.chat-input-smile img {
    width: 20px;
    height: 20px;
    cursor: pointer;
}
.chat-emoji-list {
    position: absolute;
    background: #f9f9f9;
    width: 380px;
    height: 300px;
    bottom: 46px;
    left: -10000px;
    border: solid 1px #ddd;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-direction: row;
    overflow-y: auto;
    z-index: 99;
}
.chat-input-text textarea {
    border: none;
    border-style: none;
    font-size: 16px;
    width: 400px;
    height: 28px;
    padding-left: 5px;
    outline: 0;
    line-height: 28px;
    resize: none;
}
.chat-input-camer {
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    background: url(https://res.tuwan.com/templet/play/chat/images/camericonbg.png) no-repeat 0 0;
    width: 24px;
    height: 18px;
    cursor: pointer;
}
.chat-input-camer input[type=file] {
    width: 24px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 9;
    opacity: 0;
    cursor: pointer;
    padding: 0;
}
.chat-input-text input {
    border: none;
    border-style: none;
    font-size: 16px;
    width: 400px;
    height: 34px;
    padding-left: 5px;
    outline: 0;
}
.chat-input-btn-send {
    font-size: 14px;
    color: #973c53;
    text-align: center;
    padding: 0 12px;
    cursor: pointer;
    background: #fee5eb;
    height: 28px;
    line-height: 28px;
    border-radius: 8px;
    margin-right: 4px;
}
.chat-function {
    align-items: center;
    justify-content: flex-end;
    flex: 1 auto;
    position: relative;
}
.chat-function .chat-function-box {
    flex: 1 auto;
    padding-left: 10px;
}
.chat-function-div {
    cursor: pointer;
    align-items: center;
    margin-right: 20px;
}
.chat-function .chat-background, .chat-function .chat-huatong{
	position: relative;
	line-height: 26px;
	font-size: 14px;
	color: #b17d8a;
}
.chat-function .chat-huatong div.chat-micphone-volume {
    position: absolute;
    top: -98px;
    left: -66px;
    background: #f0f0f0;
    transform: rotate(-90deg);
    padding: 5px 10px;
    border: solid 1px #ddd;
}
.chat-function-text {
    font-size: 14px;
    color: #b17d8a;
    line-height: 26px;
}
.chat-function-yinliang {
    background: url(https://res.tuwan.com/templet/play/chat/images/voicehui.png?v5) no-repeat left center;
    text-indent: 18px;
}
.chat-function-div {
    cursor: pointer;
    align-items: center;
    margin-right: 20px;
}
.chat-function .chat-background, .chat-function .chat-huatong {
    position: relative;
    line-height: 26px;
    font-size: 14px;
    color: #b17d8a;
}
.chat-function .chat-background div.chat-voice-volume {
    position: absolute;
    top: -124px;
    left: -66px;
    background: #f0f0f0;
    transform: rotate(-90deg);
    padding: 5px 10px;
    border: solid 1px #ddd;
    display: none;
    z-index: 10013;
}
.chat-function-noani {
    background: url(https://res.tuwan.com/templet/play/chat/chatv2/images/noshowgiftbg.png?v=3) no-repeat 0 -26px;
    text-indent: 24px;
}
.chat-function-div {
    cursor: pointer;
    align-items: center;
    margin-right: 20px;
}
.chat-function-tsjy {
    background: url(https://res.tuwan.com/templet/play/chat/images/kefuhui.png?v=1) no-repeat left center;
    text-indent: 24px;
}
.chat-function-div {
    cursor: pointer;
    align-items: center;
    margin-right: 20px;
}
.chat-dd-kefu {
    margin-right: 20px;
    font-size: 14px;
    cursor: pointer;
    align-items: center;
}
.chat-function .chat-talk-tips {
    display: none;
    position: absolute;
    width: 100px;
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    color: #fff;
    font-size: 12px;
    color: #fff;
    background: rgba(0,0,0,.8);
    top: -30px;
    text-align: center;
    border-radius: 26px;
}
.preinfotips {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    align-items: center;
    justify-content: center;
}
.pretips-content {
    width: 584px;
    height: 224px;
    position: relative;
    border-radius: 20px;
    background: url(https://res.tuwan.com/templet/play/chat/images/chrome_tips_bg.png) no-repeat center center;
}
.pretips-close {
    position: absolute;
    width: 36px;
    height: 36px;
    right: 0;
    top: 0;
    border-radius: 36px;
    z-index: 9;
    font-size: 60px;
    text-align: center;
    cursor: pointer;
    background: url(https://res.tuwan.com/templet/play/fanli6/close.png) center center no-repeat #7f7f7f;
    background-size: 18px 18px;
}
.pretipsinfo {
    display: flex;
    align-items: center;
    height: 224px;
}
.download_now {
    cursor: pointer;
    border-radius: 10px;
    width: 138px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    color: #fff;
    font-size: 22px;
    background: #4fca1e;
}
/*.pagetips {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    display: none;
    pointer-events: none;
}*/



element.style {
    width:auto;
    height:auto;
	flex-direction: column;
    background: url(https://img3.tuwandata.com/uploads/chatroom/20200805/5097181596592402.png) 0% 0% / cover no-repeat;
    color: #999;
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
    align-items: center;
    color: #666;
    justify-content: center;
    background: #fff;
    padding: 0 10px;
    margin-left: 10px;
    border-radius: 3px;
    display: none;
}
/*<!-- 中间style -->*/
				.banner-svga {
					/* background:red;  */
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					overflow: hidden;
					border-radius: 6px;
					z-index: 0;
					pointer-events: none;
				}

				.banner-svga canvas {
					/* width: 100% !important;
					height: 100% !important; */
					zoom: 1;
					/* transform: scaleX(1) !important; */
				}
								.live-self-info-no {
									background: #f7f7f7;
									border-radius: 6px;
									padding: 10px;
									align-items: center;
								}

								.live-self-info-no .live-self-head img {
									width: 70px;
									height: 70px;
									border-radius: 100%;
								}

								.live-self-info-no-buttons span {
									width: 78px;
									height: 24px;
									border: solid 1px #adadad;
									border-radius: 6px;
									text-align: center;
									color: #999;
									margin: 3px 0;
									font-size: 14px;
									line-height: 24px;
									cursor: pointer;
								}


								.live-self-teaminfo-yes .live-self-head {
									width: 66px;
									height: 66px;
									border-radius: 100%;
									border: solid 4px #f0f0f0;
									display: flex;
									align-items: center;
									justify-content: center;
								}

								.live-self-teaminfo-yes .live-self-head img {
									width: 66px;
									height: 66px;
								}

								.live-self-teaminfo-persons {
									margin-top: 10px;
								}

								.live-self-teaminfo-persons ul li div.live-self-teaminfo-person-head img {
									width: 50px;
									height: 50px;
									border-radius: 100%;
								}

								.live-self-teaminfo-persons ul {
									list-style: none;
								}

								.live-self-teaminfo-persons ul li {
									flex: 1;
									display: flex;
									align-items: center;
									flex-direction: column;
								}

								.live-self-teaminfo-persons ul li p {
									text-align: center;
									font-size: 12px;
									margin-top: 6px;
								}

								.live-self-teaminfo-persons ul li div.live-self-teaminfo-person-head {
									width: 50px;
									height: 50px;
									background: url(https://res.tuwan.com/templet/play/chat/chatv2/images/teamaddicon.png) no-repeat center center #f0f0f0;
									border-radius: 100%;
									position: relative;
								}

								.live-self-teaminfo-persons ul li div.live-self-teaminfo-person-head span {
									position: absolute;
									bottom: -4px;
									background: #f459a3;
									left: 50%;
									transform: translateX(-50%);
									width: 32px;
									height: 16px;
									line-height: 16px;
									color: #fff;
									font-size: 12px;
									border-radius: 4px;
									text-align: center;
									z-index: 1
								}

								.live-self-teaminfo-persons ul li div.live-self-teaminfo-person-head em {
									width: 16px;
									height: 16px;
									background: url(https://res.tuwan.com/templet/play/chat/v3/images/closeiconv2.png?v=1) no-repeat;
									background-size: cover;
									z-index: 2;
									position: absolute;
									top: 0;
									right: 0;
									cursor: pointer;
								}
							</style>
<style type="text/css">
	.WPA3-SELECT-PANEL { z-index:2147483647; width:463px; height:292px; margin:0; padding:0; border:1px solid #d4d4d4; background-color:#fff; border-radius:5px; box-shadow:0 0 15px #d4d4d4;}
	.WPA3-SELECT-PANEL * { position:static; z-index:auto; top:auto; left:auto; right:auto; bottom:auto; width:auto; height:auto; max-height:auto; max-width:auto; min-height:0; min-width:0; margin:0; padding:0; border:0; clear:none; clip:auto; background:transparent; color:#333; cursor:auto; direction:ltr; filter:; float:none; font:normal normal normal 12px "Helvetica Neue", Arial, sans-serif; line-height:16px; letter-spacing:normal; list-style:none; marks:none; overflow:visible; page:auto; quotes:none; -o-set-link-source:none; size:auto; text-align:left; text-decoration:none; text-indent:0; text-overflow:clip; text-shadow:none; text-transform:none; vertical-align:baseline; visibility:visible; white-space:normal; word-spacing:normal; word-wrap:normal; -webkit-box-shadow:none; -moz-box-shadow:none; -ms-box-shadow:none; -o-box-shadow:none; box-shadow:none; -webkit-border-radius:0; -moz-border-radius:0; -ms-border-radius:0; -o-border-radius:0; border-radius:0; -webkit-opacity:1; -moz-opacity:1; -ms-opacity:1; -o-opacity:1; opacity:1; -webkit-outline:0; -moz-outline:0; -ms-outline:0; -o-outline:0; outline:0; -webkit-text-size-adjust:none; font-family:Microsoft YaHei,Simsun;}
	.WPA3-SELECT-PANEL a { cursor:auto;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-TOP { height:25px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CLOSE { float:right; display:block; width:47px; height:25px; background:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/SelectPanel-sprites.png) no-repeat;}
	.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CLOSE:hover { background-position:0 -25px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-MAIN { padding:23px 20px 45px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-GUIDE { margin-bottom:42px; font-family:"Microsoft Yahei"; font-size:16px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-SELECTS { width:246px; height:111px; margin:0 auto;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CHAT { float:right; display:block; width:88px; height:111px; background:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/SelectPanel-sprites.png) no-repeat 0 -80px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CHAT:hover { background-position:-88px -80px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-AIO-CHAT { float:left;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-QQ { display:block; width:76px; height:76px; margin:6px; background:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/SelectPanel-sprites.png) no-repeat -50px 0;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-QQ-ANONY { background-position:-130px 0;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-LABEL { display:block; padding-top:10px; color:#00a2e6; text-align:center;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-BOTTOM { padding:0 20px; text-align:right;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-INSTALL { color:#8e8e8e;}
</style>
				