import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $gsapPack from '@/tools/animations/index.js' // gsap + scrolltrigger
import '@/assets/styles/global/index.scss' // global scss
// font awesome icons
import { FontAwesomeIcon } from '@/assets/fonts/fontAwesome/index.js'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

// 把從tool/animations/index 引入的 GSAP 套件引入全局
// 這樣就能使用 $gsap 這個參數了
app.config.globalProperties.$gsapPack = $gsapPack

app.use(router)

app.mount('#app')
