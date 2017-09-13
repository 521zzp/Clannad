<template>
    <Carousel class="my-banner wrap-minw" autoplay  :autoplay-speed="setting.speed"  trigger='hover'>
        <Carousel-item v-for="item,index in banners" key='index'>
            <div class="carousel-items" :style="{backgroundImage: 'url('+item.img+')'}" @click='location(item.url)'>
            </div>
        </Carousel-item>
    </Carousel>
</template>


<script>
	import {IMG} from '@/config/url'
    export default {
        data () {
            return {
                value2: 0,
                bannersBackup: [
					{
						img: IMG + '/home/banner/banner-one.jpg',
						url: ''
					},
					{
						img: IMG + '/home/banner/banner-two.jpg',
						url: ''
					},
					{
						img: IMG + '/home/banner/banner-three.jpg',
						url: ''
					},
					{
						img: IMG + '/home/banner/banner-four.jpg',
						url: ''
					},
				],
                setting: {
                	speed:5000
                }
            }
        },
        computed: {
        	banners () {
        		const bannerList = this.$store.state.home.banner
        		return bannerList.length > 0 ? bannerList : this.bannersBackup
        	}
        },
        methods: {
        	location (url) {
        		if (url) {
        			window.open(url)
        		}
        	}
        }
    }
</script>

<style scoped="scoped">
.my-banner{
	min-width: 1000px;
}
.carousel-items {
	cursor: pointer;
	width: 100%;
	height: 430px;
	position: relative;
	background-position: center;
}
</style>