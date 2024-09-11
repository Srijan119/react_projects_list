import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//  ReactDOM.render(<h1>hello world</h1>
//  ,document.getElementById("root"));


//for passing multiple elements in reactdom render we use div tag to enclose multiple elements or we can also used them as array with commas\

// ReactDOM.render([<h1>hello world</h1>,
// <p>hi everyone</p>,
// <p>hello </p>]
// ,document.getElementById("root"));

//on using div inplace of array there is an excess of div created in src code ,so to avoid this we use fragments
// ReactDOM.render(
//   <React.Fragment>
// <h1>hello world</h1>
// <p>hi everyone</p>
// <p>hello</p></React.Fragment>
// ,document.getElementById("root"));

//we can also avoid writing React.Fragment and simply put the tags ,it will consider it as fragment
//to write a js expression inside jsx we use {} or we can use template literals
//it will give hello world9
//an attribute is been given on list element to edit the text if want just for showing how jsx attributes work
//self closing tag img used in react unlike html where img dont have a closing tag
const fname = 'srijan';
const lastname = 'srivastav';
const curr = new Date().toLocaleDateString();
const curr2 = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/280/300";
const links = "https://picsum.photos/";
//inline css in jsx react using js object,we have to use camelCae adn not kebab-case,and key value format
const dateheading={
  textTransform: 'capitalize',
  textAlign: 'center',
  color:'blueviolet',
  margin:'10px'
  }
//---------------------------
ReactDOM.render(
  <>
    <h1 className="heading">hello world{3 + 6}</h1>
    <div className='subheading'>
      <p> {`hi everyone i am ${fname} ${lastname}`}</p>
    </div>
    <div style={dateheading}>
      <p>current date is {curr}</p>
      <p>current time is {curr2}</p>
    </div>

    <div className='img_div'>
      <a href={links} target='srijan'>
        <img src="https://picsum.photos/210/300" alt='error' />
      </a>
      <img src={img1} alt='error' />
      <img src={img2} alt='error' />
      <img src={img3} alt='error' />
    </div>
  </>
  , document.getElementById("root"));


























































                                                                                                                                              // withouth babel and reactdom 
                                                                                                                                              // simply using js for rendering on html:--------------
                                                                                                                                              // var h2=document.createElement("h2");
                                                                                                                                              // h2.innerHTML='hello friends';
                                                                                                                                              // document.getElementById('root').appendChild(h2);
