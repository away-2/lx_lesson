import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import 'vant/es/toast/style'   // 单独引入

createApp(App).use(router).mount('#app')
