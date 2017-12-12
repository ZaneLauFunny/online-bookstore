<template>
    <div>
        <div v-if="loged" class="loged-box">
            <div class="user-box me-header loged">
                <div class="pic-box"></div>
                <p class="nickname">{{nickname}}</p>  
            </div>
            <div class="me-main">
                <ul>
                    <li v-for="item in mainList" :key="item.id">
                        <span>{{item}}</span>
                        <i></i>
                    </li>
                </ul>  
                <form class="me-footer">
                    <button type="button">{{checkoutLog}}</button>    
                </form>  
            </div> 
        </div>
        <div v-else class="not-loged-box">
            <div class="user-box me-header notLoged">
                <span class="register">{{register}}</span>
                <span class="to-log">{{toLog}}</span>
            </div>
            <div class="me-main"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MeLoged",
        props: ["loged","nickname","mainList","checkoutLog","register","toLog"]
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.loged-box{
    background-color: rgba(204, 197, 197, 0.521);
}
// header部分
.me-header{ 
    @height: 180px;
    @font-color: #2c3e50;
    width: 100%;
    height: @height;
    border: 1px solid transparent;
    border-bottom: 1px solid #ccc;
    &.loged{
        background: url("../assets/me-big-pic.png") no-repeat center center / cover;
    }
    &.notLoged{
        background: repeating-linear-gradient(#701313, #cd6600 100%);
    }
    .pic-box{
        display: block;
        @size: 126px;
        width: @size;
        height: @size;
        margin: 10px auto 0;
        border-radius: 50%;
        text-align: center;
        line-height: @size;
        color: @font-color;
        background: url("../assets/me-small-pic.png") no-repeat center center / cover;
    }
    .nickname{
        color: #fff;
    }
}

.me-main{
        @margin-top: 10px;
        margin-top: @margin-top; 
        ul{
            li{
                padding: 14px 8px;
                border-top: 1px solid #ccc;
                font-size: 15px;
                display: flex;
                justify-content: space-between;
                background-color: #fff;
                &:nth-child(3){
                    margin-top: @margin-top;
                }
                &:nth-child(5){
                    margin-top: @margin-top;
                }
                &:last-child{
                    border-bottom: 1px solid #ccc;
                }
                i{
                    display: inline-block;
                    @size: 10px;
                    width: @size;
                    height: @size;
                    background: url("../assets/next.svg") no-repeat center center / cover;
                }
            }
        }
    }

.me-footer{
        button{
            width: 95%;
            height: 60px;
            margin: 30px 0;
            border-radius: 10px;
            outline: none;
            border: none;
            color: #fff;
            background-color: rgb(204, 51, 51);
            &:active{
                background-color: rgba(204, 51, 51,.7);
            }
        }
    }
</style>
