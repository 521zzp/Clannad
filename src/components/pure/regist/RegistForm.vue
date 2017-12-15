<template>
    <div class="container clearfix">
    	<Form id="regist-form" class="only-regist-form"  ref="registForm" :model="registForm" :rules="rules" :label-width="80">
	        <Form-item label="手机号码" prop="account">
	            <Input class="regist-item" type="text" placeholder="请输入手机号码" v-model="registForm.account"></Input>
	        </Form-item>
	        <Form-item class="rela-plant" label="密码" prop="password">
	            <Input :type="pwdType" placeholder="请输入密码" v-model="registForm.password"></Input>
	            <em class="eye" :class="{'eye-open':open}" @click="eyeChange"></em>
	        </Form-item>
	        <Form-item class="rela-plant" label="手机验证码" prop="phoneCode">
	            <Input type="text" placeholder="请输入手机验证码" v-model="registForm.phoneCode"></Input>
	            <span class="send-code" @click="sendCode">{{text}}</span>
	        </Form-item>
	        <!-- <Form-item  class="rela-plant" label="验证码" prop="picCode">
	            <Input type="text" placeholder="请输入图形验证码" v-model="registForm.picCode"></Input>
	            <img class="imgVali" :src="imgCodeSrc" @click="imgRefresh" alt="点击更新" title="点击更新" />
	        </Form-item>-->
	        <!--<Form-item>
	        	 <span class="invite-btn" @click="inviteChange">> 邀请码（选填）</span>
	        </Form-item>-->
	        <Form-item v-show="geetestOpen" label="人工验证" >
	        	<div class="geetest" ref="geetest"></div>
	        </Form-item>
	        <Form-item label="请输入邀请码" prop="inviteCode" v-if="invitorShow">
	            <Input type="text" placeholder="请输入邀请码（选填）" v-model="registForm.inviteCode"></Input>
	        </Form-item>
	        <Form-item >
	        	<Checkbox v-model="agree"></Checkbox><span>同意掌柜金服<span class="agree" @click="modal = true">《注册协议》</span></span>
	        </Form-item>
	        <Form-item>
	            <Button class="regist-btn" type="primary" @click="handleSubmit('registForm')">注册</Button>
	        </Form-item>
	    </Form>
	    <Modal
	        v-model="modal"
	        width="800"
	        title="掌柜金服《注册协议》"
	        :styles="{top: '20px'}"
	        @on-cancel="modal = false">
	        <Agreement/>
	        <p slot="footer">
	        </p>
	    </Modal>
    </div>
</template>
<script>
	import {validatePhone, validatePwd, validateInvitePhone, checkPhone} from '@/tool/regx'
	import Agreement from './Agreement'
	import {BASEURL} from '@/config/url'
	
    export default {
        data () {
            return {
            	imgCodeSrc: BASEURL + '/captcha.svl',
            	invitorShow: true,
            	open: false,
            	agree: false,
            	modal: false,
                registForm: {
                    account: '',
                    password: '',
                    phoneCode: '',
                    inviteCode:''
                },
                rules: {
                	account: [
                		{ required: true, message: '请填写手机号码', trigger: 'blur' },
                		{ validator: validatePhone, trigger: 'blur' }
                	],
                    password: [
                    	{ required: true, message: '请填写密码', trigger: 'blur' },
                        { validator: validatePwd, trigger: 'blur' }
                    ],
                    phoneCode: [
                        { required: true, message: '请填写手机验证码', trigger: 'blur' }
                    ],
                    /*picCode: [
                        { required: true, message: '请填写图片验证码', trigger: 'blur' }
                    ],*/
                    inviteCode: [
                    	{ validator: validateInvitePhone, trigger: 'blur' }
                    ]
                }
            }
        },
        computed: {
        	pwdType (){
        		if (this.open) {
        			return 'text';
        		} else {
        			return 'password';
        		}
        	},
        	text () {
        		return this.$store.state.regist.text
        	},
        	geetestOpen () {
        		return !!this.$store.state.regist.geetestOpen
        	}
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	let obj = {
                    		account: this.registForm.account,
		                    password: this.registForm.password,
		                    phoneCode: this.registForm.phoneCode,
		                   /* picCode: this.registForm.picCode,*/
		                    inviteCode: this.registForm.inviteCode
                    	}
                    	if (this.agree) {
                    		this.$store.dispatch('regist',obj)
                    	} else{
                    		this.$Message.error('请仔细阅读并同意掌柜金服《注册协议》');
                    	}
                    	
                    	
                    }
                })
            },
            inviteChange () {
            	this.registForm.inviteCode = '';
            	this.invitor = !this.invitor;
            },
            eyeChange () {
            	this.open = !this.open
            },
            sendCode () {
            	if (checkPhone(this.registForm.account)) {
            		this.$store.dispatch('registSendCode',{account:this.registForm.account, state: 0})
            	} else {
            		this.$refs.registForm.validateField('account');
            	}
            },
            imgRefresh () {
            	this.imgCodeSrc = BASEURL + '/captcha.svl?t=' + new Date()*1
            }
        },
        mounted () {
        	const invitor = this.$route.query.invitor
			invitor ? this.registForm.inviteCode = invitor : ''
			invitor ? this.invitorShow = false : ''
			
			const geetest = this.$refs.geetest
			this.$store.dispatch('registerGeetestInit', geetest)
			
       },
       components: {
       	Agreement
       }
    }
</script>

<style type="text/css">
	.only-regist-form.ivu-form .ivu-form-item-content{
		margin-left: 100px !important;
	}
	.only-regist-form.ivu-form .ivu-form-item-label{
		font-size: 14px;
		width: 100px !important;
		padding: 15px 12px 15px 0;
	}
	.only-regist-form input{
		height: 44px;
		font-size: 14px;
	}
</style>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';



.agree{
	color: @linkc;
	cursor: pointer;
}
.container{
	width: 400px;
	margin-top: 80px;
	margin-left: auto;
	margin-right: auto;
}
.imgVali{
	height: 30px;
	position: absolute;
	top: 6px;
	right: 10px;
	cursor: pointer;
}
.send-code{
	font-size: @fz;
	padding-left: 10px;
	position: absolute;
	right: 10px;
	top: 1px;
	cursor: pointer;
	height: 42px;
	display: block;
	line-height: 42px;
	color: @border-one;
	border-left: 1px solid @border-one;
}
.eye{
	display: block;
	width: 30px;
	height: 20px;
	position: absolute;
	cursor: pointer;
	right: 5px;
	top: 10px;
	background-size: 100% 100%;
	background-image: url(../../../assets/icon/eye-close.png);
}
.eye.eye-open{
	background-image: url(../../../assets/icon/eye-open.png);
}
.rela-plant{
	position: relative;
}
.regist-btn{
	width: 100%;
	height: 44px;
	font-size: @fz;
}
.invite-btn{
	cursor: pointer;
}
</style>