// 将loading组件转成一个vue插件并导出
import loading from './loading.vue'
import type {App,VNode} from 'vue'
import {createVNode,render} from 'vue'

// 插件支持对象和函数形式
// 对象形式中需包含install方法，vue会自动调用install方法，并将入口文件中的app传入作为实参
// 函数形式中，函数就等价于是install函数
// 导出对象形式
export default{
    // 对象形式中需包含一个install函数
    // app指入口文件中的app
    install(app:App){
        // console.log('app:',app);
        // 创建loading插件
        // 将组件转成虚拟DOM
        const vnode:VNode = createVNode(loading);
        // 将虚拟DOM生成真实DOM，并挂载到指定的节点中（在当前节点中使用）
        render(vnode,document.body);

        // 全局配置loading插件
        app.config.globalProperties.$loading = {
            show:()=>vnode.component?.exposed?.show(),
            hide:()=>vnode.component?.exposed?.hide(),
        }

    }

}