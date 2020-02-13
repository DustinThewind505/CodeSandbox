import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [healthPoints, setHealthPoints] = useState(100);
  const [isHappy, setIsHappy] = useState(true);

  // ========Event Listeners========
  function eatGreat() {
    setHealthPoints(healthPoints + 40);
    setIsHappy(true);
  }

  function eatTerrible() {
    setHealthPoints(healthPoints - 70);
    setIsHappy(false);
  }

  function smokePipe() {
    setHealthPoints(healthPoints + 30);
    setIsHappy(true);
  }
  // ======== ========
  return (
    <div>
      <h1>Aragon</h1>
      <div>Health Points: {healthPoints}</div>
      <div>{isHappy ? "Really happy" : "Having a bad time"}</div>

      <button onClick={eatGreat}>Have a great meal</button>
      <button onClick={eatTerrible}>Have a terrible meal</button>
      <button onClick={smokePipe}>Smoke pipe</button>
      <br />
      <br />
      <br />
      <br />
      <Villian />
    </div>
  );
}

function Villian() {
  const [healthPoints, setHealthPoints] = useState(200);
  const [isStoked, setIsStoked] = useState(false);

  // ========Event Listeners========
  function KillAWizard() {
    setHealthPoints(healthPoints + 400);
    setIsStoked(true);
  }

  const Punished = () => {
    setHealthPoints(healthPoints - 900);
    setIsStoked(false);
  };

  function resurection() {
    setHealthPoints(200);
  }
  // ======== ========

  return (
    <div>
      <h1>Sauron</h1>
      <div>Health: {healthPoints}</div>
      <div>{isStoked ? "Stoked" : "Now I'm pissed!"}</div>

      <button onClick={KillAWizard}>Kill a wizard</button>
      <button onClick={Punished}>Punished by Sarumon</button>
      <button onClick={resurection}>Resurected by Sarumon</button>
      <br />
      <br />
      <br />
      <br />
      <VillianTwo />
    </div>
  );
}

function VillianTwo() {
  const [healthPoints, setHealthPoints] = useState(175);
  const [isCrazy, setIsCrazy] = useState(true);

  // ========Event Listeners========
  const RawFish = () => {
    setHealthPoints(healthPoints + 10);
  };

  function Hobbits() {
    setHealthPoints(healthPoints - 65.5);
    setIsCrazy(false);
  }

  const Precious = () => {
    setHealthPoints(250);
    setIsCrazy(true);
  };
  // ======== ========

  return (
    <div>
      <h1>Golem</h1>
      <div>Health: {healthPoints}</div>
      <div>
        {isCrazy
          ? "We are feeling better, just us and precious"
          : "Filthy Hobbits!"}
      </div>

      <button onClick={RawFish}>Raw Fish</button>
      <button onClick={Hobbits}>Hobbits</button>
      <button onClick={Precious}>Precious</button>
    </div>
  );
}
