<script setup lang='ts'>
    
</script>
<template>
    <div id="content">
        <div id="content-items" v-for="item in 100" :key="item">
            {{item}}
            <Card :content='`我是第${item}个`'></Card>
        </div>
    </div>
</template>
<style scoped lang="less">
#content{
    flex:1;
    border:solid 1px #ccc;
    overflow: auto;
    &-items{
        padding: 20px;
        border:solid 1px #ccc;
    }
}
</style>