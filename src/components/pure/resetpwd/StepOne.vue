<template>
	<div>
		<Form id="one-form" class="only-regist-form"  ref="oneForm" :model="oneForm" :rules="rules" :label-width="100">
	        <Form-item label="手机号码" prop="account">
	            <Input size="large" class="regist-item" type="text" placeholder="请输入手机号码" v-model="oneForm.account"></Input>
	        </Form-item>
	        <Form-item class="rela-plant" label="手机验证码" prop="phoneCode">
	            <Input size="large" type="text" placeholder="请输入手机验证码" v-model="oneForm.phoneCode"></Input>
	            <span class="send-code" @click="sendCode">{{text}}</span>
	        </Form-item>
	        <Form-item>
	            <Button class="next" type="primary" @click="handleSubmit('oneForm')">下一步</Button>
	        </Form-item>
	    </Form>
	</div>
</template>

<script>
import {validatePhone,checkPhone} from '@/tool/regx'
    export default {
    	props: ['text'],
        data () {
            return {
                oneForm: {
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
        mounted () {
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	let obj = {
                    		account: this.oneForm.account,
		                    phoneCode: this.oneForm.phoneCode
                    	}
                    	this.$emit('tempRestore', obj)
                    	this.$emit('submit', obj)
                    } else {
                    }
                })
            },
            sendCode () {
            	if (checkPhone(this.oneForm.account)) {
            		this.$emit('sendCode',{account:this.oneForm.account})
            	} else {
            		this.$refs.oneForm.validateField('account');
            	}
            }
        }
    }
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
#one-form{
	width: 400px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;
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
.next{
	width: 100%;
	height: 44px;
	font-size: @fz;
}
</style>