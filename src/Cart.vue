<template>
    <div class="cart">
        <div class="header">
            <h2>购物车</h2>
        </div>
        <div class="showNone" v-if="book">
            <p>购物车内完全没有东西</p>
            <router-link :to="{name: 'home'}" tag="a">去逛逛?</router-link>
        </div>
        <ul class="showBlock" v-else>
            <li>
                <div>
                    <img src="../src/assets/logo.png">
                </div>
                <div>
                    <label>11111111111111</label>
                </div>
                <div>
                    <label>111111111</label>
                </div>
                <div>
                    <label>$&</label>
                </div>
            </li>         
        </ul>   
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data() {
            return {
                newList:[],
                book:false
            };
        },
        methods:{
            addList:function(){

            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "./styles/cart.less";
</style>
