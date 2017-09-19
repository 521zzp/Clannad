<template>
	<div class="clearfix">
		<b class="user-account-common-title">转出</b>
		<div class="content clearfix">
			<span class="curr-bal">活期宝金额（元）：<span>900000</span></span>
			<span class="acc-bal">账户余额（元）：<span>10000</span></span>
			<div class="clearfix in-form-wrap">
				<Form class="in-form" ref="inForm" :model="inForm" :rules="rules" :label-width="70">
			        <Form-item label="转入金额" prop="money">
			            <Input type="text" size="large" v-model="inForm.money"   placeholder="请输入当前支付密码"></Input>
			        </Form-item>
			        <p class="announce">
			        	<span>*从转入金额的下个交易日开始计算收益</span>
			        	<span>*每天00：00————00：30为系统发放收益时间，期间转入，转出功能暂停使用</span>
			        </p>
			        <Form-item label="支付密码" prop="payPwd">
			            <Input type="password" size="large" v-model="inForm.payPwd" :maxlength="6" placeholder="请确认支付新密码"></Input>
			        </Form-item>
			        <div class="forget-pay-pwd clearfix"><router-link to="/account/information" class="fr">忘记密码</router-link></div>
			        <Form-item>
			            <Button type="primary" class="form-submit" @click="handleSubmit('inForm')">确认</Button>
			        </Form-item>
			    </Form>	
			</div>
		</div>
		<div class="abount-current clearfix">
			<span class="title">温馨提示</span>
			<ul class="clearfix">
				<li class="tip-item">
					<span class="question">什么是活期宝？</span>
					<span class="answer">答：活期宝是掌柜金服推出的余额增值服务，把钱转入活期宝种就可以获得一定的收益。支持掌柜金服账户余额的资金转入。目前步收取任何手续费。</span>
				</li>
				<li class="tip-item">
					<span class="question">什么是活期宝？</span>
					<span class="answer">答：活期宝是掌柜金服推出的余额增值服务，把钱转入活期宝种就可以获得一定的收益。支持掌柜金服账户余额的资金转入。目前步收取任何手续费。</span>
				</li>
				<li class="tip-item">
					<span class="question">什么是活期宝？</span>
					<span class="answer">答：活期宝是掌柜金服推出的余额增值服务，把钱转入活期宝种就可以获得一定的收益。支持掌柜金服账户余额的资金转入。目前步收取任何手续费。</span>
				</li>
				<li class="tip-item">
					<span class="question">什么是活期宝？</span>
					<span class="answer">答：活期宝是掌柜金服推出的余额增值服务，把钱转入活期宝种就可以获得一定的收益。支持掌柜金服账户余额的资金转入。目前步收取任何手续费。</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import {validatePayPwd,ValidateChangeMoney } from '@/tool/regx'
import tempStore from '@/store'

const ValidateMoneyRange = (rule, value, callback) => {  //转入金额范围验证
	if (value > tempStore.state.capital.balance) {
		 callback(new Error('账户余额不足'));
	} else{
		callback();
	}
}
export default {
    data () {
        return {
            inForm: {
                money: '',
                payPwd: ''
                
            },
            rules: {
                money: [
                	{ required: true, message: '转入金额不能为空', trigger: 'blur' },
                	{ validator: ValidateChangeMoney, trigger: 'blur' },
                	{ validator: ValidateMoneyRange, trigger: 'blur' }
                ],
                payPwd: [
                	{ required: true, message: '支付密码不能为空', trigger: 'blur' },
                    { validator: validatePayPwd, trigger: 'blur' }
                ]
            }
        }
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
					name: '活期宝',
					url: '/account/current'
				},
				{
					name: '转出',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
       
    }
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.content{
	color: @gray-one;
	margin-top: 40px;
	font-size: @fz;
}
.tip-item{
	width: 600px;
	list-style: disc;
	margin-left: 1em;
	font-size: @fz;
	margin-bottom: 24px;
}
.question{
	display: block;
	color: @gray-three;
}
.answer{
	display: block;
	color: @gray-one;
}
.abount-current>ul{
	margin-top: 20px;
}
.abount-current{
	margin-top: 24px;
}
.title{
	display: block;
	font-size: @bfz;
	color: @gray-three;
}
.in-form-wrap{
	margin-top: 36px;
	padding-bottom: 128px;
	border-bottom: 1px solid @border-two;
}
.forget-pay-pwd{
	margin: 10px auto;
	font-size: @sfz;
}
.announce>span{
	display: block;
	width: 500px;
}
.announce{
	font-size: @sfz;
	color: @border-one;
	margin-bottom: 24px;
}
.in-form{
	width: 370px;
}
.form-submit{
	width: 100%;
	height: 36px;
}
.curr-bal{
	padding-bottom: 26px;
	display: block;
	border-bottom: 1px dashed @border-two;
}
.acc-bal{
	display: block;
	margin-top: 30px;
}
.acc-bal>span{
	color: @theme;
}
.curr-bal>span{
	color: @theme;
}
</style>