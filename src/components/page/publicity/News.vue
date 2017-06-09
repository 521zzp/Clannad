<template>
	<div class="clearfix">
		<div class="clearfix top-bg">
			<img :src="img" alt="" />
		</div>
		<span class="title">惠宝新闻</span>
		<div class="content clearfix">
			<ul class="clearfix">
				<li class="clearfix news-tiem" v-for="item in lsits">
					<router-link :to="'/publicity/news/' + item.id" class="link-item">
						<img :src="item.img" alt="" class="item-img fl"/>
						<div class="item-msg fr">
							<div class="item-title clearfix">
								<span class="name fl">{{item.title}}</span>
								<span class="time fr">{{item.time}}</span>
							</div>
							<span class="desc">{{item.content}}</span>
						</div>
					</router-link>
				</li>
			</ul>
			<div class="common-center-page-wrap">
        		<Page :total="total" size="small" class="common-center-page-nav" @on-change="change" :page-size="size"></Page>
        	</div>
		</div>
	</div>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/news-top-bg.png',
			size: 4, //每页数据条数
		}
	},
	computed: {
		total () {
			return this.$store.state.publicity.newsTotal
		},
		lsits () {
			return this.$store.state.publicity.newsList
		}
	},
	watch : {
		total : function () {
			console.log('News.vue')
			console.log(this.total)
			this.$store.dispatch('publicityNewsList', {size: this.size, current: 1})
		}
	},
	methods: {
		change (current) {
			this.$store.dispatch('publicityNewsList', {size: this.size, current: current})
		}
	},
	mounted () {
		let bread = [
				{
					name: '余惠宝',
					url: '/'
				},
				{
					name: '信息披露',
					url: '/publicity/introduce'
				},
				{
					name: '惠宝新闻',
					url: ''
				},
			];
		this.$store.dispatch('publicityBreadChange', bread)
		this.$store.dispatch('publicityNavChange', 2)
		this.$store.dispatch('publicityNewsTotal') //新闻列表总数
	},
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.news-tiem{
	display: block;
}
.desc{
	display: block;
	height: 80px;
	margin-top: 18px;
	text-indent: 2em;
	overflow: hidden;
}
.name{
	font-weight: 600;
	color: @gray-three;
}
.item-msg{
	width: 580px;
}
.item-img{
	width: 200px;
	height: 120px;
}
.link-item{
	display: block;
	height: 172px;
	padding: 26px 0;
	font-size: @fz;
	color: @gray-one;
	border-bottom: 1px solid @border-two;
}
.content{
	width: 810px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 76px;
}
.title{
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 120px;
	height: 34px;
	background-color: #98d1ff;
	border-radius: 17px;
	border: none;
	text-align: center;
	line-height: 34px;
	color: @white;
	font-weight: 600;
	font-size: @bfz;
	margin-top: 46px;
}
</style>