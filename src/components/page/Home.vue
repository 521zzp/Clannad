<template>
	<div>
		<AHeader/>
		<Banner/>
		<Notice/>
		<Show v-if="trade"/>
		<Hot :main="main" :time="countSec"/>
		<Products :list="products"/>
		<Agent v-if="trade"/>
		<News :news="news" :invest="investRecords"/>
		<Partner v-if="trade"/>
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
import {countDownSec, countDownMiliSec} from '@/tool/date'

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
	},
	computed: {
		products () {
			return this.$store.state.home.products
		},
		main () {
			return this.$store.state.home.main
		},
		countSec () {
			let timeObj = null;
			let secKilling = false;
			if (this.$store.state.home.main.startMilliseconds > 0 ) {
				if (this.$store.state.home.main.startMilliseconds > this.$store.state.home.main.startMillFlag) {
					secKilling = false
					timeObj =  countDownSec(this.$store.state.home.main.startMilliseconds)
				} else{
					secKilling = true
					timeObj = countDownMiliSec(this.$store.state.home.main.startMilliseconds)
				}
			} else {
				if (this.$store.state.home.main.endMilliseconds > this.$store.state.home.main.endMillFlag) {
					secKilling = false
					timeObj = countDownSec(this.$store.state.home.main.endMilliseconds)
				} else{
					secKilling = true
					timeObj = countDownMiliSec(this.$store.state.home.main.endMilliseconds)
				}
			}
			return Object.assign(timeObj, {secKilling: secKilling})
		},
		trade () {
			return this.$store.state.trade
		},
		news () {
			return this.$store.state.home.newsList
		},
		investRecords () {
			return this.$store.state.home.investList
		}
	},
	mounted () {
		this.$store.dispatch('homeProducts') //产品列表
		this.$store.dispatch('homeInvestRecords') //投资记录
		this.$store.dispatch('homeNewsList') //新闻列表
	}
}
</script>

<style>
</style>