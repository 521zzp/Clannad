<template>
	<div class="clearfix">
		<CHeader class="download-title"/>
		<div class="content-group clearfix wrap-minw">
			<div class="plant plant-one">
				<div class="container">
					<!--<img class="plant-one-img fr" :class="{show: show.one}" :src="plantOne.img" alt="" />-->
					<div class="plant-one-img fl bottom-shadow item" :class="{show: show.one}"><img  :src="plantOne.img" alt="" /></div>
					<img class="plant-one-msg fr item" :class="{show: show.one}" :src="plantOne.msg" alt="" />
				</div>
			</div>
			<div class="plant plant-two">
				<div class="container">
					<!--<img class="plant-two-img fr" :class="{show: show.two}" :src="plantTwo.img" alt="" />-->
					<div class="plant-two-img fr bottom-shadow item" :class="{show: show.two}"><img  :src="plantTwo.img" alt="" /></div>
					<img class="plant-two-msg fl item" :class="{show: show.two}" :src="plantTwo.msg" alt="" />
				</div>
			</div>
			<div class="plant plant-three">
				<div class="container">
					<div class="fl flod-contet clearfix"  :class="{open: show.three}">
						<img class="bottom flod-item" :src="plantThree.bottom" alt="" />
						<img class="middle flod-item" :src="plantThree.middle" alt="" />
						<img class="top flod-item" :src="plantThree.top" alt="" />
					</div>
					<img class="plant-three-msg fr item" :class="{show: show.three}" :src="plantThree.msg" alt="" />
				</div>
			</div>
			<div class="plant plant-four">
				<div class="container">
					<!--<img class="plant-four-img fl" :class="{show: show.four}" :src="plantFour.img" alt="" />-->
					<div class="plant-four-img fl bottom-shadow item" :class="{show: show.four}"><img  :src="plantFour.img" alt="" /></div>
					<img class="plant-four-msg fr item" :class="{show: show.four}" :src="plantFour.msg" alt="" />
				</div>
			</div>
			<div class="plant plant-five">
				<div class="container">
					<!--<img class="plant-five-img fr" :class="{show: show.five}" :src="plantFive.img" alt="" />-->
					<div class="plant-five-img fr bottom-shadow item" :class="{show: show.five}"><img  :src="plantFive.img" alt="" /></div>
					<img class="plant-five-msg fl item" :class="{show: show.five}" :src="plantFive.msg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CHeader from '@/components/pure/common/CHeader'
import {IMG} from '@/config/url'

export default  {
	data () {
		return {
			plantOne: {
				img: IMG + '/app-download/p-o-img.png',
				msg: IMG + '/app-download/p-o-msg.png',
			},
			plantTwo: {
				img: IMG + '/app-download/p-t-img.png',
				msg: IMG + '/app-download/p-t-msg.png',
			},
			plantThree: {
				msg: IMG + '/app-download/p-three-msg.png',
				bottom: IMG + '/app-download/plant-three-bottom.png',
				middle: IMG + '/app-download/plant-three-middle.png',
				top: IMG + '/app-download/plant-three-top.png',
			},
			plantFour: {
				img: IMG + '/app-download/p-f-img.png',
				msg: IMG + '/app-download/p-f-msg.png',
			},
			plantFive: {
				img: IMG + '/app-download/p-five-img.png',
				msg: IMG + '/app-download/p-five-msg.png',
			},
			show: {
				one: true,
				two: false,
				three: false,
				four: false,
				five: false
			}
		}
	},
	mounted () {
		let vm = this
		window.onscroll = this.scrollEvent
	},
	methods: {
		scrollEvent () {
			let height = document.documentElement.scrollTop || document.body.scrollTop;
		 	this.height = height
		 	this.show = {
		 		one : height < 840 ? true : false ,
				two : (height >= 660 && height < 1580) ? true : false,
				three: (height >= 1580 && height < 2490) ? true : false,
				four: (height >= 2490 && height < 3400) ? true : false,
				five: height > 3150 ? true : false
		 	}
		}
	},
	components: {
		CHeader
	}
}

</script>

<style scoped="scoped" lang="less">
@import '../../config/base.less';

.bottom-shadow::before{
	position: absolute;
	content: '';
	height: 30px;
	top: 102%;
	left: 5%;
	width: 90%;
	background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, transparent 70%);
	transition-duration: 0.3s;
}
.flod-contet.open{
	opacity: 1;
	margin-left: 172px;
}
.flod-contet{
	margin-top: 202px;
	opacity: 0;
	transition: all 1s;
	perspective: 100vw;
	perspective-origin: 50% 0%;
	/*transform: rotateY(40deg) rotateZ(-30deg) rotateX(40deg);
	transform-origin: left center;
	transform-style: preserve-3d;*/
}
.flod-item{
	position: absolute;
	top: 0;
	left: 0;
	transition: all .8s;
	transition-delay: 1s;
}
.open .flod-item{
	box-shadow: -3px 2px 20px 0 #4c4c4c;
	transform: rotateY(20deg) rotateZ(-30deg) rotateX(30deg);
	transform-origin: left center;
	transform-style: preserve-3d;
}
.open .flod-item:hover{
	z-index: 1000;
	left: 50px;
	cursor: pointer;
	transition-delay: 0s;
}
.open .bottom{
	left: 0px;
	top: 90px;
	animation: randomShake 4s ease 1s infinite;
}
.open .middle{
	animation: randomShake 4s ease 1.6s infinite;
}
.open .top{
	left: 0px;
	top: -90px;
	animation: randomShake 4s ease 2.1s infinite;
}

.plant-five-msg.show{
	margin-left: 72px;
	opacity: 1;
}
.plant-five-msg{
	margin-top: 210px;
	opacity: 0;
}
.plant-five-img.show{
	opacity: 1;
	margin-right: 78px;
}
.plant-five-img{
	opacity: 0;
	margin-top: 120px;
	position: relative;
	animation: colShake 2s ease 1s infinite;
}
.plant-four-msg.show{
	margin-right: 154px;
	opacity: 1;
}
.plant-four-msg{
	margin-top: 194px;
	opacity: 0;
}
.plant-four-img.show{
	opacity: 1;
	margin-left: 72px;
}
.plant-four-img{
	opacity: 0;
	margin-top: 160px;
	position: relative;
	animation: colShake 2s ease 1s infinite;
}
.plant-three-msg.show{
	margin-right: 144px;
	opacity: 1;
}
.plant-three-msg{
	opacity: 0;
	margin-top: 178px;
}
.plant-two-msg.show{
	margin-left: 72px;
	opacity: 1;
}
.plant-two-msg{
	margin-top: 242px;
	opacity: 0;
}
.plant-two-img.show{
	opacity: 1;
	margin-right: 78px;
	position: relative;
	animation: colShake 2s ease 1s infinite;
}
.plant-two-img{
	opacity: 0;
	margin-top: 166px;
}
.plant-one-msg.show{
	opacity: 1;
	margin-right: 148px;
}
.plant-one-msg{
	margin-top: 164px;
	opacity: 0;
}
.plant-one-img.show{
	margin-left: 74px;
	opacity: 1;
	position: relative;
	animation: colShake 2s ease 1s infinite;
}
.plant-one-img{
	margin-top: 170px;
	opacity: 0;
}
.item{
	transition: all 1s;
}
.content-group{
	width: 100%;
	margin-top: 60px;
	z-index: -1;
}
.container{
	width: @mw;
	height: 100%;
	margin: 0 auto;
	/*perspective: 100vw;
	perspective-origin: 50% 0%;*/
}
.plant-five{
	height: 865px;
	background-image: url('@{image}/app-download/plant-five-bg.png');
}
.plant-four{
	height: 866px;
	background-image: url('@{image}/app-download/plant-four-bg.png');
}
.plant-three{
	height: 863px;
	background-image: url('@{image}/app-download/plant-three-bg.png');
}
.plant-two{
	height: 962px;
	background-image: url('@{image}/app-download/plant-two-bg.png');
}
.plant-one{
	height: 933px;
	background-image: url('@{image}/app-download/plant-one-bg.png');
}
.plant{
	overflow: hidden;
	width: 100%;
	background-position: center;
}
.download-title{
	position: fixed;
	top: 0;
	z-index: 1;
}
@keyframes colShake{
	0% {
		top: 0;
	}
	50% {
		top: 10px;
	}
	100% {
		top: 0px;
	}
}
@widthRange: 5px;
@heightRange: 5px;

@keyframes  randomShake{
	0% {
		margin-top: -@heightRange;
		margin-left: 0;
	}
	25% {
		margin-top: @heightRange;
		margin-left: -@widthRange;
	}
	50% {
		margin-top: @heightRange;
		margin-left: 0;
	}
	75% {
		margin-top: @heightRange;
		margin-left: @widthRange;
	}
	100% {
		margin-top: -@heightRange;
		margin-left: 0;
	}
}


</style>