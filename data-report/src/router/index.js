import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bmap from '../views/Bmap.vue'
import Bmap2 from '../views/Bmap2.vue'
import Bmap3 from '../views/Bmap3.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'Bmap',
    component: Bmap
  },
  {
    path: '/bmap2',
    name: 'Bmap2',
    component: Bmap2
  },
  {
    path: '/bmap3',
    name: 'Bmap3',
    component: Bmap3
  }
]

const router = new VueRouter({
  routes
})

export default router
