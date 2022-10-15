//定义一个pinia持久化插件
import {toRaw} from 'vue'
import {PiniaPluginContext} from 'pinia'

// 如果调用时没传入key时的初始key
const __piniaKey:string = 'initial';
type Options = {
    key?:string,
}
// 存储数据在本地
const setStorage = (key:string,value:any):void =>{
    localStorage.setItem(key,JSON.stringify(value));
}
// 读取本地数据
const getStorage = (key:string) =>{
    // 有的话就返回相应字符串值返回对象后的结果，没有的话返回一个空对象
    return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {})
}

export const piniaPlugin = (options:Options) =>{
    return (context:PiniaPluginContext) =>{
        const {store} = context;
        // console.log(store)
        const data = getStorage(`${options?.key ?? __piniaKey}-${store.$id}`)
        store.$subscribe(()=>{
            setStorage(`${options?.key ?? __piniaKey}-${store.$id}`,toRaw(store.$state));
        })
        return {
            ...data
        }
    }
}