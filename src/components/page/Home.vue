<template>
	<div>
		<AHeader/>
		<Banner/>
		<Notice/>
		<Show/>
		<Hot/>
		<Products/>
		<Agent/>
		<News/>
		<Partner/>
		<AFooter/>
		
	</div>
</template>

<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
import Banner from '@/components/pure/home/Banner'
import Notice from '@/components/pure/home/Notice'
import Show from '@/components/pure/home/Show'
import Hot from '@/components/pure/home/Hot'
import Products from '@/components/pure/home/Products'
import Agent from '@/components/pure/home/Agent'
import News from '@/components/pure/home/News'
import Partner from '@/components/pure/home/Partner'

export default {
	components:{
		AHeader,
		AFooter,
		Banner,
		Notice,
		Show,
		Hot,
		Products,
		Agent,
		News,
		Partner
	}
}
</script>

<style>
</style>