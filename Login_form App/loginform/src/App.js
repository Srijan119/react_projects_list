
import React, { useState } from "react";
import './App.css';

function App() {
  // const[name,setname]=useState('');
  // const[name2,setname2]=useState('');
  // const[fullname,setFullname] =useState();
  // const[fullname2,setFullname2]=useState();

  // const inputEvent=(event)=>{

  // setname(event.target.value);
  // }

  // const inputEvent2=(event)=>{

  //   setname2(event.target.value);
  //   }
  // const onSubmit=(event)=>{
  // setFullname(name);
  // setFullname2(name2);
  // event.preventDefault();

  // 
  const [fullName, setfullName] = useState(
    {
      fname: '',
      lname: '',
      email:'',
      number:'',

    }
  );

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setfullName((prev) => {
      return{
        ...prev,
        [name]:value,
      }

      // if (name === 'fname') {
      //   return {
      //     fname: value,
      //     lname: prev.lname,
      //     email: prev.email,
      //     number: prev.number,

      //   };
      // }
      // else if (name === 'lname'){
      //   return {
      //     fname: prev.fname,
      //     lname: value,
      //     email: prev.email,
      //     number: prev.number,
      //   };
      // }

      // if (name === 'email') {
      //   return {
      //     fname: prev.fname,
      //     lname: prev.lname,
      //     email: value,
      //     number: prev.number,

      //   };
      // }

      // if (name === 'number') {
      //   return {
        
      //     fname: prev.fname,
      //     lname: prev.lname,
      //     email: prev.email,
      //     number: value,

      //   };
      // }











    }

    );
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    alert('form summited ');
  }





return (
  <>

  <div>
    <form onSubmit={onSubmit}>
      <h1>Hello {fullName.fname} {fullName.lname} </h1>
      <h2>{fullName.email}</h2>
      <h2>{fullName.number}</h2>
      <input type='text' placeholder="Enter your name" name="fname" onChange={inputEvent} value={fullName.fname} />
      <br />
      <br />
      <input type='password' placeholder="Enter your Password"  name="lname" onChange={inputEvent} value={fullName.lname} />
      <br />
      <br />
      <input type='text' placeholder="Enter your email Id"  name="email" onChange={inputEvent} value={fullName.email} />
      <br />
      <br />
      <input type='text' placeholder="Enter your number"  name="number" onChange={inputEvent} value={fullName.number} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>

  </div>
   </>
);
}

export default App;

