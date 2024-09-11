import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function HookCounter3() {

 const [name,setName]=useState({firstname:'',lastname:''});
 const [items,setItems] = useState([]);
 function setItem(){
setItems([...items,{
    id:items.length,
    value: Math.floor(Math.random()*10)+1
}])
 }

 useEffect(()=>{
    console.log("fnjdxk");
    document.title = `clicked ${name.firstname} times`
 },[name])

//if we give empty arraddy [] in place of [name] as 2nd parameter in use effect ..then use effect will be called only once on inital render 

  return (
    <>
    <input type="text" value={name.firstname} onChange={(e)=>setName({...name,firstname : e.target.value})} />
    <input type="text" value={name.lastname} onChange={(e)=>setName({...name,lastname : e.target.value})} />
    <h1>{name.firstname}</h1>
    <h1>{name.lastname}</h1>
    <button onClick={setItem}>add item</button>
<ul>
    {items.map(item => (
        <li key={item.id}> {item.value}</li>
    ))}
    </ul>
    </>
  )
}

export default HookCounter3