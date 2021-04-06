import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('./assets/app.css')
import { store } from './store/store'
import { firestorePlugin } from 'vuefire'
import { rtdbPlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.use(rtdbPlugin)

Vue.config.productionTip = false

// 4. Create and mount the root instance.
new Vue({
  router,
  store, //if commited store is not used. data is recieved from firebase db via vuefire.
  render: h => h(App)
}).$mount('#app')
