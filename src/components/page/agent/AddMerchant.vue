<template>
	<div>
		<b class="agent-common-title">添加商户</b>
		<Form ref="form" :model="form" :rules="rules" class="add-form" :label-width="80">
	        <Form-item prop="phone" label="手机号码：">
	           <Input type="text" size="large" v-model="form.phone"   placeholder="请输入新商户手机号码"></Input>
	        </Form-item>
	        <Form-item prop="password" label="密码：">
	           <Input type="password" size="large" v-model="form.password"   placeholder="请输入密码"></Input>
	        </Form-item>
	        <Form-item prop="confirmPwd" label="确认密码：">
	           <Input type="password" size="large" v-model="form.confirmPwd"   placeholder="请再次输入密码"></Input>
	        </Form-item>
	        <Form-item prop="name" label="姓名：">
	           <Input type="text" size="large" v-model="form.name"   placeholder="请输入新商户真实姓名"></Input>
	        </Form-item>
	        <Form-item prop="idCard" label="身份证号：">
	           <Input type="text" size="large" v-model="form.idCard"   placeholder="请输入新商户身份证号"></Input>
	        </Form-item>
	        <Form-item >
	            <Button type="primary" @click="handleSubmit('form')" class="form-submit-btn">添加</Button>
	        </Form-item>
	    </Form>
	    
	</div>
</template>

<script>
export default {
	data () {
		return {
			form: {
				phone: '',
				password: '',
				confirmPwd: '',
				name: '',
				idCard: ''
				
			},
			 rules: {
               /* phone: [
                	{ validator: validatePhoneFilter, trigger: 'blur' }
                ],*/
            },
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../config/base.less");

.add-form{
	width: 400px;
	margin: 50px auto;
}
.form-submit-btn{
	width: 100%;
}
</style>