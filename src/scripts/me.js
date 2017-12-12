// 导入子组件



export default{
    name: "Me",
    components: {
        
    },
    data() {
        return{
            loged: false,
            nickname: "punk1ee",
            mainList: ["设置个人资料","收货地址管理","我的订单","我的评价","商品收藏","店铺收藏","浏览记录"],
            showReg: true,
            showLog: false
        }
    },
    computed: {

    },
    methods: {
        showRegOrLog() {
            this.showReg = !this.showReg;   
            this.showLog = !this.showLog;   
        }
    }
}

