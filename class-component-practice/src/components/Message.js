import React from "react";

const RenderMessage = props => {
  return (
    <div>
      <h2>Hello {props.message}</h2>
    </div>
  );
};

export default RenderMessage;
