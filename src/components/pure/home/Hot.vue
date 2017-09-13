<template>
	<div class="container clearfix">
		<router-link to="/guide" class="clearfix fr pic-link animated fadeInLeft" style="animation-delay: 1s;">
			<img src="../../../assets/home/about-yhb.png" alt="一分钟了解掌柜金服" />
		</router-link>
		<!--热门-->
		<div v-if="main.type === 0" class="main-product animated fadeInDown">
			<span class="label">热门</span>
			<span class="title fl">热门活动</span>
			<div class="content clearfix fl">
				<div class="rate fl clearfix">
					<span class="rate-value">{{main.rate}}%</span>
					<span class="desc">预期年化收益率</span>
				</div>
				<div class="day fl clearfix">
					<span class="day-value">{{main.day}}<span>天</span></span>
					<span class="desc">投资期限</span>
				</div>
				<div class="buy fr clearfix">
					<router-link v-if="trade" to="/product" class="buy-now">立即投资</router-link to="/product">
					<router-link v-else to="/app" class="buy-now">APP了解更多</router-link to="/product">
					<span class="desc">已购：{{main.people}}人</span>
				</div>
			</div>
		</div>
		<!--秒杀-->
		<div v-else class="main-product">
			<!--<span class="label">秒杀</span>-->
			<div class="time-count">
				<img class="fl" src="../../../assets/product-center/i-icon.png" alt=""/>
				<img class="fl clock" src="../../../assets/home/seckill-clock.png"/>
				<span v-if="time.secKilling" class="time-area">{{main.startMilliseconds >= 0 ? '倒计时' : '离结束'}}
					<span class="t-o w-two">{{time.min}}</span>分
					<span class="t-o w-two">{{time.sec}}</span>秒
					<span class="t-o w-three">{{time.mili}}</span>毫秒
				</span>
				<span v-else class="time-area">{{main.startMilliseconds >= 0 ? '倒计时' : '离结束'}}
					<span class="t-o w-two">{{time.day}}</span>天
					<span class="t-o w-two">{{time.hour}}</span>时
					<span class="t-o w-two">{{time.min}}</span>分
					<span class="t-o w-two">{{time.sec}}</span>秒
				</span>
			</div>
			
			<div class="content clearfix fl">
				<div class="rate fl clearfix">
					<span class="rate-value">{{main.rate}}%</span>
					<span class="desc">预期年化收益率</span>
				</div>
				<div class="day fl clearfix">
					<span class="day-value">{{main.day}}<span>天</span></span>
					<span class="desc">投资期限</span>
				</div>
				<div class="buy fr clearfix">
					<template v-if="trade">
						<span class="buy-now unable" v-if="main.left > 0 && main.startMilliseconds > 0">即将开始</span>
						<span class="buy-now" v-else-if="main.left > 0 && main.startMilliseconds < 0 && main.endMilliseconds > 0">立即投资</span>
						<span class="buy-now unable" v-else-if="main.left > 0 && main.endMilliseconds <= 0">已结束</span>
						<span v-else class="buy-now unable">已售罄</span>
					</template>
					<router-link v-else to="/app" class="buy-now">APP了解更多</router-link>
					<span class="desc">已购：{{main.people}}人</span>
				</div>
			</div>
		</div>
		
		<router-link to="/regist" class="clearfix fl pic-link animated fadeInRight" style="animation-delay: 1s;">
			<img src="../../../assets/home/sprog-gift.png" alt="新手福利" />
		</router-link>
	</div>
</template>

<script>
	export default {
		props: ['main','time'],
		data () {
			return {
				
			}
		},
		computed: {
			trade () {
				return this.$store.state.trade
			}
		},
	}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.pic-link{
	z-index: 0;
}
.main-product{
	width: 580px;
	height: 222px;
	display: inline-block;
	border: 1px solid @theme;
	background-color: #ffffff;
	position: relative;
	overflow: hidden;
	border-radius: @br;
	z-index: 1;
}
.w-two{
	width: 48px;
}
.w-three{
	width: 65px;
}
.buy-now.unable{
	background-color: @border-one;
	border: 1px solid @border-one;
	cursor: not-allowed;
}
.buy-now{
	display: block;
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
.time-area{
	color: #ff7f7c;
	font-size: @fz + 12;
	margin-left: 20px;
	float: left;
}
.time-count{
	height: 76px;
	line-height: 76px;
}
.min{
	display: block;
	text-align: center;
	color: @border-one;
}
.clock{
	margin-top: 10px;
	margin-left: 10px;
}
.t-o{
	font-size: 32px;
	border: 1px solid #ff7f7c;
	border-radius: @br;
	padding: 2px 4px 2px 5px;
	margin-right: 5px;
	text-align: center;
	color: #7447ff;
	display: inline-block;
	height: 42px;
    line-height: 40px;
}

</style>