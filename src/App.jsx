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
          <div className="imageContainer">
            <img
              src={header}
              className="headerImg"
            ></img>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/GalleryI">Gallery I</Link>
            </li>
            <li>
              <Link to="/GalleryII">Gallery II</Link>
            </li>
            <li>
              <Link to="/FAQ">Launch Video & FAQ</Link>
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
