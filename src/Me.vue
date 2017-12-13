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
                    <button type="button" class="btn" @click="checkoutLoged">退出登录</button>    
                </form>  
            </div> 
        </div>
        <div v-else class="not-loged-box">
            <div class="user-box me-header notLoged">
                <div class="pic-box">您还未登录>.< </div>
                <span class="register" :class="{pageActive: showReg}" @click="showRegOrLog">注册</span>&nbsp;&nbsp;
                <span class="to-log" :class="{pageActive: showLog}" @click="showRegOrLog">登录</span>
            </div>
            <form v-if="showReg" class="reg-box">
                <div class="form-group">
                    <label for="">账号：</label>
                    <span v-if="isRegInputRight.actRight" class="input-write"></span>
                    <span v-else-if="isRegInputRight.actFalse" class="input-false"></span>
                    <span class="act-remind" v-else>{{regUserList.accountRemind}}</span>
                    <input type="tel" placeholder="请输入手机号" class="form-control" v-model="regUserList.account" @blur="regBlur">  
                </div>
                <div class="form-group">
                    <label for="">昵称：</label>
                    <span v-if="isRegInputRight.nicRight" class="input-write"></span>
                    <span v-else></span>
                    <input type="text" placeholder="请输入昵称" class="form-control" v-model="regUserList.nickname" @blur="regBlur">
                </div>
                <div class="form-group">
                    <label for="">密码：</label>
                    <span v-if="isRegInputRight.pswRight" class="input-write"></span>
                    <span v-else-if="isRegInputRight.pswFalse" class="input-false"></span>
                    <span v-else></span>
                    <input type="password" placeholder="请输入6-18位密码" minlength="6" maxlength="18" class="form-control" v-model="regUserList.password" @blur="regBlur">
                </div>
                <div class="form-group">
                    <label for="">确认密码：</label>
                    <span v-if="isRegInputRight.surePswRight" class="input-write"></span>
                    <span v-else-if="isRegInputRight.surePswFalse" class="input-false"></span>
                    <span v-else></span>
                    <input type="password" placeholder="请确认密码" class="form-control" v-model="regUserList.surePsw" @blur="regBlur">
                </div>
                <div class="form-group">
                    <button type="button" :disabled="btnDisabled" class="btn" @click="toRegister">注册</button>
                </div>
            </form>
            <form v-else class="log-box">
                <div class="form-group">
                    <label for="">账号：</label>
                    <span v-if="isLogInputRight.actRight" class="input-write"></span>
                    <span v-else-if="isLogInputRight.actFalse" class="input-false"></span>
                    <span class="act-remind" v-else>{{logUserList.accountRemind}}</span>
                    <input type="tel" placeholder="请输入账号" class="form-control" v-model="logUserList.account" @blur="logActBlur">
                </div>
                <div class="form-group">
                    <label for="">密码：</label>
                    <span v-if="isLogInputRight.pswRight" class="input-write"></span>
                    <span v-else-if="isLogInputRight.pswFalse" class="input-false"></span>
                    <span v-else></span>
                    <input type="password" placeholder="请输入密码" minlength="6" maxlength="18" class="form-control" v-model="logUserList.password" @blur="logPswBlur">
                </div>
                <div class="form-group">
                    <button type="button" class="btn" @click="toLogin">登录</button>
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

