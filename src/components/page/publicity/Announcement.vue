<template>
	<div class="clearfix">
		<div class="clearfix top-bg">
			<img :src="img" alt="" />
		</div>
		<span class="title">官方公告</span>
		<div class="content clearfix">
			<ul class="clearfix">
				<li v-for="item,index in list" class="news-item clearfix">
					<router-link to="/" class="link-item">
						<span class="item-title fl">余惠宝2017年端午放假通知</span>
						<span class="item-time fr">2017-05-26</span>
					</router-link>
				</li>
			</ul>
			<div class="common-center-page-wrap">
        		<Page :total="400" size="small" class="common-center-page-nav"></Page>
        	</div>
		</div>
	</div>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/announcement-top-bg.png',
			list: [1, 2, 3, 4, 5, 6, 7, 8 ]
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
					name: '惠宝公告',
					url: ''
				},
			];
		this.$store.dispatch('publicityBreadChange', bread)
		this.$store.dispatch('publicityNavChange', 2)
	},
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.content{
	width: 810px;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
}
.link-item span{
	display: inline-block;
	line-height: 66px;
	vertical-align: middle;
}
.link-item{
	display: block;
	height: 66px;
	color: @gray-three;
	padding: 0 10px;
}
.news-item:hover{
	background-color: @gray-two;
}
.news-item{
	display: block;
	font-size: @fz;
	border-bottom: 1px solid @border-two;
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