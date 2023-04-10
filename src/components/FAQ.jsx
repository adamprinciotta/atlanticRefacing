import React, { useEffect } from "react";
import "../styles/FAQ.css";
import YTvideo from "../images/Youtube.mp4";
import one from "../images/FAQ1.png";
import two from "../images/FAQ2.png";

function FAQ() {
  return (
    <div className="FAQContainer">
      <section className="videoContainer">
        <video controls>
          <source src={YTvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="FAQForm">
        <div className="formFAQDiv">
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
        <img src={one}></img>
      </section>
      <section className="FAQs">
        <div className="FAQTopSection">
          <div className="FAQTopSectionTxt">
            <h2>FAQs</h2>
            <h5>Are you a cabinet refacing specialist?</h5>
            <h6>
              Yes. Unlike most of my competitors I specialize only in cabinet
              refacing. I am a highly detailed professional.
            </h6>
            <i>
              <b>Popular Styles</b>
            </i>

            <h5>Do you have today’s most popular styles?</h5>
            <h6>
              Yes. Raised Panel, Shaker Style, Mitered Doors, and custom color
              matching if necessary are available. If you have a magazine
              picture of something specific that I do not carry, I should be
              able to duplicate it.
            </h6>
          </div>
          <img src={two} alt="Kitchen" />
        </div>

        <h5>
          Can you just redoor my cabinets with white or off-white factory
          painted doors?
        </h5>
        <h6>
          <b>
            Yes, if you already have white or off-white cabinets I can replace
            your doors and drawer fronts, hinges and hardware only. This is a
            cost saving procedure.
          </b>
        </h6>

        <h5>Can you reface around my existing countertops?</h5>
        <h6>Yes</h6>

        <h5>
          If I call David, can he give me an approximate cost over the phone
          before he comes out?
        </h5>
        <h6>Yes</h6>

        <h5>Why reface?</h5>
        <h6>
          You should save approximately 50-70% over the cost of a new kitchen
          remodel.
        </h6>

        <h5>How long does it take to reface a kitchen?</h5>
        <h6>An average-sized kitchen takes 3-4 days.</h6>

        <h5>Do you use the RTF thermo-foil doors?</h5>
        <h6>
          No. I have found there is too much delamination with those types of
          doors and I stopped using them many years ago.
        </h6>

        <h5>Can you add glass doors?</h5>
        <h6>Yes</h6>

        <h5>Can you add extra cabinets or islands?</h5>
        <h6>Yes</h6>

        <h5>Who will do the actual refacing work in my home?</h5>
        <h6>
          David, the owner of Atlantic Cabinet Refacing will reface the kitchen
          himself. No sub-contractors will be used.
        </h6>

        <h5>Can you make changes for wall ovens, etc.?</h5>
        <h6>Yes</h6>

        <h5>Can you install new drawers if I request them?</h5>
        <h6>
          Yes. They would be solid wood dove-tail drawer boxes with new runners
          (not cheap particle-board drawers)
        </h6>

        <h5>Do you use hidden-hinges?</h5>
        <h6>
          Yes. I use fully adjustable hinges so your doors can be hung perfectly
          straight.
        </h6>

        <h5>Can you add crown molding?</h5>
        <h6>Yes. I normally use 2 3/4" - 3 1/2" crown molding on every job.</h6>

        <h5>Can you install new countertops in my kitchen?</h5>
        <h6>
          Yes. Most of my customers want granite countertops with a stainless
          steel undermount sink which I provide. I can provide other materials
          other than granite such as formica, corian, engineered stone, etc.
        </h6>

        <h5>Can you add pull-outs?</h5>
        <h6>Yes</h6>

        <h5>Can you replace my broken lazy susan?</h5>
        <h6>Yes</h6>

        <h5>How long have you been refacing cabinets?</h5>
        <h6>
          Over 38 years. I am one of the longest serving cabinet refacers in the
          country. I still do the work my self.
        </h6>
      </section>
      <section>
        <footer>
          <h1>Burlington, MA - <br className="footerBr"></br>781-221-0334 <br className="footerBr"></br>and <br className="footerBr"></br>Waltham, MA - <br className="footerBr"></br>781-899-0118</h1>
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

export default FAQ;
