<template>
	 <div class="recharge">
	 	<b class="user-account-common-title">充值</b>
	 	<span class="balance">账户余额（元）：<span class="money">900000</span></span>
	 	<span class="title-span">选择银行：</span>
	 	<div class="bank-content clearfix">
			<ul class="bank-group clearfix">
				<li class="bank-item fl" v-for="item,index in banks" key="index">
					<input type="radio" name="bank-code" :id="item.name" @change="change(item.value)"/>
					<label :for="item.name" class="bank-bg" :style="{backgroundImage: 'url('+item.bg+')'}"></label>
					<span>{{item.bank}}</span>
				</li>
				<span class="bank-tip">{{bankNotice}}</span>
			</ul>
	 	</div>
	 	<Form class="only-recharge-form" ref="form" :model="form" :rules="ruleCustom" :label-width="104" label-position="left">
	        <Form-item label="充值金额：" prop="money">
	            <Input size="large"  type="text" v-model="form.money" placeholder="请输入充值金额（元）"></Input>
	        </Form-item>
	        <Form-item >
	        	 <span class="tip">金额最大值为：<span class="max-money">5000000</span></span>
	        </Form-item>
	        <Form-item>
	            <Button size="large" type="primary" @click="formSubmit('form')" class="sub-btn">确认充值</Button>
	        </Form-item>
	    </Form>
	    <div class="hint">
	    	<span class="hint-title">温馨提示</span>
	    	<ul class="clearfix">
	    		<li class="hint-item">为了您的账户安全，请在充值前进行实名认证、银行卡绑定及交易密码设置。</li>
	    		<li class="hint-item">选择的银行卡开户名必须与您的掌柜金服实名认证一致，否则提现申请将无法提交。</li>
	    		<li class="hint-item">禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</li>
	    		<li class="hint-item">充值前请确认您的银行卡限额。如充值成功后未能及时到账，请联系客服：400-008-2623</li>
	    	</ul>
	    </div>
	    <div v-if="loading" class="promot loading">
			<div class="loader-atom"></div>
		</div>
	 </div>
</template>

<script>
import {IMG} from '@/config/url'
import {ValidateChangeMoney} from '@/tool/regx'

export default {
	data () {
		const ValidateRechargeMoneyRange = (rule, value, callback) => {
			if (value < 1000) {
				 callback(new Error('最低充值金额为1000元'));
			} else if (value > 500000) {
				 callback(new Error('最大充值金额为500000元'));
			} else {
				callback();
			}
		}
		return {
			banks: [
				{	
					bank: '中国建设银行',
					name: 'zgjsyh',
					bg: IMG + '/account/banks/zgjsyh.png',
					value: '0801050000'
				},
				{
					bank: '中国银行',
					name: 'zgyh',
					bg: IMG + '/account/banks/zgyh.png',
					value: '0803020000'
				},
				{
					bank: '中信银行',
					name: 'zxyh',
					bg: IMG + '/account/banks/zxyh.png',
					value: '0801040000'
				},
				{
					bank: '中国工商银行',
					name: 'zggsyh',
					bg: IMG + '/account/banks/zggsyh.png',
					value: '0801040000'
				},
				{
					bank: '华夏银行',
					name: 'hxyh',
					bg: IMG + '/account/banks/hxyh.png',
					value: '0801040000'
				},
				{
					bank: '北京银行',
					name: 'bjyh',
					bg: IMG + '/account/banks/bjyh.png',
					value: '0801040000'
				},
				{
					bank: '中国邮政',
					name: 'zgyz',
					bg: IMG + '/account/banks/zgyz.png',
					value: '0801040000'
				},
				{
					bank: '中国农业银行',
					name: 'zgnyyh',
					bg: IMG + '/account/banks/zgnyyh.png',
					value: '0801040000'
				},
				{
					bank: '招商银行',
					name: 'zsyh',
					bg: IMG + '/account/banks/zsyh.png',
					value: '0801040000'
				},
				{
					bank: '广发银行',
					name: 'gfyh',
					bg: IMG + '/account/banks/gfyh.png',
					value: '0801040000'
				},
				{
					bank: '兴业银行',
					name: 'xyyh',
					bg: IMG + '/account/banks/xyyh.png',
					value: '0801040000'
				},
				{
					bank: '中国广大银行',
					name: 'zggdyh',
					bg: IMG + '/account/banks/zggdyh.png',
					value: '0801040000'
				},
				{
					bank: '上海浦东发展银行',
					name: 'shpdfzyh',
					bg: IMG + '/account/banks/shpdfzyh.png',
					value: '0801040000'
				},
				{
					bank: '中国民生银行',
					name: 'zgmsyh',
					bg: IMG + '/account/banks/zgmsyh.png',
					value: '0801040000'
				},
				{
					bank: '上海农商银行',
					name: 'shnsyh',
					bg: IMG + '/account/banks/shnsyh.png',
					value: '0801040000'
				},
				{
					bank: '洛阳银行',
					name: 'lyyh',
					bg: IMG + '/account/banks/lyyh.png',
					value: '0801040000'
				},
				{
					bank: '平安银行',
					name: 'payh',
					bg: IMG + '/account/banks/payh.png',
					value: '0801040000'
				},
				{
					bank: '其他银行',
					name: 'other',
					bg: IMG + '/account/banks/other.png',
					value: '0801040000'
				},
			],
			bankCode: '',
			bankNotice: '',
			form: {
                money: '',
            },
            ruleCustom: {
                money: [
                	{ required: true, message: '请填写密码', trigger: 'blur' },
                	{ validator: ValidateChangeMoney, trigger: 'blur' },
                	{ validator: ValidateRechargeMoneyRange, trigger: 'blur' }
                ],
            }
		}
	},
	computed: {
		loading () {
			return this.$store.state.account.recharge.loading
		}
	},
	methods: {
		change (e) {
			this.bankCode = e
			this.bankNotice = ''
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
	},
	mounted () {
		let bread = [
				{
					name: '掌柜金服',
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
					name: '充值',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
	destroyed () {
		this.$store.dispatch('accountRechargeLoading', false)
	}
}
</script>
<style lang="less">
@import '../../../config/base.less';
.only-recharge-form .ivu-form-item .ivu-form-item-label{
	padding: 11px 12px 11px 0;
	font-size: @fz;
}	
</style>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.promot{
	width: 950px;
	height: 1032px;
	position: absolute;
	left: -48px;
	top: -48px;
	background-color: rgba(0, 0, 0, 0.8);
}
.loader-atom{
	font-size: 100px;
	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	top: 40%;
}
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
input:checked + .bank-bg{
	background-position: 0 -90px;
}
.bank-tip{
	color: @theme;
	display: inline-block;
	float: left;
	width: 140px;
	height: 40px;
	line-height: 40px;
	text-align: center;
}
.tip{
	color: @linkc;
}
.max-money{
	color: @theme;
}
.sub-btn{
	width: 100%;
}
.only-recharge-form{
	width: 380px;
}
.bank-bg{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	cursor: pointer;
}
.bank-item{
	position: relative;
	display: inline-block;
	width: 140px;
	height: 40px;
	margin-right: 41px;
	margin-bottom: 40px;
}
.bank-content{
	padding-left: 104px;
}
.title-span{
	display: block;
	font-size: @fz;
	margin-top: 36px;
}
.balance{
	display: block;
	padding-bottom: 14px;
	line-height: 1;
	margin-top: 48px;
	font-size: @fz;
	border-bottom: 1px dashed @border-two;
}
.money{
	font-size: 24px;
	margin-left: .2em;
	vertical-align: -2px;
	color: @theme;
}
.recharge{
	color: @gray-one;
	position: relative;
}
</style>