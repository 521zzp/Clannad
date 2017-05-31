<template>
	 <div class="recharge">
	 	<b class="user-account-common-title">充值</b>
	 	<span class="balance">账户余额（元）：<span class="money">900000</span></span>
	 	<span class="title-span">选择银行：</span>
	 	<div class="bank-content clearfix">
			<ul class="bank-group clearfix">
				<li class="bank-item fl" v-for="item,index in banks" key="index">
					<input type="radio" name="bank-code" :id="item.name" @change="change(item.value)"/>
					<label :for="item.name" class="bank-bg" :style="{backgroundImage: 'url('+item.bg+')'}"></label>
					<span>{{item.bank}}</span>
				</li>
			</ul>
			
	 	</div>
	 </div>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			banks: [
				{	
					bank: '中国建设银行',
					name: 'zgjsyh',
					bg: IMG + '/account/banks/zgjsyh.png',
					value: '0801050000'
				},
				{
					bank: '中国银行',
					name: 'zgyh',
					bg: IMG + '/account/banks/zgyh.png',
					value: '0803020000'
				},
				{
					bank: '中信银行',
					name: 'zxyh',
					bg: IMG + '/account/banks/zxyh.png',
					value: '0801040000'
				},
				{
					bank: '中国工商银行',
					name: 'zggsyh',
					bg: IMG + '/account/banks/zggsyh.png',
					value: '0801040000'
				},
				{
					bank: '华夏银行',
					name: 'hxyh',
					bg: IMG + '/account/banks/hxyh.png',
					value: '0801040000'
				},
				{
					bank: '北京银行',
					name: 'bjyh',
					bg: IMG + '/account/banks/bjyh.png',
					value: '0801040000'
				},
				{
					bank: '中国邮政',
					name: 'zgyz',
					bg: IMG + '/account/banks/zgyz.png',
					value: '0801040000'
				},
				{
					bank: '中国农业银行',
					name: 'zgnyyh',
					bg: IMG + '/account/banks/zgnyyh.png',
					value: '0801040000'
				},
				{
					bank: '招商银行',
					name: 'zsyh',
					bg: IMG + '/account/banks/zsyh.png',
					value: '0801040000'
				},
				{
					bank: '广发银行',
					name: 'gfyh',
					bg: IMG + '/account/banks/gfyh.png',
					value: '0801040000'
				},
				{
					bank: '兴业银行',
					name: 'xyyh',
					bg: IMG + '/account/banks/xyyh.png',
					value: '0801040000'
				},
				{
					bank: '中国广大银行',
					name: 'zggdyh',
					bg: IMG + '/account/banks/zggdyh.png',
					value: '0801040000'
				},
				{
					bank: '上海浦东发展银行',
					name: 'shpdfzyh',
					bg: IMG + '/account/banks/shpdfzyh.png',
					value: '0801040000'
				},
				{
					bank: '中国民生银行',
					name: 'zgmsyh',
					bg: IMG + '/account/banks/zgmsyh.png',
					value: '0801040000'
				},
				{
					bank: '上海农商银行',
					name: 'shnsyh',
					bg: IMG + '/account/banks/shnsyh.png',
					value: '0801040000'
				},
				{
					bank: '洛阳银行',
					name: 'lyyh',
					bg: IMG + '/account/banks/lyyh.png',
					value: '0801040000'
				},
				{
					bank: '平安银行',
					name: 'payh',
					bg: IMG + '/account/banks/payh.png',
					value: '0801040000'
				},
				{
					bank: '其他银行',
					name: 'other',
					bg: IMG + '/account/banks/other.png',
					value: '0801040000'
				},
			],
			bankCode: ''
		}
	},
	methods: {
		change (e) {
			console.log(e)
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
					name: '账户总览',
					url: '/account'
				},
				{
					name: '充值',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

input:checked + .bank-bg{
	background-position: 0 -90px;
}
.bank-bg{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	cursor: pointer;
}
.bank-item{
	position: relative;
	display: inline-block;
	width: 140px;
	height: 40px;
	margin-right: 41px;
	margin-bottom: 40px;
}
.bank-content{
	padding-left: 104px;
}
.title-span{
	display: block;
	font-size: @fz;
	margin-top: 36px;
}
.balance{
	display: block;
	padding-bottom: 14px;
	line-height: 1;
	margin-top: 48px;
	font-size: @fz;
	border-bottom: 1px dashed @border-two;
}
.money{
	font-size: 24px;
	margin-left: .2em;
	vertical-align: -2px;
	color: @theme;
}
.recharge{
	color: @gray-one;
}
</style>