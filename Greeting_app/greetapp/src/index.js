import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const colorstyle={};
const h1style={
  textAlign:'center',
  margin:'150px',
  boxSizing:'border-box',
  borderColor:'blue',

}
let hours=new Date();
var greeting;
if(hours.getHours()<12)
{
greeting='good morning';
colorstyle.color='yellow';
}
  else{
    if(hours.getHours()>12 & hours.getHours()<20)
  {
    greeting='good afternoon';
colorstyle.color='blue';

  }
else{
  greeting='good night';
colorstyle.color='red';

}}

  

ReactDOM.render(
  <>
<div>
  <h1 style={h1style}>Hi Srijan <span style={colorstyle}> {greeting}</span></h1>
  </div>
  </>,

  

document.getElementById('root'));

