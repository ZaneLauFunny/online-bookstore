<template>
    <div class="header-block">
        <h4>{{headerText}}</h4>
    </div>
</template>

<script>
    export default {
        name: "HeaderBlock",
        props: ['headerText']
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header-block{
        width: 100%;
        height: 50px;
        text-align: center;
        background-color: #2c3e50;
        color: #fff;
    }
    .header-block > h4{
        font-weight: normal;
        line-height: 50px;
    }
</style>
