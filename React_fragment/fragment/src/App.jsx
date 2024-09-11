import React from 'react';
import  Heading from './Heading' ;
import Para from './Para';
import List from './List';

function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;

}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return (a/b).toFixed(2);
}

function App(){

return(<>
 <Heading/>
 <Para/>
 <List/>
 </>
 );

}

export default App;
export {sum,subtract,multiply,divide};


  
  