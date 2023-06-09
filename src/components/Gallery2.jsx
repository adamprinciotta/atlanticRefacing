import "../styles/Gallery2.css";
import anniversary from "../images/anniversary.png";
import one from "../images/g2_1.png";
import two from "../images/g2_2.png";
import three from "../images/g2_3.png";
import four from "../images/g2_4.png";
import five from "../images/g2_5.png";
import six from "../images/g2_6.png";
import seven from "../images/g2_7.png";
import eight from "../images/g2_8.png";
import nine from "../images/g2_9.png";
import ten from "../images/g2_10.png";
import eleven from "../images/g2_11.png";
import twelve from "../images/g2_12.png";
import thirteen from "../images/g2_13.png";
import fourteen from "../images/g2_14.png";
import fifteen from "../images/g2_15.png";
import sixteen from "../images/g2_16.png";
import seventeen from "../images/g2_17.png";
import eighteen from "../images/g2_18.png";
import nineteen from "../images/g2_19.png";
import twenty from "../images/g2_20.png"

import { useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Gallery1() {

  const images = [
    two, three, five, six, seven, nine, ten, eleven, twelve, thirteen, fourteen, sixteen, seventeen, eighteen, nineteen, twenty
  ]

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


  return (
    <div className="gallery1Container">
      <section className="formG2">
        <div className="formG2Div">
          <img src={anniversary}></img>
          <h3>Get A Free Estimate!</h3>
          <form onSubmit={handleSubmit}>
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
        <div className="introG2">
          <h1>Photo Gallery II</h1>
          <h5>
            David, the owner,
            <br></br>
            refaces all kitchens himself.
            <br></br>
            NO sub-contractors
          </h5>
          <img className="introImgG2" src={one}></img>
        </div>
      </section>
      <br></br>
      <section className="imagesG2">
        {images.map((image) => (
                  <img
                    src={image}
                    alt="Refaced Kitchen"
                    width="100%"
                    loading="lazy"
                    onClick={() => handleImageClick(image)}
                  />
                ))}
      </section>
      <section className="btnAndFooterG2">
        <div className="g2Btn1">
        <a href="https://atlanticrefacingphotos.com/"><button className="galleryToExtGalleryBtn">CLICK HERE FOR MORE PHOTOS AND REVIEWS</button></a>
        </div>
        <br></br>
        <div className="g2Btn2">
          <Link to="/GalleryI" onClick={() => window.scrollTo(0, 0)}><button className="galleryItoIIBtn">Click For Gallery I</button></Link>
        </div>
        <h5>Kitchen cabinet refacing Massachusetts</h5>
        <footer>
        <h1>Burlington, MA - <br className="footerBr"></br>781-221-0334 <br className="footerBr"></br>and <br className="footerBr"></br>Waltham, MA - <br className="footerBr"></br>781-899-0118</h1>
          <h1><i>No Subcontractors—Owner Refaces All Kitchens</i></h1>
          <br></br>
          <h4>Kitchen Cabinet Refacing</h4>
          <p>Acton, Andover, Arlington, Ashland, Bedford, Belmont, Beverly, Billerica, Bolton, Boxford, Burlington, Canton, Carlisle, Chelmsford, Concord, Danvers, Essex, Everett, Framingham, Georgetown, Gloucester, Groton, Hamilton, Holliston, Hopkinton, Hudson, Ipswich, Lancaster, Leominster, Lexington, Lincoln, Littleton, Lynn, Lynnfield, Malden, Manchester by the Sea, Marlboro, Medford, Melrose, Methuen, Middleton, Natick, Needham, Newton, North Andover, North Reading, Norwood, Peabody, Reading, Revere, Rockport, Salem, Saugus, Shirley, Southboro, Stoneham, Stoughton, Stow, Sudbury, Tewksbury, Topsfield, Tyngsborough, Wakefield, Walpole, Waltham, Watertown, Wayland, Wellesley, Westford, Weston, Westwood, Wilmington, Winchester, Winthrop, Woburn</p>
        </footer>
      </section>
    </div>
  );
}

export default Gallery1;
