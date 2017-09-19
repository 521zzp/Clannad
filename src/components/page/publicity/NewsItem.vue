<template>
	<div class="clearfix news-item-container">
		<div class="top">
			<span class="title">{{news.title}}</span>	
			<div class="auxiliary-msg clearfix">
				<span class="origin fl">来源：{{news.origin}}</span>
				<span class="time fr">发布时间：{{news.time}}</span>
			</div>
		</div>
		<div class="news-content clearfix" v-html="news.content">
		</div>
		<div class="news-foot">
			<router-link v-if="!!news.previous.title" class="news-nav fl" :to="'/publicity/news/' + news.previous.id">上一篇：{{news.previous.title}}</router-link>
			<span v-else class="news-nav fl" >上一篇：无</span>
			<router-link v-if="!!news.next.title" class="news-nav fr" :to="'/publicity/news/' + news.next.id">下一篇：{{news.next.title}}</router-link>
			<span v-else class="news-nav fr" >下一篇：无</span>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	computed: {
		news () {
			return this.$store.state.publicity.newsDetails
		}
	},
	watch: {
	    '$route' (to, from) {
	    	this.$store.dispatch('publicityNewsDetails', {id: this.$route.params.id})
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
					name: '掌柜新闻',
					url: ''
				},
			];
		this.$store.dispatch('publicityBreadChange', bread)
		this.$store.dispatch('publicityNavChange', 2)
	},
	created () {
		this.$store.dispatch('publicityNewsDetails', {id: this.$route.params.id})
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.title{
	display: block;
	font-size: 18px;
	color: @gray-three;
	text-align: center;
	font-weight: 600;
}
.news-foot{
	height: 72px;
	line-height: 72px;
	color: @gray-one;
}
.news-nav:hover{
	color: @linkc;
}
.news-nav{
	color: @gray-one;
}
.top{
	height: 114px;
	border-bottom: 1px dashed @border-one;
	overflow: hidden;
}
.news-item-container{
	width: 100%;
	padding: 48px 48px 0px 48px;
}
.auxiliary-msg{
	color: @gray-one;	
	margin-top: 60px;
}
.news-content{
	min-height: 790px;
	padding-top: 34px;
	border-bottom: 1px solid @border-two;
}
</style>