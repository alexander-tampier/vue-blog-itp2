// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import { filterTitle, filter } from '../helper/truncate';

Vue.config.productionTip = false;

Vue.filter('truncate', filter);
Vue.filter('filterTitle', filterTitle);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
