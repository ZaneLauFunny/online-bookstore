<template>
    <div class="me">
        <!-- loaged -->
        <me-loged
            :loged="loged"
            :nickname="nickname"
            :mainList="mainList"
            checkoutLog="退出登录"
            register="注册"
            toLog="登录"
        />
        
    </div>

</template>

<script src="./scripts/me.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    
</style>
