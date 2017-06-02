<template>
	<div>
		<CouponFilter @filterChange="filterChange"/>
		<div v-show="state === 0">
			<CouponExperienceList :list="listOne"/>
			<div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="400" size="small" class="common-center-page-nav"></Page>
	    	</div>
		</div>
		<div v-show="state === 1">
			<CouponExperienceList :list="listTwo"/>
			<div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="400" size="small" class="common-center-page-nav"></Page>
	    	</div>
		</div>
		<div v-show="state === 2">
			<CouponExperienceList :list="listThree"/>
			<div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="400" size="small" class="common-center-page-nav"></Page>
	    	</div>
		</div>
	</div>
</template>

<script>
import CouponFilter from "@/components/pure/account/CouponFilter"
import CouponExperienceList from "@/components/pure/account/CouponExperienceList"

export default {
	data () {
		return {
			state: 0 ,
			listOne : [
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '',
				},
			],
			listTwo : [
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '',
				},
			],
			listThree : [
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '已过期',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '已使用',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '已过期',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
					remarks: '配合部分产品使用，体验周期30天',
					getTime: '2017-03-20 12:29:24',
					overdueTime: '2017-03-20 12:29:24',
					day: '23',
					unuse: '已使用',
				},
			],
		}
	},
	methods: {
		filterChange (obj) {
			this.state = obj.stateTap
		}
	},
	components: {
		CouponFilter,
		CouponExperienceList
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
</style>