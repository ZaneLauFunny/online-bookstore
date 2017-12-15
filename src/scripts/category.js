// 导入子组件
import CategoryBooks from '@/components/CategoryBooks'


export default{
    name: "Category",
    components: {
        CategoryBooks
    },
    data(){
        return{
            booksList:[],
            matching: null,
            notFindMatch: false,
            
            // 是否处在搜索状态
            searching: false
        }
    },
    computed:{
        bookFilter() {
           // 如果输入值为空的时候
           if(!this.matching) {
               // 设置搜索状态（这个状态在删除的时候会用到）
               this.searching = false;
               // 显示原有图书列表
               return this.booksList;
           }
           // 如果存在输入匹配的结果
           else if(this.matching.length) {
               // 清除“找不到匹配项”的容器
               this.notFindMatch = false;
               // 设置搜索状态
               this.searching = true;
               // 获得匹配项数组
               return this.matching;
           }
           // 如果找不到输入结果的匹配项
           else {
               // 找不到的状态为真
               this.notFindMatch = true;
               this.searching = true;
               return [];
           }
       },
    },
    methods:{
        //使用axios进行数据请求
        loadBookInfo(){
        axios.get('../static/data.json').then((res)=>{
            //如果请求成功，将booskList空数组替换为请求到的数组
            this.booksList=res.data;
            
        })
        },
        searchBook(val) {
           // 如果输入的值为空（去处字符串两端空格）
           if(val.trim() === "") {
               this.matching = this.booksList;
           }
           else {
               // 将满足条件的对象数组项返回为一个新的对象数组
               this.matching = this.booksList.filter((item) => {
                   // 将搜索框输入的值作为正则搜索条件
                   const matchReg = new RegExp(val, "ig");
                   // 匹配书名或作者名
                   
                   return matchReg.test(item.name) || matchReg.test(item.author);
               });
           }
       }
    },
    created(){
        this.loadBookInfo();
    }
   
}

