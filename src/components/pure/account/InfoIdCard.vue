<template>
	<div class="clearfix">
		<b class="attention">真实姓名和身份证号一经认证不予修改，如确需修改，请联系客服</b>		
		<span class="service">客服热线：<span class="phone">400-838-8304</span> （客服时间：9：00-21：00）</span>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	}
}
</script>

<style lang="less" scoped="scoped">
@import '../../../config/base.less';
.attention{
	display: block;
	text-align: center;
	color: @gray-three;
	font-size: @bfz;
	margin-top: 54px;
}
.service{
	display: block;
	text-align: center;
	color: @gray-three;
	margin-top: 30px;
	margin-bottom: 90px;
}
.phone{
	color: @linkc;
}
</style>