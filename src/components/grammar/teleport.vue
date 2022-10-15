<template>
<!--  Teleport的使用-->
  <div>
    <p>这是其他标签1</p>
  </div>
  <div id="newPlace"></div>
  <div>
    <p>这是其他标签2</p>
  </div>
<!--  将里面的p标签传送到id为newPlace的标签的最后的位置处-->
<!--  该标签声明的位置要在目标位置的标签的后面-->
<!--  disabled属性控制该组件是否要被传送-->
<Teleport :disabled='true' to="#newPlace">
    <p>这是要被传送的标签</p>
  </Teleport>
<!--  <Teleport to="body">-->
<!--    <p>这是要被传送的标签</p>-->
<!--  </Teleport>-->
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>