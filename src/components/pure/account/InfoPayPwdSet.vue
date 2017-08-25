<template>
	<div class="set">
		<Form ref="setForm" :model="setForm" :rules="ruleCustom" :label-width="120">
	        <Form-item label="设置新支付密码" prop="passwd">
	            <Input type="password" size="large" v-model="setForm.passwd" :maxlength="6"  placeholder="请输入当前支付密码"></Input>
	        </Form-item>
	        <Form-item label="确认新支付密码" prop="passwdCheck">
	            <Input type="password" size="large" v-model="setForm.passwdCheck" :maxlength="6" placeholder="请确认支付新密码"></Input>
	        </Form-item>
	        <Form-item>
	            <Button type="primary" class="form-submit" @click="handleSubmitSet('setForm')">保存密码</Button>
	        </Form-item>
	    </Form>	
	</div>
</template>

<script>
import {checkPayPwd } from '@/tool/regx'
	
export default {
    data () {
        const validatePassSet = (rule, value, callback) => {
            if (value === '' || !checkPayPwd(value)) {
                callback(new Error('支付密码不正确'));
            } else {
                if (this.setForm.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.setForm.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheckSet = (rule, value, callback) => {
            if (value === '' || !checkPayPwd(value)) {
                callback(new Error('支付密码不正确'));
            } else if (value !== this.setForm.passwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
        	bind: true,
            setForm: {
                passwd: '',
                passwdCheck: ''
                
            },
            ruleCustom: {
                passwd: [
                	{ required: true, message: '支付密码不能为空', trigger: 'blur' },
                	{ validator: validatePassSet, trigger: 'blur' }
                ],
                passwdCheck: [
                	{ required: true, message: '确认支付密码不能为空', trigger: 'blur' },
                	{ validator: validatePassCheckSet, trigger: 'blur' }
                ]
               
            }
        }
    },
    methods: {
        handleSubmitSet (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                	this.$store.dispatch('accountPayPwdSet', {payPwd: this.setForm.passwd})
                	this.$refs[name].resetFields()
                }
            })
        },
       
    }
}
</script>

<style>
.form-submit{
	width: 100%;
	height: 36px;
}
</style>