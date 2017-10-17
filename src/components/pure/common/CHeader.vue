<template>
	<div class="clearfix title wrap-minw">
		<div class="container">
			<router-link to="/" class="to-home clearfix">
				<img src="../../../assets/icon/logo-type-two.png"/>
			</router-link>
			<div class="link-group fr">
				<router-link to="/" class="home-link">首页</router-link>
				<span class="back" @click="back"><Icon type="arrow-return-left" class="back-icon"></Icon></span>
			</div>
		</div>
		<div class="fliter-bg wrap-minw"></div>
	</div>	
</template>

<script>
import router from '@/router'
export default {
	data () {
		return {
			
		}
	},
	methods: {
		back () {
			router.go(-1)
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.home-link:hover{
	color: @linkc;
}
.home-link{
	margin-right: 38px;
	color: @gray-three;
}
.back:hover .back-icon{
	color: @linkc;
}
.back{
	cursor: pointer;
	font-size: 24px;
	display: inline-block;
	width: 36px;
	height: 21px;
	vertical-align: middle;
	line-height: 0;
}
.link-group{
	color: @gray-three;
	font-size: @fz + 4;
	margin-right: 50px;
}
.to-home{
	line-height: 0;
	margin-left: 20px;
	display: inline-block;
	vertical-align: middle;
}
.title{
	width: 100%;
}
.fliter-bg{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	z-index: -1;
	background-color: rgba(234, 232, 231, 0.6);
	box-shadow: 0 0 10px 0 @gray-one;
}
.container{
	height: 60px;
	line-height: 60px;
	width: @mw;
	margin: 0 auto;
	overflow: hidden;
}
</style>