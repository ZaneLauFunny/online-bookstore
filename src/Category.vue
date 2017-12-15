<template>
    <div class="category">
        <CategoryBooks
             placeholder="请输入图书名称或者书籍的作者进行搜索"
             :book-info="bookFilter" 
            :noMatching="notFindMatch"
            @search="searchBook"
            
        />
    </div>
</template>

<script src="./scripts/category.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
