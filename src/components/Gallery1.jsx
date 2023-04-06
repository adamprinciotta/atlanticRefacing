import "../styles/Gallery1.css";
import anniversary from "../images/anniversary.png";
import one from "../images/g1_1.png";
import two from "../images/g1_2.png";
import three from "../images/g1_3.png";
import four from "../images/g1_4.png";
import five from "../images/g1_5.png";
import six from "../images/g1_6.png";
import seven from "../images/g1_7.png";
// import eight from "../images/g1_8.png";
// import nine from "../images/g1_9.png";
// import ten from "../images/g1_10.png";
import eleven from "../images/g1_11.png";

function Gallery1() {

  const images = [
    one, two, three, four, five, six, seven, eleven
  ]
  return (
    <div className="gallery1Container">
      <section className="formG1">
        <div className="formG1Div">
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
        <div className="introG1">
          <h1>Photo Gallery I</h1>
          <h5>
            David, the owner,
            <br></br>
            refaces all kitchens himself.
            <br></br>
            NO sub-contractors
          </h5>
          <img className="introImg" src={one}></img>
        </div>
      </section>
      <br></br>
      <section className="imagesG1">
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
      <section className="btnAndFooter">
        <button className="galleryItoIIBtn">Click For Gallery II</button>
        <h5>Kitchen cabinet refacing Massachusetts</h5>
        <footer>
          <h1>Burlington, MA - 781-221-0334 and Waltham, MA - 781-899-0118</h1>
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
