import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Generator from '../views/Generator.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:locale',
      name: 'LocalizedHome',
      component: Home
    },
    {
      path: '/:locale/generator',
      name: 'Generator',
      component: Generator
    }
  ]
})

export default router 