import React from "react";

function AvengersList(props) {
  return (
    <div className="characters-list-wrapper">
      {props.data.map(hero => (
        <div
          className="character-card"
          key={hero.id}
          onClick={() => props.history.push(`/avengers/${hero.id}/details`)}
        >
          <img src={hero.thumbnail} alt={hero.name} />
          <h3>{hero.name}</h3>
          <h4>({hero.nickname})</h4>
        </div>
      ))}
    </div>
  );
}

export default AvengersList;
