<template>
	<div class="navs">
		<router-link to="/account" class="nav-item" :class="{active: active === 1}">账户总览</router-link>
		<router-link to="/account/financing" class="nav-item" :class="{active: active === 2}">我的理财</router-link>
		<router-link to="/account/current" class="nav-item" :class="{active: active === 3}">活期宝</router-link>
		<router-link to="/account/coupon" class="nav-item" :class="{active: active === 4}">我的礼券</router-link>
		<router-link v-if="trade" to="/account" class="nav-item" :class="{active: active === 5}">我的商品</router-link>
		<router-link to="/account/platform" class="nav-item" :class="{active: active === 6}">代理平台</router-link>
		<router-link to="/account/insurance" class="nav-item" :class="{active: active === 7}">我的保险</router-link>
		<router-link to="/account/information" class="nav-item" :class="{active: active === 8}">账户信息</router-link>
		<router-link to="/account/bankcard" class="nav-item" :class="{active: active === 9}">银行卡管理</router-link>
		<router-link to="/account" class="nav-item" :class="{active: active === 10}">资金记录</router-link>
		<router-link to="/account/message" class="nav-item" :class="{active: active === 11}"><span>我的消息</span></router-link>
		<router-link to="/account/invitation" class="nav-item" :class="{active: active === 12}">推荐好友</router-link>
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
		},
		trade () {
			return this.$store.state.trade
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