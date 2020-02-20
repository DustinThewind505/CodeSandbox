import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <Link to="/shop">
        <button className="md-button shop-button">Shop now!</button>
      </Link>
    </div>
  );
}

export default Home;
