import React from 'react'

function AgeIncrement({handleClick}) {
    console.log('age increment');

  return (
<button onClick={handleClick}>increase age</button>  )
}

export default  React.memo(AgeIncrement)