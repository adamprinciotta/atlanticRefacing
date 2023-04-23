import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Gallery1 from "./components/Gallery1.jsx";
import Gallery2 from "./components/Gallery2.jsx";
import FAQ from "./components/FAQ.jsx";
import header from "./images/fixedHeader.png";

function App() {
  return (
    <div className="container">
      
      <Router>
        <nav className="navLinks">
          <a href="tel:+7812210334" className="tapToCall"></a>
          <div className="imageContainer">
            <img
              src={header}
              className="headerImg"
            ></img>
          </div>
          <ul>
            <li>
              {/* <Link to="/">Home</Link> */}
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            </li>
            <li>
              {/* <Link to="/GalleryI">Gallery I</Link> */}
              <Link to="/GalleryI" onClick={() => window.scrollTo(0, 0)}>Gallery I</Link>
            </li>
            <li>
              {/* <Link to="/GalleryII">Gallery II</Link> */}
              <Link to="/GalleryII" onClick={() => window.scrollTo(0, 0)}>Gallery II</Link>
            </li>
            <li className="nonMobileFAQ">
              {/* <Link to="/FAQ">Launch Video & FAQ</Link> */}
              <Link to="/FAQ" onClick={() => window.scrollTo(0, 0)}>FAQ</Link>
            </li>
            <li className="mobileFAQ">
              <Link to="/FAQ">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div className="routeContainer">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/GalleryI" element={<Gallery1 />} />
            <Route path="/GalleryII" element={<Gallery2 />} />
            <Route path="/FAQ" element={<FAQ/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
