<template>
    <div class="container">
    	<span class="title">欢迎登陆余惠宝</span>
    	<Form class="loign-form dsbjfs" ref="loginForm" :model="loginForm" :rules="ruleInline" >
	        <Form-item class="item" prop="account">
	            <Input type="text" v-model="loginForm.account" placeholder="手机号">
	                <Icon type="ios-person-outline" slot="prepend"></Icon>
	            </Input>
	        </Form-item>
	        <Form-item class="item" prop="password">
	            <Input type="password" v-model="loginForm.password" placeholder="密码">
	                <Icon type="ios-locked-outline" slot="prepend"></Icon>
	            </Input>
	        </Form-item>
	        <span class="link-one clearfix">
	        	<router-link to="/" class="fr">忘记密码</router-link>
	        </span>
	        <Form-item class="item">
	            <Button class="login-btn" type="primary" @click="handleSubmit('loginForm')">登录</Button>
	        </Form-item>
	        <span class="link-one clearfix to-regist">
	        	<router-link to="/">立即注册</router-link>
	        </span>
	    </Form>
    </div>
</template>
<script>
import {validatePhone,validatePwd} from '@/tool/regx'
    export default {
        data () {
            return {
                loginForm: {
                    account: '',
                    password: ''
                },
                ruleInline: {
                    account: [
                        { required: true, message: '请填写用户名', trigger: 'blur' },
                        { validator: validatePhone, trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { validator: validatePwd, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	console.log(this.loginForm)
                    	this.$store.dispatch('login',{account: this.loginForm.account, password: this.loginForm.password});
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>


<style >
	@import url("../../../config/base.less");
	.dsbjfs input{
		height: 40px !important;
		background-color: rgb(0,0,0,0.3);
	}
	.dsbjfs .ivu-input-group-prepend{
		background-color: rgb(0,0,0,0.3) !important;
	}
</style>
<style scoped="scoped" lang="less">
@import url("../../../config/base.less");
.login-btn{
	width: 100%;
	height: 40px;
	font-size: @fz;
}
.to-regist{
	text-align: center;
}
.container{
	width: 100%;
	height: 100%;
}
.link-one a{
	color: @gray-one;
}
.link-one{
	display: block;
	margin: 12px auto;
}
.loign-form{
	width: 308px;
	margin: 0 auto;
}
.title{
	display: block;
	text-align: center;
	font-size: @fz*2-4;
	height: 96px;
	line-height: 96px;
	color: #FFFFFF;
}
</style>