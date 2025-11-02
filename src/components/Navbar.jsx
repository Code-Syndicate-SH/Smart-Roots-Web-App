import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          Smart<span>Roots</span>
        </Link>
        <div className="nav-links">
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
