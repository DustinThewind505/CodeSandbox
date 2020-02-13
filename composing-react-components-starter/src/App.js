import React, { useState } from "react";
import dummyData from "./dummydata";
import ProfilePage from "./components/ProfilePage";
import "./styles.css";

const App = () => {
  const [data] = useState(dummyData);

  return (
    <>
      <h1>Pride and Prejudice</h1>
      <ProfilePage cardData={data} />
    </>
  );
};
export default App;
