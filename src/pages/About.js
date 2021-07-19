import React from "react";
import MainLayout from "../layout/Main";

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="page about-me">
        <div className="topic">
          <h1>About Me.</h1>
          <span className="lnr lnr-user"></span>
        </div>
        <div className="information">
          <div className="about introduce">
            <h3>Web Developer</h3>
            <p>
              My name is Nguyen Quoc Viet. I’m 24 years old. I have just
              graduated from university in May 2020 with the major in computer
              science . I got 1 years experience as developer web application .
              I like soccer and swimming. I’m a careful and hard-working person.
              I’m eager to learn new things and willing to work in team. I
              easily adapt to with new working environment and take initiative
              in work.
            </p>
            <p>
              The goal in the next 1-2 years, I will become a professional
              programmer and further progress is to become a team leader in
              website development - learn new technologys
            </p>
          </div>
          <div className="about personal-information">
            <h3>Personal information</h3>
            <ul>
              <li>
                <span className="title">Name</span>
                <span className="value">Nguyễn Quốc Việt</span>
              </li>
              <li>
                <span className="title">Age</span>
                <span className="value">24 Years</span>
              </li>
              <li>
                <span className="title">Address</span>
                <span className="value">
                  389/20 Quang Trung, phường 10, Gò Vấp, Tp.HCM
                </span>
              </li>
              <li>
                <span className="title">Email</span>
                <a href="mailto:thocoqtv@gmail.com" className="value">
                  thocoqtv@gmail.com
                </a>
              </li>
              <li>
                <span className="title">Phone</span>
                <a href="tel:0373638358" className="value">
                  0373638358
                </a>
              </li>
              <li>
                <a className="btn-about" href="/#">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="subheading">
          <h3>Skill</h3>
        </div>
        <div className="service">
          <div className="service-items">
            <span className="lnr lnr-laptop"></span>
            <h4>Backend Development</h4>
            <p>
              I have good javascript, php skill in Nodejs and Laravel. I have a
              strong javascript skill and design database(Mysql,..).
            </p>
          </div>
          <div className="service-items">
            <span className="lnr lnr-eye"></span>
            <h4>Frontend Development</h4>
            <p>
              I have good javascript skill in Reactjs, Jquery, Bootrap, Webpack,
              Antd Scss and style component.
            </p>
          </div>
          <div className="service-items">
            <span className="lnr lnr-laptop-phone"></span>
            <h4>DevTool</h4>
            <p>
              I can use Vscode, Jira, Slack, Figma, SourceTree working. Other,
              And I can use docker build image, deploy production
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
