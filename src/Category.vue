<template>
    <div class="category">
        <div class="header">
            <h2>分类</h2>
        </div>
        <CategoryBooks
             placeholder="请输入图书名称或者书籍的作者进行搜索"
             :book-info="bookFilter" 
            :noMatching="notFindMatch"
            @search="searchBook"
            @addSbook="addSbook()"
            :sBook=sBook
        />

        
    

    </div>
</template>

<script src="./scripts/category.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .category{
        height: ~"calc(100% - 50px)" ;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>
