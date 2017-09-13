<template>
	<img :src="img" alt="" />
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/statistics-data.png' 
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
					name: '平台数据',
					url: ''
				},
			];
		this.$store.dispatch('publicityBreadChange', bread)
		this.$store.dispatch('publicityNavChange', 1)
	},
}
</script>

<style>
</style>