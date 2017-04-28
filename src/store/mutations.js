import * as types from './mutation-types'

export const mutations = {
	[types.G_LOADING] (state,obj) {
		console.log('全局loading状态切换：');
        state.isLoding = obj;
    }
}
