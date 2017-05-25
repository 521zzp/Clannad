<template>
	<img :src="img" alt="" />
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/yhb-provisions.png' 
		}
	}
}
</script>

<style>
</style>