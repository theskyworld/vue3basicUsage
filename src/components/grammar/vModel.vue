<script setup lang='ts'>
    // 自定义子组件中使用defineProps接收父组件中通过v-model传递的值
    let props = defineProps<{
        modelValue:boolean,
        textVal:string,
        // 接收自定义修饰符
        // textVal表示该自定义修饰符跟textVal绑定
        // Modifiers为固定写法
        textValModifiers?:{
            isRed:boolean
        }
    }>()
    // 使用emit修改父组件中通过v-model传递的数据
    const emit = defineEmits(['update:modelValue','update:textVal']);
    const close = ()=>{
        emit('update:modelValue',false);
    }
    const chamgeTextVal = (e:Event)=>{
        console.log(e);
        // 根据是否有自定义修饰符isRed修改textVal的值，如果有，值为(e.target as HTMLInputElement).value + 'with red color'，否则为(e.target as HTMLInputElement).value
        emit('update:textVal', props?.textValModifiers?.isRed ? (e.target as HTMLInputElement).value + 'with red color' : (e.target as HTMLInputElement).value)

    }
</script>
<template>
    <!-- 子组件 -->
    <div v-if="modelValue" class="model">
        <div class="close"><button @click="close">关闭</button></div>
        <h3>v-model子组件</h3>
        <p>v-model传递的数据:modelValue-{{modelValue}}</p>
        <p>v-model传递的数据:modelValue-{{textVal}}</p>
        <div>内容：<input @input="chamgeTextVal" :value="textVal" type="text"></div>
    </div>

</template>
<style scoped>
.model{
    width: 500px;
    border:solid 5px #ccc;
    padding: 10px;
    box-shadow: 3 3 0 0 #ccc;
}
</style>