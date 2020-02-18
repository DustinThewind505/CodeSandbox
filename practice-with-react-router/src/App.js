import React from "react";
import { Route, Link } from "react-router-dom";

import "./styles.css";

const hikers = [
  { id: "/", name: "Peacefoot" },
  { id: "poppet", name: "Ninja" },
  { id: "sparrow", name: "Viking" }
];

// function Hello() {
//   return <h2>Hello</h2>;
// }

// function Poppet() {
//   return <h2>Poppet</h2>;
// }

export default function App() {
  return (
    <div className="App">
      <Link to="/">Hello</Link>
      <Link to="/poppet">Poppet</Link>
      <Link to="/sparrow">Sparrow</Link>

      <Route
        exact
        path="/"
        render={() => <h1>Hello Poppet {hikers[0].name}</h1>}
      />
      <Route
        path="/:id"
        render={props => {
          const { id } = props.match.params;
          const hiker = hikers.find(hkr => hkr.id == id);
          return <h1>Hello Poppet {hiker.name}</h1>;
        }}
      />

      {/* <Route exact path="/" component={Hello} />
      <Route path="/poppet" component={props => <h2>Poppet</h2>} /> */}
    </div>
  );
}
