<script setup lang='ts'>
    import useBase64 from './img2base64'

    useBase64({el:'img'}).then(res=>{
        console.log(res.baseUrl);
    })
</script>
<template>
    <div>
        <img style="width:300px;height: 300px;" src="@/assets/imgs/img2.jpg" alt="">
    </div>

</template>
<style scoped>

</style>