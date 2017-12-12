<template>
    <div id="app">
        <router-view/>
        <ul class="footer-link-page">
            <router-link :to="{name: 'home'}" tag="li" exact>
                <i class="fir"></i>
                <span>首页</span>
            </router-link>
            <router-link :to="{name: 'category'}" tag="li">
                <i class="sec"></i>
                <span>分类</span>
            </router-link>
            <router-link :to="{name: 'cart'}" tag="li">
                <i class="thi"></i>
                <span>购物车</span>
            </router-link>
            <router-link :to="{name: 'me'}" tag="li">
                <i class="for"></i>
                <span>个人中心</span>
            </router-link>
            
        </ul>
    </div>
</template>

<script>
    export default {
        name: "app"
    };

</script>

<style lang="less">
    @import './styles/common.less';
</style>
