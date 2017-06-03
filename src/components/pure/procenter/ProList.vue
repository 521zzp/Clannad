<template>
	<div>
		<div class="clearfix pro-list">
			<div v-for="product in products" class="pro-item">
				<div class="item-title clearfix">
					<span class="name">{{product.name}}</span>
					<div class="taps">
						<span v-for="item in taps" :style="{ backgroundColor: item.color}">{{item.tap}}</span>
					</div>
				</div>
				<div class="item-info clearfix">
					<div class="rate sec fl">
						<span class="desc">年化收益率</span>
						<span class="value">{{product.rate}}<span>%</span></span>
					</div>
					<div class="day sec fl">
						<span class="desc">投资期限</span>
						<span class="value">{{product.day}}<span>天</span></span>
					</div>
					<div class="money sec fl">
						<span class="desc">投资金额</span>
						<span class="value">{{parseInt(product.total / 10000)}}<span>万元</span></span>
					</div>
					<div class="left sec fl">
						<span class="desc">剩余可投</span>
						<span class="value">{{product.left}}<span>元</span></span>
					</div>
					<div  class="buy fr">
						<span class="min">起投金额：{{product.min}}元</span>
						<template v-if="trade">
							<router-link  v-if="product.left > 0" :to="'/product/'+product.id" ><button>立即投资</button></router-link>
							<button v-else class="unable">已售罄</button>
						</template>
						<router-link  v-else to="/app"><button>下载APP购买</button></router-link>
					</div>
				</div>
				 <Progress :title="product.percent + '%'" class="i-p-progress" :percent="product.percent" status="active" :stroke-width="6" hide-info></Progress>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['products'],
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

<style lang="less" scoped="scoped">
@import '../../../config/base.less';

.taps{
	display: inline-block;
}
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
}
.clock{
	margin-top: 10px;
	margin-left: 50px;
}
.item-title{
	margin-top: 10px;
}
</style>