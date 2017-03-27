// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './route/index'
import App from './App'
import MintUI from 'mint-ui'
import vTap from './directives/vTap'

Vue.use(MintUI);
Vue.use(vTap);

/* eslint-disable no-new */
const app = new Vue({
	...App,
	router
})

app.$mount('#app')