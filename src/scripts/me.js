export default{
    name: "Me",
    data() {
        return{
            // 1.初始化登录状态
            loged: false,
            // 2.初始化用户名显示
            nickname: '',
            // 3.登录后页面显示主要内容
            mainList: ["设置个人资料","收货地址管理","我的订单","我的评价","商品收藏","店铺收藏","浏览记录"],
            // 4.默认不显示注册界面
            showReg: false,
            // 5.默认显示登录界面
            showLog: true,
            // 6.默认禁用注册按钮
            btnDisabled: true,
            // 7.注册用户信息列表
            regUserList: {
                account: '',
                accountRemind: '',
                nickname: '',
                password: '',
                surePsw: ''
            },
            // 8.登录用户信息列表
            logUserList: {
                account: '',
                accountRemind: '',
                password: '',
                // 本次账号输入正确时对应的本地存储中的昵称
                nickname: '',
                // 本次账号输入正确时对应的本地存储中的密码
                thisPsw: ''
            },
            // 9.注册用户信息输入正确或者错误提示列表
            isRegInputRight: {
                // 账号输入正确状态
                actRight: '',
                // 账号输入错误状态
                actFalse: '',
                // 昵称输入正确状态
                nicRight: '',
                // 密码输入正确状态
                pswRight: '',
                // 密码输入错误状态
                pswFalse: '',
                // 确认密码输入正确状态
                surePswRight: '',
                // 确认密码输入错误状态
                surePswFalse: '',
            },
            // 10.登录用户信息输入正确或者错误提示列表
            isLogInputRight: {
                // 账号输入正确状态
                actRight: '',
                // 账号输入错误状态
                actFalse: '',
                // 密码输入正确状态
                pswRight: '',
                // 密码输入错误状态
                pswFalse: ''
            },
            // 11.个人资料页面
            personal: {
                // 默认不显示个人资料页面
                showPer: false,
                // email默认显示
                email: '',
                // 性别默认显示
                gender: "secret",
                // 身份证默认显示
                identity: null,
                // 生日默认显示
                birth: null,
                // 个人描述
                describle: ''
            },
            // 12.收货地址页面
            address: {
                showAdd: false,
                name: '',
                tel: null,
                postalCode: null,
                province: "四川省",
                city: "成都市",
                country: "锦江区",
                detPosition: ''
            },
            // 13.个人订单页面
            order: {
                showOrder: false,
            },
            // 14.我的评价页面
            judge: {
                showJudge: false,
            },
            // 15.商品收藏页面
            goods: {
                showGoods: false,
            },
            // 16.我的评价页面
            shop: {
                showShop: false,
            },
            // 17.我的评价页面
            history: {
                showHistory: false,
            }
        }
    },
    // created钩子函数创建的时候data已经被挂载了，所以在刷新页面的时候可以通过这个函数来加载登录状态和用户名
    created: function(){
        if(sessionStorage.users){
            this.loged = true;
            this.nickname = sessionStorage.users.substr(1,sessionStorage.users.length - 2);
        }
    },
    methods: {
        // 1.显示登录和注册界面
        showRegPage() {
            if(this.showReg){
                return;
            }else{
                this.showReg = true;
                this.showLog = false;
            }   
        },
        showLogPage() {  
            if(this.showLog){
                return;
            }else{
                this.showLog = true;
                this.showReg = false;
            }   
        },

        // 2.注册页面表单输入框失去焦点事件
        regBlur() {
            // 账号失去焦点事件
            // 去掉账号两端的空格
            const ActVal = this.regUserList.account.trim();
            const phoneReg = /^(13|15|17|18)\d{1}(\-|\s)?\d{4}(\-|\s)?\d{4}$/;
            // 输入框的值为空的时候
            if(ActVal === ''){
                this.isRegInputRight.actFalse = false;
                this.isRegInputRight.actRight = false;
            }
            else {
                // 如果本地没有存储的账号信息
                if(!localStorage.users){
                    // 匹配错误
                    if(!phoneReg.test(ActVal)){
                        this.isRegInputRight.actFalse = true;
                        this.isRegInputRight.actRight = false;
                    }
                    // 匹配正确
                    else{
                        this.isRegInputRight.actRight = true;
                        this.isRegInputRight.actFalse = false;
                    } 
                }
                // 如果本地有存储的账号信息
                else{
                    // 匹配错误
                    if(!phoneReg.test(ActVal)){
                        this.isRegInputRight.actFalse = true;
                        this.isRegInputRight.actRight = false;
                    }
                    // 匹配正确
                    else{
                        // 从本地取出账号信息
                        let usersList = JSON.parse(localStorage.users),
                            usersList_len = usersList.length;
                        // 判断本地存储是否存在此账号
                        for(let i = 0;i < usersList_len;i++){
                            if(usersList[i].account === this.regUserList.account){
                                this.isRegInputRight.actRight = false;
                                this.isRegInputRight.actFalse = false;
                                this.regUserList.accountRemind = "账号已存在！";
                                return;
                            }else{
                                this.isRegInputRight.actRight = true;
                                this.isRegInputRight.actFalse = false;
                            }
                        }
                    }  
                }
                
            }

            // 昵称失去焦点事件
            // 输入框的值为空的时候
            if(this.regUserList.nickname === '') {
                this.isRegInputRight.nicRight = false;
            }else{
                this.isRegInputRight.nicRight = true;
            }

            // 密码失去焦点事件
            // 输入框为空的时候
            if(this.regUserList.password === ''){
                this.isRegInputRight.pswRight = false;
                this.isRegInputRight.pswFalse = false;
            }else{
                if(this.regUserList.password.length < 6){
                    this.isRegInputRight.pswRight = false;
                    this.isRegInputRight.pswFalse = true;
                }else{
                    this.isRegInputRight.pswRight = true;
                    this.isRegInputRight.pswFalse = false;
                }
            }

            // 确认密码失去焦点事件
            // 确认密码输入框为空的时候
            if(this.regUserList.surePsw === ''){
                this.isRegInputRight.surePswRight = false;
                this.isRegInputRight.surePswFalse = false;
            }else{
                // 当密码框还没输入的时候
                if(this.regUserList.password === ''){
                    this.isRegInputRight.surePswRight = false;
                    this.isRegInputRight.surePswFalse = false;
                }else{
                    // 当输入的内容不等于密码框的内容的时候
                    if(this.regUserList.surePsw !== this.regUserList.password){
                        this.isRegInputRight.surePswRight = false;
                        this.isRegInputRight.surePswFalse = true;
                    }else{
                        this.isRegInputRight.surePswRight = true;
                        this.isRegInputRight.surePswFalse = false;
                    }
                }   
            }

            // 解除注册按钮的禁用状态
            if(this.isRegInputRight.actRight && this.isRegInputRight.nicRight && this.isRegInputRight.pswRight && this.isRegInputRight.surePswRight){
                this.btnDisabled = false;
            }else{
                this.btnDisabled = true;
            }
        },
    
        // 3.点击注册处理事件
        toRegister() {
            // 1.本地存储
            // 判断本地是否已经存在有用户信息了
            var userInfo = null;
            if(!localStorage.users){
                userInfo = []; 
            }else{
                userInfo = JSON.parse(localStorage.users);
            }
            // 保存此时的用户信息
            var thisInfo = {}; 
            thisInfo.account = this.regUserList.account;
            thisInfo.nickname = this.regUserList.nickname;
            thisInfo.password = this.regUserList.password;
            //push本次输入的值 
            userInfo.push(this.regUserList)
            // 本地存储此次注册的用户信息
            localStorage.users = JSON.stringify(userInfo);

            // 2.会话存储本次登录的用户昵称
            sessionStorage.users = JSON.stringify(this.regUserList.nickname);
            // 显示已登录
            this.loged = true; 
            //显示昵称
            this.nickname = this.regUserList.nickname;
            // 清空本次输入的信息
            this.regUserList.accountRemind = '',
            this.regUserList.account = '';
            this.regUserList.nickname = '';
            this.regUserList.password = '';
            this.regUserList.surePsw = '';
            // 清空本次的验证提示
            this.isRegInputRight.actRight = false;
            this.isRegInputRight.nicRight = false;
            this.isRegInputRight.pswRight = false;
            this.isRegInputRight.surePswRight = false;
        },

        // 4.登录页面账号框失去焦点验证
        logActBlur() {
            // 判断是否输入
            if(this.logUserList.account === ''){
                this.isLogInputRight.actRight = false;
                this.isLogInputRight.actFalse = false;
            }else{
                // 判断本地是否存在有账号信息
                if(!localStorage.users){
                    this.isLogInputRight.actRight = false;
                    this.isLogInputRight.actFalse = false;
                    this.logUserList.accountRemind = "账号不存在！"
                }else{
                    // 从本地取出账号信息
                    let usersList = JSON.parse(localStorage.users),
                        usersList_len = usersList.length;
                    // 判断本次输入的账号是否存在
                    for(let i = 0;i < usersList_len;i++){
                        // 如果存在
                        if(this.logUserList.account === usersList[i].account){
                            this.isLogInputRight.actRight = true;
                            this.isLogInputRight.actFalse = false;
                            // 将本次对应的用户信息的密码取出来
                            this.logUserList.thisPsw = usersList[i].password;
                            // 将本次对应的用户信息的昵称取出来
                            this.logUserList.nickname = usersList[i].nickname;
                            return;
                        }else{
                            this.isLogInputRight.actRight = false;
                            this.isLogInputRight.actFalse = true;
                        }
                    }
                } 
            }
        },

        // 5.登录界面密码框失去焦点验证
        logPswBlur(){
            // 密码框失去焦点验证
            // 判断是否输入
            if(this.logUserList.password === ''){
                this.isLogInputRight.pswRight = false;
                this.isLogInputRight.pswFalse = false;
            }else{
                // 判断本地是否存在有账号信息
                if(!localStorage.users){
                    return;
                }else{
                    // 从本地取出账号信息
                    let usersList = JSON.parse(localStorage.users),
                    usersList_len = usersList.length;
                    // 判断本次输入的密码是否正确
                    if(this.logUserList.thisPsw === this.logUserList.password){
                        this.isLogInputRight.pswRight = true;
                        this.isLogInputRight.pswFalse = false;
                    }else{
                        this.isLogInputRight.pswRight = false;
                        this.isLogInputRight.pswFalse = true;
                    }
                }
            }
        },

        //6. 点击登录事件
        toLogin() {
            if(this.isLogInputRight.actRight && this.isLogInputRight.pswRight){
                // 会话存储本次登录的用户昵称
                sessionStorage.users = JSON.stringify(this.logUserList.nickname);
                // 显示已登录
                this.loged = true; 
                //显示昵称
                this.nickname = this.logUserList.nickname;
                // 清空本次输入的信息
                this.logUserList.account = '';
                this.logUserList.password = '';
                // 清空本次的验证提示
                this.isLogInputRight.actRight = false;
                this.isLogInputRight.pswRight = false;
            }
        },

        // 7.点击退出登录事件
        checkoutLoged() {
            // 清空会话存储中的信息
            sessionStorage.clear();
            //显示未登录状态
            this.loged = false;
            // 清空昵称
            this.nickname = '';
            // 不显示注册界面
            this.showReg = false;
            // 显示到登录界面
            this.showLog = true;
        },

        // 8.点击展示详情页面
        showDetailPage(index) {
            switch(index) {
                case 0: 
                    // // 从本地取出上次保存的个人资料
                    if(!localStorage.personal) {
                        // // 显示个人资料页面
                        this.personal.showPer = true;
                    }else{
                        // 让本地存储的上次保存的个人资料显示在视图中
                        this.personal = JSON.parse(localStorage.personal);
                        this.personal.showPer = true;
                    }
                    break;
                case 1: 
                    // 从本地取出上次保存的收货地址信息
                    if(!localStorage.address) {
                        // 显示收货地址页面
                        this.address.showAdd = true;
                    }else{
                        // 让本地存储的上次保存的个人资料显示在视图中
                        this.address = JSON.parse(localStorage.address);
                        this.address.showAdd = true;
                    }
                    break;
                case 2: 
                    this.order.showOrder = true;
                    break;
                case 3: 
                    this.judge.showJudge = true;
                    break;
                case 4: 
                    this.goods.showGoods = true;
                    break;
                case 5: 
                    this.shop.showShop = true;
                    break;
                case 6: 
                    this.history.showHistory = true;
                    break;
            }
        },

        // 9.个人资料页面点击返回个人中心事件
        perBackMe() {
            // 如果本地不存在上一次保存的数据
            if(!localStorage.personal){
                this.personal.email = '';
                this.personal.gender = "secret";
                this.personal.identity = '';
                this.personal.birth = '';
                this.personal.describle = '';
                this.personal.showPer = false;

            }else{
                this.personal = JSON.parse(localStorage.personal);
                this.personal.showPer = false;
            }
        },

        // 10.个人资料页面点击保存事件
        perRevise() {
            // 本地存储本次输入的信息
            localStorage.personal = JSON.stringify(this.personal);
            // 返回个人中心页面
            this.personal.showPer = false;
        },

        // 11.收货地址页面点击返回个人中心事件
        addBackMe() {
            if(!localStorage.address){
                this.address.name = '';
                this.address.tel = '';
                this.address.postalCode = '';
                this.address.province = "四川省";
                this.address.city = "成都市";
                this.address.country = "锦江区";
                this.address.detPosition = '';
                this.address.showAdd = false;
            }else{
                this.address = JSON.parse(localStorage.address);
                this.address.showAdd = false;
            }
        },

        // 12.收货地址页面点击保存事件
        addRevise() {
            // 本地存储本次输入的信息
            localStorage.address = JSON.stringify(this.address);
            // 返回个人中心页面
            this.address.showAdd = false;
        },

        // 13.个人订单页面点击返回个人中心事件
        orderBackMe() {
            this.order.showOrder = false;
        },

        // 14.我的评价页面点击返回个人中心事件
        judgeBackMe() {
            this.judge.showJudge = false;
        },

        // 15.商品收藏页面点击返回个人中心事件
        goodsBackMe() {
            this.goods.showGoods = false;
        },

        // 16.店铺收藏页面点击返回个人中心事件
        shopBackMe() {
            this.shop.showShop = false;
        },

        // 17.个人订单页面点击返回个人中心事件
        historyBackMe() {
            this.history.showHistory = false;
        }
    }
}

