import Vue from 'vue'
import VueRouter from 'vue-router'
import Switch from '../components/Switch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Switch',
    component: Switch
  },
]

const router = new VueRouter({
  routes
})

export default router
