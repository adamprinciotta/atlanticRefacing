import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "../styles/Home.css";

import video from "../images/kitchenVideo.mp4";
// import video2 from "../images/kitchenVideo2.mp4";

import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import anniversary from "../images/anniversary.png";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from 'axios'

function Home() {
  const [isFirstVideo, setIsFirstVideo] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    homePhone: "",
    cellPhone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const letters = /[a-zA-Z]/;
    if(letters.test(formData.homePhone) || letters.test(formData.cellPhone)){
      alert("Phone numbers cannot have letters")
    }
    else if(formData.homePhone.length != 10 || formData.cellPhone.length != 10){
      alert("Make sure your phone number is 10 digits")
    }
    else{
      fetch("/.netlify/functions/sendgrid", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          city: formData.city,
          state: formData.state,
          homePhone: formData.homePhone,
          cellPhone: formData.cellPhone,
          email: formData.email
        }),
        
      });

      setFormData({
        name: "",
        city: "",
        state: "",
        homePhone: "",
        cellPhone: "",
        email: "",
      });
  
      alert("Request sent!")
    }
  };

  const images = [
    {
      original: one,
      thumbnail: one,
    },
    {
      original: two,
      thumbnail: two,
    },
    {
      original: three,
      thumbnail: three,
    },
  ];

  return (
    <div className="homeContainer">
      <section className="mainScren">
        <div className="video-container">
          <video autoPlay muted loop controls={false}>
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
            <br className="popBreak"></br>
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
            <hr></hr>
            <h3>Average Install 3-4 Days</h3>
            <hr></hr>
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
          <Link to="/GalleryI" onClick={() => window.scrollTo(0, 0)}><button className="galleryButton" href="/GalleryI">Click Here For Gallery I</button></Link>
          <Link to="/GalleryII" onClick={() => window.scrollTo(0, 0)}><button className="galleryButton" href="/GalleryII">Click Here For Gallery II</button></Link>
          </div>
        </div>
        <div className="callToAction">
          <h3>
            David Princiotta
            <br></br>
            (Owner, Installer)
          </h3>
          <h2>
            Always fair and reasonable prices because I cut out sales
            commissions and subcontractor costs. This gives you the highest
            quality reface. "I will make it a painless process."
            <br></br>
            <br></br>
            Contact David today for a free no pressure estimate.
          </h2>
          <div className="phoneAndAnn">
            <div className="phoneNumber">781-221-0334</div>
            <br></br>
            <img
              className="annImg"
              src={anniversary}
              alt="38 Year Anniversary Photo"
            />
          </div>
        </div>
      </section>
      <section className="formAndStyles">
        <div className="formDiv">
          <h3>Request A Free Estimate Below</h3>
          <form onSubmit={handleSubmit}
                action="https://formspree.io/f/mvonvlap"
                method="POST"
                data-formspree-honeypot
                data-formspree-response>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="homePhone"
              placeholder="Home Phone Number"
              value={formData.homePhone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="cellPhone"
              placeholder="Cell Phone Number"
              value={formData.cellPhone}
              onChange={handleChange}
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
        <div className="qualification">
          <h2 className="topHalf">
            Save 50- 70% over full remodel
            <br></br>
            Average install 3-4 days
            <br></br>
            David has refaced over 1500 kitchens
          </h2>
          <h2>David, the owner refaces all kitchens, HIMSELF</h2>
          <h2 className="subContract">NO SUB-CONTRACTORS</h2>
          <h2>Over 30,000 Cabinet Doors Installed</h2>
        </div>

        <img
          src={five}
          alt="Kitchen"
          className="qualImg"
          width="35%"
          height="80%"
        />

        <div className="stylesDiv">
          <h4>Available Door Styles</h4>
          <br></br>
          <ul>
            <li>Raised Panel Doors</li>
            <li>Mitred Raised Panel</li>
            <li>Shaker Style</li>
          </ul>
          <br></br>
          <h4>The Newest Trends</h4>
          <br></br>
          <ul>
            <li>Painted Doors</li>
            <li>Painted Sand Thru</li>
            <li>Painted Distressed</li>
            <li>Glazed Doors</li>
          </ul>
          <br></br>
          <h4>Countertops</h4>
          <ul>
            <li>Granite</li>
            <li>Quartz</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="typesAndScroll">
          <div className="refacingTypes">
            <h1>Solid Wood Refacing</h1>
            <div className="refacingLists">
              <ul>
                <li>Cherry</li>
                <li>Birch</li>
                <li>Oak</li>
              </ul>
              <ul>
                <li>Shaker Doors</li>
                <li>Mitred Shaker Doors</li>
                <li>End Panel Doors</li>
              </ul>
            </div>
          </div>
          <div className="imageGalleryContainer">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
              autoPlay={true}
              slideInterval={5000}
              slideDuration={1000}
              showBullets={true}
              showThumbnails={false}
              renderItem={(item) => (
                <div>
                  <img src={item.original} alt={item.originalAlt} />
                  {item.description && (
                    <span className="image-gallery-description">
                      {item.description}
                    </span>
                  )}
                </div>
              )}
              className="my-image-gallery"
            />
          </div>
        </div>
      </section>
      <section>
        <footer>
          <h1>Burlington, MA - 781-221-0334 and Waltham, MA - 781-899-0118</h1>
          <h1>
            <i>No Subcontractors—Owner Refaces All Kitchens</i>
          </h1>
          <br></br>
          <h4>Kitchen Cabinet Refacing</h4>
          <p>
            Acton, Andover, Arlington, Ashland, Bedford, Belmont, Beverly,
            Billerica, Bolton, Boxford, Burlington, Canton, Carlisle,
            Chelmsford, Concord, Danvers, Essex, Everett, Framingham,
            Georgetown, Gloucester, Groton, Hamilton, Holliston, Hopkinton,
            Hudson, Ipswich, Lancaster, Leominster, Lexington, Lincoln,
            Littleton, Lynn, Lynnfield, Malden, Manchester by the Sea, Marlboro,
            Medford, Melrose, Methuen, Middleton, Natick, Needham, Newton, North
            Andover, North Reading, Norwood, Peabody, Reading, Revere, Rockport,
            Salem, Saugus, Shirley, Southboro, Stoneham, Stoughton, Stow,
            Sudbury, Tewksbury, Topsfield, Tyngsborough, Wakefield, Walpole,
            Waltham, Watertown, Wayland, Wellesley, Westford, Weston, Westwood,
            Wilmington, Winchester, Winthrop, Woburn
          </p>
        </footer>
      </section>
    </div>
  );
}

export default Home;
