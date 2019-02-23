import Vue from 'vue';
import App from './App.vue';
import {router} from './router';
import store from './store/store';
import iView from 'iview';

import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';

import 'iview/dist/styles/iview.css';
import './assets/css/share.css';
Vue.use(iView);
Vue.config.productionTip = false;
Vue.component('v-chart', ECharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
