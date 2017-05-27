<template>
	<img class="fl" :src="img" alt=""/>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/yhb-illustrate.png' 
		}
	}
}
</script>

<style>
</style>