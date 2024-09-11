import React from 'react'
import { useContext } from 'react'
import { context,context2 } from '../App'
function ComponentF() {

    const name =  useContext(context);
    const age2 =  useContext(context2);


  return (
    <div>{name}{age2}</div>
  )
}

export default ComponentF