// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootCss from 'bootcss'
// 定义全局变量
// 定义全局登录状态变量
window.loginStatus = false;
// 定义全局显示昵称变量
window.showNickname = '';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})


