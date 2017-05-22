<template>
	<div>
		<b class="user-account-common-title">账户信息</b>
		<div class="item-head">
			<Icon v-if="idCard" class="success-icon" :size="15" type="checkmark-circled"></Icon>
			<Icon v-else class="faild-icon" :size="15" type="information-circled"></Icon>	
			<span class="bind-status">{{idCard ? '已认证' : '未认证' }}</span>
			<span class="item-desc">实名认证</span>
			<span class="item-info">{{idCard ? '4654651*******54854645' : '只有通过实名认证，才能充值投资' }}</span>
			<span v-if="idCard" class="fr link-btn" @click="openChange(1)">详情</span>
			<router-link v-else to="/account/bankcard-add" class="fr">立即设置</router-link>
		</div>
		<InfoIdCard class="fold" :class="{open: open === 1}"/>
		<div class="item-head">
			<Icon v-if="bankCard" class="success-icon" :size="15" type="checkmark-circled"></Icon>
			<Icon v-else class="faild-icon" :size="15" type="information-circled"></Icon>
			<span class="bind-status">{{bankCard ? '已认证' : '未认证' }}</span>
			<span class="item-desc">银行卡</span>
			<span class="item-info">{{bankCard ? '4654*******54645' : '保障资金安全，充值、取现资金同卡进出' }}</span>
			<router-link v-if="bankCard" to="/account/bankcard" class="fr">详情</router-link>
			<router-link v-else to="/account/bankcard-add" class="fr">立即设置</router-link>
		</div>
		<div class="item-head">
			<Icon class="success-icon" :size="15" type="checkmark-circled"></Icon>
			<span class="bind-status">已设置</span>
			<span class="item-desc">手机号码</span>
			<span class="item-info">182****6699</span>
			<span class="fr link-btn" @click="openChange(2)">修改</span>
		</div>
		<InfoPhone class="fold" :class="{open: open === 2}"/>
		<div class="item-head">
			<Icon class="success-icon" :size="15" type="checkmark-circled"></Icon>
			<span class="bind-status">已设置</span>
			<span class="item-desc">登陆密码</span>
			<span class="item-info">上次登陆时间：2017-05-11 16:59:17</span>
			<span class="fr link-btn" @click="openChange(3)">修改</span>
		</div>
		<InfoPassword class="fold" :class="{open: open === 3}"/>
		<div class="item-head">
			<Icon v-if="payPwd" class="success-icon" :size="15" type="checkmark-circled"></Icon>
			<Icon v-else class="faild-icon" :size="15" type="information-circled"></Icon>
			<span class="bind-status">{{payPwd ? '已设置' : '未设置' }}</span>
			<span class="item-desc">交易密码</span>
			<span class="item-info">保障资金安全，充值、提现、投资登资金相关操作时使用</span>
			<span v-if="payPwd" class="fr link-btn">
				<span  @click="openChange(4),payPwdTypeSet(2)">修改</span>
				|
				<span @click="openChange(4),payPwdTypeSet(3)">找回</span>
			</span>
			<span v-else class="fr link-btn" @click="openChange(4),payPwdTypeSet(1)" >立即设置</span>
		</div>
		<InfoPayPwd class="fold" :class="{open: open === 4}" :type="payPwdTypeChild"/>		
	</div>
</template>

<script>
import InfoIdCard from '@/components/pure/account/InfoIdCard'
import InfoPhone from '@/components/pure/account/InfoPhone'
import InfoPassword from '@/components/pure/account/InfoPassword'
import InfoPayPwd from '@/components/pure/account/InfoPayPwd'

export default {
	data () {
		return {
			open: 1,
			payPwdType: 1
		}
	},
	computed: {
		idCard () {
			/*return this.$store.state.account.bindStatus.idCard */
			return true
		},
		bankCard (){
			/*return this.$store.state.account.bindStatus.bankCard*/
			return true
		},
		payPwd () {
			/*return this.$store.state.account.bindStatus.payPwd*/
			return true
		},
		payPwdTypeChild () {
			return this.payPwdType
		}
	},
	mounted () {
		this.open = 0
	},
	methods: {
		openChange (index) {
			if (this.open === index && index !== 4) {
				this.open = 0
			} else{
				this.open = index
			}
			
		},
		payPwdTypeSet (type) {
			this.payPwdType = type
		}
	},
	components: {
		InfoIdCard,
		InfoPhone,
		InfoPassword,
		InfoPayPwd
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.item-head{
	padding-left: 20px;
	height: 82px;
	line-height: 82px;
	border-bottom: 1px solid @border-two;
}
.fold{
	max-height: 0;
	overflow: hidden;
	transition: max-height .5s; 
}
.fold.open{
	max-height: 1000px;
}
.link-btn{
	color: @linkc;
	cursor: pointer;
}
.item-desc{
	display: inline-block;
	margin-left: 94px;
	color: @gray-three;
	width: 60px;
	font-size: @fz;
}
.item-info{
	color: @gray-one;
	font-size: @fz;
	margin-left: 90px;
}
.bind-status{
	color: @gray-one;
	margin-left: 50px;
}
.faild-icon{
	color: #ffb126;
}
.success-icon{
	color: #77c812;
}
</style>