import App from './App'
import PubFuc from './common/js/util.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$pubFuc = PubFuc // this.$pubFuc.xxx

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
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif