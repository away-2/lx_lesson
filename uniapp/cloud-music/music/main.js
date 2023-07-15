import App from './App'
import PubFuc from './common/js/util.js'
import baseUrl from './utils/index.js'
import store from './store/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$pubFuc = PubFuc // this.$pubFuc.xxx
Vue.prototype.$websiteUrl = baseUrl
Vue.prototype.$store = store

import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import baseUrl from './utils'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif