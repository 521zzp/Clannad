<template>
	<img class="fl" :src="img" alt=""/>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/service-note.png' 
		}
	},
	mounted () {
		let bread = [
				{
					name: '掌柜金服',
					url: '/'
				},
				{
					name: '信息披露',
					url: '/publicity/introduce'
				},
				{
					name: '服务说明',
					url: ''
				},
			];
		this.$store.dispatch('publicityBreadChange', bread)
		this.$store.dispatch('publicityNavChange', 3)
	},
}
</script>

<style>
</style>