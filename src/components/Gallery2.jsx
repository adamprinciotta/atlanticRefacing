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


function Gallery1() {

  const images = [
    two, three, five, six, seven, nine, ten, eleven, twelve, thirteen, fourteen, sixteen, seventeen, eighteen, nineteen, twenty
  ]
  return (
    <div className="gallery1Container">
      <section className="formG2">
        <div className="formG2Div">
          <img src={anniversary}></img>
          <h3>Get A Free Estimate!</h3>
          <form>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Full name"
              required
            />

            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              required
            />

            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              required
            />

            <input
              type="tel"
              id="homephone"
              name="homephone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Home Phone Number"
              required
            />

            <input
              type="tel"
              id="cellphone"
              name="cellphone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Cell Phone Number"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
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
          <button className="galleryToExtGalleryBtn">CLICK HERE FOR MORE PHOTOS AND REVIEWS</button>
        </div>
        <br></br>
        <div className="g2Btn2">
          <button className="galleryItoIIBtn">Click For Gallery I</button>
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
