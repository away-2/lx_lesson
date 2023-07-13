// 封装请求
const request = {
	request: ({
		url,
		method = 'GET',
		data,
		authType
	}) => {
		return uni.request({
			url,
			method,
			data,
			authType
		})
	}
}