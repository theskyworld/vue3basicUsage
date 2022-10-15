<script lang='ts' setup>
import {h} from "vue";
let data = [1,2,3,4,5,6]
  const myDiv = h(
      'ul',
      data.map((value,index)=>{
        return h('li',{key:index},value)
      })
  )

</script>
<template>
  <my-div/>

</template>

<style scoped>

</style>