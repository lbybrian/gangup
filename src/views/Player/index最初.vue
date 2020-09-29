<template>
	<div class="hello">
		<header id="boxFixed" class="clearfix" :class="{'is_fixed':isFixed}">
			<section class="header-box">
				<img src="" alt="">
				<h3>55555555555555555555555555555555</h3>
				<nav>
					<a>关于</a>
					<a>产品功能</a>
					<a>APP下载</a>
					<a>免费注册使用</a>
				</nav>
			</section>
		</header>
		<h1>测试内容</h1>
		<h3>{{time}}</h3>
		<h3>{{timeValue}}</h3>
		<p>
			For a guide and recipes on how to configure / customize this project,<br /> check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
		</p>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li v-for="i in 5">
				<div>erwrtnfd</div>
			</li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li v-for="i in 5">
				<div>erwrtnfd</div>
			</li>
		</ul>
		<h3>Ecosystem</h3>
		<ul>
			<li v-for="i in 10">
				<div>erwrtnfd</div>
			</li>
		</ul>

		</ul>
		<h1>嘻嘻</h1>
		<p>
			For a guide and recipes on how to configure / customize this project,<br /> check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
		</p>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li v-for="i in 5">
				<div>erwrtnfd</div>
			</li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li v-for="i in 5">
				<div>erwrtnfd</div>
			</li>
		</ul>
		<h3 v-for="i in 10">Ecosystem</h3>
		<ul>
			<li v-for="i in 5">
				<div>erwrtnfd</div>
			</li>
		</ul>

		</ul>
	</div>
</template>

<script>
	export default {
		name: "home",
		//		props: {
		//			msg: String
		//		},
		components: {},
		data() {
			return {
				isFixed: false,
				offsetTop: 0,
				time: new Date(),
				timeValue: ''
			}
		},
		mounted() {
			window.addEventListener('scroll', this.initHeight);
			this.$nextTick(() => {
				this.offsetTop = document.querySelector('#boxFixed').offsetTop;
			});

			this.timeValue = this.time.getFullYear() + '-' + this.time.getMonth()
		},
		methods: {
			initHeight() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				this.isFixed = scrollTop > this.offsetTop ? true : false;
			},
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.clearfix {
		display: none;
	}
	
	.isFixed {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
	}
	
	h3 {
		margin: 40px 0 0;
	}
	
	ul {
		/*list-style-type: none;*/
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>