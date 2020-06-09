import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cinemas from '../views/home/cinemas.vue'
import Films from '../views/home/film.vue'
import Center from '../views/home/center.vue'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'films',
        // name:'films',
        component: Films,
        children: [
          {
            path: 'nowPlaying',
            name: 'nowPlaying',
            component: () => import(/* webpackChunkName: "about" */ '../views/home/film/nowPlaying.vue')
          },
          {
            path: 'comingSoon',
            name: 'comingSoon',
            component: () => import(/* webpackChunkName: "about" */ '../views/home/film/comingSoon')
          },
          {
            path: '',
            redirect:{ name: 'nowPlaying'}
          }
        ],
      },
      {
        path: 'cinemas',
        name: 'cinemas',
        component: Cinemas,
      },
      {
        path: 'center',
        name: 'center',
        component: Center,
      },
      {
        path: '',
        redirect:{ path: '/films'}
      },
    ]
  },
  {
    path: '/film/:filmId',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/details.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import(/* webpackChunkName: "about" */ '../views/city.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/cinema/:id/film',
    component: () => import(/* webpackChunkName: "about" */ '../views/cinemaDetail.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'myactive',
  routes
})

export default router
