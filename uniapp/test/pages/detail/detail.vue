<template>
	<view class="detail">
		<text>detail</text>
		<view class="iconfont icon-Profile"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(option) {
			console.log(option);
			let requestTask = uni.request({
				url: 'https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike',
				data: {},
				header: {
					'custom-header': 'hello'
				},
				success(res) {
					console.log(res);
					uni.setStorage({
						key: 'movie_list',
						data: res.data.movieList,
						success() {
							console.log('保存好了');
						}
					})
				}
			})
			// requestTask.abort()
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	$red: red;

	.detail {
		color: green;
		// #ifndef H5
		color: $uni-color-error;
		// #endif
		font-size: 30rpx;
	}
</style>