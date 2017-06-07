<template>
	<div class="clearfix">
		<div class="invite-group">
			<div v-if="!!wxConfig" class="invite-item">
				<div class="invite-icon invite-wechat"></div>
				<div class="invite-desc">微信</div>
				<div class="link-2d-dimensional-bar-code">
					<vue-q-art class="qart-content" :config="wxConfig" :downloadButton="wxConfig.downloadButton"></vue-q-art>
				</div>
			</div>
			<a v-if="!!qqConfig" class="invite-item" :href="qqInvite" target="_blank">
				<div class="invite-icon invite-qq"></div>
				<div class="invite-desc">QQ</div>
			</a>
			<a v-if="!!qqZoneConfig" class="invite-item" :href="qqZoneInvite" target="_blank">
				<div class="invite-icon invite-qq-zone"></div>
				<div class="invite-desc">QQ空间</div>
			</a>
			<div v-if="!!msgConfig" class="invite-item" @click="msgModel = true">
				<div class="invite-icon invite-message"></div>
				<div class="invite-desc">短信</div>
			</div>
			<div v-if="!!copyConfig" class="invite-item" @click="copyModel = true">
				<div class="invite-icon invite-copy-link"></div>
				<div class="invite-desc">复制连接</div>
			</div>
		</div>
		<div class="step">
			<img class="invite-step-img" src="../../../assets/account/invite-step.png"/>
		</div>
		<!--modal place-->
		<Modal v-if="!!msgConfig" v-model="msgModel" width="360" title="短信推荐" :width="500" class="only-invite-model">
	         <Form ref="msgConfig.msgForm" :model="msgConfig.msgForm" :rules="msgConfig.msgRules" :label-width="90" class="msgForm">
		        <Form-item label="内容：" prop="message">
		            <Input type="textarea" v-model="msgConfig.msgForm.message" :readonly="true"></Input>
		        </Form-item>
		        <Form-item label="手机号码：" prop="phone">
		            <Input type="text" size="large" v-model="msgConfig.msgForm.phone" placeholder="好友手机号码"></Input>
		        </Form-item>
		    </Form>
	        <div slot="footer" >
	            <Button type="error" size="large"   @click="handleSubmit('msgConfig.msgForm')" class="msgBtn">立即发送</Button>
	        </div>
	    </Modal>
	    <Modal v-if="!!copyConfig" v-model="copyModel" width="360" title="短信推荐" :width="500"  class="only-invite-model">
	         <Form ref="copyForm" :model="copyConfig.copyForm" :label-width="80" class="copy-form">
	         	<span class="copy-form-title">复制以下内容，发送给您的好友</span>
		        <Form-item label="内容：" prop="content" style="margin-bottom: 10px !important;">
		            <Input type="textarea" id="copy-content" v-model="copyConfig.copyForm.content" :readonly="true" :autosize="{minRows: 4,maxRows: 4}"></Input>
		        </Form-item>
		        <span class="copy-form-foot">好友点击您发送的邀请链接，完成注册，您将获得奖励</span>
		    </Form>
	        <div slot="footer">
	            <Button type="error" size="large"  @click="copy" class="copy-btn">复制内容</Button>
	        </div>
	    </Modal>
	</div>
</template>

<script>
import VueQArt from 'vue-qart'
export default {
	props: ['wxConfig', 'qqConfig', 'qqZoneConfig', 'msgConfig', 'copyConfig'],
	data () {
		return {
			msgModel: false,
			copyModel: false,
		}
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
	components: {
		VueQArt
	}
	
}

</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
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