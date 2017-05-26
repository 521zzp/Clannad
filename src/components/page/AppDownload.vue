<template>
	<div class="clearfix">
		<CHeader/>
		<div class="content-group clearfix">
			<div class="plant plant-one">
				<div class="container">
					<img class="plant-one-img fl show" :src="plantOne.img" alt="" />
					<img class="plant-one-msg fr show" :src="plantOne.msg" alt="" />
				</div>
			</div>
			<div class="plant plant-two">
				<div class="container">
					<img class="plant-two-img fr show" :src="plantTwo.img" alt="" />
					<img class="plant-two-msg fl show" :src="plantTwo.msg" alt="" />
				</div>
			</div>
			<div class="plant plant-three">
				<div class="container">
					<div class="fl flod-contet open clearfix">
						<img class="bottom flod-item" :src="plantThree.bottom" alt="" />
						<img class="middle flod-item" :src="plantThree.middle" alt="" />
						<img class="top flod-item" :src="plantThree.top" alt="" />
					</div>
					<img class="plant-three-msg fr show" :src="plantThree.msg" alt="" />
				</div>
			</div>
			<div class="plant plant-four">
				<div class="container">
					<img class="plant-four-img fl show" :src="plantFour.img" alt="" />
					<img class="plant-four-msg fr show" :src="plantFour.msg" alt="" />
				</div>
			</div>
			<div class="plant plant-five">
				<div class="container">
					<img class="plant-five-img fr show" :src="plantFive.img" alt="" />
					<img class="plant-five-msg fl show" :src="plantFive.msg" alt="" />
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
		}
	},
	components: {
		CHeader
	}
}

</script>

<style scoped="scoped" lang="less">
@import '../../config/base.less';

.flod-contet.open{
	opacity: 1;
	left: 72px;
}
.flod-contet{
	top: 72px;
	opacity: 0;
	left: 0px;
	transition: all 1s;
}
.flod-item{
	position: absolute;
	/*transform:rotateX(40deg) rotateY(40deg) rotateZ(-70deg);*/
	
	top: 0;
	left: 0;
	transition: all .8s;
	transition-delay: 1s;
}
.open .flod-item{
	box-shadow: -5px 6px 20px 0 #000000;
	perspective-origin: 100% 0;
	transform: rotateZ(-60deg) rotateY(-20deg) rotateX(-20deg);
}
.open .bottom{
	left: -30px;
	top: 90px;
}
.open .top{
	left: 30px;
	top: -90px;
}
.flod-contet{
	margin-left: 72px;
	margin-top: 72px;
	position: relative;
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
}
.plant-one-img{
	margin-top: 170px;
	opacity: 0;
}
.show{
	transition: all 1s;
}
.content-group{
	position: absolute;
	width: 100%;
	margin-top: 60px;
	z-index: -1;
}
.container{
	width: @mw;
	height: 100%;
	margin: 0 auto;
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
</style>