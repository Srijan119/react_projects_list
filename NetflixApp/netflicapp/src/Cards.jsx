import React from "react";
import Image from "./Image";
import Title from "./Title";


function Cards(props) {

  return (
    <div className='Cards'>
      <div className='CardName'>
        <Image simages = {props.simage}/> 
        <div className='card_info'>
          <span className='card_category'>{props.sname}</span>
          <Title stitles = {props.stitle}/>
          <a href={props.slink}
            target="blank"><button>Watch Now</button></a>
        </div>

      </div>
    </div>
  );
}

export default Cards;