<script setup lang='ts'>
    import {axios} from './server'

    //请求public目录下data.json文件中的数据
    const list = await axios('./data.json');
    console.log(list);
    
</script>
<template>
    <div>
        <ul v-for="item,index in list" :key="index">
            <li>{{item.name}}</li>
        </ul>
    </div>
</template>
<style scoped>

</style>