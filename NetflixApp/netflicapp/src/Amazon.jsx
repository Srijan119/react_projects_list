import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";

const Amazon =()=>{

    return (
        <>

        <h1 className='heading'>Top Amazon movies</h1>
        {
        Sdata.map((val,index)=>{
            if(index>=3)
return(
    <Cards 
    key = {val.id}
    simage ={val.simage}
    sname={val.sname}
    stitle={val.stitle}
    slink={val.slink}
    />
)
})
}
</>
)

}



export  default Amazon;