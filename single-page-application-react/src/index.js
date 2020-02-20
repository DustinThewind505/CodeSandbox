import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Data from "./data";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";

import "./styles.css";

const App = () => {
  const [products] = useState(Data);
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Dustin's Trinkets</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </nav>
      <Switch>
        <Route
          path="/shop/:id"
          render={routeProps => <Item items={products} />}
        />
        <Route path="/shop" render={() => <Shop items={products} />} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
