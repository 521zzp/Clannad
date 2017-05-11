<template>
	<div class="container clearfix">
		<router-link to="/regist" class="clearfix fr pic-link">
			<img src="../../../assets/home/about-yhb.png" alt="一分钟了解余惠宝" />
		</router-link>
		<div v-if="main.type === 0" class="main-product">
			<span class="label">热门</span>
			<span class="title fl">热门活动</span>
			<div class="content clearfix fl">
				<div class="rate fl clearfix">
					<span class="rate-value">{{main.rate}}%</span>
					<span class="desc">年化收益率</span>
				</div>
				<div class="day fl clearfix">
					<span class="day-value">{{main.day}}<span>天</span></span>
					<span class="desc">投资期限</span>
				</div>
				<div class="buy fr clearfix">
					<span class="buy-now">立即投资</span>
					<span class="desc">已购：{{main.people}}人</span>
				</div>
			</div>
		</div>
		<router-link to="/regist" class="clearfix fl pic-link">
			<img src="../../../assets/home/sprog-gift.png" alt="新手福利" />
		</router-link>
	</div>
</template>

<script>
	export default {
		props: ['main'],
		computed: {
		},
	}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.main-product{
	width: 580px;
	height: 222px;
	display: inline-block;
	border: 1px solid @theme;
	background-color: #ffffff;
	position: relative;
	overflow: hidden;
}
.buy-now{
	color: #FFFFFF;
	background-color: @theme;
	padding: 8px 23px;
	border-radius: @bbr;
	text-align: center;
	font-size: @fz + 2;
	cursor: pointer;
	margin-top: 16px;
	margin-bottom: 28px;
}
.desc{
	margin-top: 10px;
	font-size: @fz;
	color: @gray-one;
}
.day{
	margin-left: 55px;
}
.day-value{
	color: @gray-three;
	font-size: 30px;
	height:75px;
	line-height: 85px;
}
.day-value span{
	font-size: 18px;
	vertical-align: 3px;
}
.rate-value{
	font-size: 50px;
	color: @theme;
}
.content>div>span{
	display: block;
}
.content{
	display: block;
	width: 100%;
	text-align: left;
	margin-top: 20px;
	padding: 0 26px 0 48px;
	
}
.title{
	font-size: @sfz * 2;
	color: @gray-three; 
	margin-left: 80px;
	margin-top: 20px;
}
.main-product .label{
	background-color: @theme;
	color: #ffffff;
	font-size: @bfz;
	position: absolute;
	width: 100px;
	left: -26px;
	top: 10px;
	transform: rotateZ(-45deg);
}
.container{
	width: @mw;
	margin-top: 20px;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
}



</style>