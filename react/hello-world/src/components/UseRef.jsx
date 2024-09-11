import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function UseRef() {

const [timer,setTimer]=useState(0);
const intervalRef = useRef();



const inputRef = useRef(null);

useEffect(()=>{
    inputRef.current.focus();

    intervalRef.current =  setInterval(()=>{
        setTimer(prev=>prev+1);
    },1000)
    return ()=>{
        clearInterval(intervalRef.current)
    }



})


  return (
    <>
<input ref={inputRef} type="text"  />

<div>hook timer - {timer}</div>
<button onClick={()=>clearInterval(intervalRef.current)}>clear timer</button>
</>

  )
}

export default UseRef