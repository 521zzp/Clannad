<template>
	<div class="container">
		<router-link to="/regist" class="show-item">
			<div class="show-pic">
				<img src="../../../assets/home/Clock.png"/>
			</div>
			<div class="info">
				<span class="title">运营时间</span>
				<span class="desc">自掌柜金服上线以来已安全运营1000天</span>
			</div>
		</router-link><router-link to="/regist" class="show-item">
			<div class="show-pic">
				<img src="../../../assets/home/Keyhole-Shield.png"/>
			</div>
			<div class="info">
				<span class="title">安全保障</span>
				<span class="desc">宁夏银行托管，资金账户安全有保障</span>
			</div>
		</router-link><router-link to="/regist" class="show-item">
			<div class="show-pic">
				<img src="../../../assets/home/Registry-Editor.png"/>
			</div>
			<div class="info">
				<span class="title">平台注册量</span>
				<span class="desc">迄今，平台注册量已突破1000，00</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default{
	
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../config/base.less");

.desc{
	color: #999999;
	font-size: @fz;
}
.title{
	display: block;
	margin-top: 30px;
	font-size: 16px;
	color: @gray-three;
}
.info{
	display: inline-block;
	float: left;
	width: 170px;
	height: 100%;
}
.show-pic{
	display: inline-block;
	height: 120px;
	width: 164px;
	float: left;
	text-align: center;
}
.show-item img{
	display: inline-block;
	width: 72px;
	position: relative;
	top: 50%;
	margin-top: -36px;
}
.show-item:nth-child(2){
	border-left: 1px solid @border-two;
	border-right: 1px solid @border-two;
}
.show-item{
	display: inline-block;
	width: calc((1200-2)/3px);	
	height: 120px;
	background-color: #FFFFFF;
}
.container{
	width: 1200px;
	height: 122px;
	margin: 0 auto;
	border: 1px solid @border-two;
}


</style>