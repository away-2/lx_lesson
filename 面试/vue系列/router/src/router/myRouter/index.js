import { ref, inject } from 'vue'
import RouterLink from './routerLink.vue'
import RouterView from './routerView.vue'

function createRouter(options) {
    return new Router(options)
}

function createWebHashHistory(){
    function bindEvents(fn) {
        window.addEventListener('hashchange', fn)
    }
    return {
        bindEvents,
        url: window.location.hash.slice(1) || '/'
    }
}

function useRouter(){
    return inject('_router_')
}

class Router {
    constructor(options){
        this.history = options.history
        this.routes = options.routes
        this.current = ref(this.history.url)

        this.history.bindEvents(() =>{ // 监听hash的变化
            this.current = window.location.hash.slice(1)
        })
    }

    install(app){
        app.provide('_router_',this)
        app.component('router-link', RouterLink)  // app挂载组件
        app.component('router-view', RouterView)
    }
}

export { createRouter, createWebHashHistory, useRouter }