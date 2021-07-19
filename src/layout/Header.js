import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
const Header = () => {
  let location = useLocation();

  console.log(location);
  return (
    <>
      <div className="header" id="myHeader">
        <div className="navbar">
          <div className="img-container">
            <h1>Philip Watson</h1>
            <img
              id="img-face"
              src="https://watson-vcard.netlify.app/img/profile-img.jpg"
              alt=""
            />
          </div>
          <ul>
            <li className="menu active-menu" id="home">
              <Link to="/home">
                <i className="lnr lnr-home"></i>
                home
              </Link>
            </li>
            <li className="menu" id="about-me">
              <Link to="/about">
                <i class="lnr lnr-user"></i>
                about me
              </Link>
            </li>
            <li className="menu" id="resume">
              <Link to="/resume">
                <i class="lnr lnr-license"></i>
                resume
              </Link>
            </li>
            <li className="menu" id="portfolio">
              <a href="#page-portfolio">
                <i className="lnr lnr-briefcase"></i>
                project
              </a>
            </li>
            <li className="menu" id="contact">
              <a href="#page-contact">
                <i className="lnr lnr-envelope"></i>
                contact
              </a>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Header;
