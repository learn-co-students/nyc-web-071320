import React from "react";

const BeyCard = (props) => {
  return (
    <div className="card">
      <h3>{props.bey.name}</h3>
      <img alt="" src={props.bey.img} onClick={() => props.clickHandler(props.bey.id)} />
    </div>
  );
};

export default BeyCard;
