import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './components/grammar/ref.vue'
import Card from './components/grammar/cases/Card.vue'
import mitt from 'mitt'
import loading from './components/grammar/plugins/loading'
import '@/assets/index.css'
import {createPinia} from 'pinia'
// @ts-ignore
import {piniaPlugin} from '@/plugins/piniaPlugin'
import router from './router/index'

// 全局使用mitt
const Mit = mitt()
const app = createApp(App);
// console.log(app);


app.use(router)
// 定义全局属性
// $Bus类型声明
declare module 'vue'{
    export interface ComponentCustomProperties{
        // typeof Mit获取Mit下所有的类型
        $Bus:typeof Mit
    }
}
// 自定义一个全局的过滤器
type Filter = {
    format : <T>(str: T) => string,
}

// 扩充@vue/runtime-core包的声明，扩充ComponentCustomProperties接口
declare module '@vue/runtime-core'{
    export interface ComponentCustomProperties{
        $filters:Filter,
        $env:string,
    }
}
// 自定义全局Bus
app.config.globalProperties.$Bus = Mit
// 自定义全局过滤器，全局函数
app.config.globalProperties.$filters = {
    format<T>(str:T):string{
        // 在str前面添加'过滤器'
        return `过滤器·${str}`
    }
}
// 自定义全局属性
app.config.globalProperties.$env = '全局属性,env'

const store = createPinia();
app.use(store);
// 使用piniaPlugin插件
store.use(piniaPlugin({
    key:'pinia',
}));

app.use(ElementPlus)

// 全局使用loading
type Loading = {
    show:()=>void,
    hide:()=>void,
}
declare module '@vue/runtime-core'{
    export interface ComponentCustomProperties{
        $loading:Loading,
    }
}
app.use(loading);
app.component('Card',Card);
console.log(app.mount('#app'));




