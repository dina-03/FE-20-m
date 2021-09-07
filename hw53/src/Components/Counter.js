import { useState } from "react";

const Counter=()=>{

    const [count, setCount]=useState(0),
    inc=()=>{
        if(count>=10){
            return
        }else
        setCount(count+1)
        console.log(count)
    },
    dec=()=>{
        if(count<=0){
            return
        }else
        setCount(count -1)
        console.log(count) 
    }

    return (
        <div className='counter'>
                <h4>Count: {count}</h4>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
    )
}

export default Counter