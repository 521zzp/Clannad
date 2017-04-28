import * as types from './mutation-types'


export const actions = {
	loading ({commit},obj) {
		commit(types.G_LOADING,obj);
	}
}