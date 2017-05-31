<template>
	<div class="clearfix">
		<div class="clearfix">
			<img :src="img" alt="" />
		</div>
		<div class="title">
			<span><em class="fl"></em>荣誉资质<em class="fr"></em></span>
		</div>
		<div class="aptitude-group">
			<div class="apt-item" v-for="item,index in apts" @click="ingShow(item.full)">
				<img :src="item.skeletonize" alt="" />
				<div class="wrap">
					<div class="wrap-circle"></div>
					<span class="desc">{{item.desc}}</span>
				</div>
			</div>
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
					full: IMG + '/publicity/aptitude/l-one.jpg',
					desc: '营业执照'
				},
				{
					skeletonize: IMG + '/publicity/aptitude/sm-two.png',
					full: IMG + '/publicity/aptitude/l-two.jpg',
					desc: '荣誉证书'
				},
				{
					skeletonize: IMG + '/publicity/aptitude/sm-three.png',
					full: IMG + '/publicity/aptitude/l-three.jpg',
					desc: '荣誉证书'
				},
				{
					skeletonize: IMG + '/publicity/aptitude/sm-four.png',
					full: IMG + '/publicity/aptitude/l-four.jpg',
					desc: '荣誉证书'
				},
				{
					skeletonize: IMG + '/publicity/aptitude/sm-five.png',
					full: IMG + '/publicity/aptitude/l-five.jpg',
					desc: '奖杯'
				},
			]
		}
	},
	mounted () {
		let bread = [
				{
					name: '余惠宝',
					url: '/'
				},
				{
					name: '信息披露',
					url: '/publicity/introduce'
				},
				{
					name: '荣誉资质',
					url: ''
				},
			];
		this.$store.dispatch('publicityBreadChange', bread)
		this.$store.dispatch('publicityNavChange', 3)
	},
	methods: {
		ingShow (src) {
			this.modalImg = src
			this.modalOpen = true
		}
	}
}
</script>

<style lang="less">
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
#only-apt-modal .ivu-modal-body{
	padding: 0;
	line-height: 0;
}
#only-apt-modal .ivu-modal-header, #only-apt-modal .ivu-modal-footer, #only-apt-modal .ivu-modal-close{
	display: none;
}
.vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.apt-item:hover .wrap{
	transform: translate(0);
}
.apt-item:hover .wrap-circle{
	transform: scale(2.5);
}
.wrap-circle{
	border-radius: 50%;
	z-index: -1;
	overflow: hidden;
	width: 100%;
	height: 100%;
	position: absolute;
	left: -50%;
	top: -105px;
	padding-top: 100%;
	background-color: #88c0ff;
	transform: scale(0);
	transform-origin:50% 50%;
	transition: all .5s cubic-bezier(.22, .58, .12, .98)
}
.wrap{
	width: 100%;
	height: 100%;
	position: absolute;
	line-height: 140px;
	text-align: center;
	transform: translate(120%);
	top: 0;
	left: 0;
}
.desc{
	color: @white;
	font-size: @bfz;
}

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
	overflow: hidden;
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