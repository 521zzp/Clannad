<template>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		computed: {
			token () {
				return this.$store.state.token
			},
			notice () {
				return this.$store.state.notice.state
			},
			noticeClose () {
				return this.$store.state.noticeClose.state
			},
			message () {
				return this.$store.state.message.state
			},
			simpleModal () {
				return this.$store.state.simpleModal.state
			},
			confirmMoadl () {
				return this.$store.state.confirmMoadl.state
			}
		},
		mounted () {
			this.$Message.config({
			    top: 50
			});
		},
		watch: {
			token: function () {
				localStorage.setItem('token',this.$store.state.token)
				localStorage.setItem('user',JSON.stringify(this.$store.state.user))
			},
			notice: function () {
				let config = this.$store.state.notice.config;
				let type = this.$store.state.notice.type;
				switch (type){
					case 1:
						this.$Notice.info(config)
						break;
					case 2:
						this.$Notice.success(config)
						break;
					case 3:
						this.$Notice.warning(config)
						break;
					case 4:
						this.$Notice.error(config)
						break;
					default:
						this.$Notice.open(config)
						break;
				}
			/*	console.log(obj)
				console.log(obj.name)
				console.log(this.$store.state.notice.obj)
				let {name,msg} = obj
				this.$Notice.info({
	                title: name,
	                desc: msg
	            });*/
			},
			noticeClose: function () {
				let key = this.$store.state.noticeClose.key;
				this.$Notice.destroy();
			},
			message: function () {
				let type = this.$store.state.message.type;
				let config = this.$store.state.message.config;
				switch (type){
					case 1:
						this.$Message.loading(config)
						break;
					case 2:
						this.$Message.success(config)
						break;
					case 3:
						this.$Message.warning(config)
						break;
					case 4:
						this.$Message.error(config)
						break;
					default:
						this.$Message.info(config)
						break;
				}
			},
			simpleModal: function () {
				let type = this.$store.state.simpleModal.type;
				let config = this.$store.state.simpleModal.config;
				switch (type){
					case 1:
						this.$Modal.info(config)
						break;
					case 2:
						this.$Modal.success(config)
						break;
					case 3:
						this.$Modal.warning(config)
						break;
					case 4:
						this.$Modal.error(config)
						break;
					default:
						this.$Modal.info(config)
						break;
				}
			},
			confirmMoadl: function () {
				let config = this.$store.state.confirmMoadl.config;
				this.$Modal.confirm(config);
			}
		}
	}
</script>

<style>
</style>