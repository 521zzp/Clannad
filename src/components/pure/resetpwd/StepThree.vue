<template>
	<div>
		<Icon class="result" size="60" type="checkmark-circled"></Icon>
		<span class="result-msg">密码修改成功，5s后页面跳转到登陆页面</span>
		<router-link class="result-msg" to="/login">立即跳转</router-link>
	</div>
</template>

<script>
	export default {
		
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
</style>