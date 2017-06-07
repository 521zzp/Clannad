<template>
	<div>
		<b class="agent-common-title">业绩提现记录</b>
		<WithdrawRecord :datas="datas"/>
	</div>
</template>

<script>
import WithdrawRecord from '@/components/pure/agent/WithdrawRecord'
import {validatePhoneFilter} from '@/tool/regx'
export default {
    data () {
        return {
            datas: [
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
               
            ]
        }
    },
    methods: {
       
    },
    components: {
    	WithdrawRecord
    }
}
	
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

</style>