export default{
    name: "Me",
    data() {
        return{
            // 初始化登录状态
            loged: loginStatus,
            // 初始化用户名显示
            nickname: showNickname,
            // 登录后页面显示主要内容
            mainList: ["设置个人资料","收货地址管理","我的订单","我的评价","商品收藏","店铺收藏","浏览记录"],
            // 默认显示注册界面
            showReg: false,
            // 默认不显示登录界面
            showLog: true,
            // 默认禁用注册按钮
            btnDisabled: true,
            // 注册用户信息列表
            regUserList: {
                account: '',
                accountRemind: '',
                nickname: '',
                password: '',
                surePsw: ''
            },
            // 登录用户信息列表
            logUserList: {
                account: '',
                accountRemind: '',
                password: '',
                // 本次账号输入正确时对应的本地存储中的昵称
                nickname: '',
                // 本次账号输入正确时对应的本地存储中的密码
                thisPsw: ''
            },
            // 注册用户信息输入正确或者错误提示列表
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
            // 登录用户信息输入正确或者错误提示列表
            isLogInputRight: {
                // 账号输入正确状态
                actRight: '',
                // 账号输入错误状态
                actFalse: '',
                // 密码输入正确状态
                pswRight: '',
                // 密码输入错误状态
                pswFalse: ''
            }
        }
    },
    methods: {
        // 1.显示登录或者注册界面
        showRegOrLog() {
            this.showReg = !this.showReg;   
            this.showLog = !this.showLog;   
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
            loginStatus = true;
            this.loged = loginStatus;
            // 显示昵称
            showNickname = this.regUserList.nickname;
            this.nickname = showNickname;
            // 清空本次输入的信息
            this.regUserList.account = '';
            this.regUserList.nickname = '';
            this.regUserList.password = '';
            this.regUserList.account = '';
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
                loginStatus = true;
                this.loged = loginStatus;
                //显示昵称
                showNickname = this.logUserList.nickname;
                this.nickname = showNickname;
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
            loginStatus = false;
            this.loged = loginStatus;
            // 清空昵称
            showNickname = '';
            this.nickname = showNickname;
        }
    }
    
}

