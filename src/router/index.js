// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router'

// views
import Home from '@/components/views/Home.vue' // Import your components

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { breadcrumb: 'Home' }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top of the page
    return { top: 0 };
  }
})

export default router
