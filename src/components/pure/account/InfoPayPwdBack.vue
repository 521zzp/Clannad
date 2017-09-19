<template>
	<div class="clearfix">
		<div class="clearfix step">
			<Steps :current="step" :status="status">
		        <Step title="第一步" content="验证手机号码"></Step>
		        <Step title="第二步" content="重置交易密码"></Step>
		        <Step title="第三步" content="重置密码成功"></Step>
		    </Steps>
		    <div v-if="step === 0" class="step-one">
		    	<Form id="one-form" ref="oneForm" :model="oneForm" :rules="rules" :label-width="100">
			        <Form-item label="手机号码" prop="account">
			            <Input size="large" class="regist-item" type="text"  v-model="oneForm.account"></Input>
			        </Form-item>
			        <Form-item class="rela-plant" label="手机验证码" prop="phoneCode">
			            <Input size="large" type="text" placeholder="请输入手机验证码" v-model="oneForm.phoneCode"></Input>
			            <span class="send-code" @click="sendCodeOne">{{text}}</span>
			        </Form-item>
			        <Form-item label="身份证号码" prop="idCard">
			            <Input size="large" class="regist-item" type="text" placeholder="请输入身份证号" :maxlength="18" v-model="oneForm.idCard"></Input>
			        </Form-item>
			        <Form-item>
			            <Button class="next" type="primary" @click="handleSubmitOne('oneForm')">下一步</Button>
			        </Form-item>
			    </Form>
		    </div>
		    <div v-if="step === 1" class="step-two">
		    	<Form ref="twoForm" :model="twoForm" :rules="rules" :label-width="100">
			        <Form-item label="设置新支付密码" prop="passwd">
			            <Input type="password" size="large" v-model="twoForm.passwd" :maxlength="6"  placeholder="请输入当前支付密码(6位数字)"></Input>
			        </Form-item>
			        <Form-item label="确认新支付密码" prop="passwdCheck">
			            <Input type="password" size="large" v-model="twoForm.passwdCheck" :maxlength="6" placeholder="请确认支付新密码(6位数字)"></Input>
			        </Form-item>
			        <Form-item>
			            <Button type="primary" class="form-submit" @click="handleSubmitTwo('twoForm')">保存密码</Button>
			        </Form-item>
			    </Form>	
		    </div>
		    <div v-if="step === 2" class="step-three">
		    	<Icon class="result" size="60" type="checkmark-circled"></Icon>
				<span class="result-msg">支付密码重置成功</span>
		    </div>
		</div>		
	</div>
</template>

<script>
import {validatePhone,checkPhone, checkPayPwd, validateIdcard} from '@/tool/regx'
export default{
	data () {
		const validatePassSet = (rule, value, callback) => {
            if (value === '' || !checkPayPwd(value)) {
                callback(new Error('支付密码不正确'));
            } else {
                if (this.twoForm.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.twoForm.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheckSet = (rule, value, callback) => {
            if (value === '' || !checkPayPwd(value)) {
                callback(new Error('支付密码不正确'));
            } else if (value !== this.twoForm.passwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
		return {
			status: 'process',
			oneForm: {
                account: '',
                phoneCode: '',
                idCard: ''
            },
            twoForm: {
            	passwd: '',
                passwdCheck: ''
            },
            rules: {
            	account: [
            		{ required: true, message: '请填写手机号码', trigger: 'blur' },
            		{ validator: validatePhone, trigger: 'blur' }
            	],
                phoneCode: [
                    { required: true, message: '请填写手机验证码', trigger: 'blur' }
                ],
                idCard: [
                    { required: true, message: '请填写身份证号', trigger: 'blur' },
                    { validator: validateIdcard, trigger: 'blur' }
                ],
                passwd: [
                   { validator: validatePassSet, trigger: 'blur' }
                ],
                passwdCheck: [
                    { validator: validatePassCheckSet, trigger: 'blur' }
                ]
            }
		}
	},
	computed: {
		text () {
			return this.$store.state.account.payPwdBack.text
		},
		step () {
			return this.$store.state.account.payPwdBack.step
		}
	},
	methods: {
        handleSubmitOne (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                	let obj = {
                		account: this.oneForm.account,
	                    phoneCode: this.oneForm.phoneCode,
	                    idCard: this.oneForm.idCard
                	}
                	this.$store.dispatch('payPwdBackStepOne', obj)
                } 
            })
        },
       handleSubmitTwo (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$store.dispatch('payPwdBackStepTwo', {payPwd: this.twoForm.passwd})
                } 
            })
        },
        sendCodeOne () {
        	if (checkPhone(this.oneForm.account)) {
        		const datas = {
        			account: this.oneForm.account,
        		}
        		this.$store.dispatch('payPwdBackSendCode', datas)
        		
        	} else {
        		this.$refs.oneForm.validateField('account');
        	}
        },
        sendCodeTwo () {
        	if (checkPhone(this.twoForm.account)) {
        		this.$emit('sendCode',{account:this.twoForm.account})
        		
        		
        	} else {
        		this.$refs.twoForm.validateField('account');
        	}
        }
    }
}
	
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.result{
	display: block;
	text-align: center;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;
	color: @theme;
}
.result-msg{
	display: block;
	text-align: center;
	margin-top: 10px;
	font-size: @fz;
}
.next{
	width: 100%;
	height: 36px;
}
.step-one, .step-two, .step-three{
	width: 400px;
	margin-top: 50px;
	margin-left: auto;
	margin-right: auto;
}
.rela-plant{
	position: relative;
}
.send-code{
	font-size: @fz;
	padding-left: 10px;
	position: absolute;
	right: 10px;
	top: 1px;
	cursor: pointer;
	height: 34px;
	display: block;
	line-height: 34px;
	color: @border-one;
	border-left: 1px solid @border-one;
}

.step{
	width: 600px;
	margin: 0 auto;
}


</style>