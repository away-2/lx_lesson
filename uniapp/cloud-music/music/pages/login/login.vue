<template>
	<view class="login-form">
		<input class="input-row" v-model="account" type="number" maxlength="11" placeholder="请输入手机号">
		<input class="input-row" v-model="password" type="password" maxlength="20" placeholder="请输入密码">
		<button type="button" class="btn login_btn" @click="bindLogin">登录</button>
		<view class="bot clearfix">
			<navigator class="fl sign">立即注册</navigator>
			<navigator class="fr sign">忘记密码？</navigator>
		</view>
		<!-- 游客登录 -->
		<button type="button" class="btn yk-login_btn" @click="yebindLogin">游客登录</button>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				account: '',
				password: ''
			};
		},
		methods: {
			...mapMutations(['storeLogin']),
			bindLogin() {
				const account = this.account.trim()
				const password = this.password.trim()
				if (account === '' || !(/^1[3456789]\d{9}$/).test(account)) {
					this.alert('手机号码错误')
					return
				}
				if (password.length < 6) {
					this.alert('密码最短为6位')
					return
				}
				uni.showLoading({
					title: '登录中'
				})
				const params = {
					phone: account,
					password: password
				}
				uni.request({
					url: this.$websiteUrl + '/login/cellphone',
					method: 'GET',
					data: params,
					success(res) {
						console.log(res);
					}
				})
			},
			alert(msg) {
				uni.showToast({
					icon: 'none',
					title: msg
				})
			},
			yebindLogin() { // 游客登录
				uni.request({
					url: this.$websiteUrl + '/register/anonimous',
					method: 'GET',
					data: '',
					success: res => {
						console.log(res);
						const temp = {
							token: res.data.cookie,
							profile: '游客',
							hasLogin: true
						}
						// 保存账号信息
						this.storeLogin(temp)

						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.input-row {
		width: 600rpx;
		height: 75rpx;
		margin: 0 auto;
		border: 1px solid $color;
		color: #6c6c6c;
		border-radius: 75rpx;
		padding: 0 50rpx;
		line-height: 75rpx;
		margin-bottom: 45rpx;
		font-size: 26rpx;
		box-sizing: border-box;
	}

	.login-form {
		padding-top: 220rpx;
	}

	.login_btn {
		width: 600rpx;
		height: 75rpx;
		margin: 0 auto;
		border: 1px solid $color;
		border-radius: 75rpx;
		padding: 0 50rpx;
		line-height: 75rpx;
		margin-bottom: 45rpx;
		font-size: 26rpx;
		color: #fff;
		background: $color;
	}

	.bot {
		width: 600rpx;
		padding: 0 17rpx;
		font-size: 26rpx;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.sign {
		color: $color;
	}

	.auth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		bottom: 100rpx;
		left: 0;
		width: 100%;

		.auth-image {
			width: 50px;
			height: 50px;
			border: 1px solid #dddddd;
			border-radius: 50px;
			margin: 0 20px;
			background-color: #ffffff;
			overflow: hidden;
		}

		.img {
			width: 30px;
			height: 30px;
			margin: 10px;
		}

		input {
			outline: none;
			border: none;
			list-style: none;
		}
	}

	.log-btn {
		margin: 0;
		padding: 0;
		background: #fff !important;
		height: 48px;

		&::after {
			background-color: transparent;
			margin: 0;
			padding: 0;
			border: 0;
		}
	}

	.yk-login_btn {
		width: 600rpx;
		height: 75rpx;
		margin: 0 auto;
		border: 1px solid $color;
		border-radius: 75rpx;
		padding: 0 50rpx;
		line-height: 75rpx;
		margin-bottom: 45rpx;
		font-size: 26rpx;
		// color: #fff;
		background: #fff;
		margin-top: 120rpx;
	}
</style>