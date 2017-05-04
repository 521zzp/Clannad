<template>
	<div>
		<AHeader/>
		<Banner/>
		<Notice/>
		<Show/>
		<AFooter/>
		
	</div>
</template>

<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
import Banner from '@/components/pure/home/Banner'
import Notice from '@/components/pure/home/Notice'
import Show from '@/components/pure/home/Show'

export default {
	components:{
		AHeader,
		AFooter,
		Banner,
		Notice,
		Show
	}
}
</script>

<style>
</style>