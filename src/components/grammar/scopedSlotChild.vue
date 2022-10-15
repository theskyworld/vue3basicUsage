<template>
<!--子组件-->
<!--  定义一个插槽，添加name、title、my-num属性-->
  <slot name="link" title="slot插槽中属性的值1" :myNum="num"></slot>
</template>

<script lang="ts" setup>
import {ref} from "vue";

let num = ref(100);
</script>

<style scoped>

</style>