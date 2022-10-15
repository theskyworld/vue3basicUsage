import { Agent } from 'http'
import { userInfo } from 'os'
import { resolve } from 'path'
import {defineStore} from 'pinia'
import stateVue from '../components/grammar/transition/state.vue'
import {Names} from './storeName'


interface State{
    curNum:number,
    name:string,
}
type User = {
    name:string,
    age:number
}
const login = ():Promise<User> =>{
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve({
                name:"Alice123",
                age:13,
            })       
        }, 2000);
    })
}
export const useTestStore = defineStore(Names.TEST,{
    state:():State=>{
        return{
            user:<User>{},
            curNum:1,
            name:'Alice',
        }
    },
    // 类似于computed，有缓存
    getters:{
        getName():string{
            return `***-${this.name}`
        },
        getCurNum():number{
            return this.curNum
        }

    },
    //类似于methods 可以做同步、异步任务，提交state
    actions:{
        setCurNum(num:number){
            this.curNum = num;  
        },
        // 异步任务
        async setUser(){
            const res = await login();
            this.user = res;
            this.setName('Alice456');
        },
        // 同步任务
        setName(name:string){
            this.name = name;
        }
    }
})