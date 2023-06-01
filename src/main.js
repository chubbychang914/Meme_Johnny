import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $gsap from '@/tools/animations/index.js'
import '@/assets/styles/global/index.scss'

const app = createApp(App)
// 把從tool/animations/index 引入的 GSAP 套件引入全局
// 這樣就能使用 $gsap 這個參數了
app.config.globalProperties.$gsap = $gsap
app.use(router)

app.mount('#app')
