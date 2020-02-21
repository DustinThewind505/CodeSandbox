import React, { Fragment } from "react";
import { Route, NavLink } from "react-router-dom";

import Movies from "./Movies";
import Details from "./Details";

function Avenger(props) {
  const avenger = props.data.find(
    hero => Number(props.match.params.id) === hero.id
  );

  //console.log("This one", avenger);
  return (
    <Fragment>
      <img
        className="character-image"
        src={avenger.img}
        alt={avenger.nickname}
      />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h3>({avenger.nickname})</h3>
        <nav>
          <ul className="navbarBottom">
            <li>
              <NavLink to={`/avengers/${avenger.id}/details`}>Bio</NavLink>
            </li>
            <li>
              <NavLink to={`/avengers/${avenger.id}/movies`}>Movies</NavLink>
            </li>
          </ul>
        </nav>
        <Route
          path="/avengers/:id/details"
          render={() => <Details {...props} data={avenger} />}
        />
        <Route
          path="/avengers/:id/movies"
          render={() => <Movies {...props} data={avenger} />}
        />
      </div>
    </Fragment>
  );
}

export default Avenger;
