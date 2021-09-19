import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
        path: '/assignment1',
        name: 'Assignment-1',
        component: () => import('@/views/Assignment-1.vue'),
    },
    {
        path: '/assignment2',
        name: 'Assignment-2',
        component: () => import('@/views/Assignment-2.vue'),
    }
  ],
})