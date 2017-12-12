<template>
    <div class="me">
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
                <form>
                    <button type="button" class="btn">退出登录</button>    
                </form>  
            </div> 
        </div>
        <div v-else class="not-loged-box">
            <div class="user-box me-header notLoged">
                <div class="pic-box"></div>
                <span class="register" :class="{pageActive: showReg}" @click="showRegOrLog">注册</span>&nbsp;&nbsp;
                <span class="to-log" :class="{pageActive: showLog}" @click="showRegOrLog">登录</span>
            </div>
            <form v-if="showReg" class="reg-box">
                <div class="form-group">
                    <label for="">账号：</label>
                    <input type="text" placeholder="请输入账号" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">密码：</label>
                    <input type="password" placeholder="请输入密码" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">确认密码：</label>
                    <input type="password" placeholder="请确认密码" class="form-control">
                </div>
                <div class="form-group">
                    <button type="button" class="btn">注册</button>
                </div>
            </form>
            <form v-else class="log-box">
                <div class="form-group">
                    <label for="">账号：</label>
                    <input type="text" placeholder="请输入账号" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">密码：</label>
                    <input type="password" placeholder="请输入密码" class="form-control">
                </div>
                <div class="form-group">
                    <button type="button" class="btn">登录</button>
                </div>
            </form>
            
        </div>
    </div>
</template>

<script src="./scripts/me.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "./styles/me.less";

</style>

