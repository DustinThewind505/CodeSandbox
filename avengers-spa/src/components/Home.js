import React from "react";

function Home() {
  return (
    <div className="home">
      <img
        onMouseOver={event =>
          (event.target.src =
            "https://comicvine1.cbsistatic.com/uploads/original/11/117763/2598672-marvel_zombies___dead_days___page_5.jpg")
        }
        onMouseLeave={event =>
          (event.target.src =
            "http://getwallpapers.com/wallpaper/full/9/4/b/1191411-marvel-avengers-desktop-wallpaper-1920x1080-for-android-40.jpg")
        }
        src="http://getwallpapers.com/wallpaper/full/9/4/b/1191411-marvel-avengers-desktop-wallpaper-1920x1080-for-android-40.jpg"
        alt="Avengers assembling"
      />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
