import React, { useState } from "react";
import Title from "./Title";
import ProfileImage from "./ProfileImage";
import PridePoints from "./PridePoints";
import Copy from "./Copy";

const ProfileCard = props => {
  const [points, setPoints] = useState(props.cardData.pride);
  console.log(points);

  const incrementPoints = () => {
    setPoints(points => points + 1);
  };

  return (
    <>
      <ProfileImage image={props.cardData.profileImg} />
      <div>
        <Title name={props.cardData.name} />
        <PridePoints score={points} incrementPoints={incrementPoints}/>
      </div>
      <Copy bio={props.cardData.copy} />
    </>
  );
};

export default ProfileCard;
