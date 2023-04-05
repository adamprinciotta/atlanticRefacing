import "../styles/Home.css";
import React from "react";
import video from "../images/kitchenVideo.mp4";
// import video2 from "../images/kitchenVideo2.mp4";

import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import anniversary from '../images/anniversary.png'

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
      </section>
      <section className="info">
        <div className="explained">

          <div className="topExplain">
            <h2>Kitchen Cabinet Refacing</h2>
            <hr></hr>
            <h2>Real Solid Wood Doors As Seen In Showrooms</h2>
            <hr></hr>
            <h2>Expect Service & Quality</h2>
          </div>

          <div className="popular">
            <h1>Popular Now</h1>
            <br></br>
            <ul>
              <li>White Painted Shaker</li>
              <li>Off-white Painted Raised Panel</li>
              <li>Grey Painted Shaker</li>
              <li>All New Solid Maple Facorty Painted Doors</li>
              <li>Many Styles And Painted Factory Colors Available</li>
            </ul>
          </div>

          <div className="overview">
            <h3>Save 50-70% Over Full Remodel</h3>
            <h3>Average Install 3-4 Days</h3>
            <h3>Over 1500 Kitchens Refaced</h3>
          </div>
        </div>
        <div className="galleryContainer">
          <div className="galleryImages">
            <img src={one}></img>
            <img src={two}></img>
            <div className="galleryHRs">
              <hr className="galleryHR"></hr>
              <hr className="galleryHR"></hr>
            </div>
            <img src={three}></img>
            <img src={four}></img>
          </div>
          <div className="galleryButtons">
            <button className="galleryButton">Click Here For Gallery I</button>
            <button className="galleryButton">Click Here For Gallery II</button>
          </div>
        </div>
        <div className="callToAction">
          <h3>
            David Princiotta
            <br></br>
            (Owner, Installer)
          </h3>
          <h2>
          Always fair and reasonable prices because I cut out sales commissions and subcontractor costs. This gives you the highest quality reface. "I will make it a painless process."
          <br></br>
          <br></br>
          Contact David today for a free no pressure estimate.
          </h2>
          <div class="phoneNumber">781-221-0334</div>
          <img src={anniversary} alt="38 Year Anniversary Photo"/>
        </div>
      </section>
    </div>
  );
}

export default Home;
