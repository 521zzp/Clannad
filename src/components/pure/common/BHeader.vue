<template>
	<div>
		<div class="container">
			<div class="logo fl">
				<router-link to="/" class="clearfix to-home"><img :src="logo" alt="掌柜金服" /></router-link>
			</div>
			<nav class="nav-group fr">
				<router-link to="/" class="fl">掌柜金服首页</router-link>
				<router-link to="/" class="fl">帮助中心</router-link>
			</nav>
		</div>
	</div>
</template>

<script>
/*
 * 登陆注册的头部
 */
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			logo: IMG + '/common/header/logo.png' 
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../config/base.less");
.nav-group a{
	color: @gray-one;
	margin-left: 40px;
}
.nav-group{
	height: 100%;
	font-size: @fz+2;
}
.to-home{
	height: 100%;
	display: block;
}
.container{
	width: @mw;
	height: 108px;
	margin: 0 auto;
	line-height: 108px;
}
.logo{
	width: 290px;
	height: 90px;
	margin-top: 10px;
}
</style>