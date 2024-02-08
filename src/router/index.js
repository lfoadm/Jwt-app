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
