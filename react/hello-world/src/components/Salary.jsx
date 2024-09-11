import React from 'react'

function Salary({sal}) {
    console.log('salary');

  return (
    <div>{sal}</div>
  )
}

export default  React.memo(Salary)