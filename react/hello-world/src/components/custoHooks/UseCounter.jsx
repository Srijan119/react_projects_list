import React, { useState } from 'react'

function UseCounter(value,initial) {

const [count,setCount] = useState(initial);

const increment = ()=>{
    setCount(count+value);
}
const decrement = ()=>{
    setCount(count-value);
}
const reset = ()=>{
    setCount(initial);
}
 
return [count,increment,decrement,reset]
}

export default UseCounter