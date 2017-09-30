<template>
	<div>
		<div class="copyRight">
			<span>Copyright © 2017&nbsp;&nbsp;网站备案号:<a class="beian-link" href="http:\\www.miitbeian.gov.cn" target="_blank">沪ICP备16049393号-1</a></span>
			<span style="width:100%;text-align:center;height: 20px;line-height: 0px;">上海蓬宝互联网金融信息服务有限公司</span>
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

.copyRight{
	font-size: 14px;
	margin-top: 10px;
	color: @gray-three;
	padding: 14px 0;
}
.copyRight>span{
	display: block;
	margin-bottom: 10px;
	text-align: center;
}
.beian-link{
	margin-left: .5em;
	color: @gray-three;
}
.beian-link:hover{
	color: @linkc;
	text-decoration: underline;
}
</style>