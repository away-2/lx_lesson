// 仓库
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {}
	},
	mutations: {
		storeLogin(state, temp) {
			state.userInfo = temp
		}
	}
})

export default store