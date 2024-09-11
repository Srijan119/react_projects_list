import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";

const Netflix =()=>{

    return (
        <>

        <h1 className='heading'>Top Netflix movies</h1>
        {
        Sdata.map((val,index)=>{
            if(index<=2)
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



export  default Netflix;