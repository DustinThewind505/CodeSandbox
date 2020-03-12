import React from "react";

const Form = props => {
  return (
    <form>
      <input placeholder="Waynes World!" onChange={props.updateStateMessage} />
    </form>
  );
};

export default Form;
