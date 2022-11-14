import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../App'
import NotFound from '@/views/NotFound'
import NoColor from '@/views/NoColor'
import SsaFleaf from '@/views/SsaFleaf'
import SsaFling from '@/views/SsaFling'
import SsaFlower from '@/views/SsaFlower'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/heppeed',
    name: 'Nocolor',
    component: NoColor
  },
  {
    path: '/happling',
    name: 'Ssafling',
    component: SsaFling
  },
  {
    path: '/happlossome',
    name: 'Ssafleaf',
    component: SsaFleaf
  },
  {
    path: '/happlower',
    name: 'Ssaflower',
    component: SsaFlower
  },
  {
    path: '*',
    redirect: {name:'NotFound'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
