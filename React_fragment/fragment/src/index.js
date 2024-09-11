import React from 'react';
import ReactDOM from 'react-dom';
import App,{sum,subtract,multiply,divide} from './App';



ReactDOM.render(
  <>
<App/>
<p></p>
<ul>
<li> {`the sum of 2 and 5 is ${sum(2,5)}`}</li>
<li> {`the difference of 2 and 5 is ${subtract(2,5)}`}</li>
<li> {`the multiplication of 2 and 5 is ${multiply(2,5)}`}</li>
<li> {`the division of 2 and 5 is ${divide(2,5)}`}</li>


</ul>


 </>,
  
  document.getElementById('root')
);