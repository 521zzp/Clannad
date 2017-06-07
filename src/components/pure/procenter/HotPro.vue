<template>
	<div>
		<div class="seckill clearfix">
			<div v-if="hot.type === 1" class="time-count">
				<img class="fl" src="../../../assets/product-center/i-icon.png" alt=""/>
				<img class="fl seckill-sym"  src="../../../assets/product-center/symbol.png"/>
				<span v-if="time.secKilling" class="time-area">{{hot.startMilliseconds >= 0 ? '倒计时' : '离结束'}}
					<span class="t-o w-two">{{time.min}}</span>分
					<span class="t-o w-two">{{time.sec}}</span>秒
					<span class="t-o w-three">{{time.mili}}</span>毫秒
				</span>
				<span v-else class="time-area">{{hot.startMilliseconds >= 0 ? '倒计时' : '离结束'}}
					<span class="t-o w-two">{{time.day}}</span>天
					<span class="t-o w-two">{{time.hour}}</span>时
					<span class="t-o w-two">{{time.min}}</span>分
					<span class="t-o w-two">{{time.sec}}</span>秒
				</span>
				<img class="fl clock" src="../../../assets/product-center/clock.png"/>
			</div>
			<div class="pro-item seckill-pro">
				<div class="item-title clearfix">
					<span class="name">{{hot.name}}</span>
					<div class="taps">
						<span v-for="item in taps" :style="{ backgroundColor: item.color}">{{item.tap}}</span>
					</div>
				</div>
				<div class="item-info clearfix">
					<div class="rate sec fl">
						<span class="desc">年化收益率</span>
						<span class="value">{{hot.rate}}<span>%</span></span>
					</div>
					<div class="day sec fl">
						<span class="desc">投资期限</span>
						<span class="value">{{hot.day}}<span>天</span></span>
					</div>
					<div class="money sec fl">
						<span class="desc">投资金额</span>
						<span class="value">{{parseInt(hot.total / 10000)}}<span>元</span></span>
					</div>
					<div class="left sec fl">
						<span class="desc">剩余可投</span>
						<span class="value">{{hot.left}}<span>元</span></span>
					</div>
					<div class="buy fr">
						<span class="min">起投金额：{{hot.min}}元</span>
						<template v-if="trade">
							<button class="unable" v-if="hot.left > 0 && hot.startMilliseconds > 0">即将开始</button>
							<router-link  v-else-if="hot.left > 0 && hot.startMilliseconds < 0 && hot.endMilliseconds > 0" :to="'/product/'+hot.id" class="to-regist"><button>立即投资</button></router-link>
							<button class="unable" v-else-if="hot.left > 0 && hot.endMilliseconds <= 0">已结束</button>
							<button v-else class="unable">已售罄</button>
						</template>
						<router-link  v-else to="/app"><button>下载APP购买</button></router-link>
					</div>
				</div>
				 <Progress title="45%" class="i-p-progress" :percent="45" status="active" :stroke-width="6" hide-info></Progress>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:['time', 'hot'],
	data () {
		return {
			taps: [
				{
					tap: '新手礼包',
					color: '#ff9a4e'
				},
				{
					tap: '秒杀',
					color: '#98d1ff'
				}
			]
		}
	},
	computed: {
		trade () {
			return this.$store.state.trade
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.taps span{
	border-radius: @bbr;
	background-color: deepskyblue;
	color: @white;
	padding: 2px 5px;
	vertical-align: 3px;
	margin-right: 10px;
}
.i-p-progress{
	position: absolute;
	bottom: -5px;
	cursor: pointer;
}
.w-two{
	width: 48px;
}
.w-three{
	width: 65px;
}
.min{
	display: block;
	text-align: center;
	color: @border-one;
}
.buy{
	margin-right: 45px;
}
.buy button.unable{
	background-color: @border-one;
	border: 1px solid @border-one;
	cursor: not-allowed;
}
.buy button{
	margin-top: 10px;
	width: 134px;
	height: 44px;
	font-size: @bfz;
	background-color: @theme;
	border: 1px solid @theme;
	border-radius: @br;
	cursor: pointer;
	color: @white;
}
.day .value{
	color: @gray-three;
}
.rate .value,.money .value{
	color: @theme;
}
.value span{
	font-size: @fz + 6;
}
.value{
	font-size: @fz * 2;
}
.taps{
	display: inline-block;
}

.item-info .fl{
	margin-top: 18px;
}
.rate,.day,.money{
	margin-right: 90px;
}
.rate{
	margin-left: 32px;
}
.sec>span{
	display: block;
}
.sec .desc{
	font-size: @fz;
	color: @gray-one;
}
.name{
	font-size: 20px;
	color: @gray-three;
	margin-left: 30px;
}
.pro-item.seckill-pro{
	height: 154px;
	border: 2px solid @theme;
}
.pro-item{
	height: 150px;
	margin-bottom: 20px;
	background-color: @white;
	position: relative;
	border: 1px solid @border-two;
}
.t-o{
	font-size: 32px;
	border: 1px solid #fffc01;
	border-radius: @br;
	padding: 2px 4px 2px 5px;
	margin-right: 5px;
	text-align: center;
	display: inline-block;
	height: 42px;
    line-height: 40px;
}
.clock{
	margin-top: 10px;
	margin-left: 50px;
}
.item-title{
	margin-top: 10px;
}
.time-area{
	color: @white;
	font-size: @fz + 12;
	margin-left: 50px;
	float: left;
}
.time-count{
	height: 76px;
	line-height: 76px;
	margin-top: 20px;
	background-color: #ff7f7c;
}
.seckill-sym{
	display:table-cell;
	margin-left: 40px;
	margin-top: 10px;
}
</style>