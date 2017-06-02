<template>
	<div class="container">
		<div class="top">
			<span class="title">官方公告</span>	
		</div>
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

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.title{
	display: block;
	font-size: 18px;
	color: @gray-three;
	text-align: center;
	margin-top: 48px;
	font-weight: 600;
}
.top{
	height: 162px;
	border-bottom: 1px dashed @border-one;
}
</style>