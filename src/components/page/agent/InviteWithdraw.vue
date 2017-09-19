<template>
	<div>
		<b class="agent-common-title">推广提现记录</b>
		<WithdrawRecord :datas="datas"/>
	</div>
</template>

<script>
import WithdrawRecord from '@/components/pure/agent/WithdrawRecord'
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
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        }
    },
    components: {
    	WithdrawRecord
    }
}
	
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

</style>