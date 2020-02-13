import React from "react";

export default function Button({ Change, title }) {
  return <button onClick={Change}>{title}</button>;
}
