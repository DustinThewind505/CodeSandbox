import React from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import Avenger from "./components/Avenger";

import Data from "./Data";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/avengers"
        render={props => <AvengersList {...props} data={Data} />}
      />
      <Route
        path="/avengers/:id"
        render={props => <Avenger {...props} data={Data} />}
      />
    </div>
  );
}

export default App;
