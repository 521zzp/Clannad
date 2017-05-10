<template>
	<div class="out clearfix">
		<div class="container clearfix">
			<div class="title">合作伙伴</div>
			<div class="content clearfix">
				<div class="prev sw-change fl" @click="prev">
					<Icon class="sw-change-arrow" type="ios-arrow-left" size=50></Icon>
				</div>
				<div class="swiper-content clearfix">
					<swiper class="swiper-group" :options="swiperOption" ref="mySwiper">
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="https://www.aliyun.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/aly.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.ayeshan.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/ays.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.fuioupay.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/fy.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.fjhxbank.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/hx.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.umpay.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/ld.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.cqxig.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/qx.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="https://www.thgo8.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/th.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.ips.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/xf.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://cn.unionpay.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/yl.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.epicc.com.cn/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/zgrm.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.cmbchina.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/zs.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://bank.ecitic.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/zx.jpg"/>
					  		</a>
					  </swiper-slide>
					</swiper>
				</div>
				<div class="next sw-change fr" @click="next">
					<Icon class="sw-change-arrow" type="ios-arrow-right" size=50></Icon>
				</div>
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
	      	autoplay:3000,
	        speed:1000,
	        loop:true,
	        loopedSlides: 12,
	        autoplayDisableOnInteraction : false,
			slidesPerView : 'auto',
	        pagination : '.swiper-pagination',
	      }
	    }
	  },
	  computed: {
	    swiper() {
	      return this.$refs.mySwiper.swiper
	    }
	  },
	  methods: {
	  	prev () {
	  		this.swiper.slidePrev();
	  	},
	  	next () {
	  		this.swiper.slideNext();
	  	}
	  }
	}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.out{
	background-color: @white;
	margin-top: 20px;
	height: 152px;
	overflow: hidden;
}
.swiper-content{
	width: 1100px;
	display: inline-block;
}
.sw-change:hover i{
	color: @theme;
}
.sw-change i{
	vertical-align: middle;
}
.sw-change{
	height: 60px;
	width: 30px;
	line-height: 60px;
	text-align: center;
	cursor: pointer;
}
.title{
	font-size: @fz + 6;
	color: @gray-three;
	margin-top: 20px;
}
.partnet-item>img{
	width: 100%;
	height: 100%;
}
.partnet-item{
	display: inline-block;
	width: 300px;
	height: 60px;
}
.swiper-item{
	width: 300px;
	display: inline-block;
}
.swiper-group{
	width: 900px;
	height: 60px;
}
.container{
	width: @mw;
	margin: 0 auto;
}

</style>