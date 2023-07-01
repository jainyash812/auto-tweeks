import React from "react";
import logo from '../assets/LOGO.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor: "#000"}}>
        <a className="navbar-brand" href="#">
          <img src={logo} width="130" height="40" alt="autotweek-logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SHOPS
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                BRANDS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  BRAND1
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  BRAND2
                </a>
              </div>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
          <div>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
