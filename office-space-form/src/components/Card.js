import React from "react";

const Card = props => {
  return (
    <div>
      <h1>The Team</h1>
      {props.info.map((info, index) => (
        <div
          key={index}
          className={`card ${info.complete ? "complete" : ""}`}
          onClick={() => props.toggleComplete(info.id)}
        >
          <h2>Name: {info.name}</h2>
          <p>Email: {info.email}</p>
          <p>Role: {info.role}</p>
          <p>Music: {info.music}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
