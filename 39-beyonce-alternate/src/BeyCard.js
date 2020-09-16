import React from "react";

const BeyCard = (props) => {
  // console.log("BeyCard props: ", props)
  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img alt="" src={props.bey.img} onClick={function () { props.clickHandler(props.bey) }} />
    </div>
  );
};

// function cardClickHandler(){
//   props.clickHandler(id)
// }



// this is defined upon execution 
// a click happens outside of our app => DOM 
// this => global obj/undefined 

export default BeyCard;
