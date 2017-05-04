<template>
    <Carousel class="my-banner" autoplay  :autoplay-speed="setting.speed"  trigger='hover'>
        <Carousel-item v-for="item,index in banners" key='index'>
            <div class="carousel-items" :style="{backgroundImage: 'url('+item.img+')'}" @click='location(item.url)'>
            </div>
        </Carousel-item>
    </Carousel>
</template>


<script>
    export default {
        data () {
            return {
                value2: 0,
                banners: this.$store.state.home.banner,
                setting: {
                	speed:5000
                }
            }
        },
        methods: {
        	location (url) {
        		console.log(url)
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