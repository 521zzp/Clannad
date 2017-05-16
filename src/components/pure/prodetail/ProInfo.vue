<template>
	<div>
		<div class="title">{{product.name}}</div>	
		<div class="detail-info clearfix">
			<div class="rate sec fl">
				<span class="value">{{product.rate.toFixed(2)}}<span class="value-end">%</span></span>
				<span class="desc">预期年利率</span>
			</div>
			<div class="memberRate sec fl">
				<span class="value">{{product.memberRate.toFixed(2)}}<span class="value-end">%</span></span>
				<span class="desc">会员年利率</span>
			</div>
			<div class="day sec fl">
				<span class="value">{{product.day}}<span class="value-end">天</span></span>
				<span class="desc">项目期限</span>
			</div>
			<div class="progress sec fl">
				<Progress class="i-pro-detail-progress" :percent="product.percent" 
					status="active" :stroke-width="6" hide-info></Progress>
				<span class="desc">进度：{{product.percent}}%</span>
			</div>
		</div>
		<div class="more-detail-info clearfix">
			<div class="one fl">
				<span class="more-detail-item">总金额：<span>{{product.total / 10000}}万元</span></span>
				<span class="more-detail-item">发布时间：<span>{{product.time}}</span></span>
			</div>
			<div class="two fl">
				<span class="more-detail-item">起投金额：<span>{{product.min}}元</span></span>
			</div>
			<div class="three fl">
				<span class="more-detail-item">剩余可投：<span>{{product.left}}元</span></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["product"],
	data () {
		return {
			
		}
	}
}
</script>

<style lang="less" scoped="scoped">
@import '../../../config/base.less';
.more-detail-item span{
	color: @gray-three;
}
.more-detail-item{
	font-size: @fz;
	color: @gray-one;
	margin-bottom: @bfz;
}
.three{
	margin-left: 76px;
}
.two{
	margin-left: 110px;
	width: 140px;
}
.one{
	width: 190px;
}
.more-detail-info{
	margin-top: 58px;
}
.more-detail-info>div>span{
	display: block;
}
.i-pro-detail-progress{
	margin-top: 20px;
}
.progress .desc{
	margin-top: 26px;
}
.progress{
	width: 200px;
	margin-left: 140px;
}
.detail-info{
	margin-top: 30px;
}
.day{
	margin-left: 110px;
}
.day .value{
	font-size: @sfz * 3;
}
.value-end{
	font-size: @bfz;
}
.memberRate{
	padding-left: 18px;
}
.desc{
	margin-top: 10px;
	font-size: @fz;
	color: @gray-one;
}
.memberRate .desc{
	margin-top: 12px;
}
.memberRate .value{
	font-size: @fz * 2;
	margin-top: 10px;
	color: @theme;
}
.rate .value{
	font-size: @sfz * 3;
	color: @theme;
}
.rate{
	padding-right: 18px;
	border-right: 1px dashed @border-two;
}
.sec>span{
	display: block;
}
.info{
	width: 812px;
	height: 330px;
	border: 1px solid @border-two;
	border-top: 3px solid @theme;
	background-color: @white;
	padding: 0 30px;
}
.title{
	height: 64px;
	line-height: 64px;
	font-size: @fz + 6;
	color: @gray-three;
	border-bottom: 1px solid @border-two ;
}
</style>