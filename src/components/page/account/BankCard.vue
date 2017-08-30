<template>
	<div class="bank-acrd">
		<b class="user-account-common-title">银行卡管理</b>
		<div v-if="!$store.state.account.bindStatus.bankCard" class="add">
			<div class="add-btn">
				<router-link to="/account/bankcard/add" class=""><Icon class="add-icon" type="plus-circled" :size="64"></Icon></router-link>
			</div>
			<span class="add-desc">添加银行卡</span>
		</div>
		<div v-else class="clearfix">
			<div class="change"  :style="{backgroundImage: 'url('+info.backgroundImg+')'}">
				<div class="clearfix">
					<span class="name fl">{{info.bankName}}</span>
					<img :src="info.logo" class="fl bank-logo" alt="" />
					<span class="type fr">储蓄卡</span>
				</div>
				<span class="card-num">{{info.bankCard}}</span>
				<span class="card-master">持卡人：{{info.userName}}</span>
			</div>
			<div class="operate clearfix">
				<span class="fl" @click="bankInfoOpen = !bankInfoOpen">详细信息<Icon class="arrow" :class="{down: bankInfoOpen}" type="chevron-down"></Icon></span>
				<router-link class="fr" to="/account/bankcard/change">修改</router-link>
			</div>
			<transition name="slide-fade">
				<div v-if="bankInfoOpen" class="bank-info clearfix">
					<span>姓名：{{info.userName}}</span>
					<span>开户分行：{{info.branch}}</span>
					<span>开户支行：{{info.subbranch}}</span>
					<span>省份：{{info.pro}}</span>
					<span>城市：{{info.city}}</span>
					<span>创建时间：{{info.time}}</span>
					<span>审核状态：{{info.status}}</span>
				</div>
		    </transition>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				bankInfoOpen : false
			}
		},
		computed: {
			info () {
				return this.$store.state.account.bankInfo
			}
		},
		created () {
	    	if (this.$store.state.account.banks.length === 0) {
	    		this.$store.dispatch('accountBankSupport')
	    	}
	    	if (this.$store.state.account.areas.length === 0) {
	    		this.$store.dispatch('accountAreaSupport')
	    	}
	    	this.$store.dispatch('accountBankInfoGet')
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
						name: '银行卡管理',
						url: ''
					},
				];
			this.$store.dispatch('accountBreadChange', bread)
		},
	}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.bank-info {
	margin-left: 22px;
	margin-top: 20px;
}
.bank-logo{
	width: 24px;
	margin-left: .5em;
}
.arrow{
	transition: transform .3s;
}
.down{
	transform: rotateZ(180deg);
}
.bank-info span{
	display: block;
	font-size: @fz;
	line-height: 2;
}
.operate span{
	cursor: pointer;
}
.arrow{
	color: @linkc;
	margin-left: 10px;
}
.operate{
	width: 330px;
	margin-left: 22px;
	font-size: @fz;
	color: @linkc;
	margin-top: 10px;
}
.card-master{
	display: block;
	margin-top: 40px;
}
.type{
	color: @white;
	background-color: @gray-three;
	padding: 2px 4px;
	border-radius: @br;
}
.card-num{
	display: block;
	text-align: center;
	font-size: @fz;
	margin-top: 30px;
}
.name{
	font-size: @bfz;
}
.add-desc{
	display: block;
	text-align: center;
	margin-top: 10px;
	font-size: @fz;
	color: @border-one;
}
.add-icon{
	color: @border-two;
	cursor: pointer;
}
.add-btn{
	width: 64px;
	height: 64px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	
}
.change{
	padding: 16px 16px;
	color: @white;
	background-size: 100% 100%;
	background-color: gainsboro;
}
.add:hover,.change:hover{
	box-shadow: 0 2px 7px rgba(0,0,0,.15);
}
.add,.change{
	width: 330px;
	height: 170px;
	margin-left: 22px;
	margin-top: 50px;
	border-radius: @br;
	border: 1px solid @border-two;
}
</style>