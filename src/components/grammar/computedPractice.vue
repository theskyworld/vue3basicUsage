<script setup lang='ts'>
    import {reactive,ref,computed} from 'vue'
    import {nanoid} from 'nanoid'
    // computed()的使用
    // 定义Shop的类型注解
    type Shop = {
        id:string,
        name:string,
        num:number,
        price:number
    }
    // 所有商品的数据，一个数组，使用Shop进行类型注解
    const data = reactive<Shop[]>([
        {
            id:nanoid(),
            name:'毛巾',
            num:3,
            price:9.9
        },
        {   
            id:nanoid(),
            name:'杯子',
            num:4,
            price:19.9
        },
        {
            id:nanoid(),
            name:'牙刷',
            num:3,
            price:21.1
        }

    ])
    const addAndSub = (item:Shop,type:boolean):void=>{
        if(item.num > 1 && !type){
            item.num--
        }
        if(item.num < 99 && type){
            item.num++
        }
    }
    const deleteItem = (index:number)=>{
        data.splice(index,1);
    }
    let totalPrice = ref(computed<number>(()=>{
        return data.reduce((prev,cur)=>{
            let res = (prev + cur.num * cur.price)
            // console.log('totalPrice:',)
            return res;
        },0)
    }))
    let totalNum = ref(computed(()=>{
        return data.reduce((prev,cur)=>{
            return prev + cur.num;
        },0)
    }))
</script>
<template>
    <div>
        <table border style="width:800px">
            <thead>
                <tr>
                    <th>名称</th>
                    <th>数量</th>
                    <th>金额</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item,index in data" :key="item.id">
                    <th>{{item.name}}</th>
                    <th><button @click="addAndSub(item,false)">-</button>{{item.num}}<button @click="addAndSub(item,true)">+</button></th>
                    <th>{{(item.num * item.price).toFixed(2)}}</th>
                    <th><button @click="deleteItem(index)">删除</button></th>
                </tr>
                <tr>
                    <th></th>
                    <th>总数量:{{totalNum}}</th>
                    <th>总价:{{totalPrice.toFixed(2)}}</th>
                    <th><button>支付</button></th>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<style scoped>

</style>