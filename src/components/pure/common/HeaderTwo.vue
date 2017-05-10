<template>
	<div class="second">
		<div class="container">
			<div class="logo fl">
				<img :src="logo"/>
			</div>
			<nav class="fr nav-one">
				<div class="nav-item">
					<router-link to="/" class="level-one fl">首页</router-link>
				</div>
				<div class="nav-item">
					<router-link to="/" class="level-one fl">我要理财</router-link>
				</div>
				<div class="nav-item more-items info-show">
					<span class="level-one fl ">信息披露
						 <Icon type="arrow-down-b" class="drop-arrow"></Icon>
					</span>
					<nav class="nav-two clearfix">
						<router-link to="/" class="level-two">我要理财</router-link>
						<router-link to="/" class="level-two">我要理财</router-link>
						<router-link to="/" class="level-two">我要理财</router-link>
						<router-link to="/" class="level-two">我要理财</router-link>
					</nav>
				</div>
				<div class="nav-item">
					<router-link to="/" class="level-one fl">积分商城</router-link>
				</div>
				<div class="nav-item more-items user-info">
					<span class="level-one fl ">
						<router-link to="/" class="level-one fl">
							<img v-if="!!this.$store.state.token" :src="face" alt="" class="user-face"/>
							我的账户</router-link>
						 <Icon type="arrow-down-b" class="drop-arrow"></Icon>
					</span>
					<nav class="nav-two clearfix">
						<router-link to="/" class="level-two">我要理财</router-link>
						<router-link to="/" class="level-two">我要理财</router-link>
						<router-link to="/" class="level-two">我要理财</router-link>
						<router-link to="/" class="level-two">我要理财</router-link>
					</nav>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import {IMG,WEIBO} from '@/config/url'
export default {
	data () {
		return {
			face: this.$store.state.user.face,
			logo: IMG + '/common/header/logo.png' 
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.user-face{
	display: inline-block;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	overflow: hidden;
	float: left;
	margin-top: 20%;
	margin-right: 10px;
	background-image: url(../../../assets/icon/user-face-bg.png);
	background-size: 100% 100%;
}
.nav-two a:hover{
	text-indent: 1.5em;
	background-color: @gray-two;
}
.nav-two a{
	display: block;
	line-height: 40px;
	color: #4C4C4C;
	text-indent: 1em;
	transition: text-indent .2s; 
}
.info-show,.user-info{
	position: relative;
}
.more-items:hover .nav-two{
	display: block;
}
.nav-two{
	position: absolute;
	top: 70px;
	left: -10px;
	font-size: 14px;
	color: #4C4C4C;
	width: 120px;
	display: none;
	background-color: #FFFFFF;
	border-radius: @br;
	overflow: hidden;
	z-index: 10;
}
.drop-arrow{
	transition: transform .5s;
}
.more-items:hover .drop-arrow{
	transform: rotateZ(180deg);
}
.nav-item{
	display: inline-block;
	margin-right: 18px;
	margin-left: 40px;
	cursor: pointer;
}
.level-one{
	font-size: 18px;
	color: #4c4c4c;
}
.container{
	width: 1200px;
	margin: 0 auto;
	height: 100%;
}
.second{
	height: 90px;
	background-color: #ffffff;
}
.logo{
	display: inline-block;
	width: 290px;
	height: 100%;
}
.nav-one{
	display: inline-block;	
	height: 100%;
	line-height: 90px;
}
</style>