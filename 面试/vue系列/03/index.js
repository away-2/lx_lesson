class Vue {
    constructor(options) {
      this.$options = options
      this.$data = options.data
  
      // 对data做响应式处理
      observe(this.$data)
  
      // 把data代理到vm上
      proxy(this)
  
      // 执行编译
      new Compile(options.el, this)
    }
  
  }

  // 数据劫持
  function observe(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return
    }
    new Observer(obj)
  }
  class Observer{
    constructor(value) {
      this.value = value
      this.walk(value)
    }
    walk(obj) {
      Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
      })
    }
  }
  function defineReactive(obj, key, value) {
    observe(value)
    const dep = new Dep() // 对每个属性都创建一个dep实例
    Object.defineProperty(obj, key, {
      get() {
        Dep.target && dep.addDep(Dep.target)  // Dep.target 是一个watcher实例
        return value
      },
      set(newVal) {
        if (newVal !== value) {
          value = newVal
          dep.notify()  // 通知dep执行watcher的update方法
        }
      }
    })
  }
  
  // Dep 为每个属性创建一个依赖收集器
  class Dep {
    constructor(){
        this.deps = []  // 存放watcher实例
    }
    addDep(dep){
        this.deps.push(dep) 
    }
    notify(){
        this.deps.forEach(dep => dep.update())
    }
  }
  
// watcher 观察者
class Watcher {
    constructor(vm, key, updateFn){
        this.vm = vm
        this.key = key
        this.updateFn = updateFn

        Dep.target = this
        this.vm[this.key]
        Dep.target = null

    }
    // 未来被Dep调用
    update(){
        // 当页面上的属性发生变化时，会更新data数据源
        this.updateFn.call(this.vm, this.vm[this.key])
    }
}

  let vm = new Vue({
    el: '#app',
    data() {
      return {
        count: 0
      }
    },
    methods: {
      add() {
        this.count++
      }
    }
  })