<template>
	<div class="clearfix">
		<div class="clearfix">
			<img :src="img" alt="" />
		</div>
		<div class="title">
			<span><em class="fl"></em>荣誉资质<em class="fr"></em></span>
		</div>
		<div class="aptitude-group">
			<div class="apt-item" v-for="item,index in apts" @click="ingShow(item.full)"><img :src="item.skeletonize" alt="" /></div>
		</div>
		 <Modal id="only-apt-modal"
		 	title="荣誉资质"
	        v-model="modalOpen"
	        class-name="vertical-center-modal img-show-wrap">
	        <img :src="modalImg"/>
	        <div slot="footer">
       		 </div>
	    </Modal>
	</div>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/aptitude/aptitude-banner.png',
			modalOpen: false,
			modalImg: '',
			apts: [
				{
					skeletonize: IMG + '/publicity/aptitude/sm-one.png',
					full: IMG + '/publicity/aptitude/l-one.jpg'
				},
				{
					skeletonize: IMG + '/publicity/aptitude/sm-two.png',
					full: IMG + '/publicity/aptitude/l-two.jpg'
				},
				{
					skeletonize: IMG + '/publicity/aptitude/sm-three.png',
					full: IMG + '/publicity/aptitude/l-three.jpg'
				},
				{
					skeletonize: IMG + '/publicity/aptitude/sm-four.png',
					full: IMG + '/publicity/aptitude/l-four.jpg'
				},
				{
					skeletonize: IMG + '/publicity/aptitude/sm-five.png',
					full: IMG + '/publicity/aptitude/l-five.jpg'
				},
			]
		}
	},
	methods: {
		ingShow (src) {
			this.modalImg = src
			this.modalOpen = true
		}
	}
}
</script>

<style type="text/css">
#only-apt-modal	.ivu-modal-header-inner{
	text-align: left;
}
#only-apt-modal .ivu-modal-wrap{
	text-align: center;
}
#only-apt-modal .ivu-modal{
	display: inline-block;
	width: auto !important; 
}
</style>
<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.aptitude-group{
	margin-top: 52px;
	padding: 0 48px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.apt-item>img{
	width: 100%;
}
.apt-item{
	width: 350px;
	height: 140px;
	margin-bottom: 52px;
	cursor: pointer;
	position: relative;
}

.title>span>em{
	display: inline-block;
	width: 30px;
	height: 2px;
	margin-top: 12px;
	background-color: #4d4d4d;
}
.title{
	text-align: center;
	margin-top: 54px;
}
.title>span{
	color: #4d4d4d;
	display: inline-block;
	width: 184px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
}


</style>