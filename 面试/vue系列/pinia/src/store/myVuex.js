// 手动实现 vuex
import { reactive, inject } from 'vue'

function createStore(options){
    return new Store(options)
}

function useStore(){
    return inject('_store_')
}

class Store {
    constructor(options) {
        this.$options = options
        this._state = reactive({
            data: options.state()
        }) 
        this._mutations = options.mutations
    }
    get state(){
        return this._state.data
    }

    commit(method, ...arg){
       const fn = this._mutations[method]
       fn && fn(this.state, ...arg)
    }

    install(app){  // 为了在 main.js中使用，将store挂载到全局
        app.provide('_store_', this)
    }
}

export { createStore, useStore }