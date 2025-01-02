import { createRouter, createWebHistory } from 'vue-router'
import AdminLoginView from '../views/AdminLoginView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'
import AdminLoginProcess from '../services/authService.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'admin',
      component: AdminLoginView,
    },
    {
      path: '/auth/login',
      name: 'adminLogin',
      component: AdminLoginProcess,
    },
    {
      path: '/admin',
      name: 'adminDashboard',
      component: AdminDashboardView,
    },
  ],
})

export default router
