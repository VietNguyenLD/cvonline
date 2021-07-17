import React from "react";

const Header = () => {
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
              <a href="#page-home">
                {" "}
                <i className="lnr lnr-home"></i>
                home
              </a>
            </li>
            <li className="menu" id="about-me">
              <a href="#page-about-me">
                {" "}
                <i className="lnr lnr-user"></i> about me
              </a>
            </li>
            <li className="menu" id="resume">
              <a href="#page-resume">
                {" "}
                <i className="lnr lnr-license"></i>
                resume
              </a>
            </li>
            <li className="menu" id="portfolio">
              <a href="#page-portfolio">
                {" "}
                <i className="lnr lnr-briefcase"></i>
                portfolio
              </a>
            </li>
            <li className="menu" id="contact">
              <a href="#page-contact">
                {" "}
                <i className="lnr lnr-envelope"></i>
                contact
              </a>
            </li>
          </ul>
        </div>
        <footer className="footer">
            <ul className="social">
                <li>
                    <a href="https://www.facebook.com/thanhvi.vo.9081/"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                    <a href="/"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                    <a href="/"><i className="fab fa-youtube-square"></i></a>
                </li>
                <li>
                    <a href="/"><i className="fab fa-dribbble-square"></i></a>
                </li>
                <li>
                    <a href="/"><i className="fab fa-behance-square"></i></a>
                </li>
            </ul>
            <p className="copy">
                2018 © Cosmos-Themes.
                <br/>
                All Right Reserved.
            </p>
        </footer>
      </div>
    </>
  );
};

export default Header;
