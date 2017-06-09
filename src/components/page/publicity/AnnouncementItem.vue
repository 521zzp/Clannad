<template>
	<div class="clearfix news-item-container">
		<div class="top">
			<span class="title">{{announcement.title}}</span>	
			<div class="auxiliary-msg clearfix">
				<span class="origin fl">来源：{{announcement.origin}}</span>
				<span class="time fr">发布时间：{{announcement.time}}</span>
			</div>
		</div>
		<div class="news-content clearfix" v-html="announcement.content">
		</div>
		<div class="news-foot">
			<router-link v-if="!!announcement.previous.title" class="news-nav fl" :to="'/publicity/announcement/' + announcement.previous.id">上一篇：{{announcement.previous.title}}</router-link>
			<span v-else class="news-nav fl" >上一篇：无</span>
			<router-link v-if="!!announcement.next.title" class="news-nav fr" :to="'/publicity/announcement/' + announcement.next.id">下一篇：{{announcement.next.title}}</router-link>
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
		announcement () {
			return this.$store.state.publicity.announcementDetails
		}
	},
	watch: {
	    '$route' (to, from) {
	    	this.$store.dispatch('publicityAnnouncementDetails', {id: this.$route.params.id})
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
	},
	created () {
		this.$store.dispatch('publicityAnnouncementDetails', {id: this.$route.params.id})		
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