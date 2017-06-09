<template>
	<div>
		<b class="user-account-common-title">活期宝</b>
		<div class="content clearfix">
			<div class="count fl">
				<span>活期宝金额<em class="eye" :class="{'eye-close': !eyeSwitch}" @click="eyeSwitch = !eyeSwitch"></em></span>
				<div class="operate clearfix">
					<span v-if="eyeSwitch" class="money">900000</span>
					<span v-else class="money">***</span>
					<div class="op-link" v-if="trade">
						<router-link to="/account/current/in" class="in">转入</router-link>
						<router-link to="/account/current/out" class="out">转出</router-link>
					</div>
				</div>
				<div class="acc-money">
						<div class="balance fl">
							<span class="desc">账户余额（元）</span>
							<span v-if="eyeSwitch" class="value">10000</span>
							<span v-else class="value">***</span>
						</div>
						<div class="freeze fl">
							<span class="desc">冻结金额（元）</span>
							<span v-if="eyeSwitch" class="value">10000</span>
							<span v-else class="value">***</span>
						</div>
					</div>
			</div>
			<div class="recently fr">
				<div class="items">
					<div class="yesterday">
						<span class="desc">昨日收益（元）</span>
						<span v-if="eyeSwitch" class="value">500</span>
						<span v-else class="value">***</span>
					</div>
					<div class="history">
						<span class="desc">历史累计收益（元）</span>
						<span v-if="eyeSwitch" class="value">5000</span>
							<span v-else class="value">***</span>
					</div>
					<div class="year-rate">
						<span class="desc">年化收益率</span>
						<span class="value">2.06%</span>
					</div>
				</div>
				<router-link to="/" class="fr">关于活期宝</router-link>
			</div>
		</div>
		<CurrentRecord/>
	</div>
</template>

<script>
import CurrentRecord from '@/components/pure/account/CurrentRecord'
export default {
	data () {
		return {
			eyeSwitch: false
		}
	},
	computed: {
		trade () {
			return this.$store.state.trade
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
					url: '/account'
				},
				{
					name: '活期宝',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
	components: {
		CurrentRecord
	}
}
</script>

<style lang="less" scoped="scoped">
@import '../../../config/base.less';
.count{
	width: 538px;
	margin-top: 40px;
	border-right: 1px solid @border-two;
}
.recently .desc{
	display: block;
	text-align: left;
}
.recently .value{
	display: block;
	text-align: left;
	font-size: @sfz * 2;
	color: @gray-three;
	margin-top: @fz;
}
.items{
	width: 100%;
	flex-wrap: wrap;
	display: flex;
}
.items>div{
	width: 50%;
	margin-bottom: 32px;
}
.recently{
	padding-left: 24px;
	width: 310px;
	margin-top: 40px;
}
.acc-money .value{
	font-size: @sfz * 2;
	color: @gray-three;
	margin-top: 10px;
	display: block;
}
.acc-money{
	margin-top: 12px;
}
.balance{
	width: 238px;
	height: 100%;
	padding-top: 12px;
	border-right: 1px dashed @border-two;
}
.freeze{
	height: 100%;
	padding-top: 12px;
	padding-left: 36px;
}
.acc-money .desc{
	display: block;
	color: @gray-one;
}
.acc-money{
	height: 106px;
}
.op-link a{
	font-size: @bfz;
	margin-right: 42px;
}
.op-link{
	vertical-align: .5em;
}
.out{
	color: @gray-three;
}
.in{
	color: @white;
	display: inline-block;
	width: 80px;
	height: 30px;
	background-color: @theme;
	border: 1px solid @theme;
	text-align: center;
	line-height: 30px;
	border-radius: @bbr;
}
.money{
	font-size: 32px;
	color: @theme;
	display: inline-block;
	width: 200px;
}
.op-link{
	display: inline-block;
}
.operate{
	width: 524px;
	margin-top: 20px;
	padding-bottom: 32px;
	border-bottom: 1px dashed @border-two;
}
.eye{
	width: 21px;
	height: 12px;
	display: inline-block;
	background-image: url(../../../assets/icon/eye-open.png);
	background-size: 100% 100%;
	margin-left: .5em;
	cursor: pointer;
}
.eye.eye-close{
	background-image: url(../../../assets/icon/eye-close.png);
}
.content{
	font-size: @fz;
	background-image: url(../../../assets/account/current-wave-bg.png);
	background-repeat: no-repeat;
	background-position-y: bottom;
	padding-bottom: 45px;
}
</style>