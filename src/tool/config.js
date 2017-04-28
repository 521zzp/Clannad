export const BASEURL = '/static/json/'  //服务器地址


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
		/*headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		},*/
		body: JSON.stringify(params)
	}
}

export const getModel = () =>{
	return{
		method: 'get',
		credentials: 'include',
		/*headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		}*/
	}
}
