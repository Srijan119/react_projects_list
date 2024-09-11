import React, { useMemo, useState } from 'react'
import Age from './Age'
import AgeIncrement from './AgeIncrement'
import Salary from './Salary'
import { useCallback } from 'react'
import SalaryIncrement from './SalaryIncrement'





function Rendering() {

const [age,setAge]=useState(0);
const [salary,SetSal] = useState(1000);


const [count,setcount]=useState(0);
const [count2,setcount2]=useState(0);


const  counterone = ()=>{
    setcount(count+1);
};
const  countertwo = ()=>{
    setcount2(count2+1);
};

const  isEven = useMemo(()=>{
    console.log(count%2);
    let i =0;
    while(i<1000000) i++
    return count%2===0;
},[count]);


const  handleAge = useCallback(()=>{
    setAge(age+1);
},[age]);

const  HandleSalary = useCallback(()=>{
    SetSal(salary+1);
},[salary]);



  return (
    <>
  <Age age={age}/>
  <AgeIncrement handleClick ={handleAge}/>
  <Salary sal={salary}/>
  <SalaryIncrement handleClick={HandleSalary}/>

<button onClick={counterone}>{count}</button>
<span>{isEven ? 'Even':'odd'}</span>
<button onClick={countertwo}>{count2}</button>





  </>
  )
}

export default Rendering