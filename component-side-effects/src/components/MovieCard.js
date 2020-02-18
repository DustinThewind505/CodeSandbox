import React from "react";

const MovieCard = props => {
  //console.log(props)
  return (
    <div className="film-list">
      <div key={props.data.id}>
        <h2>{props.data.title}</h2>
        <p>{props.data.description}</p>
        <p>Director: {props.data.director}</p>
        <p>Producer: {props.data.producer}</p>
        <p>Released: {props.data.release_date}</p>
        {props.people.map(person => (
          <h5>{person.name}</h5>
        ))}
      </div>
    </div>
  );
};
export default MovieCard;
