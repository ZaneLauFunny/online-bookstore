// 导入核心组件和脚手架
import Vue from 'vue'
import Router from 'vue-router'
// 导入主组件
import Home from '@/Home'
import Category from '@/Category'
import Cart from '@/Cart'
import Me from '@/Me'

Vue.use(Router)

export default new Router({
    // 去掉hash值的 '#'
    mode: "history",
    routes: [
        {
            // 默认显示首页
            path: '/',
            name: 'home',
            component: Home
        },
        // 分类页面
        {
            path: '/category',
            name: 'category',
            component: Category,
        },
        // 购物车页面
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        // 个人中心页面
        {
            path: '/me',
            name: 'me',
            component: Me
        }
    ]
})
