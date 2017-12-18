// 导入顶部标题组件
import HeaderBlock from "../components/HeaderBlock"

export default{
    name: "Cart",
    components: {
        HeaderBlock
    },
    data() {
        return{
            // 是否处于编辑状态，默认为true
            eddit: true,
            // 图书信息列表
            cartBookList: [],
        }
    },
    // 显示加入了购物车的书
    created() {
        this.getLocalBookList();
    },
    // // 图书信息列表的样式处理
    // mounted() {
    //     if(this.cartBookList.length === 2){
    //         $(".cart-book-list").first().css("borderBottom","none");
    //     }else if(this.cartBookList.length > 2){
    //         $(".cart-book-list").first().css("borderBottom","none");
    //         $(".cart-book-list").last().css("borderTop","none");
    //     }
    // },
    methods: {
        // 从本地存储获取到用户已经点击加入过购物车的书本
        getLocalBookList() {
            if(!localStorage.book){
                return;
            }else{
                // 从本地取出书的数组
                let localBookArr = JSON.parse(localStorage.book),
                    localBookArr_len = localBookArr.length;
                for(let i = 0;i < localBookArr_len;i++){
                    localBookArr[i].notSelect =  false;
                    localBookArr[i].select =  false;
                    localBookArr[i].moveBookBox =  false;
                    localBookArr[i].showCount =  true;
                    localBookArr[i].cartBookImg =  localBookArr[i].img;
                    localBookArr[i].cartBookName =  localBookArr[i].name;
                    localBookArr[i].cartBookAuthor =  localBookArr[i].author;
                    localBookArr[i].cartBookName =  localBookArr[i].name;
                    localBookArr[i].cartBookPrice =  localBookArr[i].price;
                    localBookArr[i].noMin =  false;
                    localBookArr[i].noAdd =  false;
                }
                this.cartBookList = localBookArr;
            }
        },
        // 点击编辑
        edditBtn() {
            // 展示取消和删除按钮 
            this.eddit = false;
            // 展示勾选框、移动图书信息、隐藏计数框
            let cartBookList_len = this.cartBookList.length;
            for(let i = 0;i < cartBookList_len;i++){
                this.cartBookList[i].select = false;
                this.cartBookList[i].notSelect = true;
                this.cartBookList[i].moveBookBox = true;
                this.cartBookList[i].showCount = false;
            }
        },
        // 点击取消
        cancleBtn() {
            this.eddit = true;
            // 隐藏勾选框、恢复图书信息、显示计数框
            let cartBookList_len = this.cartBookList.length;
            for(let i = 0;i < cartBookList_len;i++){
                this.cartBookList[i].select = false;
                this.cartBookList[i].notSelect = false;
                this.cartBookList[i].moveBookBox = false;
                this.cartBookList[i].showCount = true;
            }
        },
        // 点击删除
        deleteBtn() {
            // 如果当前还存在数据
            if(this.cartBookList){
                // 找出此时被选中的图书信息
                for(let i = 0;i < this.cartBookList.length;i++){
                    if(this.cartBookList[i].select === true){
                        // 删除本条数据
                        this.cartBookList.splice(i,1);
                        i--;
                    }
                }
            }  
        },
        // 点击不勾选书本
        showNotSelect(index) {
            this.cartBookList[index].select = false;
            this.cartBookList[index].notSelect = true;
        },
        // 点击勾选书本
        showSelect(index) {
            this.cartBookList[index].notSelect = false;
            this.cartBookList[index].select = true;
        },
        // 点击减少书本
        cartMin(idx) {
            if(this.cartBookList[idx].cartCount === 10) {
                this.cartBookList[idx].noAdd = false;
                this.cartBookList[idx].cartCount--;
            }else if(this.cartBookList[idx].cartCount > 1){
                this.cartBookList[idx].cartCount--;
                if(this.cartBookList[idx].cartCount <= 1){
                    this.cartBookList[idx].noMin = true;
                }
            }else{
                return;
            } 
        },
        // 点击增加书本
        cartAdd(idx) {
            if(this.cartBookList[idx].cartCount === 1){
                this.cartBookList[idx].noMin = false;
                this.cartBookList[idx].cartCount++;
            }else if(this.cartBookList[idx].cartCount < 10){
                this.cartBookList[idx].cartCount++;
                if(this.cartBookList[idx].cartCount >= 10){
                    this.cartBookList[idx].noAdd = true;
                }
            }else{
                return;
            }   
        },
    }
}

