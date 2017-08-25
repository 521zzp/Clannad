<template>
	<div>
		<CouponFilter @filterChange="filterChange"/>
		<div>
			<CouponRaiseList :list="list"/>
			<div class="common-center-page-wrap" style="margin-top: 20px;margin-bottom: 110px;">
	    		<Page :total="total" size="small" :page-size="size" class="common-center-page-nav" :page-size-opts="sizeList" @on-change="change" show-sizer @on-page-size-change="sizeChange"></Page>
	    	</div>
		</div>
	</div>
</template>

<script>
import CouponFilter from "@/components/pure/account/CouponFilter"
import CouponRaiseList from "@/components/pure/account/CouponRaiseList"

export default {
	data () {
		return {
			state: {
				stateTap: 0, 
				rankTap: 'value'
			},
			sizeList: [4, 6, 8 ],
			size: 4,
		}
	},
	computed: {
		total () {
			return this.$store.state.acccoupon.raiseTotal
		},
		totalFlag () {
			return this.$store.state.acccoupon.raiseTotalFlag
		},
		list () {
			return this.$store.state.acccoupon.raiseList
		}
	},
	mounted () {
		this.$store.dispatch('accCouponTotal', Object.assign({}, this.state, { type: 3 }))
	},
	watch: {
		totalFlag () {
			console.log('ssssssssssssss')
			if (this.total > 0) {
				const params = Object.assign( {}, this.state, { type: 3, size: this.size, current: 1} )
				this.$store.dispatch('accCouponList', params)
			}
		}
	},
	methods: {
		filterChange (obj) {
			this.state = obj
			this.$store.dispatch('accCouponTotal', Object.assign({}, this.state, { type: 3 }))
		},
		change (current) {
			const params = Object.assign( {}, this.state, { type: 3, size: this.size, current: current} )
			this.$store.dispatch('accCouponList', params)
		},
		sizeChange (size) {
			this.size = size
			this.$store.dispatch('accCouponTotal', Object.assign({}, this.state, { type: 3 }))
		}
	},
	components: {
		CouponFilter,
		CouponRaiseList
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
</style>