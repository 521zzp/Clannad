<template>
	<div class="navs">
		<router-link to="/account" class="nav-item" :class="{active: active === 1}">账户总览</router-link>
		<router-link to="/account" class="nav-item" :class="{active: active === 2}">我的理财</router-link>
		<router-link to="/account/current" class="nav-item" :class="{active: active === 3}">活期宝</router-link>
		<router-link to="/account" class="nav-item" >我的礼券</router-link>
		<router-link to="/account" class="nav-item" >我的商品</router-link>
		<router-link to="/account" class="nav-item" >我是经销商</router-link>
		<router-link to="/account" class="nav-item" >我的保单</router-link>
		<router-link to="/account" class="nav-item" >个人资料</router-link>
		<router-link to="/account/bankcard" class="nav-item" :class="{active: active === 9}">银行卡管理</router-link>
		<router-link to="/account" class="nav-item" >资金记录</router-link>
		<router-link to="/account" class="nav-item" >我的消息</router-link>
		<router-link to="/account" class="nav-item" >推荐好友</router-link>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	computed: {
		active () {
			return this.$route.matched[1].meta.accBar 
		}
	},
	
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.nav-item{
	display: block;
	height: 44px;
	line-height: 44px;
	text-align: center;
	font-size: @fz;
	color: @gray-three;
	border-bottom: 1px solid @border-two;
}
.nav-item:hover{
	color: @theme;
	background-color: @white;
	width: 229px;
}
.nav-item.active{
	color: @theme;
	background-color: @white;
	width: 229px;
}



</style>