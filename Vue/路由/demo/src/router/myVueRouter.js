import { h } from 'vue'
let Vue = null


class VueRouter {
  constructor(options) {
    this.mode = 'hash'
    this.routes = options.routes || []
    this.routesMap = this.createMap(this.routes)
    console.log(this.routesMap);
  }

  createMap(routes) {
    return routes.reduce((pre, current) => { // {'/': HomeView}
      pre[current.path] = current.component
      return pre
    }, {})
  }

  install(v) {
    Vue = v
    // console.log(v);

    Vue.mixin({
      beforeCreate() {
        if (this.$options && this.$options.router) {
          this._root = this
          this._router = this.$options.router
        } else {
          this._router = this.$parent && this.$parent._root
        }
        Object.defineProperty(this, '$router', {
          get() {
            return this._root._router
          }
        })
      }
    })

    Vue.component('router-link', {
      render() {
        return h('a', {}, '首页')
      }
    })

    Vue.component('router-view', {
      render() {
        return h('h1', {}, '首页视图')
      }
    })

  }
}

export default VueRouter