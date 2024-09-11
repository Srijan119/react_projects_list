import React from "react";


function SlotM(props){

    let x=props.x;
    let  y=props.y;
    let  z=props.z;
 
    if((x===y)&&(y===z))
    {
        return (<>
            <div className="slot_inner">
      <h1>{x}{y}{z}</h1>

<h2>It is a Match</h2>
<hr/>
</div>
            </>
        );
        
    }
    else{
        
        return(
            <div className="slot_inner">
        <h1>{x}{y}{z}</h1>
  
  <h2>It is a not a Match</h2>
  <hr/>
  </div>

        );
        



    }
}

export default SlotM;
