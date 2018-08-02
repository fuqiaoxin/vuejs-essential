// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建一个新的 Vue 实例
// 注：{ App } 是 { App: App } 的缩写，ES6（ECMAScript 6）允许在对象中直接写变量，此时的属性名为变量名，属性值为变量的值。
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
