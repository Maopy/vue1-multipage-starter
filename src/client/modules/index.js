import Vue from 'vue'
import VueRouter from 'vue-router'

import Root from 'components/Root'
import App from 'components/App'
import Hello from 'components/Hello'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

router.map({
  '/app': {
    component: App
  },
  '/hello': {
    component: Hello
  }
})

let VueApp = Vue.extend(Root)

router.start(VueApp, '#app')
