<template>
<div class="wrap-category">
  <div class="books-cate" >
      <div class="search">
      <input type="search" :placeholder="placeholder" @keyup="$emit('search',$event.target.value)">
      <i class="glyphicon glyphicon-search"></i>
      </div>
      <div class="books">
          <div class="noMatching" v-if="noMatching">
            <p>-- 对不起，该书库暂未搜录该类图书 --</p>
          </div>
          <ul v-else>
              <li v-for="book in bookInfo" :key="book.id" @click="showDetal()">
                  <div class="bookImg">
                      <img :src=book.img>
                  </div>
                  <div class="mainInfo">
                     <h3>{{book.name}}</h3>
                     <p class="author">{{book.author}}</p>
                     <p class="price">￥ {{book.price}}</p>
                  </div>
                  <p class="svg_img">
                      <img src='../assets/3.svg'>
                  </p>
              </li>

          </ul>
      </div>
      
  </div>
  <div class="books-detail">
    <div class="top">
     <div class="detail-img">
        <div class="bookImg">
                      <img src="../assets/22.jpg">
        </div>
        <div class="allInfo">
            <div class="Info-list">
                <label>作业</label>
                <label>作业</label>
                <label>作业</label>
                <label>作业</label>
                <label>作业</label>
            </div>
            <div class="info-detail">
                <label>nich</label>
                <label>nich</label>
                <label>nich</label>
                <label>nich</label>
                <label>nich</label>
            </div>
        </div>
     </div>
     <div class="title">
         <label>Java高级程序设计</label>
     </div>
     <div class="cate-cart">
         <button class="join">加入购物车</button>
         <button class="buy">立即购买</button>
     </div>
    </div>
    <div class="bottom">
        
        <fieldset>
            <legend>内容概要</legend>
            <span>22222222222222222222222222222222222222222222222222222222222222222222222222222</span>
        </fieldset>
        
        <fieldset>
            <legend>内容概要</legend>
            <span>22222222222222222222222222222222222222222222222222222222222222222222222222222</span>
        </fieldset>
        <fieldset>
            <legend>作者简介</legend>
            <span>22222222222222222222222222222222222222222222222222222222222222222222222222222</span>
        </fieldset>
    </div>
  </div>
</div>

        
</template>

<script >

    export default {
        name: "CategoryBooks",
        props: ['placeholder','bookInfo','noMatching'],
        data(){
        return{
             
        }
     },
     
    };
    
</script>

<style lang="less" scoped>
.wrap-category{

    .books-cate{
        
        .search{
            height: 30px;
            width: 100%;
            
            input{
                width:90%;
                border-radius:15px;
                outline: none; 
                padding-left: 35px;
                font-size: 12px;
            }
            .glyphicon-search{
                position: absolute;
                top: 7px;
                left: 6%;
            }
        }
        .books{
            li{
                height:110px ;
                width: 90%;
                margin: 5px auto;
                border-bottom: 1px solid gray;
                cursor: pointer;
            .bookImg{
                float: left;
                img{
                    height: 98px;
                    width: 78px;
                    }
                }
            .mainInfo{
                text-align: left;
                float: left;
                margin-left:10px;
                width: 210px; 
                white-space: nowrap; 
                h3{
                    font-size: 14px;
                    text-decoration: none;
                    font-family: 微软雅黑;
                    color: rgb(51, 102, 204);
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin-top: 7px;
                }
                .author{
                    font-size: 13px;
                    text-decoration: none;
                    font-family: 微软雅黑;
                    color: rgb(121, 121, 121);
                    margin-top: 7px;
                }
                .price{
                    font-size: 18px;
                    color: rgb(204, 102, 51);
                    margin-top: 20px;
                }
                
            }
            .svg_img{
                    float: right;
                    margin-top: 30px;
                    width: 18px;
                    
                }
            }
        }
    }
    .books-detail{
        z-index: 10;
        position: absolute;
        left: -100%;
        width: 90%;
        margin: 0 auto;
        background: rgb(242, 242, 242);
        .top{
            margin-bottom:20px; 
            background: #fff;
            height: 245px;
            .detail-img{
                height:110px ;
                .bookImg{
                    float: left;
                    margin-top: 7px;
                    img{
                        height: 98px;
                        width: 78px;
                        }
                    }
                .allInfo{
                    font-style: normal;
                    font-size: 12px;
                    font-weight: 400;
                    float: left;
                    margin-left:15px;
                    label{
                        display: block;
                    }
                        .Info-list{
                            float: left;
                            width: 100px;
                            text-align: left;
                            color: rgb(134, 134, 134);
                        }
                        .info-detail{
                            float: left;
                            color: rgb(27, 27, 27);
                        }
                }
            }
            .title{
                text-align: left;
                margin-top: 10px;
            }
            .cate-cart{
                margin-top: 20px;
                button{
                    width: 158px;
                    height: 50px;
                    outline: none;
                    
                    border-radius: 5px;
                }
                .join{
                    background:#fff;
                    border: 1px soild #000000;
                }
                .buy{
                    background: rgb(51, 153, 51);
                    color: #fff;
                    border: none;
                }
            }
        }
        .bottom{
            background: #fff;
            margin-top: 10px;
            fieldset{
                text-align: none;
                width: 100%;
                overflow: hidden;
                border: 1px solid #797979;
                padding: 14px;
                text-align: left;
                margin-top: 20px;
                legend{
                    text-align: left;
                    margin-left: 25px;
                    width: auto;
                    border: none;
                }
                span{
                    word-break: break-all;
                    
                }
            }
            
        }
    }
}
</style>
