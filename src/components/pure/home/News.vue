<template>
	<div class="container clearfix">
		<div class="fl news">
			<div class="title">
				<span class="one">惠宝新闻</span>
				<span class="two">惠生活 惠理财</span>
			</div>
			<div class="content">
				<div class="p fl clearfix">
					<router-link to="/publicity/news/1" class="a clearfix">
						<img :src="newsImg" alt="" />
						<span class="hidden-msg">全国首批理财说明会在重庆圆满谢幕</span>
					</router-link>
					<router-link to="/publicity/news/2" class="a clearfix">
						<img :src="newsImg" alt="" />
						<span class="hidden-msg">在余惠宝理财，你还在担心这些资金安全问题吗？</span>
					</router-link>
				</div>
				<div class="t fr clearfix">
					<ul class="clearfix">
						<li>
							<router-link to="/publicity/news/52" class="b clearfix">
								<span class="time">03.06.</span>
								<em></em>
								<span class="news-title">诚挚祝贺余惠宝受邀参加北京中国互联网金融协会第一次高级管理员培训！</span>
							</router-link>
						</li>
						<li>
							<router-link to="/publicity/news/53" class="b clearfix">
								<span class="time">03.10.</span>
								<em></em>
								<span class="news-title">余惠宝祝贺首期互联网金融从业机构高管培训（第一期）圆满落幕</span>
							</router-link>
						</li>
						<li>
							<router-link to="/publicity/news/54" class="b clearfix">
								<span class="time">03.15.</span>
								<em></em>
								<span class="news-title">余惠宝2.0正式上线了！</span>
							</router-link>
						</li>
						<li>
							<router-link to="/publicity/news/55" class="b clearfix">
								<span class="time">05.07.</span>
								<em></em>
								<span class="news-title">余惠宝诚邀您参加一周年庆典暨客户答谢会活动</span>
							</router-link>
						</li>
						<li>
							<router-link to="/publicity/news/56" class="b clearfix">
								<span class="time">05.20.</span>
								<em></em>
								<span class="news-title">关于余惠宝的这件事，你知道吗？</span>
							</router-link>
						</li>
						<li>
							<router-link to="/publicity/news/54" class="b clearfix">
								<span class="time">06.01.</span>
								<em></em>
								<span class="news-title">4.21余惠宝app版本更新公告</span>
							</router-link>
						</li>
					</ul>
					<div class="more">
						<router-link to="/publicity/news" class="fr clearfix">
							查看更多>>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="fr record">
			<div class="title">
				<span class="one">投资记录</span>
				<span class="two">惠生活 惠理财</span>
			</div>
			<div class="record-list">
				<ul class="clearfix">
					<swiper class="swiper-group fl" :options="swiperOption" ref="mySwiper">
					  <swiper-slide class="swiper-no-swiping swiper-item" v-for="slide,index in swiperSlides" key="index">
					  		<li class="clearfix">
								<span class="fl">138****4562</span>
								<span class="fr">投资<span class="money">2465</span>元</span>
							</li>
					  </swiper-slide>
					</swiper>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {IMG} from '@/config/url'
	export default {
	  name: 'carrousel',
	  data() {
	    return {
	      swiperOption: {
	      	autoplay:100,
	        speed:1000,
	        loop:true,
	        loopedSlides: 15,
			slidesPerView : 'auto',
	        direction: 'vertical',
	        pagination : '.swiper-pagination',
	      },
	      swiperSlides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	      newsImg: IMG + '/temp/news-img.png'
	    }
	  },
	  computed: {
	    swiper() {
	      return this.$refs.mySwiper.swiper
	    },
	  },
	  methods: {
	  }
	}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.container{
	width: @mw;
	margin-top:10px;
	margin-left: auto;
	margin-right:auto;
	margin-bottom: 20px;
}
.a:hover .hidden-msg{
	bottom: 0;
}
.news-title{
	color: @gray-one;
}
.news-title:hover{
	color: @theme;
}
.hidden-msg{
	position: absolute;
	display: block;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	padding:0 5%;
	background-color: rgba(0, 0, 0, 0.5);
	margin-left: auto;
	margin-right: auto;
	height: 36px;
	overflow: hidden;
	bottom: -36px;
	left: 0;
	right: 0;
	color: @white;
}
.more a{
	display: inline-block;
	color: @theme;
}
.swiper-item{
	height: 32px;
}
.swiper-group{
	width: 100%;
	height: 250px;
}
.record-list .money{
	color: @theme;
}
.record-list ul li{
	font-size: @fz;
	color: @gray-three;
	display: block;
	margin: 5px auto;
}
.record-list ul{
	display: block;
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
	margin-top: 5%;
	width: 80%;
	height: 90%;
}
.record-list{
	height: 280px;
	border: 1px solid @border-two;
	background-color: @white;
}
.record{
	width: 340px;
}
.b em{
	height: 18px;
    width: 1px;
    display: inline-block;
    vertical-align: -4px;
	background-color: @border-two;
	margin:0 8px
}
.b{
	display: block;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color: @gray-three;
}
.t li{
	color: @theme;
}
.t{
	font-size: @fz;
	width: 560px;
	margin-right: 38px;
	font-size: 14px;
	line-height: 34px;
	margin-top: 26px;
}
.a{
	display: block;
	width: 180px;
	height: 112px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 18px;
	overflow: hidden;
	position: relative;
}
.a>img{
	width: 100%;
	height: 100%;
}
.p{
	height: 100%;
	width: 230px;
}
.news .content{
	height: 280px;
	border: 1px solid @border-two;
	background-color: @white;
	overflow: hidden;
}
.news{
	width: 840px;
}
.title{
	margin: 10px 0;
}
.title .two{
	font-size: @fz;
	color: @gray-one;
	margin-left: 30px;
	vertical-align: -1px;
}
.title .one{
	font-size: @fz + 6;
	color: @gray-three;
}
</style>