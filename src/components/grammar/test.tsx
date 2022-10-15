import {ref} from 'vue'

let val = ref<string>('')
let flag = false;
let numArr = [1,2,3,4,5]
// const clickTap = (val:number)=>{
//     console.log('click-',val)
// }
const clickTap = (ctx:any)=>{
    console.log('ctx',ctx);
    ctx.emit('on-click',123);
}
type Props= {
    title:string,
}
const renderDom = (props:Props,ctx:any)=>{
    return(
        <div>
            <p>{props.title}</p>
            {/* <div>hello tsx</div> */}
            {/* 使用指令和模板 */}
            {/* v-model */}
            {/* <input v-model={val.value} type='text'></input> */}
            {/* <div>{val.value}</div> */}

            {/* v-show */}
            {/* <p v-show={flag}>123</p> */}
            {/* <p v-show={!flag}>456</p> */}

            {/* v-if */}
            {/* { flag ? <p>123</p> : <p>456</p>} */}

            {/* v-for v-on*/}
            {
                numArr.map(val=>{
                    // return (<p onClick={clickTap.bind(this,val)} data-index={val}>{val}</p>)
                    return (<p onClick={clickTap.bind(this,ctx)} data-index={val}>{val}</p>)
                })
            }
       </div>
    )
}

export default renderDom