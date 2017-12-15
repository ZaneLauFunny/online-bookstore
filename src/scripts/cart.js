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
            cartBookList: [
                {   
                    // 是否显示不被选中勾选框
                    notSelect: false,
                    // 是否显示被选中勾选框
                    select: false,
                    // 是否移动图书信息
                    moveBookBox: false,
                    // 是否隐藏计数框
                    showCount: true,
                    cartBookName: "这是什么书？",
                    cartBookAuthor: "谁是作者？",
                    cartBookPrice: 91.00,
                    cartCount: 2,
                    noMin: false,
                    noAdd: false,
                   
                },
                {   
                    // 是否显示不被选中勾选框
                    notSelect: false,
                    // 是否显示被选中勾选框
                    select: false,
                    // 移动图书信息
                    moveBookBox: false,
                    // 是否隐藏计数框
                    showCount: true,
                    cartBookName: "这是什么书？",
                    cartBookAuthor: "谁是作者？",
                    cartBookPrice: 29.00,
                    cartCount: 10,
                    noMin: false,
                    noAdd: false,
                },
                {   
                    // 是否显示不被选中勾选框
                    notSelect: false,
                    // 是否显示被选中勾选框
                    select: false,
                    // 移动图书信息
                    moveBookBox: false,
                    // 是否隐藏计数框
                    showCount: true,
                    cartBookName: "这是什么书？",
                    cartBookAuthor: "谁是作者？",
                    cartBookPrice: 99.00,
                    cartCount: 10,
                    noMin: false,
                    noAdd: false,
                }
            ],
             
            
        }
    },
    // watch: {
    //     cartBookList(){
    //         let cartBookList_leb = cartBookList.length;
    //         for(let i = 0;i < cartBookList_leb;i++){
    //             cartAdd(i);
    //             cartMin(i);
    //         }
    //     }
    // },
    // computed: {
    //     // 图书列表中每种书的本数
    //     bookJsonObj() {
    //         let bookNumArr = [];
    //         let cartBookList_leb = cartBookList.length;
    //         for(let i = 0;i < cartBookList_leb;i++){
    //             bookNumArr.push(cartBookList[i].cartCount);
    //             return bookNumArr;
    //             console.log(bookNumArr);
    //         }
    //     }
    // },
    methods: {
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

