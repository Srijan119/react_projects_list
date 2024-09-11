import React, { useState } from 'react'
import CustomHook from './custoHooks/CustomHook'

function DocumentTitle() {

    const [state,setSate] = useState(0);
    CustomHook(state);

  return (
   <button onClick={()=>setSate(state+1)}>do it</button>
  )
}

export default DocumentTitle