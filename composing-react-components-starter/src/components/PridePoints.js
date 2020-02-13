import React from "react";

const PridePoints = props => {
  return (
    <div className="point-container">
      <button onClick={props.incrementPoints}>+</button>
      <p className="points">Pride Level: {props.score}</p>
    </div>
  );
};

export default PridePoints;
