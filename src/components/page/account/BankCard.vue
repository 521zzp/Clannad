<template>
	<div class="bank-acrd">
		<b class="user-account-common-title">银行卡管理</b>
		<div v-if="!$store.state.account.bindStatus.bankCard" class="add">
			<div class="add-btn">
				<router-link to="/account/bankcard-add" class=""><Icon class="add-icon" type="plus-circled" :size="64"></Icon></router-link>
			</div>
			<span class="add-desc">添加银行卡</span>
		</div>
		<div v-else class="clearfix">
			<div class="change">
				<div class="clearfix">
					<span class="name fl">浦发银行</span>
					<span class="type fr">储蓄卡</span>
				</div>
				<span class="card-num">15163151520561</span>
				<span class="card-master">持卡人：音无结弦</span>
			</div>
			<div class="operate clearfix">
				<span class="fl" @click="bankInfoOpen = !bankInfoOpen">详细信息<Icon class="arrow" :class="{down: bankInfoOpen}" type="chevron-down"></Icon></span>
				<router-link class="fr" to="/account/bankcard-change">修改</router-link>
			</div>
			<transition name="slide-fade">
				<div v-if="bankInfoOpen" class="bank-info clearfix">
					<span>姓名：张艺兴</span>
					<span>开户分行：湖北省武汉市</span>
					<span>开户支行：武汉大学支行</span>
					<span>省份：湖北省</span>
					<span>城市：武汉市</span>
					<span>创建时间：2017-03-23 16：46：32</span>
					<span>审核状态：审核成功</span>
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
	color: @gray-three;
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