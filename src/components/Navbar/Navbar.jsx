import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="/Assets/logo.png" alt="logo" className="navbar-logo" />
      <ul>
        <li>Services</li>
        <li>
          <Link to="/market" style={{ textDecoration: "none" }}>
            Market Focus Hub
          </Link>
        </li>
        <li>About</li>
      </ul>
      <button className="navbar-button" type="submit">
        Get started
      </button>
    </nav>
  );
}
