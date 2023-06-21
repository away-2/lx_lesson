import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import 'vant/es/toast/style'   // 单独引入
import dayjs from 'dayjs'


const app = createApp(App)
// 全局过滤器
app.config.globalProperties.$filters = {
    transTime(date){
        return dayjs(Number(date)).format('HH:mm')
    },
    transDay(value){
        return dayjs(value).format('MM-DD')
    },
    transYDM(value){
        return dayjs(value).format('YYYY')
    },
} 


app.use(router).mount('#app')
