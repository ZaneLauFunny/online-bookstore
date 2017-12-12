// 导入三个子组件
import Category from '@/components/Category'
import Cart from '@/components/Cart'
import Me from '@/components/Me'


export default{
    name: "Home",
    components: {
        // 分类页面
        Category,
        // 购物车页面
        Cart,
        // 个人中心页面
        Me
    }
}

