<template>
	<div class="container clearfix">
		<div class="title">
			<span class="msg-title">精选产品</span><span class="msg-slogan">惠生活，惠理财</span>
			<router-link to="/login" class="more fr">更多>></router-link>
		</div>
		<div class="content clearfix">
			<ul class="product-list">
				<li v-for="item in list" class="product-item">
					<span class="pro-name">{{item.name}}</span>
					<div class="pro-info clearfix">
						<div class="fl rate">
							<span class="pro-rate">{{item.rate}}%</span>
							<span class="i">年化收益率</span>
						</div>
						<div class="fr day">
							<span class="pro-day"><span>{{item.day}}</span>天</span>
							<span class="i">投资期限</span>
						</div>
					</div>
					<div class="progress clearfix">
						 <Progress class="theme-proress" :percent="item.percent" :stroke-width="8" hide-info></Progress>
						 <div class="progress-info clearfix">
						 	<span class="i fl money">剩余投资金额：{{item.left}}元</span>
						 	<span class="i fr percent">45%</span>
						 </div>
						 <template v-if="trade">
						 	<router-link  v-if="item.left > 0" :to="'/product/'+item.id"><button class="buy">立即购买</button></router-link>
						 	<button v-else class="buy unable">已售罄</button>
						 </template>
						 <router-link  v-else to="/app"><button class="buy">下载APP购买</button></router-link>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['list'],
		data () {
			return {
				
			}
		},
		computed: {
			trade () {
				return this.$store.state.trade
			}
		},
		mounted () {
		}
	}
	
</script>
<style lang="less">
@import '../../../config/base.less';
.theme-proress .ivu-progress-bg{
	background-color: @theme !important;
}
</style>
<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.container{
	width: @mw;
	margin:0 auto;
}
.buy.unable:hover{
	background-color: @border-one;
}
.buy.unable{
	background-color: @border-one;
	border: 1px solid @border-one;
	cursor: not-allowed;
}
.buy{
	width: 210px;
	height: 44px;
	background-color: @theme;
	font-size:@bfz;
	color: @white;
	border: none;
	border-radius: @br;
	cursor: pointer;
	margin-left: auto;
	margin-right: auto;
	display: block;
	margin-top: 25px;
}
.buy:hover{
	background-color: lighten(@theme,5%);
}
.progress{
	margin-top: 35px;
}
.pro-info{
	margin-top: 40px;
}
.pro-day>span{
	font-size: 30px;
	margin-right: 5px;
	vertical-align: -2px;
}
.day .i{
	margin-top: 4px;
}
.pro-day{
	color: @gray-three;
	font-size:@fz + 4;
	margin-top: 18px;
}
.rate>span,.day>span{
	display: block;
}
.i{
	color: @gray-one;
	font-size: @fz;
}
.pro-rate{
	color: @theme;
	font-size: 46px;
	
}
.pro-name{
	font-size: @fz + 10;
	display: block;
	color: @gray-three;
	margin-top: @fz * 2;
}
.product-list{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	text-align: center;
}
.product-list:after{
	content: '';
	width: 386px;
}
.product-item:hover{
	box-shadow: 0 3px 10px rgba(0,0,0,.15);
}
.product-item{
	display: inline-block;
	width: 386px;
	height: 372px;
	background-color: @white;
	margin-bottom: 20px;
	padding-left: 36px;
	padding-right: 24px;
	text-align: left;
	border: 1px solid #e5e5e5;
}
.msg-title{
	font-size:@fz + 6;
	color: @gray-three;
	vertical-align: 10px;
}
.msg-slogan{
	color: @gray-one;
	font-size: @fz;
	margin-left: 30px;
	vertical-align: 10px;
}
.more{
	color: @gray-one;
}
.title{
	height: 60px;
	line-height: 60px;
}
</style>