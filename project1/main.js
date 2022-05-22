import App from './App'
import store from './store/index.js'
// #ifndef VUE3
import Vue from 'vue'
import uView from 'uview-ui';
import '@/static/css/iconfont.css'
Vue.use(uView)

import '@/components/index.js'
import {api} from '@/util/api.js'
Vue.prototype.$api = api;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif