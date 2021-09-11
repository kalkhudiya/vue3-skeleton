import { createRouter, createWebHistory } from 'vue-router'
import { isSignIn } from '../utill/authGuard'

const routes = [
  {
    path: '/',
    name: 'app',
    component: () => import('../page/app/layout.vue'),
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('../page/app/dashboard.vue')
    }, {
      path: 'user',
      component: () => import('../page/user/index.vue'),
      children: [{
        path: '',
        component: () => import('../page/user/list.vue'),
      }, {
        path: 'add',
        component: () => import('../page/user/addUser.vue'),
      }]
    }]
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../page/loginPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const openRoute = ['/signin']
  if (to.path && openRoute.indexOf(to.path) === -1) {
    if (isSignIn()) {
      next()
    } else {
      next({
        name: "SignIn"
      })
    }
  } else {
    next()
  }
})

export default router
