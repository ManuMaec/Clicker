import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overView',
      component: () => import ("../views/OverView.vue")
    },
  ]
})

export default router
