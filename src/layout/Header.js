import React, { Suspense } from "react";
import { Link, Switch, useLocation } from "react-router-dom";
import Footer from "./Footer";

import navs from "../nav";

const Header = () => {
  let location = useLocation();

  const loading = <h1>Loadzzz</h1>;

  console.log(location);
  return (
    <>
      <div className="header" id="myHeader">
        <div className="navbar">
          <div className="img-container">
            <h1>Thor Nguyen</h1>
            <img
              id="img-face"
              src="./image/avartar.jpeg"
              alt="avatar"
              width="199"
              height="199"
              style={{ objectFit: "cover" }}
            />
          </div>
          <ul>
            {navs.map((nav, index) => (
              <li key={index} className={location.pathname === nav.path ? 'menu active-menu' : 'menu'} id="home">
                <Link to={nav.path}>
                  <i className={nav.icon}></i>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Header;
