import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import music_routes from '../views/Music'

const routes = [ ...music_routes ];

const router = new Router({
  mode: 'history',
  routes
});

export default router