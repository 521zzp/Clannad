<template>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		mounted () {
			this.$Notice.info({
                title: '这是通知标题',
                desc: '呵呵大'
            });
		},
		computed: {
			notice () {
				return this.$store.state.notice.state
			}
		},
		watch: {
			notice : function () {
				console.log('触发')
				let obj = this.$store.state.notice.obj;
				console.log(obj)
				console.log(obj.name)
				console.log(this.$store.state.notice.obj)
				let {name,msg} = obj
				this.$Notice.info({
	                title: name,
	                desc: msg
	            });
			}
		}
	}
</script>

<style>
</style>