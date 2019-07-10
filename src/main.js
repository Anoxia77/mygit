// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import VueRouter from 'vue-router'
import fastClick from 'fastclick'
// import routes from './router/index'
//import VueResource  from 'vue-resource'
import './assets/style/iconfont.css'


Vue.config.productionTip = false
//引入vuerouter
//Vue.use(router)
// new VueRouter(routes)

// Vue.use(VueRouter)

//Vue.use(VueResource)
fastClick.attach(document.body)//解除移动端300ms延迟问题
// Vue.use(NewsList)

// vue.components('news-list',{

// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
$mount('#app')
