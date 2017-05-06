<template>
	<div class="notice">
		<div class="time fl">
			<Icon class="notice-icon" type="volume-medium" size=30 ></Icon>
			<span>2017年05月30日</span>
		</div>
		<em class="r-border"></em>
		<marquee class="notice-info">恭喜月色成功突围进入b站番剧前9！！！</marquee>
		<router-link to="/more" class="notice-more fr">更多>></router-link>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../config/base.less");
.notice-more{ 
	color: @gray-one;
}
.notice-info{
	display: inline-block;
	width: 70%;
	margin-left: 15px;
}
.r-border{
	width: 1px;
	display: inline-block;
	height: 60%;
	float: left;
	margin-top: 7px;
	background-color: @border-two;
}
.time{
	display: inline-block;
	padding-right: 15px;
}
.notice-icon{
	line-height: 0;
	float: left;
	margin-left: 10px;
	margin-right: 20px;
	margin-top: 18px;
	color: @theme;
}
.notice{
	height: 34px;
	width: 100%;
	max-width: 1200px;
	min-width: 1000px;
	margin: 0 auto;
	line-height: 34px;
	font-size: @fz - 2;
}
</style>