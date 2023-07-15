import baseUrl from '@/utils/index.js'

// 项目首页接口

export const apiGetBanner = (data) => {
	return uni.request({
		url: baseUrl + '/banner',
		method: "GET",
		data: data,
		authType: 'None'
	})
}

export const apiGetRecommendSongs = (data) => {
	return uni.request({
		url: baseUrl + '/personalized',
		method: 'GET',
		data,
		authType: 'None'
	})
}

export const apiGetTopAlbun = (data) => {
	return uni.request({
		url: baseUrl + '/album/newest',
		method: 'GET',
		data,
		authType: 'None'
	})
}

export const apiGetTopSongs = (data) => {
	return uni.request({
		url: baseUrl + '/top/song',
		method: 'GET',
		data,
		authType: 'None'
	})
}