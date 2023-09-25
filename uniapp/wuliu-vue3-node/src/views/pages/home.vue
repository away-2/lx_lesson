<template>
	<van-swipe :autoplay="3000" lazy-render>
		<van-swipe-item v-for="image in images" :key="image">
			<img :src="image" />
		</van-swipe-item>
	</van-swipe>
	<div class="wl-body">
		<div class="wl-left-item" @click="getSendGoods">
			<p>寄件</p>
		</div>
		<div class="wl-right-item" @click="getReceiveGoods">
			<p>收件</p>
		</div>
	</div>
	<div class="wl-bottom">
		<div class="wl-bottom-item" @click="getOrder">
			<p>订单查询</p>
		</div>
	</div>
</template>

<script setup>
	import {
		useRouter
	} from 'vue-router'
	const router = useRouter()
	const images = [
		'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
		'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
		'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
		'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
	];
	const getSendGoods = () => {
		router.push({
			path: '/sendGoods'
		})
	}
	const getReceiveGoods = () => {
		router.push({
			path: '/receiveGoods'
		})
	}
	const getOrder = () => {
		router.push({
			path: '/order'
		})
	}
</script>

<style lang="css">
	img {
		width: 100vw;
		height: 200px;
	}

	.wl-body {
		position: relative;
		width: 330px;
		height: 100px;
		margin: 20px;
		display: flex;
		/* background-color: red; */
	}

	.wl-left-item {
		background-color: #fff;
		text-align: center;
		width: 150px;
		margin-right: 30px;
		border-radius: 20px 0 0 20px;
		font-size: 20px;
		font-weight: bold;

	}

	.wl-left-item:hover {
		background-color: #39a9ed;
	}

	p {
		/* text-align: center; */
		margin-top: 32px;
	}

	.wl-right-item {
		background-color: #fff;
		text-align: center;
		width: 150px;
		border-radius: 0 20px 20px 0;
		font-size: 20px;
		font-weight: bold;
	}

	.wl-right-item:hover {
		background-color: #39a9ed;
	}

	.wl-bottom {
		position: relative;
		width: 330px;
		height: 100px;
		margin: 20px;
		background-color: #fff;
		border-radius: 20px;
		text-align: center;
		font-size: 20px;
		font-weight: bold;
	}

	.wl-bottom:hover {
		background-color: #39a9ed;
	}

	.wl-bottom-item {
		overflow: hidden;
		margin-top: 12px;
	}
</style>