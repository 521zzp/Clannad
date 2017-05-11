<template>
	<div>
		<BHeader/>
		<div class="content">
			<span class="to-login fr">已有账户？ <router-link to="/login" class="to-regist">立即登陆</router-link></span>
			<RegistForm/>
		</div>
		<BFooter/>
	</div>
</template>

<script>
import BHeader from '@/components/pure/common/BHeader'
import BFooter from '@/components/pure/common/BFooter'
import RegistForm from '@/components/pure/regist/RegistForm'
export default {
	components:{
		BHeader,
		BFooter,
		RegistForm
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../config/base.less';
.content{
	width: 1200px;
	height: 722px;
	margin: 20px auto;
	background-color: #FFFFFF;
	border-radius: @bbr;
	overflow: hidden;
}
.to-login{
	font-size: @fz;
	margin-top:20px;
	margin-right:20px;
}
</style>