import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

// 自定义按钮权限指令
app.directive('noLevel', {
  beforeMount(el, binding, vnode){ // 指令第一次绑定到元素时调用

  },
  mounted(){

  },
  updated(){  // 被绑定元素所在模板更新时调用

  },
  beforeUnmount(){  // 指令与元素解绑时调用

  }
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.use(ElementPlus)
app.mount('#app')
