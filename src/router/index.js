import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import QuestionsList from '@/components/QuestionsList.vue'
import FootList from '@/components/FootList.vue'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
        path: '/QuestionsList',
        //name: 'questionsList',
        component: QuestionsList
    }

  ]
})

// Vue.use(Router)

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/footlist',
//         component: FootList
//     }
// ]

// export default new Route({
//     routes
// })
