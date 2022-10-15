import {onMounted} from 'vue'

// 调用函数时传入的参数类型
type Options = {
    // 元素选择器
    el:string,
}
// 函数返回值类型
// 包含一个baseUrl属性的对象
type Return = {
    baseUrl:string | null,
}

export default function(option:Options):Promise<Return>{
    return new Promise(resolve=>{
        onMounted(()=>{
            // 获取img
            let img:HTMLImageElement = document.querySelector(option.el) as HTMLImageElement;
            console.log(img);
            // 图片加载事件
            img.onload = ():void => {
                resolve({
                    baseUrl:base64(img)
                })
            }
        })
        const base64 = (el:HTMLImageElement) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = el.width;
            canvas.height = el.height;
            ctx?.drawImage(el,0,0,canvas.width,canvas.height);
            // 'image/jpg'导出图片类型
            return canvas.toDataURL('image/jpg');
        }
    })
}