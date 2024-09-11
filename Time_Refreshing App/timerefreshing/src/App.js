import React, { useState } from "react";


const App=()=>{
let bgcolor='red';
  
  const [Hi,Update1]=useState('Hi');
  const [bgcolor3,bgcolor2]=useState(bgcolor);





function change1(){
 let Hi2='mousde entered';
  Update1(Hi2);
  bgcolor2('green');
}
function change2(){
  let Hi2='mouse out';
   Update1(Hi2);
   bgcolor2('brown');
 }



  const a=new Date();
 // console.log(a.toLocaleTimeString());
const[count,updateState]=useState(a.toLocaleTimeString());

function updatetime()
{let b=new Date()
updateState(b.toLocaleTimeString());

}



 setInterval(updatetime,1000);



  return (
    <>
    <div style={{backgroundColor:bgcolor3}}>
    <div className='division'>
    <h1>{count}</h1>

    <h1>{Hi}</h1>

    <button onMouseOver={change1} onMouseOut={change2}>click me</button>
    </div>
    </div>
</>
  );
}
export default App;