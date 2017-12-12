<template>
    <div class="me">
        <!-- header -->
        <me-header></me-header>
        <!-- main -->
        <me-main></me-main>
        <!-- footer -->
        <me-footer></me-footer>      

    </div>
</template>

<script>
    export default {
        name: "Me",
        props: [],
        components: {

        },
        data() {
            return {
                
            };
        }
    };
</script>

<script src="./scripts/me.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "./styles/me.less";
</style>
