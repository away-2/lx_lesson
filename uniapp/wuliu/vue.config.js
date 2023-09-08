// const {
// 	defineConfig
// } = require('@vue/cli-service');
// const {
// 	VantResolver
// } = require('@vant/auto-import-resolver');
// const ComponentsPlugin = require('unplugin-vue-components/webpack');
const {
	VantResolver
} = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
	configureWebpack: {
		plugins: [
			ComponentsPlugin({
				resolvers: [VantResolver()],
			}),
		],
	},
	lintOnSave: false
};