<template>
	<div>
		<CouponFilter @filterChange="filterChange"/>
		<div>
			<CouponExperienceList :list="list"/>
			<div class="common-center-page-wrap" style="margin-top: 20px;margin-bottom: 110px;">
	    		<Page :total="total" size="small" :current="current" :page-size-opts="sizeList" :page-size="size" class="common-center-page-nav" @on-change="change" show-sizer @on-page-size-change="sizeChange"></Page>
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
			state: {
				stateTap: 0, 
				rankTap: 'value'
			},
			sizeList: [4, 6, 8 ],
			current: 1,
			size: 4,
		}
	},
	computed: {
		total () {
			return this.$store.state.acccoupon.experienceTotal
		},
		totalFlag () {
			return this.$store.state.acccoupon.experienceTotalFlag
		},
		list () {
			return this.$store.state.acccoupon.experienceList
		}
	},
	mounted () {
		this.$store.dispatch('accCouponTotal', Object.assign({}, this.state, { type: 2 }))
	},
	watch: {
		totalFlag () {
			if (this.total > 0) {
				const params = Object.assign( {}, this.state, { type: 2, size: this.size, current: 1} )
				this.$store.dispatch('accCouponList', params)
			}
		}
	},
	methods: {
		filterChange (obj) {
			this.state = obj
			this.$store.dispatch('accCouponTotal', Object.assign({}, this.state, { type: 2 }))
			this.current = 1
		},
		change (current) {
			const params = Object.assign( {}, this.state, { type: 2, size: this.size, current: current} )
			this.$store.dispatch('accCouponList', params)
		},
		sizeChange (size) {
			this.size = size
			this.$store.dispatch('accCouponTotal', Object.assign({}, this.state, { type: 2 }))
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