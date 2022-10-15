<template>
<!--  子组件-->
<!--  具名插槽-->
<!--  定义插槽，（挖坑）-->
  <slot name="btn"></slot>
  <p>子组件</p>
  <slot name="link"></slot>

<!--  匿名插槽-->
<!--  定义插槽，（挖坑）-->
  <slot></slot>
</template>

<script lang="ts" setup>
</script>

<style scoped>

</style>