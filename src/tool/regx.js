/*
 * 验证手机号格式
 */
export const validatePhone = (rule, value, callback) => {
	let regx = /^1[34578]\d{9}$/;
	if (!regx.test(value)) {
		 callback(new Error('手机号码错误'));
	} else{
		callback();
	}
};

/*
 * 验证密码格式
 */
export const validatePwd = (rule, value, callback) => {
	let regx = /^(?![^a-zA-Z]+$)(?!\D+$).{6,18}$/;
	if (!regx.test(value)) {
		 callback(new Error('密码为6~18为数字字母组合'));
	} else{
		callback();
	}
};