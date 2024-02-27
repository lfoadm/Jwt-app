// Composables
import { createRouter, createWebHistory } from 'vue-router';
import { auth, redirectIfAuthenticated } from './guard';

const routes = [
  {
    path: '/login',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Auth/Login.vue'),
        name: 'login',
        beforeEnter: redirectIfAuthenticated,
      }
    ]
  },

  {
    path: '/',
    component: () => import('@/layouts/Dashboard.vue'),
    beforeEnter: auth,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
      }
    ]
  },

  {
    path: '/balance',
    component: () => import('@/layouts/Dashboard.vue'),
    beforeEnter: auth,
    children: [
      {
        path: '',
        name: 'balance',
        component: () => import('@/views/Admin/Site/Balance.vue'),
      }
    ]
  },

  {
    path: '/deposit/add',
    component: () => import('@/layouts/Dashboard.vue'),
    beforeEnter: auth,
    children: [
      {
        path: '',
        name: 'deposit',
        component: () => import('@/views/Admin/Site/Deposit.vue'),
      }
    ]
  },

  {
    path: '/withdraw',
    component: () => import('@/layouts/Dashboard.vue'),
    beforeEnter: auth,
    children: [
      {
        path: '',
        name: 'withdraw',
        component: () => import('@/views/Admin/Site/Withdraw.vue'),
      }
    ]
  },

  {
    path: '/signup',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Auth/Signup.vue'),
        name: 'signup',
        beforeEnter: redirectIfAuthenticated,
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
