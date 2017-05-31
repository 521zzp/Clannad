<template>
	<div>
		<b class="user-account-common-title">我的保险</b>
		<img class="top-bg" src="../../../assets/account/insure-top-bg.png"/>
		<div class="clearfix insure-group">
			<div class="inuser-item">
				<img class="insure-icon" src="" alt="" />
				<span class="name">一级保险</span>
				<div class="insure-info">
					<span class="insure-info-item">保险期限：<span>1</span>年</span>
					<span class="insure-info-item">保险金额：<span>3000</span>元</span>
					<span class="insure-info-item">保费金额：<span>1000000</span>元</span>
				</div>
				<router-link to="/regist" class="about-detail">查看详情</router-link>
				<button class="insure-btn insure-unable">周期内无法购买</button>
			</div>
			<div class="inuser-item">
				<img class="insure-icon" src="" alt="" />
				<span class="name">一级保险</span>
				<div class="insure-info">
					<span class="insure-info-item">保险期限：<span>1</span>年</span>
					<span class="insure-info-item">保险金额：<span>3000</span>元</span>
					<span class="insure-info-item">保费金额：<span>1000000</span>元</span>
				</div>
				<router-link to="/regist" class="about-detail">查看详情</router-link>
				<button class="insure-btn insure-unable">周期内无法购买</button>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	mounted () {
		let bread = [
				{
					name: '余惠宝',
					url: '/'
				},
				{
					name: '我的账户',
					url: '/account'
				},
				{
					name: '我的保险',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.top-bg{
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	margin-bottom: 50px;
}
.my-insure:hover{
	background-color: lighten(@theme,5%);
}
.insure-unable{
	background-color: @gray-one;
	border: 1px solid @gray-one;
	cursor: not-allowed;
}
.my-insure{
	background-color: @theme;
	border: 1px solid @theme;
	cursor: pointer;
}
.insure-btn{
	width: 118px;
	height: 36px;
	display: inline-block;
	vertical-align: middle;
	line-height: 34px;
	color: @white;
	font-size: @bfz;
	margin-left: 20px;
	border-radius: @br;
}
.about-detail{
	font-size: @bfz;
}
.insure-info-item span{
	color: @theme;
	margin-left: .5em;
	margin-right: .5em;
}
.insure-info-item{
	display: block;
	font-size: @fz;
}
.insure-info{
	display: inline-block;
	height: 90px;
	width: 280px;
	vertical-align: middle;
	line-height: 2;
	margin-left: 120px;
	padding-left: 16px;
	border-left: 1px solid @border-two;
	
}
.inuser-item{
	width: 850px;
	height: 128px;
	margin-bottom: 40px;
	border: 1px solid @border-two;
	border-left: 4px solid @theme;
	line-height: 126px;
}
.insure-icon{
	display: inline-block;
	width: 80px;
	height: 80px;
	background-color: pink;
	border-radius: 50%;
	margin-left: 12px;
	vertical-align: middle;
}
.name{
	display: inline-block;
	font-size: 20px;
	color: @gray-three;
	margin-left: 30px;
}
</style>