<template>
	<div class="clearfix">
		<b class="user-account-common-title">代理平台</b>
		
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
					name: '余惠宝',
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

</style>