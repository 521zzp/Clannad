<template>
	<div>
		<div class="head clearfix">
			<img class="head-img fl" :src="img" alt="" />
			<div class="head-info fl">
				<span class="name">{{this.$store.state.user.name}}</span>
				<span v-if="$store.state.user.level === '会员'"  class="level">会员</span>
				<span class="level">普通</span>
			</div>
		</div>
		<div class="infos clearfix">
			<router-link to="/account/bankcard/add" class="info-item fl id-card" :class="{active: idCard}" :title="idCardT"></router-link>
			<router-link to="/account/bankcard/add" class="info-item fl bank-acrd" :class="{active: bankCard}" :title="bankCardT"></router-link>
			<router-link to="/account/information" class="info-item fl pay-pwd" :class="{active: payPwd}" :title="payPwdT"></router-link>
			<!--<router-link to="/product" class="info-item fl assurance" :class="{active: assuer}" :title="assuerT"></router-link>-->
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			img: this.$store.state.user.img
		}
	},
	computed: {
		idCard () {
			return this.$store.state.account.bindStatus.idCard
		},
		idCardT () {
			return this.$store.state.account.bindStatus.idCard ? '您已完成实名认证' : '您还未完成实名认证'
		},
		bankCard () {
			return this.$store.state.account.bindStatus.bankCard
		},
		bankCardT () {
			return this.$store.state.account.bindStatus.bankCard ? '您已绑定银行卡' : '您还未绑定银行卡'
		},
		payPwd () {
			return this.$store.state.account.bindStatus.payPwd
		},
		payPwdT () {
			return this.$store.state.account.bindStatus.payPwd ? '您已设置支付密码' : '您还未设置支付密码'
		},
		assuer () {
			return this.$store.state.account.bindStatus.insur
		},
		assuerT () {
			return this.$store.state.account.bindStatus.insur ? '您已购买保险' : '您还未购买保险'
		}
		
	},
	created () {
		this.$store.dispatch('accountBindState')
	}
}
</script>

<style lang="less" scoped="scoped">
@import '../../../config/base.less';

.head{
	height: 120px;
}
.assurance.active{
	background-image: url(../../../assets/account/s-four-act.png);
}
.assurance{
	background-image: url(../../../assets/account/s-four-def.png);
}
.pay-pwd.active{
	background-image: url(../../../assets/account/s-three-act.png);
}
.pay-pwd{
	background-image: url(../../../assets/account/s-three-def.png);
}
.bank-acrd.active{
	background-image: url(../../../assets/account/s-two-act.png);
}
.bank-acrd{
	background-image: url(../../../assets/account/s-two-def.png);
}
.id-card.active{
	background-image: url(../../../assets/account/s-one-act.png);
}
.id-card{
	margin-left: 28px;
	background-image: url(../../../assets/account/s-one-def.png);
}
.info-item{
	margin-right: 35px;
	display: inline-block;
	margin-top: 10px;
	margin-bottom: 20px;
	width: 28px;
	height: 28px;
}
.head-img{
	width: 78px;
	height: 78px;
	margin-left: 32px;
	margin-top: 32px;
	border: 2px solid @border-two;
	border-radius: 50%;
	display: inline-block;
	background-image: url(../../../assets/home/agent-default.png);
	background-size: 100% 100%;
}
.name{
	padding-left: .5em;
	margin-bottom: 6px;
}
.head-info{
	display: inline-block;
	margin-top: 50px;
	margin-left: 12px;
	color: @gray-three;
}
.name{
	display: block;
}
.level.vip{
	background-image: url(../../../assets/account/vip-acc.png);
}
.level{
	width: 56px;
	margin-left: 8px;
	height: 18px;
	display: inline-block;
	text-indent: 2em;
	background-image: url(../../../assets/account/com-acc.png);
}
</style>