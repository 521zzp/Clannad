<template>
	<div>
		<b class="user-account-common-title">提现</b>
		<div class="money-info clearfix">
			<span class="balance">账户余额（元）：<span class="balance-value">900000</span></span>
			<span class="get-total">全部提现</span>
		</div>
		<Form class="only-roll-out-form" ref="form" :model="form" :rules="ruleCustom" :label-width="104" label-position="left">
			<Form-item label="提现至：">
	        	 <div class="card-icon" :style="{backgroundImage: 'url('+card.img+')'}"></div>
	        </Form-item>
	        <Form-item label="提现卡号：">
	        	  <Input size="large"  type="text" v-model="card.id" readonly></Input>
	        </Form-item>
	        <Form-item label="提现金额：" prop="money">
	            <Input size="large"  type="text" v-model="form.money" placeholder="10元起提"></Input>
	        </Form-item>
	        <Form-item >
	        	 <span class="tip fl">手续费(元)：5000000</span>
	        	 <Poptip trigger="hover" title="提示标题" content="*最大结算金额：500000     最小结算金额：10" class="fr" >
	        	 	<Icon class="tip-cion" type="ios-help-outline" :size="16"></Icon>
			    </Poptip>
	        </Form-item>
	        <Form-item>
	            <Button size="large" type="primary" @click="formSubmit('form')" class="sub-btn">确认提现</Button>
	        </Form-item>
	    </Form>
	    <div class="hint">
	    	<span class="hint-title">温馨提示</span>
	    	<ul class="clearfix">
	    		<li class="hint-item">选择的银行卡开户名必须与您的余惠宝实名认证一致，否则提现申请将无法提交。</li>
	    		<li class="hint-item">禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</li>
	    		<li class="hint-item">充值前请确认您的银行卡限额。如充值成功后未能及时到账，请联系客服：400-838-8304</li>
	    	</ul>
	    </div>
	</div>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			card: {
				id: '454646**********5155',
				img: IMG + '/account/banks/zgjsyh.png',
			},
			form: {
                money: '',
            },
            ruleCustom: {
                money: [
                	{ required: true, message: '提现金额不能为空', trigger: 'blur' },
                	/*{ validator: ValidateChangeMoney, trigger: 'blur' },
                	{ validator: ValidateRechargeMoneyRange, trigger: 'blur' }*/
                ],
            },
            formSubmit (name) {
	            this.$refs[name].validate((valid) => {
	                if (valid) {
	                    if (this.bankCode === '') {
	                    	this.bankNotice = '请选择银行'
	                    } else{
	                    	let obj = {
	                    		bankCode: this.bankCode,
	                    		money: this.form.money
	                    	}
	                    	this.$store.dispatch('accountRechargeLoading', true)
	                    	let vm = this
	                    	setTimeout(function () {
	                    		vm.$store.dispatch('accountRechargeLoading', false)
	                    	},5000)
	                    }
	                }
	            })
	        },
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
					name: '账户总览',
					url: '/account'
				},
				{
					name: '提现',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
}
</script>


<style lang="less">
@import '../../../config/base.less';
.only-roll-out-form .ivu-form-item .ivu-form-item-label{
	padding: 11px 12px 11px 0;
	font-size: @fz;
}		
</style>
<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.hint{
	font-size: @fz;
	color: @gray-one;
	line-height: 2;
	margin-top: 76px;
}
.hint-item{
	list-style: disc;
	margin-left: 24px;
}
.hint-title{
	font-weight: 600;
	color: @gray-three;
}
.sub-btn{
	width: 100%;
}
.tip-cion{
	color: @linkc;
	cursor: pointer;
}
.only-roll-out-form{
	width: 368px;
	padding-top: 46px;
	height: 644px;
}
.card-icon{
	width: 140px;
	height: 40px;
}
.get-total{
	color: @linkc;
	margin-left: 100px;
	cursor: pointer;
}
.balance-value{
	color: @theme;
}
.money-info{
	margin-top:40px;
	padding-bottom: 14px;
	font-size: @fz;
	color: @gray-one;
	border-bottom: 1px dashed @border-two;
}

</style>