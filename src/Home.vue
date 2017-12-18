<template>
    <div class="home">
        <!-- header部分 -->
        <div class="header">
            <h2>{{msg}}</h2>
        </div>
        <!-- 内容部分 -->
        <div class="main">
            <div class="listbox">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                    <img src="../src/assets/img/14.png">
                    </div>
                    <div class="item">
                    <img src="../src/assets/img/15.png" >
                    </div> 
                    <div class="item">
                    <img src="../src/assets/img/1.png" >
                    </div> 
                </div>
                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="bell">
                <span class="glyphicon glyphicon-bell"></span>
                &nbsp;&nbsp;&nbsp;
                <span>{{msgto}}</span>
            </div>
            <BookList 
            :newBook = "newBook" 
            :eidtBook = "eidtBook" 
            :hotBook = "hotBook" 
            @detail="showDetail"
            />
            </div>
            <transition name="fade">
             <BookDetail 
             :bookshow = bookshow
             v-if="show" 
             @close="closeDetail"               
             />
            </transition>                   
        </div>
    </div> 
</template>

<script>
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import DetailsPage from './components/DetailsPage'
export default {
  name: "Home",
  components: {
        BookList,
        BookDetail,
        DetailsPage
        },
  data() {
    return {
        msg:'掌上商城',
        msgto:'双12全场图书低至1折，更有隐藏神秘惊喜',
        show:false,
        newBook:[],
        eidtBook:[],
        hotBook:[],
        bookshow:{},
        index:''
    };
  },
  methods:{
    setRoleList(){ 
      const list = this;
        axios.get('../static/homeData.json').then((res)=>{
                list.newBook = res.data.newBook;
                list.eidtBook = res.data.eidtBook;
                list.hotBook = res.data.hotBook;
        }).catch(function(err){
                console.log("请求错误，原因不知道！");
        })       
    },
     showDetail(idx,witch){
      this.show = !this.show;
      this.index = idx;
        axios.get('../static/homeData.json').then((res)=>{
               this.bookshow =res.data[witch][idx];              
        }).catch(function(err){
                console.log("请求错误，原因不知道！");
        }) 
    },
    closeDetail(){
        this.show = !this.show
    }
  },
  created(){
      this.setRoleList();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "../src/styles/home.less";
    .fade-enter-active,.fade-leave-active {
        transition: opacity 0.6s;
    }
    .fade-enter,.fade-leave-to {
        opacity: 0;
    }
</style>
