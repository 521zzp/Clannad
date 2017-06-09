<template>
	<div class="clearfix">
		<div class="nav-one">
			<router-link to="/agent/invitation" class="first-level">推广管理</router-link><Icon type="ios-arrow-right" class="arrow-icon" :size="20"></Icon>
			<div class="nav-two">
				<router-link to="/agent/invitation" class="second-level">推广链接</router-link>
				<router-link to="/agent/inviteProfit" class="second-level">推广收益明细</router-link>
				<router-link to="/agent/inviteWithdraw" class="second-level">推广提现记录</router-link>
			</div>
		</div>
		<div class="nav-one">
			<router-link to="/agent/merchants" class="first-level">商户管理</router-link><Icon type="ios-arrow-right" class="arrow-icon":size="20"></Icon>
			<div class="nav-two">
				<router-link to="/agent/merchants" class="second-level">商户列表</router-link>
				<router-link to="/agent/addMerchants" class="second-level">添加商户</router-link>
			</div>
		</div>
		<div class="nav-one">
			<router-link to="/agent/achievement" class="first-level">业绩管理</router-link><Icon type="ios-arrow-right" class="arrow-icon" :size="20"></Icon>
			<div class="nav-two">
				<router-link to="/agent/achievement" class="second-level">业绩统计</router-link>
				<router-link to="/agent/achievementWithdraw" class="second-level">提现明细</router-link>
			</div>
		</div>
		<div class="nav-one no-children">
			<router-link to="/agent/rank"  class="first-level">排行榜</router-link>
		</div>

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

.nav-one:hover .arrow-icon{
	right: 10px;
}
.arrow-icon{
	position: absolute;
	top: 20px;
	right: 60px;
	transition: right .4s; 
	color: @gray-one;
}
.second-level:hover{
	color: @theme;
}
.second-level{
	display: block;
	width: 128px;
	font-size: @fz;
	height: 44px;
	line-height: 44px;
	text-align: center;
	color: @gray-three;
}
.first-level{
	display: block;
	height: 100%;
	font-size: 16px;
	text-align: center;
	line-height: 58px;
	color: @gray-three;
}
.nav-two{
	position: absolute;
	left: 268px;
	top: -1px;
	border: 1px solid @border-two;
	border-left: none;
	display: none;
	background-color: @white;
	z-index: 1;
}
.nav-one:hover .nav-two{
	display: block;
}
.nav-one:hover{
	background-color: @white;
	width: 269px;
}
.nav-one.no-children:hover{
	background-color: @white;
	width: 268px;
}
.nav-one{
	position: relative;
	height: 58px;
	border-bottom: 1px solid @border-two;
}
</style>