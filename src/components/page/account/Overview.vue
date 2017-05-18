<template>
	<div class="overview">
		<div class="top">
			<span class="total">总资产（元）:{{capital.total}}</span>
			<div class="recently">
				<span class="s-one">昨日收益（元）：<span class="deepen">{{capital.yesterday}}</span></span>
				<span class="s-one">累计收益（元）：<span class="deepen">{{capital.accumulate}}</span></span>
			</div>
			<div class="statistics clearfix">
				<span class="s-one fl">账户余额：{{capital.balance}}</span>
				<span class="s-one fl">冻结金额：{{capital.balance}}</span>
				<span class="s-one fl">
					<span class="l-span">活期宝：{{capital.current}}</span>
					<router-link to="/account" class="level-two">详情</router-link>
				</span>
				<span class="s-one-com fl">
					<span class="l-span">积分<span class="point">{{capital.points}}</span></span>
					<router-link to="/account" class="level-two">可购商品</router-link>
				</span>
			</div>
			<div class="link-group">
				<router-link to="/account" class="link-btn">充值</router-link>
				<router-link to="/account" class="link-btn">提现</router-link>
			</div>
		</div>
		<HotRecom class="ab-hot"/>
	</div>
</template>

<script>
	import HotRecom from '@/components/pure/account/HotRecom'
	export default {
		data () {
			return {
				
			}
		},
		mounted () {
			let bread = [
					{
						name: '余惠宝',
						url: '/'
					},
					{
						name: '我的账户',
						url: ''
					},
				];
			this.$store.dispatch('accountBreadChange', bread)
		},
		components: {
			HotRecom,
		},
		computed: {
			capital () {
				return this.$store.state.account.overViewCapital
			}
		},
		created () {
			this.$store.dispatch('ovCap')
		}
	}
	
</script>

<style lang="less" scoped="scoped">
@import '../../../config/base.less';
.overview{
	min-height: 1028px;
	position: relative;
}
.ab-hot{
	position: absolute;
	bottom: 10px;
}
.link-group{
	margin-top: 10px;
}
.point:before{
	content: '';
	display: inline-block;
	width: 17px;
	height: 17px;
	background-image: url(../../../assets/account/price.png);
	margin-bottom: -.2em;
	margin-left: .3em;
	margin-right: .2em;
}
.link-btn{
	display: inline-block;
	width: 80px;
	height: 30px;
	color: @white;
	background-color: @theme;
	text-align: center;
	line-height: 30px;
	border-radius: @br;
	font-size: @fz;
	margin-right: 36px;
}
.total{
	font-size: @sfz * 2;
	color: @gray-three;
}
.recently .s-one{
	color: @gray-one;
}
.recently{
	border-bottom: 1px dashed #4d4d4d;
	margin-top: 32px;
	padding-bottom: 14px;
	font-size: @fz;
}
.statistics{
	margin-top: 24px;
	font-size: @fz;
}
.l-span{
	display: block;
}
.s-one .deepen{
	color: @gray-three;
}
.s-one-com{
	display: inline-block;
}
.s-one{
	display: inline-block;
	width: 240px;
}
</style>