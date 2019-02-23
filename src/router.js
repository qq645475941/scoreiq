import Vue from 'vue'
import Router from 'vue-router';
import Login from './views/login'
import Layout from './views/layout';
import dashboard from './views/layout/dashboard'

import {
  navConfig
} from './components/nav-config'

import store from './store/store';

Vue.use(Router)
export const router = new Router({
  routes: [{
      path: '/',
      name: 'layout',
      component: Layout,
      children: [{
          path: '/',
          redirect: '/dashboard'
        },
        {
          path: 'dashboard',
          name: '概览',
          component: dashboard,
          meta: {
            id: '1-1'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

router.beforeEach((to, from, next) => {
  let currentRouterId = to.meta.id.split('-');
  let Breadcrumb = [];
  for (let item of navConfig) {
    if (item.id == currentRouterId[0]) {
      Breadcrumb.push(item);
      if (item.children && item.children.length) {
        for (let item of item.children) {
          let id = currentRouterId[0] + '-' + currentRouterId[1];
          if (item.id == id) {
            Breadcrumb.push(item);
            break;
          }
        }
      }
      break;
    }
  }
  console.log(Breadcrumb);
  store.commit('setBreadcrumb', Breadcrumb);
  next()


})