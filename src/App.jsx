import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Gallery1 from "./components/Gallery1.jsx";
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
              <Link to="/about">Gallery I</Link>
            </li>
          </ul>
        </nav>
        <div className="routeContainer">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<Gallery1 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
