import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function MovieList() {
  const [data, setData] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(" https://ghibliapi.herokuapp.com/films")
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(" https://ghibliapi.herokuapp.com/people")
      .then(response => {
        console.log(response.data);
        setPeople(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  //console.log(people);
  return (
    <div className="film">
      {data.map(movie => (
        <MovieCard data={movie} people={people} />
      ))}
    </div>
  );
}

export default MovieList;
