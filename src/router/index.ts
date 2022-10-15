import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router";

const routes:Array<RouteRecordRaw> = [
    // {
    //     path:'/',
    //     //命名路由
    //     name:'Login',
    //     //动态引入组件
    //     component:()=> import('../components/grammar/router/login.vue'),
    // },
    // {
    //     path:'/register',
    //     //命名路由
    //     name:"Register",
    //     //动态引入组件
    //     component:()=> import('../components/grammar/router/register.vue'),
    // },

    // //路由传参
    // {
    //     path:'/',
    //     //命名路由
    //     name:'List',
    //     //动态引入组件
    //     component:()=> import('../components/grammar/router/params/list.vue'),
    // },
    // {
    //     //:id，动态路由传参，解决params传参时页面刷线数据会丢失的问题。传递数据的id，根据id找到对应的完整的数据
    //     path:'/detail/:id',
    //     //命名路由
    //     name:"Detail",
    //     //动态引入组件
    //     component:()=> import('../components/grammar/router/params/detail.vue'),
    // },

// //    嵌套路由
//     {
//         path:'/',
//         //命名路由
//         name:'List',
//         //动态引入组件
//         component:()=> import('../components/grammar/router/params/list.vue'),
//         children:[
//             {
//                 //:id，动态路由传参，解决params传参时页面刷线数据会丢失的问题。传递数据的id，根据id找到对应的完整的数据
//                 path:'/detail/:id',
//                 //命名路由
//                 name:"Detail",
//                 //动态引入组件
//                 component:()=> import('../components/grammar/router/params/detail.vue'),
//             },
//         ]
//     },


//    命名视图（router-view）
    {
        path:'/',
        // component:()=>import('../components/grammar/router/nameViews/index.vue'),
        //路由别名
        //访问以下任意一个路径都等价于访问'/'
        alias:['/root','/index','/root1'],
        //路由重定向
        //访问该路径会重定向至别的路径,访问别的路径下的组件
        // redirect:'/user1',
        // redirect:{
        //     path:'/user1',
        // },
        // redirect:to=>{
        //     console.log(to);
        //     return '/user1'
            // return {
            //     path:'/user1',
            //     query:{
            //         name:'Alice',
            //     }
            // }
        // },
        meta:{
            //定义一个transition
            transition:"animate__boundInRight"
        },
        children:[
            {
                path:"/user1",
                //一个路径定向至多个组件
                components:{
                    //默认展示的组件
                    default:()=>import('../components/grammar/router/nameViews/A.vue')
                },
                meta:{
                    //定义一个transition
                    transition:"animate__boundInRight"
                },
            },
            {
                path: '/user2',
                //一个路径定向至多个组件
                components: {
                    b: () => import('../components/grammar/router/nameViews/B.vue'),
                    c: () => import('../components/grammar/router/nameViews/C.vue')
                },
            }
        ]
    }

]
const router = createRouter({
    history:createWebHistory(),
    //路由滚动行为
    scrollBehavior:(to,from,savedPosition)=>{
        // if(savedPosition){
        //滚动到页面跳转前记录的位置
        //     return savedPosition
        // }else{
        //否则默认滚动到距顶部300的位置
        //     return{
        //         top:300,
        //     }
        // }
        //直接滚动到距顶部300的位置
        // return{
        //     top:300,
        // }
        //直接滚动到距顶部300的位置
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve({
                    top:300,
                })
            },3000)
        })

    },
    routes,
})
export default router