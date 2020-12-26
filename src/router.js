import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
   
    {
      path: '/',
      component: () => import(/* webpackChunkName: "demo" */ './views/Tradutor.vue')
    }
  ]
})
