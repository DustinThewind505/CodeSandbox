import React, { useState } from "react";
import Button from "./components/Button";
import ScoreBoard from "./components/ScoreBoard";

export default function Game(props) {
  const player = props.player;
  const [score, setScore] = useState(0);

  const Add = () => {
    setScore(score + 1);
  };

  const Sub = () => {
    setScore(score - 1);
  };

  return (
    <div>
      <ScoreBoard player={player} score={score} />
      <Button Change={Add} title="increase" />
      <Button Change={Sub} title="decrease" />
    </div>
  );
}
