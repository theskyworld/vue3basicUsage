<script setup lang='ts'>
    type Props = {
        content?:string,
    }
    defineProps<Props>();
</script>
<template>
    <div id="card">
        <div id="card-header">
            <div>主标题</div>
            <div>副标题</div>
        </div>
        <div id="card-content">
            {{content}}
        </div>
    </div>

</template>
<style scoped lang="less">
    @border:#ccc;
    #card{
        border:solid 1px @border;
        &:hover{
            cursor: pointer;
            box-shadow: 0 0 10px @border;
        }
        &-header{
            display:flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: solid 1px @border;

        }
        &-content{
            padding: 10px;
        }
    }

</style>