<template>
	<div>
		<CouponFilter @filterChange="filterChange"/>
		<div>
			<span v-if="total === 0" class="table-no-data" ><Icon type="android-sad" style="margin-right: .5em;"></Icon>暂无数据</span>
			<div v-else>
				<CouponRedList :list="list"/>
				<div class="common-center-page-wrap" style="margin-top: 20px;margin-bottom: 110px;">
		    		<Page :total="total" size="small" :page-size="size" class="common-center-page-nav" :page-size-opts="sizeList" @on-change="change" show-sizer @on-page-size-change="sizeChange"></Page>
		    	</div>
			</div>
		</div>
		<!--<div v-show="state === 1">
			<CouponRedList :list="listTwo"/>
			<div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="400" size="small" class="common-center-page-nav"></Page>
	    	</div>
		</div>
		<div v-show="state === 2">
			<CouponRedList :list="listThree"/>
			<div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="400" size="small" class="common-center-page-nav"></Page>
	    	</div>
		</div>-->
	</div>
</template>

<script>
import CouponFilter from "@/components/pure/account/CouponFilter"
import CouponRedList from "@/components/pure/account/CouponRedList"

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
			return this.$store.state.acccoupon.redTotal
		},
		totalFlag () {
			return this.$store.state.acccoupon.redTotalFlag
		},
		list () {
			return this.$store.state.acccoupon.redList
		}
	},
	mounted () {
		this.$store.dispatch('accCouponTotal', Object.assign({}, this.state, { type: 1 }))
	},
	watch: {
		totalFlag () {
			if (this.total > 0) {
				const params = Object.assign( {}, this.state, { type: 1, size: this.size, current: 1} )
				this.$store.dispatch('accCouponList', params)
			}
		}
	},
	methods: {
		filterChange (obj) {
			console.log(obj)
			this.state = obj
			this.$store.dispatch('accCouponTotal', Object.assign({}, this.state, { type: 1 }))
		},
		change (current) {
			const params = Object.assign( {}, this.state, { type: 1, size: this.size, current: current} )
			this.$store.dispatch('accCouponList', params)
		},
		sizeChange (size) {
			this.size = size
			this.$store.dispatch('accCouponTotal', Object.assign({}, this.state, { type: 1 }))
		}
	},
	components: {
		CouponFilter,
		CouponRedList
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
</style>