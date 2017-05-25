<template>
	<img class="fl" :src="img" alt=""/>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/bank-deposit.png' 
		}
	}
}
</script>

<style>
</style>