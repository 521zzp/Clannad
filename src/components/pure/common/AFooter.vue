<template>
	<footer class="clearfix">
		<div class="container clearfix">
			<ul class="clearfix link-group">
				<li class="item fl clearfix ">
					<span class="title">关于我们</span>
					<div class="foot-item"><router-link to="/home">荣誉资质</router-link></div>
					<div class="foot-item"><router-link to="/home">联系我们</router-link></div>
				</li>
				<li class="item fl clearfix">
					<span class="title">安全保障</span>
					<div class="foot-item"><router-link to="/home">平台安全</router-link></div>
					<div class="foot-item"><router-link to="/home">服务说明</router-link></div>
					<div class="foot-item"><router-link to="/home">法律意见书</router-link></div>
				</li>
				<li class="item fl clearfix">
					<span class="title">合作伙伴</span>
					<div class="foot-item"><a href="http://www.cmbc.com.cn/" target="_blank">中国民生银行</a></div>
					<div class="foot-item"><a href="http://www.cgbchina.com.cn/" target="_blank">广发银行</a></div>
					<div class="foot-item"><a href="http://www.pingan.com/" target="_blank">中国平安</a></div>
					<div class="foot-item"><a href="http://www.cmbchina.com/" target="_blank">招商银行</a></div>
					<div class="foot-item"><a href="http://www.chinapnr.com/" target="_blank">汇付天下</a></div>
					<div class="foot-item"><a href="http://www.jsfund.cn/" target="_blank">嘉实基金</a></div>
				</li>
				<li class="item-msg fl clearfix">
					<span class="title">热线电话</span>
					<span class="foot-phone line-span">400-838-8304</span>
					<span class="line-span">服务时间：08:00-21:00（周一至周日）</span>
					<span class="line-span">邮箱：postmaster@qingxijituan.com</span>
					<span>网络投诉咨询中心</span>
				</li>
				<li class="item-pic fl clearfix">
					<img class="wechat-img" :src="wechatImg"/>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			wechatImg: IMG + '/common/footer/wechat.png'
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

footer{
	width: 100%;
	background-color: #30373a;
	padding-bottom: 30px;
}
.item-msg{
	width: 25%;
	font-size: @fz;
}
.foot-phone{
	font-size: 32px;
}
.line-span{
	display: block;
	margin-bottom: 5px;
}
.title{
	font-size: @fz + 2;
}
.container {
	width: 1200px;
	margin: 0 auto;
}
.link-group li{
	margin-top: 28px;
}
.container .link-group{
	color: @border-two;
	width: 100%;
}
.item{
	width: 18%;
}
.item-pic{
	width: 20%;
	text-align: center;
}
.foot-item{
	width: 100%;
	margin-top: 6px;
}
.item a{
	color: @border-two;
	font-size: @fz;
}
</style>