import React from "react";

const PetCard = props => {
  //console.log(props);
  return (
    <div className="dog-card" key={props.index}>
      <img className="dog-image" src={props.dog} alt="Random dog" />
      <h2>{props.breed}</h2>
    </div>
  );
};

export default PetCard;
