<template>
	<div class="clearfix">
		<div class="head-content clearfix">
			<img class="agent-face" :src="path" alt="" />
		</div>
		<div class="info-group info-group-one">
			<span class="info-item">电话：18311112222</span>
			<span class="info-item">代理码：882483</span>
			<span class="info-item">保证金：20000元</span>
		</div>
		<div class="info-group">
			<span class="info-item">代理区域：安徽省</span>
			<span class="info-item">代理范围：黄山市</span>
			<span class="info-item">代理子商户数量：<span class="theme-color">12</span>个</span>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			path: '//i2.hdslb.com/bfs/face/d840759d992bd2e5b6780976b30f81234dfb09f0.jpg_52x52.jpg'
		}
	}
}

</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.info-item{
	display: block;
	margin-left: 54px;
	color: @gray-three;
	line-height: 2.5;
}
.info-group-one{
	border-bottom: 1px dashed @border-two;
}
.info-group{
	width: 220px;
	margin-top: 12px;
	padding-bottom: 12px;
	margin-left: auto;
	margin-right: auto;	
}
.theme-color{
	margin: 0 .2em;
	color: @theme;
}
.agent-face{
	display: block;
	width: 124px;
	height: 124px;
	padding: 10px 10px;
	border-radius: 50%;
	margin-left: auto;
	margin-right: auto;
	border: 1px solid #919191;
	box-shadow: 0 0 10px 0 #000000 inset;
}
.head-content{
	margin-top: 25px;
}
</style>