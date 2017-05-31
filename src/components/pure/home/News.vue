<template>
	<div class="container clearfix">
		<div class="fl news">
			<div class="title">
				<span class="one">惠宝新闻</span>
				<span class="two">惠生活 惠理财</span>
			</div>
			<div class="content">
				<div class="p fl clearfix">
					<router-link to="/regist" class="a clearfix">
						<img src="//i0.hdslb.com/bfs/archive/0b787d2a3b6b81ed14a363368b86b5ae33dc92fb.jpg" alt="" />
						<span class="hidden-msg">我看完评论后完评论后谁完评论后谁都不服，完评论后谁都不服，都不服，完评论后谁都不服，谁都不服，就服你！虚渊玄被沙耶追杀</span>
					</router-link>
					<router-link to="/regist" class="a clearfix">
						<img src="//i0.hdslb.com/bfs/archive/0b787d2a3b6b81ed14a363368b86b5ae33dc92fb.jpg" alt="" />
						<span class="hidden-msg">我看完评论后谁都不服，就服你！虚渊玄被沙耶追杀</span>
					</router-link>
				</div>
				<div class="t fr clearfix">
					<ul class="clearfix">
						<li>
							<router-link to="/regist" class="b clearfix">
								<span class="time">03.06.</span>
								<em></em>
								<span class="news-title">我看完评论后谁都不服，就服你！虚渊玄被沙耶追杀（翠星上的加尔刚提亚还好）。冈本伦被露西碎尸万段。（极黑的不论希尔特还没那么操蛋）</span>
							</router-link>
						</li>
						<li>
							<router-link to="/regist" class="b clearfix">
								<span class="time">03.06.</span>
								<em></em>
								<span class="news-title">我看完评论后谁都不服，就服你！虚渊玄被沙耶追杀（翠星上的加尔刚提亚还好）。冈本伦被露西碎尸万段。（极黑的不论希尔特还没那么操蛋）</span>
							</router-link>
						</li>
						<li>
							<router-link to="/regist" class="b clearfix">
								<span class="time">03.06.</span>
								<em></em>
								<span class="news-title">我看完评论后谁都不服，就服你！虚渊玄被沙耶追杀（翠星上的加尔刚提亚还好）。冈本伦被露西碎尸万段。（极黑的不论希尔特还没那么操蛋）</span>
							</router-link>
						</li>
						<li>
							<router-link to="/regist" class="b clearfix">
								<span class="time">03.06.</span>
								<em></em>
								<span class="news-title">我看完评论后谁都不服，就服你！虚渊玄被沙耶追杀（翠星上的加尔刚提亚还好）。冈本伦被露西碎尸万段。（极黑的不论希尔特还没那么操蛋）</span>
							</router-link>
						</li>
						<li>
							<router-link to="/regist" class="b clearfix">
								<span class="time">03.06.</span>
								<em></em>
								<span class="news-title">我看完评论后谁都不服，就服你！虚渊玄被沙耶追杀（翠星上的加尔刚提亚还好）。冈本伦被露西碎尸万段。（极黑的不论希尔特还没那么操蛋）</span>
							</router-link>
						</li>
						<li>
							<router-link to="/regist" class="b clearfix">
								<span class="time">03.06.</span>
								<em></em>
								<span class="news-title">我看完评论后谁都不服，就服你！虚渊玄被沙耶追杀（翠星上的加尔刚提亚还好）。冈本伦被露西碎尸万段。（极黑的不论希尔特还没那么操蛋）</span>
							</router-link>
						</li>
					</ul>
					<div class="more">
						<router-link to="/regist" class="fr clearfix">
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
								<span class="fr">投资<span class="money">666465</span>元</span>
							</li>
					  </swiper-slide>
					</swiper>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
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
	      swiperSlides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
	    }
	  },
	  computed: {
	    swiper() {
	      return this.$refs.mySwiper.swiper
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