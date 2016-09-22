import Vue from 'vue'
import Router from 'vue-router'

import Root from 'components/Root'
import App from 'components/App'
import Hello from 'components/Hello'

Vue.use(Router)

// const env = process.env.NODE_ENV || 'production'
const router = new Router({
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

router.start(VueApp, 'app')
