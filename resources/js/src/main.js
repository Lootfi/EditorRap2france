/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'
// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)

import VuejsClipper from 'vuejs-clipper'
Vue.use(VuejsClipper)


import EditorJS from '@editorjs/editorjs';

// axios
import axios from './axios.js'
Vue.prototype.$http = axios

// Filters
import './filters/filters.js'

import i18n from './i18n/i18n'

// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

import Vuetify from 'vuetify'
Vue.use(Vuetify)

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
