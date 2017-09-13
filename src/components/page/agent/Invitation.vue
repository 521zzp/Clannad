<template>
	<div>
		<b class="agent-common-title">推广链接</b>
		<InviteTemplate :wxConfig="wxConfig" :qqConfig="qqConfig" :qqZoneConfig="qqZoneConfig" :msgConfig="msgConfig" :copyConfig="copyConfig"/>
	</div>
</template>

<script>
import InviteTemplate from '@/components/pure/common/InviteTemplate'
import {validatePhone} from '@/tool/regx'
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			wxConfig: {
	            value: 'https://www.baidu.com',
	            imagePath: '../../../static/logo.png',
	            filter: 'color',
	            downloadButton: false,
        	},
        	qqConfig: {
        		value: 'http://www.yhb118.com',
        		title: '诚挚邀请您加入掌柜金服大家庭',
        		pics: IMG+ '/common/header/logo.png',
        		summary: '加入掌柜金服加入掌柜金服加入掌柜金服加入掌柜金服'
        	},
        	qqZoneConfig: {
        		value: 'http://www.yhb118.com',
        		title: '诚挚邀请您加入掌柜金服大家庭',
        		pics: IMG+ '/common/header/logo.png',
        		summary: '加入掌柜金服加入掌柜金服加入掌柜金服加入掌柜金服'
        	},
        	msgConfig: {
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
        	},
        	copyConfig: {
	        	copyForm: {
	        		content: 'http://www.yhb118.com',
	        	},
        	},
		}
	},
	components: {
		InviteTemplate
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
	
</style>