// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './vuex/store'

Vue.config.productionTip = false
Vue.use(MintUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
// 打包改為-->打包APK時用到
// document.addEventListener('deviceready', () => {
//   new Vue({
//     el: '#app',
//     router,
//     store,
//     template: '<App/>',
//     components: { App }
//   })
//   window.navigator.splashscreen.hide()
// }, false)
