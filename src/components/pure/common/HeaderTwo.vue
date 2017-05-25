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
					<router-link to="/product" class="level-one fl">我要理财</router-link>
				</div>
				<div class="nav-item more-items info-show">
					<router-link to="/publicity/systemIllustrate" class="level-one fl ">信息披露
						 <Icon type="arrow-down-b" class="drop-arrow"></Icon>
					</router-link>
					<nav class="nav-two clearfix">
						<router-link to="/publicity/systemIllustrate" class="level-two">系统说明</router-link>
						<router-link to="/product" class="level-two">我要理财</router-link>
						<router-link to="/product" class="level-two">我要理财</router-link>
						<router-link to="/product" class="level-two">我要理财</router-link>
					</nav>
				</div>
				<div class="nav-item">
					<router-link to="/" class="level-one fl">积分商城</router-link>
				</div>
				<div class="nav-item more-items user-info">
					<span class="level-one fl ">
							<img v-if="!!this.$store.state.token" :src="face" alt="" class="user-face" @click="modal = true"/>
							<router-link to="/account" class="level-one">我的账户</router-link>
						 <Icon type="arrow-down-b" class="drop-arrow"></Icon>
					</span>
					<nav class="nav-two clearfix">
						<router-link to="/account" class="level-two">账户总览</router-link>
						<router-link to="/product" class="level-two">我的理财</router-link>
						<router-link to="/product" class="level-two">活期宝</router-link>
						<router-link to="/product" class="level-two">我的礼券</router-link>
						<router-link to="/product" class="level-two">我的商品</router-link>
						<router-link to="/product" class="level-two">我是经销商</router-link>
						<router-link to="/product" class="level-two">个人资料</router-link>
						<router-link to="/product" class="level-two">资金记录</router-link>
					</nav>
				</div>
			</nav>
			<Modal
		        v-model="modal"
		        title="上传头像"
		        @on-ok="ok"
		        @on-cancel="cancel">
		        <Upload 
		        	ref="upload"
		        	:format="['jpg','jpeg','png','gif','bpm']"
		        	:max-size="2048"
		        	:name="img"
		        	:data="withToken"
		        	:on-success="handleSuccess"
		        	:on-format-error="handleFormatError"
        			:on-exceeded-size="handleMaxSize"
		        	:action="uploadUrl">
			        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
			    </Upload>
		    </Modal>
			
		</div>
	</div>
</template>

<script>
import {analyJson} from '@/tool/net'
import router from '@/router'
import {IMG, WEIBO, FACEUPLOAD} from '@/config/url'
export default {
	data () {
		return {
			modal: false,
			img: 'img',
			uploadUrl: FACEUPLOAD,
			withToken: {
		        token: this.$store.state.token
			},
			logo: IMG + '/common/header/logo.png' 
		}
	},
	computed: {
		face () {
			return this.$store.state.user.img
		}
	},
	methods: {
		ok () {
        },
        cancel () {
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            });
        },
        handleSuccess (response) {
            // 因为上传过程为实例，这里模拟添加 url
            let img = analyJson(response).path;
            if (img) {
            	this.$store.dispatch('userImgUpload',{img: img});
            }
            this.modal = false;
            this.$refs.upload.fileList=[];
        },
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
.upload{
	position: absolute;
	right: 50px;
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