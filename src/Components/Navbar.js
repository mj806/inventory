import React from 'react'
import { useState } from "react"
import { Link} from "react-router-dom"
import "./Styles/Navbar.css"

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Comix Craze
      </a>
      <button className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
        <ul>
          <li>
          <Link to='/' 
            style={{textDecoration: 'none', color: 'white'}}>Home</Link>
          </li>
          <li>
          <Link to='/about' 
            style={{textDecoration: 'none', color: 'white'}}>About</Link>
          </li>
          <li>
          <Link to='/contactUs' 
            style={{textDecoration: 'none', color: 'white'}}>Contact</Link>
          </li>
          <li>
          <Link to='/comicbooks' 
            style={{textDecoration: 'none', color: 'white'}}>Comics</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar