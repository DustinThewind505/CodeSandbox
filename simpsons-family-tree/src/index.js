import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const simpsonData = [
  {
    name: "Orville Simpson",
    spouse: "Yuma Hickman",
    children: [
      {
        name: "Abraham Simpson",
        spouse: "Mona",
        children: [
          {
            name: "Homer Simpson",
            spouse: "Marge Bouvier",
            children: [
              {
                name: "Bart Simpson"
              },
              {
                name: "Lisa Simpson"
              },
              {
                name: "Maggie Simpson"
              }
            ]
          }
        ]
      }
    ]
  }
];

const GreatGrandChild = props => {
  //console.log(props.greatGrandChildName)
  return (
    <div>
      {props.greatGrandChildName.map(el => (
        <h5>Great Grand Child: {el.name}</h5>
      ))}
    </div>
  );
};

const GrandChild = props => {
  return (
    <div>
      <h3>Grand Child: {props.name}</h3>
      <GreatGrandChild greatGrandChildName={props.greatGrandChildName} />
    </div>
  );
};

const Child = props => {
  return (
    <div>
      <h2>Child: {props.name}</h2>
      <GrandChild
        name={props.grandChildName}
        greatGrandChildName={props.greatGrandChildName}
      />
    </div>
  );
};

const Parent = props => {
  return (
    <div>
      <h1>Parent: {props.name}</h1>
      <Child
        name={props.childName}
        grandChildName={props.grandChildName}
        greatGrandChildName={props.greatGrandChildName}
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h2>Simpsons Lineage</h2>
      <Parent
        name={simpsonData[0].name}
        childName={simpsonData[0].children[0].name}
        grandChildName={simpsonData[0].children[0].children[0].name}
        greatGrandChildName={simpsonData[0].children[0].children[0].children}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
