<template>
	<div>
		<b class="user-account-common-title">邀请好友</b>
		<div class="invite-group">
			<div class="invite-item">
				<div class="invite-icon invite-wechat"></div>
				<div class="invite-desc">微信</div>
				<div class="link-2d-dimensional-bar-code">
					<vue-q-art class="qart-content" :config="wxConfig" :downloadButton="downloadButton"></vue-q-art>
				</div>
			</div>
			<a class="invite-item" :href="qqInvite" target="_blank">
				<div class="invite-icon invite-qq"></div>
				<div class="invite-desc">QQ</div>
			</a>
			<a class="invite-item" :href="qqZoneInvite" target="_blank">
				<div class="invite-icon invite-qq-zone"></div>
				<div class="invite-desc">QQ空间</div>
			</a>
			<div class="invite-item" @click="msgModel = true">
				<div class="invite-icon invite-message"></div>
				<div class="invite-desc">短信</div>
			</div>
			<div class="invite-item" @click="copyModel = true">
				<div class="invite-icon invite-copy-link"></div>
				<div class="invite-desc">复制连接</div>
			</div>
		</div>
		<div class="step">
			<img class="invite-step-img" src="../../../assets/account/invite-step.png"/>
		</div>
		<div class="my-profit-wrap">
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
			
		</div>
    	
    	
		<!--modal place-->
		<Modal v-model="msgModel" width="360" title="短信推荐" :width="500" class="only-invite-model">
	         <Form ref="msgForm" :model="msgForm" :rules="msgRules" :label-width="90" class="msgForm">
		        <Form-item label="内容：" prop="message">
		            <Input type="textarea" v-model="msgForm.message" readonly="true"></Input>
		        </Form-item>
		        <Form-item label="手机号码：" prop="phone">
		            <Input type="text" size="large" v-model="msgForm.phone" placeholder="好友手机号码"></Input>
		        </Form-item>
		    </Form>
	        <div slot="footer" >
	            <Button type="error" size="large"  :loading="modal_loading" @click="handleSubmit('msgForm')" class="msgBtn">立即发送</Button>
	        </div>
	    </Modal>
	    <Modal v-model="copyModel" width="360" title="短信推荐" :width="500"  class="only-invite-model">
	         <Form ref="copyForm" :model="copyForm" :label-width="80" class="copy-form">
	         	<span class="copy-form-title">复制以下内容，发送给您的好友</span>
		        <Form-item label="内容：" prop="content" style="margin-bottom: 10px !important;">
		            <Input type="textarea" id="copy-content" v-model="copyForm.content" readonly="true" :autosize="{minRows: 4,maxRows: 4}"></Input>
		        </Form-item>
		        <span class="copy-form-foot">好友点击您发送的邀请链接，完成注册，您将获得奖励</span>
		    </Form>
	        <div slot="footer">
	            <Button type="error" size="large" :loading="modal_loading" @click="copy" class="copy-btn">复制内容</Button>
	        </div>
	    </Modal>
	    
	</div>
</template>

<script>
import VueQArt from 'vue-qart'
import {IMG} from '@/config/url'
import {validatePhone} from '@/tool/regx'

export default {
	data () {
		return {
			wxConfig: {
	            value: 'https://www.baidu.com',
	            imagePath: '../../../static/logo.png',
	            filter: 'color',
        	},
        	downloadButton: false,
        	qqConfig: {
        		value: 'http://www.yhb118.com',
        		title: '诚挚邀请您加入余惠宝大家庭',
        		pics: IMG+ '/common/header/logo.png',
        		summary: '加入余惠宝加入余惠宝加入余惠宝加入余惠宝'
        	},
        	qqZoneConfig: {
        		value: 'http://www.yhb118.com',
        		title: '诚挚邀请您加入余惠宝大家庭',
        		pics: IMG+ '/common/header/logo.png',
        		summary: '加入余惠宝加入余惠宝加入余惠宝加入余惠宝'
        	},
        	msgModel: false,
        	msgForm: {
        		message: '好友注册，详情点击http://www.yhb118.com',
        		phone: ''
        	},
        	msgRules : {
        		phone: [
                    { required: true, message: '手机号码不能为空', trigger: 'blur' },
                    { validator: validatePhone, trigger: 'blur' }
                ],
        	},
        	copyModel: false,
        	copyForm: {
        		content: 'http://www.yhb118.com',
        	},
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
		qqInvite () {
			let config = this.qqConfig
			return 'http://connect.qq.com/widget/shareqq/index.html?url=' + config.value + "&title=" + config.title + "&pics=" + config.pics + "&summary=" + config.summary
		},
		qqZoneInvite () {
			let config = this.qqZoneConfig
			return "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + config.value + "&codestyle=standard&title=" + config.title + "&pics=" + config.pics + "&summary=" + config.summary
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
					name: '邀请好友',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
	methods: {
		handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        copy () {
        	try{
        		document.querySelector('#copy-content textarea').select()
	  			document.execCommand("Copy")
	  			this.copyModel = false
	  			this.$Notice.success({
	                desc: '已经成功复制到剪切板，按Ctrl + v 即可粘贴哦！'
	            });
        	}catch(e){
        		this.$Notice.error({
                    desc: '您的浏览器不支持文本复制，请手动选择文本按Ctrl + c 复制哦！'
                });
        	}
        }
	},
	components: {
		VueQArt
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
.invite-step-img{
	display: block;
	width: 805px;
	margin: 0 auto;
}
.step{
	margin-top: 77px;
	padding-bottom: 30px;
	border-bottom: 1px dashed @border-two;
}
.copy-form-foot{
	display: block;
	text-indent: 7em;
}
.copy-form-title{
	display: block;
	color: @theme;
	text-align: center;
	margin-bottom: 10px;
}
.qart-content{
	margin-left: auto;
	margin-right: auto;
	margin-top: 30px;
}
.invite-item:hover .link-2d-dimensional-bar-code{
	top: 68px;
	width: 218px;
	opacity: 1;
}
.link-2d-dimensional-bar-code{
	width: 0;
	height: 247px;
	position: absolute;
	background-image: url(../../../assets/account/invite-wechat-code-bg.png);
	left: -24px;
	top: 88px;
	overflow: hidden;
	opacity: 0;
	transition: opacity .8s,top .8s;
}
.invite-desc{
	margin-top: 10px;
}
.invite-icon{
	width: 68px;
	height: 68px;
	background-repeat: no-repeat;
}
.invite-item{
	text-align: center;
	cursor: pointer;
	position: relative;
}
.invite-group{
	margin-top: 48px;
	padding: 0 26px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
}
.msgBtn{
	width: 300px;
	margin: 0 auto;
	display: block;
	margin-bottom: 50px;
}
.msgForm{
	margin: 20px 20px 0 10px; 
	width: 400px;
}
.copy-btn{
	width: 300px;
	margin: 0 auto;
	display: block;
	margin-bottom: 50px;
}
.copy-form{
	margin: 0px 20px 0 10px; 
	width: 400px;
}
.invite-wechat{
	background-image: url(../../../assets/account/invite-wechat.png);
}
.invite-qq{
	background-image: url(../../../assets/account/invite-qq.png);
}
.invite-qq-zone{
	background-image: url(../../../assets/account/invite-qq-zone.png);
}
.invite-message{
	background-image: url(../../../assets/account/invite-message.png);
}
.invite-copy-link{
	background-image: url(../../../assets/account/invite-copy-link.png);
}
</style>