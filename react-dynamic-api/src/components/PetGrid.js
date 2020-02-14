import React, { useState, useEffect } from "react";
import PetCard from "./PetCard";
import axios from "axios";

export default function PetGrid() {
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("dalmatian");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
      .then(response => {
        //console.log(response.data.message)
        setPets(response.data.message);
      })
      .catch(error => {
        console.log("No dogs", error);
      });
  }, [breed]);

  // function BreedSwitch(){
  //   setBreed("mastiff")
  // }
  return (
    <div className="container">
      <button onClick={() => setBreed("poodle")}>Poodle</button>
      <button onClick={() => setBreed("pug")}>Pug</button>
      <div className="entry">
        {pets.map((doggy, index) => (
          <PetCard dog={doggy} index={index} breed={breed} />
        ))}
      </div>
    </div>
  );
}
