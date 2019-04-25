// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
/**
 * babel只能在构建过程中转译语法糖，比如说将ES7/ES6/JSX中的语法部分（例如箭头函数）转译成ES5。

 而polyfill则是解决原生对象的问题，比如说你的浏览器不支持Promise，babel就给你建一个Promise供你使用。

 所以，polyfill是肯定得在浏览器运行的，不然怎么把原生对象插进全局变量呢？

 用法也很简单，就在你的入口文件（或是公共代码）的顶部require('babel-polyfill')就行了。
 */
require('babel-polyfill')
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import BScroll from 'better-scroll'

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)
// 时间格式化 2016-12-22 10:22:25
Vue.filter('date', (value, sep1 = 'datetime') => {
  // console.log(value)
  let date = new Date(value)
  let year = date.getFullYear()
  let month = date.getMonth() >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
  let hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
  let minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
  let seconds = date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`

  if (sep1 === 'date') {
    date = `${year}-${month}-${day}`
  }
  if (sep1 === 'datetime') {
    date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }
  if (sep1 === 'seconds') {
    date = `${year}-${month}-${day} ${hours}:${minutes}`
  }
  if (sep1 === 'time') {
    date = `${hours}:${minutes}`
  }

  return date
})
// 格式化手机
Vue.filter('mobile', (value) => {
  // console.log(value)
  let mobile = value.substr(0, 3) + '****' + value.substr(7)
  return mobile
})
// 将| 替换为空格分隔符
Vue.filter('spaceSeparated', (value, sep) => {
  value = value.split('|').join(sep)
  return value
})
// 状态管理器
import store from './store/'
// 路由
import router from './routers'
import {ConfirmPlugin, ToastPlugin, AlertPlugin} from 'vux'
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
// 配置请求路径
Vue.use(VueResource)
Vue.http.options.headers = {
  'Content-Type': ' application/json; charset=UTF-8'
  // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
Vue.http.options.xhr = {withCredentials: false}
Vue.http.options.emulateJSON = false
Vue.config.debug = true

Vue.http.interceptors.push(function (request, next) {
  next(function (response) {
    // console.log(response)
    // console.log(111)
    if (response.data.code == '400' || response.data.code == '4131') {
      store.commit('USER_SIGNOUT')
      /* Vue.$vux.toast.show({
       text: response.data.message,
       isShowMask: true,
       width: '80%',
       type: 'text'
       }) */
      // setTimeout(()=>{
      // Vue.$vux.toast.hide()
      router.replace(
        {
          name: 'login',
          query: {
            redirect: router.currentRoute.name
          }
        }
      )
      // }, 2000)
    }
    return response
  })
})

const FastClick = require('fastclick')
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
