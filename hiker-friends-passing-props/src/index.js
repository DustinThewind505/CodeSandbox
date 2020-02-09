import React from "react";
import ReactDOM from "react-dom";

const hikers = [{ name: "C#" }, { name: "Teddy" }, { name: "Chet" }];

function App({ friends }) {
  return (
    <div>
      Ello Poppet {friends[0].name}
      <Greeter friend={friends[1].name} />
      <Greeter friend={friends[2].name} />
      <AllFriends
        homie1={friends[0].name}
        homie2={friends[1].name}
        homie3={friends[2].name}
      />
    </div>
  );
}

function Greeter({ friend }) {
  console.log(friend);
  return <div>Ello Poppet {friend}</div>;
}

function AllFriends({ homie1, homie2, homie3 }) {
  console.log(homie1, homie2, homie3);

  return (
    <div>
      Ello Poppets {homie1}, {homie2}, & {homie3}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App friends={hikers} />, rootElement);
