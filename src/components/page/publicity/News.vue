<template>
	<div class="clearfix">
		<div class="clearfix top-bg">
			<img :src="img" alt="" />
		</div>
		<span class="title">惠宝新闻</span>
		<div class="content clearfix">
			<ul class="clearfix">
				<li class="clearfix news-tiem" v-for="item in list">
					<router-link to="/" class="link-item">
						<img :src="item.img" alt="" class="item-img fl"/>
						<div class="item-msg fr">
							<div class="item-title clearfix">
								<span class="name fl">{{item.name}}</span>
								<span class="time fr">{{item.time}}</span>
							</div>
							<span class="desc">{{item.content}}</span>
						</div>
					</router-link>
				</li>
			</ul>
			<div class="common-center-page-wrap">
        		<Page :total="400" size="small" class="common-center-page-nav"></Page>
        	</div>
		</div>
	</div>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/news-top-bg.png',
			list: [
				{
					img: IMG + '/temp/组-36.png',
					name: '全国首批理财说明会在重庆圆满谢幕',
					time: '2017-04-01 11:45:36',
					content: '从小就能看见妖怪的少年夏目贵志。自从他从祖母玲子那里继承了与妖怪成为主从并将其名字书写在上的契约书“友人帐”以来，便与自称为保镖的妖怪猫咪老师一同，开始了将名字返还给妖怪的每一天。夏目与各种各样的妖怪与善良人们相遇，在构筑温暖的场所同时，也反复寄托着想要守护重要之物的想法。' 
				},
				{
					img: IMG + '/temp/组-36.png',
					name: '全国首批理财说明会在重庆圆满谢幕',
					time: '2017-04-01 11:45:36',
					content: '从小就能看见妖怪的少年夏目贵志。自从他从祖母玲子那里继承了与妖怪成为主从并将其名字书写在上的契约书“友人帐”以来，便与自称为保镖的妖怪猫咪老师一同，开始了将名字返还给妖怪的每一天。夏目与各种各样的妖怪与善良人们相遇，在构筑温暖的场所同时，也反复寄托着想要守护重要之物的想法。' 
				},
				{
					img: IMG + '/temp/组-36.png',
					name: '全国首批理财说明会在重庆圆满谢幕',
					time: '2017-04-01 11:45:36',
					content: '从小就能看见妖怪的少年夏目贵志。自从他从祖母玲子那里继承了与妖怪成为主从并将其名字书写在上的契约书“友人帐”以来，便与自称为保镖的妖怪猫咪老师一同，开始了将名字返还给妖怪的每一天。夏目与各种各样的妖怪与善良人们相遇，在构筑温暖的场所同时，也反复寄托着想要守护重要之物的想法。' 
				},
			]
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.news-tiem{
	display: block;
}
.desc{
	display: block;
	height: 80px;
	margin-top: 18px;
	text-indent: 2em;
	overflow: hidden;
}
.name{
	font-weight: 600;
}
.item-msg{
	width: 580px;
}
.item-img{
	width: 200px;
	height: 120px;
}
.link-item{
	display: block;
	height: 172px;
	padding: 26px 0;
	font-size: @fz;
	color: @gray-one;
	border-bottom: 1px solid @border-two;
}
.content{
	width: 810px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 76px;
}
.title{
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 120px;
	height: 34px;
	background-color: #98d1ff;
	border-radius: 17px;
	border: none;
	text-align: center;
	line-height: 34px;
	color: @white;
	font-weight: 600;
	font-size: @bfz;
	margin-top: 46px;
}
</style>