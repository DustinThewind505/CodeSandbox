import React from "react";
import ProfileCard from "./ProfileCard";

const ProfilePage = props => {
  return (
    <div className="posts-container-wrapper">
      {props.cardData.map(p => (
        <div className="box">
          <ProfileCard className="box" key={p.profileImg} cardData={p} />
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
