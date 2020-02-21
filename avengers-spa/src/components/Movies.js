import React from "react";

function Movies(props) {
  return (
    <ul>
      {props.data.movies.map(movie => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  );
}

export default Movies;
