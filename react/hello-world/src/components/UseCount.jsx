import React from 'react'
import UseCounter from './custoHooks/UseCounter';

function UseCount() {

const [count,increment,decrement,reset] = UseCounter(10,0);

  return (
    <>
    <div>{count}</div>
    <button onClick={increment}> increment</button>
    <button onClick={decrement}> decrement</button>
    <button onClick={reset}> reset</button>
    </>
  )
}

export default UseCount