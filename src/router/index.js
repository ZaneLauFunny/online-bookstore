// 导入核心组件和脚手架
import Vue from 'vue'
import Router from 'vue-router'
// 导入主页组件
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})
