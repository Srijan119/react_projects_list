import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const selections = 'netflix';
// const Selection=()=>{
   
//     if(selections === 'netflix')
// {
//     return <Netflix/>

// }
// else {
//     return <Amazon/>
// }

// }


const App = () => {
    return (

        <>

{/* <Selection/> */}



        {selections === "netflix"?<Netflix/>:<Amazon/>}


        </>

    );
}


export default App;


{/* 
<>
<h1 className='heading'>Top Netflix Series</h1>
            {Sdata.map((val) => {
                return (
                    <Cards
                        key={val.id}
                        simage={val.simage}
                        sname={val.sname}
                        stitle={val.stitle}
                        slink={val.slink}
                    />

                );



            })}




        </> */}