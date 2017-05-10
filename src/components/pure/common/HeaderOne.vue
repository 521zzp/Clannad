<template>
	<div class="clearfix top-bar">
		<div class="container">
			<span class="t-info"><Icon class="icon-top" type="android-call" ></Icon>客服专线：400-838-8304</span>
			<span class="t-info app-dl"><Icon class="icon-top" type="iphone" size=14 ></Icon>手机客户端
				<img class="app-download" :src="appDownladImg"/>
			</span>
			<div class="clearfix fr">
				<div class="fl user-status">
					<span v-if="online">您好，{{this.$store.state.user.name}}
						<span class="exit" @click="exit">退出</span>
					</span>
					<span v-else>您好，<router-link to="/login" class="to-login">请登陆</router-link>
							   <router-link to="/regist" class="to-regist">注册</router-link>
					</span>
				</div>
				<div class="fr">
					<div class="icon-s wechat">
						<img class="wechat-img" :src="wechatImg"/>
					</div>
					<div class="icon-s weibo" @click="weibo"></div>
					<span>市场有风险，投资需要谨慎</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {IMG,WEIBO} from '@/config/url'
	export default {
		data () {
			return {
				wechatImg: IMG + '/common/header/wechat.png',
				appDownladImg: IMG + '/common/header/appDownload.png'
			}
		},
		computed: {
			online () {
				return !!this.$store.state.token
			}
		},
		methods: {
			weibo () {
				window.open(WEIBO)
			},
			exit () {
				this.$store.dispatch('exit');
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.exit{
	margin-left: 20px;
	cursor: pointer;
}
.icon-s{
	display: inline-block;
	width: 16px;
	height: 1em;
	cursor: pointer;
	background-size: 100% 100%;
	margin-right: 34px;
}
.wechat-img{
	position: absolute;
	top: 0px;
	left: -125px;
	opacity: 0;
	width: 0;
	transition: opacity .8s ,top .8s;
}
.wechat:hover .wechat-img{
	display: block;
	top: 12px;
	opacity: 1;
	width: 270px;
	z-index: 10;
}
.wechat{
	position: relative;
	background-image: url(../../../assets/icon/top-wechat-default.png);
}
.wechat:hover{
	background-image: url(../../../assets/icon/top-wechat-active.png);
}
.weibo{
	background-image: url(../../../assets/icon/top-weibo-default.png);
}
.weibo:hover{
	background-image: url(../../../assets/icon/top-weibo-active.png);
}
.user-status{
	margin-right: 68px;
}
.to-regist{
	color: @gray-one;
	margin-left: 20px;
}
.to-login{
	color: @theme;
	margin-left: 16px;
}
.top-bar{
	background-color: #f7f7f7;
	color: @gray-one;
	height: 28px;
	line-height: 28px;
}
.t-info{
	margin-right: 34px;
}
.container{
	width: 1200px;
	margin: 0 auto;
}
.icon-top{
	margin-right: 0.5em;
}
.app-dl{
	cursor: pointer;
	position: relative;
}
.app-download{
	position: absolute;
	top: 0;
	width: 0;
	opacity: 0;
	left: -100px;
	transition: top .8s, opacity .8s;
	z-index: 10;
}
.app-dl:hover .app-download{
	top: 1em;
	opacity: 1;
	width: 270px;
}
</style>