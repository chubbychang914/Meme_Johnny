import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/web/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("@/views/web/AboutView.vue")
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import("@/views/web/ProjectsView.vue")
    },
    // ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    {
      path: "/:pathMatch(.*)",
      name: "ErrorView",
      component: () => import("@/views/ErrorView.vue")
    }
  ]
})

export default router
