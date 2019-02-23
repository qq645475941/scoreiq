import Vue from 'vue';
import Vuex from 'vuex';
import routerState from './modules/router-state'

Vue.use(Vuex);



export default new Vuex.Store({
  modules:{
    routerState
  }
})
