<template>
    <div class="cart">
        <!-- 顶部 -->
        <HeaderBlock header-text="购物车"/>
        <!-- 内容 -->
        <div class="cart-main">
            <!-- 编辑和删除部分 -->
            <div class="cart-eddit-delete">
                <span v-if="eddit" class="cart-eddit" @click="edditBtn">编辑</span>
                <div v-else>
                    <span class="cart-cancle" @click="cancleBtn">取消</span>
                    <span class="cart-delete" @click="deleteBtn">删除选中</span>
                </div>
            </div>
            <!-- 图书列表部分 -->
            <ul class="cart-books-wrap">
                <!-- 图书信息 -->
                <li class="cart-book-list" v-for="(book,index) in cartBookList" :key="book.id">
                    <!-- 勾选框 -->
                    <div class="cart-select-box">
                        <i class="cart-not-select" v-if="book.notSelect" @click="showSelect(index)"></i>
                        <i class="cart-select" v-if="book.select" @click="showNotSelect(index)"></i>
                    </div>
                    <div class="cart-book-box" :class="{moveBookBox: book.moveBookBox}">
                        <img class="cart-book-img" src="./assets/logo.png" alt="">
                        <div class="cart-book-info">
                            <p class="cart-book-name">{{book.cartBookName}}</p>
                            <p class="cart-book-author">{{book.cartBookAuthor}}</p>
                            <p class="cart-book-price">￥{{book.cartBookPrice}}</p>
                            <div class="cart-count-box" v-if="book.showCount">
                                <span class="cart-min" :class="{cantClick: book.noMin}" @click="cartMin(index)"></span>
                                <span class="cart-count">{{book.cartCount}}</span>
                                <span class="cart-add" :class="{cantClick: book.noAdd}" @click="cartAdd(index)"></span>
                            </div>
                        </div>   
                    </div>     
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./scripts/cart.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "./styles/cart.less";
</style>
