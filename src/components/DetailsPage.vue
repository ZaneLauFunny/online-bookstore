<template>
    <div class="detailsPage">
        <div class="title">
            <h2>图书详情 </h2>
            <router-link :to="{name:'home'}" tag="a"><i class="glyphicon glyphicon-chevron-left"></i></router-link>
        </div>
        <!-- 信息 -->
        <div class="author">
            <div class="img">
                <img :src="newdetail.img">
            </div>
            <div class="bookdetails">
                <p>
                    <span>作者</span>
                    <span>{{newdetail.author}}</span>
                </p>
                <p>
                    <span>页数</span>
                    <span>{{newdetail.page}}</span>
                </p>
                <p>
                    <span>书号</span>
                    <span>{{newdetail.ISBN}}</span>
                </p>
                <p>
                    <span>出版日期</span>
                    <span>{{newdetail.day}}</span>
                </p>
                <p>
                    <span>售价</span>
                    <span class="price">￥{{newdetail.price}}</span>
                </p>
            </div>
        </div>
        <!-- 购买 -->
        <div class="describe">
            <p>{{newdetail.name}}</p>
            <div class="btn">
                <span @click="addBookList">加入购物车</span>
                <span>立即购买</span>
            </div>
        </div>
        <!-- 内容摘要 -->
        <div class="abstract">
            <div class="content">
                <p>{{newdetail.describe1}}
                </p>
                <p>{{newdetail.describe2}}
                </p>
                <div>内容概要</div>
            </div>
            <div class="content">
                <p>{{newdetail.describe1}}
                </p>
                <p>{{newdetail.describe2}}
                </p>
                <div>内容概要</div>
            </div>
            <div class="content">
                <p>{{newdetail.describe1}}
                </p>
                <p>{{newdetail.describe2}}
                </p>
                <div>作者简介</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailsPage",
        data() {
            return {
                newdetail: {},
                // 向本地存储的加入过购物车的数组
                localBookList: []
            }
        },
        methods: {
            getDetail() {
                this.newdetail = this.$route.params.value
            },
            // 本地存储本次加入购物车的新书籍
            addBookList() {
                // 本页加载的新书
                let newBook = {
                    name: this.newdetail.name,
                    img: this.newdetail.img,
                    author: this.newdetail.author,
                    price: this.newdetail.price
                };
                if(!localStorage.book){
                    this.localBookList.push(newBook);
                    localStorage.book = JSON.stringify(this.localBookList);
                }else{
                    // 判断这本书是否已经加入过购物车了
                    // 从本地取出书的数组
                    let localBookArr = JSON.parse(localStorage.book),
                        localBookArr_len = localBookArr.length;
                    for(let i = 0;i < localBookArr_len;i++){
                        // 如果已经加入过购物车了
                        if(newBook.name === localBookArr[i].name){
                            alert ("你已经将我加入过购物车了哦>.<");
                            return;
                        }
                    }
                    localBookArr.push(newBook);
                    localStorage.book = JSON.stringify(localBookArr);
                }
            }
        },
        mounted() {
            this.getDetail();
        }
    
    };
</script>

<style lang="less">
    @import "../styles/detailspage.less";
</style>
