<script setup lang='ts'>
    import { Directive, DirectiveBinding} from 'vue';
    
    const vMove:Directive<any,void> = (el:HTMLElement,binding:DirectiveBinding)=>{
        let moveElement:HTMLDivElement = el as HTMLDivElement;
        // console.log(moveElement);
        const mouseDown = (e:MouseEvent)=>{
            let x = e.clientX - el.offsetLeft;
            let y = e.clientY - el.offsetTop;
            const move = (e:MouseEvent)=>{
                // console.log(e);
                el.style.left = e.clientX - x + 'px';
                el.style.top = e.clientY - y + 'px';
                // console.log(el.style.left)
            }
            document.addEventListener('mousemove',move);
            document.addEventListener('mouseup',()=>{
                document.removeEventListener('mousemove',move)
            })
        }
        moveElement.addEventListener('mousedown',mouseDown);

    }
</script>
<template>
    <!-- 自定义指令案例 -->
    <div v-move class="content">内容</div>
</template>
<style scoped>
 .content{
        cursor:move;
        position: absolute;
        width:150px;
        height: 150px;
        border:solid 3px #ccc;
        border-top:solid 10px #ccc;
    }
</style>