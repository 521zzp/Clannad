<template>
	<div class="clearfix">
		<b class="user-account-common-title">我的理财</b>
		<span class="yesterday">昨日收益（元）：<span class="theme-color">{{money}}</span></span>
		<Tabs class="only-financing-taps" value="on">
	        <Tab-pane label="持有中" name="on">
	        	<FinanceOn/>
	        </Tab-pane>
	        <Tab-pane label="转出中" name="out">
	        	<FinanceOut/>
	        </Tab-pane>
	        <Tab-pane label="已结束" name="end">
	        	<FinanceEnd/>
	        </Tab-pane>
	    </Tabs>
	</div>
</template>

<script>
import FinanceOn from '@/components/pure/account/FinanceOn'
import FinanceOut from '@/components/pure/account/FinanceOut'
import FinanceEnd from '@/components/pure/account/FinanceEnd'
export default {
	data () {
		return {
			
		}
	},
	computed: {
		money () {
			return this.$store.state.account.overViewCapital.yesterday
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
					name: '我的理财',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
		this.$store.dispatch('accYesterdayProfitGet')
	},
	components: {
		FinanceOn,
		FinanceOut,
		FinanceEnd
	}
}
</script>

<style lang="less">
@import '../../../config/base.less';
.only-financing-taps .ivu-tabs-nav .ivu-tabs-tab:hover{
	color: @theme;
}
.only-financing-taps .ivu-tabs-nav .ivu-tabs-tab{
		padding: 8px 63px;
	}
</style>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.theme-color{
	color: @theme;
}
.only-financing-taps{
	margin-top: 24px;
}
.yesterday{
	display: block;
	padding-bottom: 14px;
	margin-top: 38px;
	color: @gray-three;
	font-size: @bfz;
	border-bottom: 1px dashed @gray-one;
}

</style>