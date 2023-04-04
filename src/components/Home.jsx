import "../styles/Home.css";
import React from "react";
import video from "../images/kitchenVideo.mp4";
// import video2 from "../images/kitchenVideo2.mp4";

import { useState } from "react";

function Home() {
  const [isFirstVideo, setIsFirstVideo] = useState(true);

  return (
    <div className="homeContainer">
      <section className="mainScren">
        <div className="video-container">
          {/* {isFirstVideo ? (
            <video autoPlay muted onEnded={handleVideoEnded}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video autoPlay muted onEnded={handleVideoEnded}>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="content">Content test</div> */}
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        Hello there!
      </section>
    </div>
  );
}

export default Home;
