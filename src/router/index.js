import { createRouter, createWebHistory } from 'vue-router'
import History from '../views/History.vue'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Network from '../views/Network.vue'
import Work from '../views/Work.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/network',
    name: 'Network',
    component: Network 
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  }, 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
