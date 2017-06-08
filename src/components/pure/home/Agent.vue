<template>
	<div class="container clearfix">
		<div class="prev sw-change fl" @click="prev"></div>
		<swiper class="swiper-group fl" :options="swiperOption" ref="mySwiper">
		  <swiper-slide class="swiper-no-swiping swiper-item fl" v-for="slide,index in swiperSlides" key="index">
		  		<div class="agent-item ">
		  			<div class="face">
		  				<img class="agent-img" :src="face" alt="" />
		  				<div class="face-bg bg-gold"></div>
		  			</div>
		  			<div class="agent-info">
		  				<span title="辽林省本溪市">地区：辽林省本溪市</span>
		  				<span>姓名：马**</span>
		  				<span>电话：182****2222</span>
		  			</div>
		  		</div>
		  </swiper-slide>
		</swiper>
		<div class="next sw-change fr" @click="next"></div>
	</div>
</template>

<script>
	import {IMG} from '@/config/url'
	export default {
	  name: 'carrousel',
	  data() {
	    return {
	      swiperOption: {
	      	autoplay: 3000,
	        loop:true,
	        loopedSlides: 15,
	        slidesPerView : 'auto',
	        autoplayDisableOnInteraction : false,
	        pagination : '.swiper-pagination',
	        observeParents:true,
	      },
	      swiperSlides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
	    }
	  },
	  computed: {
	    swiper() {
	      return this.$refs.mySwiper.swiper
	    },
	    face () {
	    	return IMG + '/temp/face.jpg'
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

<style lang="less" scoped="scoped">
@import '../../../config/base.less';
.container{
	width: @mw;
	margin:0 auto;
	background-color: @white;
	padding: 12px 0;
}
.swiper-item{
	width: 183px;
}
.agent-info>span{
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.agent-info{
	width: 118px;
	margin-top: 10px;
	margin-left: auto;
	margin-right: auto;
}
.bg-gold{
	background-image: url(../../../assets/home/gold.png);
}
.face-bg{
	width: 100%;
	height: 100%;
	position: absolute;
}
.face{
	width: 118px;
	height: 144px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 8px;
	position: relative;
}
.agent-img{
	width: 104px;
	height: 104px;
	border-radius: 50%;
	overflow: hidden;
	position: absolute;
	background-image: url(../../../assets/home/agent-default.png);
	background-size: 100% 100%;
	left: 0;
	right: 0;
	margin: 0 auto;
	top: 2px;
}
.prev:hover{
	background-image: url(../../../assets/home/swiper-prev-hover.png);
}
.prev{
	background-image: url(../../../assets/home/swiper-prev.png);
}
.next:hover{
	background-image: url(../../../assets/home/swiper-next-hover.png);
}
.next{
	background-image: url(../../../assets/home/swiper-next.png);
}
.sw-change{
	width: 50px;
	height: 230px;
	display: inline-block;
	cursor: pointer;
	background-repeat: no-repeat;
	background-position: center;
}
.swiper-group{
	width: @mw - 100;
	height: 230px;
	overflow: hidden;
	display: inline-block;
	border-left: 1px solid @border-two;
	border-right: 1px solid @border-two;
}
.agent-item{
	height: 230px;
	cursor: pointer;
}
</style>