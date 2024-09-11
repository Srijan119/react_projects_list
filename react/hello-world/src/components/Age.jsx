import React from 'react'

function Age({age}) {
    console.log('age');
  return (
    <div>{age}</div>
  )
}

export default   React.memo(Age)