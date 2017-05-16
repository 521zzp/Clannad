<template>
	<div class="navs">
		<router-link to="/account" class="nav-item active">账户总览</router-link>
		<router-link to="/account" class="nav-item">我的理财</router-link>
		<router-link to="/account" class="nav-item">活期宝</router-link>
		<router-link to="/account" class="nav-item">我的礼券</router-link>
		<router-link to="/account" class="nav-item">我的商品</router-link>
		<router-link to="/account" class="nav-item">我是经销商</router-link>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.nav-item{
	display: block;
	height: 44px;
	line-height: 44px;
	text-align: center;
	font-size: @bfz;
	color: @gray-three;
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