import Vue from 'vue'
import VueRouter from 'vue-router'
import Stocks from "../components/Stocks";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Stocks',
    component: Stocks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
