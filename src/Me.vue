<template>
    <div class="me">
        <!-- 已登录界面 -->
        <div v-if="loged" class="loged-box">
            <div class="user-box me-header loged">
                <div class="pic-box"></div>
                <p class="nickname">{{nickname}}</p>  
            </div>
            <div class="me-main">
                <ul>
                    <li v-for="(item,index) in mainList" :key="item.id"  @click="showDetailPage(index)">
                        <span>{{item}}</span>
                        <i></i>
                    </li>
                </ul>  
                <form>
                    <button type="button" class="btn" @click="checkoutLoged">退出登录</button>    
                </form>  
            </div> 
        </div>
        <!-- 登录注册界面 -->
        <div v-else class="not-loged-box">
            <div class="user-box me-header notLoged">
                <div class="pic-box">您还未登录>.< </div>
                <span class="register" :class="{pageActive: showReg}" @click="showRegPage">注册</span>&nbsp;&nbsp;
                <span class="to-log" :class="{pageActive: showLog}" @click="showLogPage">登录</span>
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
        <!-- 个人资料页面 -->
        <form class="personal detail-page" :class="{showPage: personal.showPer}">
            <div class="per-title">
                <span class="back-me" @click="perBackMe"><</span>
                <span>个人资料</span>
            </div>
            <div class="per-main">
                <div class="form-group">
                    <label>昵称</label>
                    <input class="form-control" type="text" placeholder="请输入昵称" v-model="nickname" required>
                </div>
            </div>
            <div class="per-main">
                <div class="form-group">
                    <label>E-mail</label>
                    <input class="form-control" type="email" placeholder="请输入邮箱" v-model="personal.email" required>
                </div>
            </div>
            <div class="per-main">
                <div class="sexy">
                    <label>性别</label>
                    <input class="sexy-input sexy-input-fir" type="radio" value="male" v-model="personal.gender">男
                    <input class="sexy-input" type="radio" value="female" v-model="personal.gender">女
                    <input class="sexy-input" type="radio" value="secret" v-model="personal.gender">保密
                </div>
            </div>
            <div class="per-main">
                <div class="form-group">
                    <label>身份证号</label>
                    <input class="form-control" type="number" required placeholder="请输入身份证号" v-model="personal.identity">
                </div>
            </div>
            <div class="per-main">
                <div class="form-group">
                    <label>生日</label>
                    <input class="form-control" type="datetime-local" placeholder="请选择您的生日" v-model="personal.birth">
                </div>
            </div>
            <div class="per-main">
                <div class="form-group per-describle">
                    <label>个人描述</label>
                    <textarea name="" id="" cols="30" rows="5" v-model="personal.describle"></textarea>
                </div>
            </div>
            <div>
                <button type="button" class="btn" @click="perRevise">确认修改</button>
            </div>
        </form>
        <!-- 收货地址管理 -->
        <form class="address detail-page" :class="{showPage: address.showAdd}">
            <div class="per-title">
                <span class="back-me" @click="addBackMe"><</span>
                <span>收货地址</span>
            </div>
            <div class="per-main">
                <div class="form-group">
                    <label>姓名</label>
                    <input class="form-control" type="text" placeholder="请填写您的真实姓名" v-model="address.name">
                </div>
            </div>
            <div class="per-main">
                <div class="form-group">
                    <label>电话</label>
                    <input class="form-control" type="number" placeholder="请填写您的手机号码" v-model="address.tel">
                </div>
            </div>
            <div class="per-main">
                <div class="form-group">
                    <label>邮政编码</label>
                    <input class="form-control" type="number" placeholder="请填写您所在地区的邮政编码" v-model="address.postalCode">
                </div>
            </div>
            <div class="per-main">
                <div class="form-group">
                    <label>所在城市</label>
                    <div class="diyInput">
                        <select v-model="address.province">
                            <option>四川省</option>
                            <option>湖南省</option>
                            <option>湖北省</option>
                        </select>
                        <select v-model="address.city">
                            <option>成都市</option>
                            <option>长沙市</option>
                            <option>武汉市</option>
                        </select>
                        <select v-model="address.country">
                            <option selected>锦江区</option>
                            <option>宁乡县</option>
                            <option>江汉区</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="per-main">
                <div class="form-group">
                    <label>详细地址</label>
                    <input class="form-control" type="text" placeholder="请填写详细的街道、楼栋、门牌号" v-model="address.detPosition">
                </div>
            </div>
            <div>
                <button type="button" class="btn" @click="addRevise">保存</button>
            </div>
        </form>
        <!-- 个人订单页面 -->
        <form class="order detail-page" :class="{showPage: order.showOrder}">
            <div class="per-title">
                <span class="back-me" @click="orderBackMe"><</span>
                <span>个人订单</span>
            </div>
        </form>
        <!-- 我的评价 -->
        <form class="order detail-page" :class="{showPage: judge.showJudge}">
            <div class="per-title">
                <span class="back-me" @click="judgeBackMe"><</span>
                <span>我的评价</span>
            </div>
        </form>
        <!-- 商品收藏 -->
        <form class="order detail-page" :class="{showPage: goods.showGoods}">
            <div class="per-title">
                <span class="back-me" @click="goodsBackMe"><</span>
                <span>商品收藏</span>
            </div>
        </form>
        <!-- 店铺收藏 -->
        <form class="order detail-page" :class="{showPage: shop.showShop}">
            <div class="per-title">
                <span class="back-me" @click="shopBackMe"><</span>
                <span>店铺收藏</span>
            </div>
        </form>
        <!-- 浏览记录 -->
        <form class="order detail-page" :class="{showPage: history.showHistory}">
            <div class="per-title">
                <span class="back-me" @click="historyBackMe"><</span>
                <span>浏览记录</span>
            </div>
        </form>
    </div>
</template>

<script src="./scripts/me.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "./styles/me.less";

</style>

