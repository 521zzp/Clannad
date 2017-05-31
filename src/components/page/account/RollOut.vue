<template>
	<div>
		<b class="user-account-common-title">转出</b>
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
					name: '账户总览',
					url: '/account'
				},
				{
					name: '转出',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
}
</script>

<style scoped="scoped" lang="less">
</style>