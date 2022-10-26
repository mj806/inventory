import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "./Components/Navbar";
import RoutingPages from "./Components/RoutingPages";
import Footer from "./Components/Footer";
import "./styles.css"
import "./index.css"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar/>
      <br/>
      <div className="container">
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)}/>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <RoutingPages />
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
