<template>
	<div class="clearfix news-item-container">
		<div class="top">
			<span class="title">全国首批理财说明会在重庆圆满谢幕</span>	
			<div class="auxiliary-msg clearfix">
				<span class="origin fl">来源：余惠宝</span>
				<span class="time fr">发布时间：2017-04-01 13:51:55</span>
			</div>
		</div>
		<div class="news-content clearfix">
			由于此前余惠宝2.0版本上线初期处理新老版本对接事宜繁忙，致使有奖征文活动虽得到家人们的踊跃支持，但未能有效落实。余惠宝产品新闻部谨此致以诚挚的歉意。

			本次有奖征文活动即将正式拉开序幕。即日起，平台所有新老用户可将自己的理财心得，通过各种方式发送给我们，具体内容如下：
			
			一、活动对象：平台所有新老客户
			
			二、活动时间：即日起至6月20日
			
			三、字数要求：500字以上
			
			四、参与方式
			
			1、将征文以电子文档的形式发送至邮箱：yhb_calvinchen@163.com
			
			2、将手写的文稿以图片的形式发送至微信公众号：余惠宝理财
			
			3、将手写的文稿以图片的形式发送至理财经理处。
			
			4、参与投稿的用户，请准备一张生活照，作为投票头像使用。
			
			五、奖项设置
			
			一等奖 1000元   1名
			
			二等奖 500元    1名
			
			三等奖 200元    1名
			
			六、投票方式
			
			投稿结束后，我们将通过网络投票的方式评选出各项奖项
		</div>
		<div class="news-foot">
			<router-link class="news-nav fl" to="/">上一篇：余惠宝理财心得征文活动</router-link>
			<router-link class="news-nav fr" to="/">下一篇：2017年端午节假期运营公告</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
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