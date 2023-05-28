import React from "react";
import { useState } from "react";
import {Link } from "react-router-dom";

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className={
      isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
    }>
    <div className="nav-container">
      <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        <i className={
      isNavExpanded ? "fa-solid fa-xmark fa-lg" : "fa-solid fa-bars fa-lg" 
    }></i>
      </button>
      <div>
      <ul>
        <li onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div>
    </div>
    </nav>
  );
}

export default Nav;
