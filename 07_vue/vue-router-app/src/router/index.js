import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView'
import HelloView from '@/views/HelloView'
import LoginView from "@/views/LoginView";
import NotFound404 from "@/views/NotFound404";
import DogView from "@/views/DogView";

Vue.use(VueRouter)

// const isLoggedIn = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/HelloView/:userName',
    name: 'HelloView',
    component: HelloView
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView,
    // beforeEnter(to,from,next) {
    //   if (isLoggedIn) {
    //     console.log('로그인중')
    //     next({name:'home'})
    //   } else {
    //     next()
    //   }
    // }
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '/dog/:breed',
    name: 'DogView',
    component: DogView
  },
  {
    path: '*',
    redirect: '/404'
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next) => {
//   const isLoggedIn = true

//   const authPage = ['HelloView']

//   const isAuthRequired = authPage.includes(to.name)
//   if (isAuthRequired && !isLoggedIn) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

export default router
