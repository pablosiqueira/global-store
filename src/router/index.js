import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '@/views/List.vue'
import Cart from '@/views/Cart.vue'
import Details from '@/views/Details.vue'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    props: (route) => ({ category: route.query.category },{ search: route.query.search }),
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
    props: (route) => ({ id: route.query.id }),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      auth: true,
      title: 'My Cart'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: {
      auth: true,
      title: 'Page Not Found'
    }
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
