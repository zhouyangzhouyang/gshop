import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Profile from '../pages/Profile/Profile'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showtheFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showtheFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showtheFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showtheFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
