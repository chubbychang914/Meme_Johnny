import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $gsap from '@/tools/index.js'

const app = createApp(App)
// 把 GSAP 的各個套件引入全局
app.config.globalProperties.$gsap = $gsap
app.use(router)

app.mount('#app')
