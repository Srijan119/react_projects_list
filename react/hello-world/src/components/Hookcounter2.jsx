import React from "react";
import { useState } from "react";


export default function HooksCounter2(){

    const [count,setCount]=useState(0);

    function incrementbyFive(){
        for (let i =0;i<5;i++){
         setCount(prevCount => prevCount+1);
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(prevCount => prevCount+1)}>increment</button>
            <button onClick={()=>setCount(prevCount => prevCount-1)}>decrement</button>
            <button onClick={incrementbyFive}>increment5</button>

            <button onClick={()=>setCount(1)}>reset</button>

        </div>
    )
}