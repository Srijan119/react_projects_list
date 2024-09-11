import React, { useState } from "react";




function HooksCounter(){




    const [state,setState]=useState(0);


    function clickCounter(){
        setState(state+1);
    }

    return(
        <div>
            <button onClick={clickCounter}>{state}</button>
        </div>
    )
}


export default HooksCounter;