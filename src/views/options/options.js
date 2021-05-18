import Vue from 'vue'
import VueRouter from 'vuerouter'
import Quasar from 'quasar'
import Options from '../../components/Options.vue'
import routes from './routes'


// Mozilla's polyfill
Vue.prototype.$browser = require('webextension-polyfill')
Vue.use(VueRouter)
Vue.use(Quasar)


const router = new VueRouter({
  routes
})
router.replace('/foo')

new Vue({
  el: '#options',
  router,
  render: (h) => h(Options),
})