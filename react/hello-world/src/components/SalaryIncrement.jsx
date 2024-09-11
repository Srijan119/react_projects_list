import React from 'react'

function SalaryIncrement({handleClick}) {
    console.log('salary increment');

  return (
    <button onClick={handleClick}>increase saalry</button>
  )
}

export default React.memo(SalaryIncrement)