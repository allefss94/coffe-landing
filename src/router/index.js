import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default-layout',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../pages/Home.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../pages/Login.vue')
        }
      ]
    },
    {
      path: '/auth',
      name: 'Authenticated-area',
      component: () => import('../layouts/Auth.vue'),
      children: [
        {
          path: '/auth/dashboard',
          name: 'dashboard',
          component: () => import('../pages/Authenticated.vue')
        }
      ]
    }
  ]
})

export default router
