import React from "react";
import MainLayout from "../layout/Main";
const Resume = () => {
  return (
    <MainLayout>
      <section className="page resume" id="page-resume">
        <div className="topic">
          <h1>My Resume.</h1>
          <span className="lnr lnr-license"></span>
        </div>
        <div className="exp-edu">
          <div className="experience animation fadeLeft">
            <div className="subheading">
              <h3>experience</h3>
            </div>
            <ul>
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>FULLSTACK DEVELOPER</h4>
                  <h5>NHAT TIN LOGISTICS</h5>
                  <p>
                    I worked at this company from april 2020 - june 2021 join
                    some parts of the product as is: Develop back-end of product
                    with Laravel, Lumen and Develop Frontend with React, Antd
                    Designer, html5, jQuery, Bootstrap, Css.,...
                  </p>
                </div>
                <span className="year">
                  <span className="to">2020</span>
                  <span className="from">2021</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="education animation fadeRight">
            <div className="subheading">
              <h3>education</h3>
            </div>
            <ul>
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4 style={{ textTransform: "uppercase" }}>High school</h4>
                  <h5>I study at Đạ Tẻh School</h5>
                </div>
                <span className="year">
                  <span className="to">2012</span>
                  <span className="from">2015</span>
                </span>
              </li>
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4 style={{ textTransform: "uppercase" }}>University</h4>
                  <h5>I study at Ho Chi Minh City Open University</h5>
                  <p>Major in Computer Science</p>
                </div>
                <span className="year">
                  <span className="to">2016</span>
                  <span className="from">2020</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="des-cod animation fadeBottom">
          <div className="design">
            <div className="subheading">
              <h3>FRONTEND SKILLS</h3>
            </div>
            <ul>
              <li>
                <h4>HTML5, CSS, SCSS, BOOTSTRAP</h4>
                <span className="level-bar">
                  <span className="progress">
                  </span>
                </span>
              </li>
              <li>
                <h4>JAVASCRIPT: REACTJS, NEXRJS, JQUERY</h4>
                <span className="level-bar">
                  <span className="progress">
                  </span>
                </span>
              </li>
              <li>
                <h4>WEBPACK, GULP</h4>
                <span className="level-bar">
                  <span className="progress">
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="coding">
            <div className="subheading">
              <h3>BACKEND SKILLS</h3>
            </div>
            <ul>
              <li>
                <h4>PHP: LARAVEL, LUMEN</h4>
                <span className="level-bar">
                  <span className="progress">
                  </span>
                </span>
              </li>
              <li>
                <h4>DB: MYSQL, REDIS</h4>
                <span className="level-bar">
                  <span className="progress" onclick="creaseProgress(75,this)">
                  </span>
                </span>
              </li>
              <li>
                <h4>DOCKER: Basic create image and deloy serve</h4>
                <span className="level-bar">
                  <span className="progress">
                    {/* <span className="progress-value">92%</span> */}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Resume;
