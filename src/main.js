import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $gsapPack from '@/tools/animations/index.js' // gsap + scrolltrigger
import '@/assets/styles/global/index.scss' // global css

import { FontAwesomeIcon } from '@/assets/fonts/fontAwesome/index.js'

// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'
// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// /* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// /* add icons to the library */
// library.add(faUserSecret)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

// 把從tool/animations/index 引入的 GSAP 套件引入全局
// 這樣就能使用 $gsap 這個參數了
app.config.globalProperties.$gsapPack = $gsapPack

app.use(router)

app.mount('#app')
