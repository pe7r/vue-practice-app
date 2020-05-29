import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import DeveloperPage from './views/DeveloperPage.vue'
import ManagerPage from './views/ManagerPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/developerPage',
      component: DeveloperPage,
    },
    {
      path: '/managerPage',
      component: ManagerPage,
    },
  ]
})