<template>
    <div class="bookDetail">
        <p class="closebox">
            <span class="close" @click="$emit('close')">&times;</span>
        </p>
        <div class="row">
            <div class="col-xs-5 imgbox">
                <img :src="bookshow.img">
            </div>
            <div class="col-xs-7 msg">
                <div>
                    <span class="left">作者</span>
                    <span class="right">{{bookshow.author}}</span>
                </div>
                <div>
                    <span class="left">页数</span>
                    <span class="right">{{bookshow.page}}</span>
                </div>
                <div>
                    <span class="left">书号</span>
                    <span class="right">{{bookshow.ISBN}}</span>
                </div>
                <div>
                    <span class="left">出版日期</span>
                    <span class="right day">{{bookshow.day}}</span>
                </div>
                <div class="detail">
                    <router-link :to="{name: 'DetailsPage',params:{value:detail}}" tag="span">详情&nbsp;></router-link>
                </div>
            </div>
            <div class="col-xs-12 bookName">
                <span>{{bookshow.name}}</span>
            </div>
            <div class="col-xs-12 textone">
                <p class="text">
                    <span>
                        {{bookshow.describe1}}
                    </span>
                </p>
            </div>
             <div class="col-xs-12">
                <p class="text">
                    <span>
                       {{bookshow.describe2}}
                    </span>
                </p>
            </div>
        </div>
       <div class="price">
            <span>￥{{bookshow.price}}</span>
            <span>1本</span>
            <span>&gt;</span>
        </div>
        <div class="button">
            <span>加入购物车</span>
            <span class="active">立即购买</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "BookDetail",
  props: ["bookshow"],
  data() {   
    return {  
        detail:{}
    }
  },
  methods:{
      setDetail(){
          this.detail = this.$props.bookshow;
          console.log(this.detail)
          }
  },
  mounted(){
      setTimeout(()=>{
          this.setDetail();
      },500)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "../styles/bookdetail.less";
</style>