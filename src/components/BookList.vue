<template>
    <div class="booklist">
        <h3>新书上架</h3>
        <ul class="box">
            <li v-for="(x,index ) in newBook" :key="x.id" @click="$emit('detail',index,'newBook')"> 
                <img :src="x.img">
                <p>{{x.name}}</p>
                <p>$&nbsp;&nbsp;{{x.price}}</p>
            </li> 
        </ul>
         <h3>编辑推荐</h3>
        <ul class="box">
            <li v-for="(x,index ) in eidtBook" :key="x.id" @click="$emit('detail',index,'eidtBook')"> 
                <img :src="x.img">
                <p>{{x.name}}</p>
                <p>$&nbsp;&nbsp;{{x.price}}</p>
            </li> 
        </ul> 
         <h3>热门新书</h3>
        <ul class="box">
            <li v-for="(x,index ) in hotBook" :key="x.id" @click="$emit('detail',index,'hotBook')"> 
                <img :src="x.img">
                <p>{{x.name}}</p>
                <p>$&nbsp;&nbsp;{{x.price}}</p>
            </li> 
        </ul> 
    </div>
</template>

<script>
    export default {
        name: "BookList",
        props: ["newBook","eidtBook","hotBook"],
        data() {
            return {    

            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    h3{
        white-space: nowrap;
        text-align: left;
        font-size: 16px;
        font-weight: 700;
        font-style: normal;
        text-decoration: none;
        font-family: 微软雅黑;
        color: rgb(0, 0, 0);
        margin:10px 0 0 7%; 
    }
    .box{
        display: flex;
        flex-wrap: wrap;
        width: 98%;
        margin: 0 auto;
        li{
            width: 45%;
            text-align: center;
            margin: 10px 0 10px 0;
            &:nth-of-type(2n-1){
                margin: 10px 15px 10px 15px;
            }
            img{
                width: 160px;
                height: 201px;
            }
            p{
                white-space: nowrap;
                font-size: 14px;
                font-weight: 400;
                font-style: normal;
                text-decoration: none;
                font-family: 微软雅黑;
                color: rgb(0, 0, 0);
                &:nth-child(3){
                color: rgb(204, 102, 51);
                }
            }
        }
}
</style>