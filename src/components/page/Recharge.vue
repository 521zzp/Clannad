<template>
	<div class="clearfix">
		<AHeader/>
		<form :action="action" method="post" id="form">
			<input v-for="(value, key) in items" type="text" :name="key" :value="value" />
			
			<input type="submit" value=""/>
		</form>
		<AFooter/>
	</div>
	
</template>

<script>
	import AHeader from '@/components/pure/common/AHeader'
	import AFooter from '@/components/pure/common/AFooter'
	export default {
		data () {
			return {
				
			}
		},
		components:{
			AHeader,
			AFooter
		},
		mounted () {
			this.$store.dispatch('recharge');
		},
		computed: {
			action () {
				return this.$store.state.recharge.action
			},
			items () {
				return this.$store.state.recharge.items
			},
			count () {
				return this.$store.state.recharge.count
			}
		},
		watch: {
			count () {
				setTimeout(function(){
					document.getElementById("form").submit();
				},5000)
			}
		}
		
	}
</script>

<style lang="less">
</style>
