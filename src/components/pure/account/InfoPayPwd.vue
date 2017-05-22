<template>
	<div class="clearfix">
		<div class="form-content">
			<InfoPayPwdSet v-if="type === 1" class="small-form"/>
			<InfoPayPwdChange v-else-if="type === 2" class="small-form"/>
			<InfoPayPwdBack v-else-if="type === 3" class="big-form"/>
		</div>
	</div>
</template>

<script>
import InfoPayPwdSet from '@/components/pure/account/InfoPayPwdSet'
import InfoPayPwdChange from '@/components/pure/account/InfoPayPwdChange'
import InfoPayPwdBack from '@/components/pure/account/InfoPayPwdBack'

export default {
	props: ['type'],
	data () {
		return {
			
		}
	},
	components: {
		InfoPayPwdSet,
		InfoPayPwdChange,
		InfoPayPwdBack
	}
}

</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.form-content{
	width: 600px;
	margin-top: 70px;
	margin-bottom: 90px;
	margin-left: auto;
	margin-right: auto;
}
.small-form{
	width: 400px;
	margin-left: auto;
	margin-right: auto;
}
.big-form{
	width: 600px;
	margin-left: auto;
	margin-right: auto;
}
</style>