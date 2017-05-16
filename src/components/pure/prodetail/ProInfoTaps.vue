<template>
	<div class="clearfix my-proinfo-tabs">
		<Tabs type="card">
	        <Tab-pane label="借款企业信息" v-html="taps.receive">借款企业信息</Tab-pane>
	        <Tab-pane label="安全保障" v-html="taps.safeInsur">安全保障</Tab-pane>
	        <Tab-pane label="投资记录">
	        	<div class="record-title">
	        		<span class="re-col">投资人</span>
	        		<span class="re-col">投资人电话</span>
	        		<span class="re-col">投资金额（元）</span>
	        		<span class="re-col">投资时间</span>
	        	</div>
	        	<swiper class="swiper-group" :options="swiperOption" ref="mySwiper">
				  <swiper-slide class="swiper-no-swiping swiper-item" v-for="item,index in swiperSlides" key="index">
				  		<div class="record-item ">
				  			<span class="re-col">王**</span>
				  			<span class="re-col">187****5523</span>
				  			<span class="re-col"><span class="re-money">451</span>元</span>
				  			<span class="re-col">2017-04-25 15:45</span>
				  		</div>
				  </swiper-slide>
				</swiper>
	        	
	        	
	        	
	        	
	        </Tab-pane>
	        <Tab-pane label="回款计划" v-html="taps.enterprise">回款计划</Tab-pane>
	    </Tabs>
	</div>
</template>

<script>
export default {
	props: ['taps', 'list'],
	data () {
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
	}
}
</script>

<style lang="less">
@import '../../../config/base.less';
.my-proinfo-tabs .ivu-tabs-nav .ivu-tabs-tab:hover{
	color: @theme;
}
.my-proinfo-tabs  > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    border-radius: 0;
    background: #fff;
}
.my-proinfo-tabs > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
    border-top: 1px solid #3399ff;
}
.my-proinfo-tabs > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
}
.my-proinfo-tabs .ivu-tabs-tabpane{
	padding-left: 50px;
}
.my-proinfo-tabs .ivu-tabs-tabpane{
	font-size: @fz !important;
}
</style>
<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.swiper-group{
	height: 480px;
	margin-top: 10px;
}
.swiper-item{
	height: 40px;
	font-size: @sfz;
}
.re-col{
	width: 22%;
	display: inline-block;
	font-size: @sfz;
	text-align: center;
}
.re-money{
	color: @theme;
}
</style>