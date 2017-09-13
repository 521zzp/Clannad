<template>
	<div class="clearfix">
		<b class="user-account-common-title">代理平台</b>
		<router-link to="/agent">代理商</router-link>
		<div class="platform">
			<div class="distributor fl platform-door">
				<div class="condition">
					<span style="display: block;">申请条件：</span>
					<span style="display: block;">（1）、普通投资者想成为经销商，首次购买理财产品数额必须达到5万</span>
					<span style="display: block;">（2）、掌柜金服星级商户，每日收益未0.3%00（万分之零点三），可发展自己的团队，星级商户享有直接推荐人理财额的0.3%00每日分润（万分之零点三）无团队奖金</span>
				</div>
				<router-link to="/distributor" class="apply-btn">申请经销商</router-link>
			</div>
			<div class="agent fr platform-door">
				<div class="condition">
					<span style="display: block;">申请条件：</span>
					<span style="display: block;">（1）、普通投资者想成为经销商，首次购买理财产品数额必须达到5万</span>
					<span style="display: block;">（2）、掌柜金服星级商户，每日收益未0.3%00（万分之零点三），可发展自己的团队，星级商户享有直接推荐人理财额的0.3%00每日分润（万分之零点三）无团队奖金</span>
				</div>
				<router-link to="/agent" class="apply-btn">进入代理商</router-link>
			</div>
		</div>
		 
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	mounted () {
		let bread = [
				{
					name: '掌柜金服',
					url: '/'
				},
				{
					name: '我的账户',
					url: '/account'
				},
				{
					name: '银行卡管理',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.apply-btn:hover{
	background-color: lighten(@theme,5%);
}
.apply-btn{
	display: block;
	width: 220px;
	height: 40px;
	position: absolute;
	bottom: 16px;
	color: @white;
	background-color: @theme;
	border-radius: @bbr;
	border: none;
	margin: 0 auto;
	text-align: center;
	line-height: 40px;
	left: 0;
	right: 0;
	cursor: pointer;
}
.platform{
	height: 420px;
	margin-top: 126px;
}
.agent{
	border-left: 1px solid @border-two;
}
.distributor{
	border-right: 1px solid @border-two;
}
.platform-door{
	height: 100%;
	width: 50%;
	position: relative;
	padding: 64px 32px 0 32px;
}
</style>