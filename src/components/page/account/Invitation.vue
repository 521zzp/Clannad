<template>
	<div>
		<b class="user-account-common-title">邀请好友</b>
		<InviteTemplate :wxConfig="wxConfig" :qqConfig="qqConfig" :qqZoneConfig="qqZoneConfig" :msgConfig="msgConfig" :copyConfig="copyConfig"/>
		<!--<div class="my-profit-wrap">
			<span class="my-profit">我的奖励：<b class="my-profit-value">45</b>元</span>
		</div>
		<Table class="only-invite-profit-list" :columns="profitHeader" :data="profitList"></Table>
		<div class="common-center-page-wrap" >
    		<Page :total="400" size="small" class="common-center-page-nav"></Page>
    	</div>
    	<div class="invite-rules">
			<span class="rule-title">奖励规则：</span>
			<span class="rule-item">1.好友通过您分享的链接注册并绑定银行卡，您可以获得2元奖励</span>
			<span class="rule-item">2.好友首次购买理财产品，您可以获得3元奖励</span>
			<span class="rule-item">4.每日分享到微信朋友圈（仅限APP分享微信朋友圈功能），您可以获得0.5元奖励</span>
		</div>-->
	    
	</div>
</template>

<script>

import {IMG} from '@/config/url'
import {validatePhone} from '@/tool/regx'
import InviteTemplate from '@/components/pure/common/InviteTemplate'

export default {
	data () {
		return {
        	profitHeader: [
                {
                    title: '奖励（元）',
                    key: 'money',
                    align: "center",
                    className: 'profit-money-column'
                },
                {
                    title: '类型',
                    key: 'type',
                    align: "center"
                },
                {
                    title: '手机号',
                    key: 'phone',
                    align: "center"
                },
                {
                    title: '时间',
                    key: 'time',
                    align: "center"
                }
            ],
            profitList: [
                {
                    money: '3',
                    type: '实名认证',
                    phone: '13549835906',
                    time: '2017-03-21'
                },
                {
                    money: '3',
                    type: '实名认证',
                    phone: '13549835906',
                    time: '2017-03-21'
                },
                {
                    money: '3',
                    type: '实名认证',
                    phone: '13549835906',
                    time: '2017-03-21'
                },
                {
                    money: '3',
                    type: '实名认证',
                    phone: '13549835906',
                    time: '2017-03-21'
                }
            ]
		}
	},
	computed: {
		invitor () {
			return this.$store.state.user.account
		},
		wxConfig() {
            return {
            	value: 'http://www.zhangguijf.com/register?invitor=' + this.invitor,
	            imagePath: '../../../static/logo.png',
	            filter: 'color',
	            downloadButton: false,
            }
    	},
    	qqConfig () {
    		return {
    			value: 'http://www.zhangguijf.com/register?invitor=' + this.invitor,
	    		title: '诚挚邀请您加入掌柜金服大家庭',
	    		pics: IMG+ '/common/header/logo.png',
	    		summary: '加入掌柜金服加入掌柜金服加入掌柜金服加入掌柜金服'
    		}
    	},
    	qqZoneConfig () {
    		return {
    			value: 'http://www.zhangguijf.com/register?invitor=' + this.invitor,
	    		title: '诚挚邀请您加入掌柜金服大家庭',
	    		pics: IMG+ '/common/header/logo.png',
	    		summary: '加入掌柜金服加入掌柜金服加入掌柜金服加入掌柜金服'
    		}
    	},
    	msgConfig () {
        	return {
        		msgForm: {
        			message: '好友注册，详情点击http://www.zhangguijf.com/register?invitor=' + this.invitor,
	        		phone: ''
	        	},
	    		msgRules : {
	        		phone: [
	                    { required: true, message: '手机号码不能为空', trigger: 'blur' },
	                    { validator: validatePhone, trigger: 'blur' }
	                ],
	        	},
        	}
    	},
    	copyConfig () {
        	return {
        		copyForm: {
	        		content: 'http://www.zhangguijf.com/register?invitor=' + this.invitor,
	        	},
        	}
    	},
	},
	mounted () {
		let bread = [
				{
					name: '掌柜金服',
					url: '/'
				},
				{
					name: '我的账户',
					url: '/account'
				},
				{
					name: '邀请好友',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
	methods: {
		
	},
	components: {
		InviteTemplate
	}
}
</script>

<style lang="less">
@import '../../../config/base.less';

.ivu-table td.profit-money-column{
	color: @theme;
}
.only-invite-profit-list .ivu-table:after {
	background-color: #FFFFFF;
}
.only-invite-profit-list .ivu-table:before{
	background-color: #e3e8ee;
}
.only-invite-profit-list{
	border: none !important;
}
.only-invite-model .ivu-modal-footer{
	border-top: none;
}
</style>
<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.rule-item{
	text-indent: 20px;
	font-size: @fz;
	display: block;
}
.invite-rules{
	color: @gray-one;
	line-height: 2;
	margin-top: 30px;
}
.rule-title{
	font-size: @bfz;
	color: @gray-three;
	display: block;
}
.my-profit-wrap{
	margin: 20px 0;
}
.my-profit-value{
	color: @theme;
	font-size: 24px;
	margin: 0 .4em;
	vertical-align: -2px;
}
.my-profit{
	font-size: @bfz;
	color: @gray-three;
}



</style>