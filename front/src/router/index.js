import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form/:id',
    name: 'Index',
    component: () => import(
      /* webpackChunkName: "Login" */ '../views/login/Index.vue'
    )
  }
]

const router = new VueRouter({
  routes
})

export default router
