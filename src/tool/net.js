import router from '@/router'
import store from '@/store'
export const json = (response) => response.json();

export const status = (response) => {
	if (response.status >= 200 && response.status < 300) {
	    	return response
	  }
	console.log('状态：')
	console.log(response.status)
	throw new Error(response.statusText)
} 
/*
 * 不需要登陆即可请求的接口
 */
export const analy = (statu) => status(statu).then(json)

/*
 * 根据接口需要判断是否登陆状态
 */
export const onanaly = (status) => status(statu).then(json).then(
	(dp) => {
		if (dp.status) {
			return 
		} else{
			
		}
	}
);
/**
 * post method
 * Requests  params, returning a common request config.
 *
 * @param  {object} params  the method wangt to post
 * 
 */
export const postModelOne = ( params ) => {
	return {
		method: 'post',
		credentials: 'include',
		headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		},
		body: JSON.stringify( 
			Object.assign( {token:store.state.token}, params)
		)
	}
}

export const getModel = () =>{
	return{
		method: 'get',
		credentials: 'include',
		headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		}
	}
}
