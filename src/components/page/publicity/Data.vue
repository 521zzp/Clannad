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
	}
}
</script>

<style>
</style>