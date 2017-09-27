<template>
	<div class="container clearfix">
		<div class="fl news">
			<div class="title">
				<span class="one">掌柜新闻</span>
				<span class="two">您的理财掌柜</span>
			</div>
			<div class="content">
				<div class="p fl clearfix">
					<template v-for="item,index in picList">
						<router-link v-if="item.type === 'in'" :to="'/publicity/news/' + item.id" class="a clearfix">
							<img :src="item.img" alt="" />
							<span class="hidden-msg">{{item.title}}</span>
						</router-link>
						<a v-if="item.type === 'out'" target="_blank" :href="item.link" class="a clearfix">
							<img :src="item.img" alt="" />
							<span class="hidden-msg">{{item.title}}</span>
						</a>
					</template>
				</div>
				<div class="t fr clearfix">
					<ul class="clearfix">
						<li v-for="item,index in textList">
							<router-link v-if="item.type === 'in'" :to="'/publicity/news/' + item.id" class="b clearfix">
								<span class="time">{{item.time}}</span>
								<em></em>
								<span class="news-title">{{item.title}}！</span>
							</router-link>
							<a v-if="item.type === 'out'" target="_blank" :href="item.link" class="b clearfix">
								<span class="time">{{item.time}}</span>
								<em></em>
								<span class="news-title">{{item.title}}！</span>
							</a>
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
				<span class="two">您的理财掌柜</span>
			</div>
			<div class="record-list">
				<ul class="clearfix">
					<swiper v-if="investList.length > 0" class="swiper-group fl" :options="swiperOption" ref="mySwiper">
					  <swiper-slide class="swiper-no-swiping swiper-item" v-for="item,index in investList" key="index">
					  		<li class="clearfix">
								<span class="fl">{{item.phone}}</span>
								<span class="fr">投资<span class="money">{{item.money}}</span>元</span>
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
	  props: ['news', 'invest'],
	  name: 'carrousel',
	  data() {
	    return {
	      swiperOption: {
	      	autoplay: 100,
	        speed: 1000,
	        loop: true,
	        loopedSlides: this.invest.length,
			slidesPerView : 'auto',
	        direction: 'vertical',
	        pagination : '.swiper-pagination',
	      },
	      newsImg: IMG + '/temp/news-img.png'
	    }
	  },
	  computed: {
	    swiper() {
	      return this.$refs.mySwiper.swiper
	    },
	    textList () {
	    	return this.news.textList
	    },
	    picList () {
	    	return this.news.picList
	    },
	    investList () {
	    	return this.invest
	    },
	    trade () {
	    	return this.$store.state.trade
	    }
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
	border-radius: @br;
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
	border-radius: @br;
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