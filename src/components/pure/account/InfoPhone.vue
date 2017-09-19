<template>
	<div class="clearfix">
		<div v-if="!change" class="door clearfix">
			<div class="origin-phone fl">
				<span class="door-title">通过原手机修改</span>
				<div class="icon phone"></div>
				<span class="door-btn">立即修改</span>
			</div>
			<div class="custom-service fr">
				<span class="door-title">通过人工修改</span>
				<div class="icon service"></div>
				<span class="door-btn">立即修改</span>
			</div>
		</div>
		<div v-else class="change clearfix">
			<div class="clearfix step">
				<Steps :current="step" :status="status">
			        <Step title="第一步" content="验证手机号码"></Step>
			        <Step title="第二步" content="重置登陆密码"></Step>
			        <Step title="第三步" content="重置密码成功"></Step>
			    </Steps>
			    <div v-if="step === 0" class="step-one">
			    	<Form id="one-form" ref="oneForm" :model="oneForm" :rules="rules" :label-width="100">
				        <Form-item label="旧手机号码" prop="account">
				            <Input size="large" class="regist-item" type="text" placeholder="请输入已绑定手机号码" v-model="oneForm.account"></Input>
				        </Form-item>
				        <Form-item class="rela-plant" label="手机验证码" prop="phoneCode">
				            <Input size="large" type="text" placeholder="请输入手机验证码" v-model="oneForm.phoneCode"></Input>
				            <span class="send-code" @click="sendCodeOne">{{text}}</span>
				        </Form-item>
				        <Form-item>
				            <Button class="next" type="primary" @click="handleSubmitOne('oneForm')">下一步</Button>
				        </Form-item>
				    </Form>
			    </div>
			    <div v-if="step === 1" class="step-two">
			    	<Form id="two-form"  ref="twoForm" :model="twoForm" :rules="rules" :label-width="100">
				        <Form-item label="新手机号码" prop="account">
				            <Input size="large" class="regist-item" type="text" placeholder="请输入新手机号码" v-model="twoForm.account"></Input>
				        </Form-item>
				        <Form-item class="rela-plant" label="手机验证码" prop="phoneCode">
				            <Input size="large" type="text" placeholder="请输入手机验证码" v-model="twoForm.phoneCode"></Input>
				            <span class="send-code" @click="sendCodeTwo">{{newText}}</span>
				        </Form-item>
				        <Form-item>
				            <Button class="next" type="primary" @click="handleSubmitTwo('twoForm')">下一步</Button>
				        </Form-item>
				    </Form>
			    </div>
			    <div v-if="step === 2" class="step-three">
			    	<Icon class="result" size="60" type="checkmark-circled"></Icon>
					<span class="result-msg">手机绑定修改成功</span>
			    </div>
			</div>
		</div>		
	</div>
</template>

<script>
import {validatePhone,checkPhone} from '@/tool/regx'
export default{
	data () {
		return {
			change: true,
			status: 'process',
			oneForm: {
                account: '',
                phoneCode: ''
            },
            twoForm: {
            	account: '',
            	phoneCode: ''
            },
            rules: {
            	account: [
            		{ required: true, message: '请填写手机号码', trigger: 'blur' },
            		{ validator: validatePhone, trigger: 'blur' }
            	],
                phoneCode: [
                    { required: true, message: '请填写手机验证码', trigger: 'blur' }
                ]
            }
		}
	},
	computed: {
		text () {
			return this.$store.state.account.changePhone.text
		},
		newText (){
			return this.$store.state.account.changePhone.newText
		},
		step () {
			return this.$store.state.account.changePhone.step
		}
	},
	methods: {
        handleSubmitOne (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                	let obj = {
                		account: this.oneForm.account,
	                    phoneCode: this.oneForm.phoneCode
                	}
                	this.$store.dispatch('accountChangePhoneCodeVali', obj)
                } 
            })
        },
        handleSubmitTwo (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                	let obj = {
                		newAccount: this.twoForm.account,
	                    newPhoneCode: this.twoForm.phoneCode
                	}
                	this.$store.dispatch('accountChangePhone', obj)
                } 
            })
        },
        sendCodeOne () {
        	if (checkPhone(this.oneForm.account)) {
        		/*this.$emit('sendCode',{account:this.oneForm.account})*/
        		this.$store.dispatch('accountChangePhoneSendCode', { account: this.oneForm.account })
        		
        	} else {
        		this.$refs.oneForm.validateField('account');
        	}
        },
        sendCodeTwo () {
        	if (checkPhone(this.twoForm.account)) {
        		/*this.$emit('sendCode',{account:this.twoForm.account})*/
        		this.$store.dispatch('accountChangePhoneSendCodeNext', { account: this.oneForm.account })
        	} else {
        		this.$refs.twoForm.validateField('account');
        	}
        }
    }
}
	
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.door{
	width: 400px;
	margin-top: 70px;
	margin-bottom: 90px;
	margin-left: auto;
	margin-right: auto;
}
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
.change{
	margin-top: 70px;
	margin-bottom: 90px;
}
.step{
	width: 600px;
	margin: 0 auto;
}
.door-btn{
	display: block;
	width: 104px;
	height: 30px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 26px;
	background-color: @theme;
	border: 1px solid @theme;
	border-radius: @br;
	color: @white;
	font-size: @fz;
	line-height: 30px;
	cursor: pointer;
}
.phone{
	background-image: url(../../../assets/account/info-icon-phone.png);
}
.service{
	background-image: url(../../../assets/account/info-icon-headset.png);
}
.icon{
	width: 50px;
	height: 50px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 20px;
	background-repeat: no-repeat;
	background-position: center center; 
}
.door>div{
	width: 120px;
	text-align: center;
}
.icon{
	width: 50px;
}
.door-title{
	font-size: @bfz;
	color: @gray-three;
}
</style>